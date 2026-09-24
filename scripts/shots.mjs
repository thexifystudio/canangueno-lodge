/**
 * Capturas de revisión.
 *
 * Levanta el Chrome que ya está instalado en la máquina (no descarga nada) y
 * saca capturas del sitio a varios anchos, para revisar diseño y responsive
 * sin depender de un panel de preview.
 *
 *   node scripts/shots.mjs [baseUrl]
 *
 * Sale todo en `.shots/`. La carpeta está en .gitignore.
 */
import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const BASE = process.argv[2] ?? "http://localhost:3000";
const OUT = resolve(".shots");

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

if (!CHROME) {
  console.error("No encontré Chrome ni Edge instalados.");
  process.exit(1);
}

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  {
    name: "mobile",
    width: 390,
    height: 844,
    isMobile: true,
    deviceScaleFactor: 2,
  },
];

const PAGES = [
  { name: "home", path: "/es" },
  { name: "tours", path: "/es/tours" },
  { name: "tour-4d", path: "/es/tours/4-dias" },
  { name: "lodge", path: "/es/el-lodge" },
  { name: "galeria", path: "/es/galeria" },
  { name: "como-llegar", path: "/es/como-llegar" },
  { name: "preguntas", path: "/es/preguntas" },
  { name: "reservar", path: "/es/reservar" },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport(vp);

  for (const target of PAGES) {
    // `nosmooth` apaga Lenis: sin él, el scroll sintético de la captura
    // pelea con el scroll suave y las capturas salen a destiempo.
    const url = `${BASE}${target.path}?nosmooth=1`;
    // `networkidle` no sirve acá: el sitio tiene animaciones en bucle y, en
    // desarrollo, un websocket de recarga en caliente siempre abierto.
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 1200));

    // Recorre la página entera para disparar los reveals y el lazy-loading.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 130));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });

    // Congela lo que gira en bucle (cinta de fauna, motas) para que la
    // captura no salga movida.
    await page.addStyleTag({
      content: "*,*::before,*::after{animation-play-state:paused !important}",
    });

    const file = `${OUT}/${target.name}-${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log("✓", file);
  }
  await page.close();
}

await browser.close();
console.log("\nListo. Capturas en .shots/");
