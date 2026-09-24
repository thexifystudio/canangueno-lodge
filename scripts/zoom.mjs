/**
 * Captura de detalle: un solo elemento, a tamaño real.
 *
 * `shots.mjs` saca la página entera, que a 7000 px de alto se ve como una
 * miniatura. Este saca UN elemento a 1:1 para poder revisar tipografía,
 * espaciados y contraste de verdad.
 *
 *   node scripts/zoom.mjs "<selector>" [ruta] [ancho]
 *   node scripts/zoom.mjs ".exp-selection" /es 1440
 *
 * Sale en `.shots/zoom-<n>.png`. La carpeta está en .gitignore.
 */
import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const SELECTOR = process.argv[2];
// Sin barra inicial: Git Bash reescribe `/es` a una ruta de Windows.
const PATHNAME = `/${(process.argv[3] ?? "es").replace(/^\/+/, "")}`;
const WIDTH = Number(process.argv[4] ?? 1440);
const BASE = process.env.SHOTS_BASE_URL || "http://localhost:3000";
const OUT = resolve(".shots");

if (!SELECTOR) {
  console.error('Uso: node scripts/zoom.mjs "<selector>" [ruta] [ancho]');
  process.exit(1);
}

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => existsSync(p));

if (!CHROME) {
  console.error("No encontré Chrome ni Edge instalados.");
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.setViewport({
  width: WIDTH,
  height: 900,
  deviceScaleFactor: WIDTH < 500 ? 2 : 1,
  isMobile: WIDTH < 500,
});
await page.goto(`${BASE}${PATHNAME}`, { waitUntil: "networkidle0" });

// Los reveals se disparan con IntersectionObserver: hay que pasar por toda la
// página para que todo quede visible antes de recortar.
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 900));

const nodes = await page.$$(SELECTOR);
if (!nodes.length) {
  console.error(`Sin coincidencias para "${SELECTOR}" en ${PATHNAME}`);
  await browser.close();
  process.exit(1);
}

for (const [i, node] of nodes.entries()) {
  await node.scrollIntoView();
  await new Promise((r) => setTimeout(r, 350));
  const file = `${OUT}/zoom-${i}.png`;
  await node.screenshot({ path: file });
  console.log(`✓ ${file}`);
}

await browser.close();
