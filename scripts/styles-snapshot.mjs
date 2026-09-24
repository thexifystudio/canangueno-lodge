/**
 * Huella de estilos calculados.
 *
 * Refactorizar CSS a ciegas es cómo se rompen las cosas. Este script recorre
 * las páginas, guarda el estilo calculado de CADA elemento y lo deja en un
 * JSON. Se corre antes y después del cambio y se comparan los dos archivos:
 * si el diff está vacío, el refactor no movió un solo píxel.
 *
 *   node scripts/styles-snapshot.mjs .shots/styles-antes.json
 *   node scripts/styles-snapshot.mjs .shots/styles-despues.json
 *   node scripts/styles-diff.mjs .shots/styles-antes.json .shots/styles-despues.json
 */
import puppeteer from "puppeteer-core";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const OUT = resolve(process.argv[2] ?? ".shots/styles.json");
const BASE = process.env.SHOTS_BASE_URL || "http://localhost:3000";

const PATHS = [
  "/es",
  "/es/tours",
  "/es/tours/4-dias",
  "/es/el-lodge",
  "/es/galeria",
  "/es/como-llegar",
  "/es/preguntas",
  "/es/reservar",
];

/** Sólo lo que afecta a la maqueta y al color; el resto es ruido. */
const PROPS = [
  "display",
  "position",
  "grid-template-columns",
  "flex-direction",
  "align-items",
  "justify-content",
  "gap",
  "padding",
  "margin",
  "width",
  "height",
  "max-width",
  "aspect-ratio",
  "font-family",
  "font-size",
  "font-weight",
  "line-height",
  "letter-spacing",
  "text-transform",
  "color",
  "background-color",
  "background-image",
  "border",
  "border-radius",
  "box-shadow",
  "opacity",
  "transform",
  "z-index",
  "overflow",
];

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

if (!CHROME) {
  console.error("No encontré Chrome ni Edge instalados.");
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});

const snapshot = {};

for (const width of [1440, 390]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900 });

  for (const pathname of PATHS) {
    await page.goto(`${BASE}${pathname}`, { waitUntil: "networkidle0" });
    // Los reveals tapan estilos hasta que entran en pantalla.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
    });
    await new Promise((r) => setTimeout(r, 700));

    // Las animaciones mueven `transform` un pelo entre corrida y corrida y
    // ensucian el diff con ruido que no es un cambio de estilo.
    await page.addStyleTag({
      content: "*,*::before,*::after{animation:none!important}",
    });

    snapshot[`${width}${pathname}`] = await page.evaluate((props) => {
      /* Ruta estable en el árbol (`div>section:nth-of-type(2)>h2`), no un
         índice global: así agregar o quitar un elemento no corre las claves
         de todos los demás y el diff sigue siendo legible. */
      const pathOf = (el) => {
        const parts = [];
        for (let n = el; n && n !== document.body; n = n.parentElement) {
          const tag = n.tagName.toLowerCase();
          const twins = [...n.parentElement.children].filter(
            (c) => c.tagName === n.tagName,
          );
          parts.unshift(twins.length > 1 ? `${tag}:${twins.indexOf(n)}` : tag);
        }
        return parts.join(">");
      };

      const out = {};
      document.querySelectorAll("body *").forEach((el) => {
        if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
        const cs = getComputedStyle(el);
        out[pathOf(el)] = props.map((p) => cs.getPropertyValue(p)).join("|");
      });
      return out;
    }, PROPS);
  }
  await page.close();
}

await browser.close();
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(snapshot, null, 0));
console.log(`✓ ${OUT}`);
