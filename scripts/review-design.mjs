import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";
const base = process.argv[2] || "http://localhost:3000";
const out = path.resolve(".shots/blackwater");
fs.mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const results = [],
  errors = [];
const page = await browser.newPage();
page.on("pageerror", (e) => errors.push(e.message));
page.setDefaultNavigationTimeout(120000);
const check = (name, pass, details) => {
  results.push({ name, pass, details });
  if (!pass) console.error("FAIL " + name, details || "");
};
async function visit(url) {
  // `load`, no `networkidle0`: con ~20 fotos reales diferidas, la primera
  // optimización de cada variante de `next/image` deja la red ocupada
  // minutos. Con `load` + un barrido de scroll + una pausa alcanza para
  // que el layout se asiente, que es lo que revisan las aserciones.
  const res = await page.goto(base + url, { waitUntil: "load" });
  await page
    .evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    })
    .catch(() => {});
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate(() => document.fonts.ready);
  return res;
}

try {
  await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1 });
  await visit("/es");
  /* Antes de tocar nada: el único iframe en pantalla es el video de fondo
     del hero, y es DECORADO — silencioso, `aria-hidden`, sin robar el foco. */
  check(
    "Hero video is decorative before any interaction",
    (await page.$(".exp-video-dialog[open]")) === null &&
      (await page.$$eval("iframe", (frames) =>
        frames.every(
          (el) =>
            el.getAttribute("aria-hidden") === "true" &&
            el.classList.contains("exp-hero-video"),
        ),
      )),
  );
  await page.screenshot({ path: path.join(out, "home-desktop.png") });
  for (const [selector, name] of [
    [".exp-tours", "tours-desktop"],
    [".exp-reviews", "reviews-desktop"],
  ]) {
    const el = await page.$(selector);
    await el.screenshot({ path: path.join(out, name + ".png") });
  }
  /*
   * El lightbox: se abre con sonido, con el iframe correcto, y AL CERRARLO
   * el iframe se destruye del todo. Dejarlo montado y oculto significaría
   * que el video sigue sonando de fondo con el modal cerrado.
   */
  await page.click(".exp-video-trigger");
  check(
    "Video lightbox opens with the right video",
    (await page.$eval(".exp-video-dialog", (el) => el.open)) &&
      (await page.$eval(".exp-video-dialog iframe", (el) =>
        el.src.includes("Auj1H9UziKM"),
      )),
  );
  await page.keyboard.press("Escape");
  await page.waitForFunction(
    () =>
      !document.querySelector(".exp-video-dialog").open &&
      !document.querySelector(".exp-video-dialog iframe"),
  );
  check(
    "Video lightbox closes and its iframe is destroyed",
    (await page.$(".exp-video-dialog iframe")) === null,
  );
  check("Three tour cards render", (await page.$$(".exp-card")).length === 3);
  /* Fechas y tarifas las maneja el lodge en privado: ninguna tarjeta muestra
     un precio. */
  check(
    "No tour card shows a price",
    await page.$$eval(".exp-card", (cards) =>
      cards.every((c) => !/USD|\$\s?\d/.test(c.textContent)),
    ),
  );
  await visit("/es/tours/4-dias");
  check(
    "Tour booking preserves choice",
    await page.$eval(".exp-bookband-actions a", (el) =>
      el.href.includes("tour=4-dias"),
    ),
  );
  check(
    "Translated tour route",
    (await page.$('.exp-language-popover a[href="/en/tours/4-days"]')) !==
      null,
  );
  /*
   * El itinerario ES la página: los cuatro días se ven de entrada, cada uno
   * con su fotografía. Antes eran `<details>` cerrados y el contenido por el
   * que la gente entra acá estaba a un clic de distancia.
   */
  check(
    "Every day is open on arrival, with its photo",
    (await page.$$eval(".exp-dayblock", (els) => els.length)) === 4 &&
      (await page.$$eval(".exp-dayblock", (els) =>
        els.every(
          (el) =>
            el.querySelector(".exp-dayblock-text")?.textContent.trim() &&
            el.querySelector(".exp-dayblock-media img"),
        ),
      )),
  );
  /* Y la página termina donde el cliente pidió: incluye, reservar, y las dos
     salidas. Nada de reseñas ni del bloque del lodge repetido en medio. */
  check(
    "Tour page ends with includes, booking and two exits",
    (await page.$(".exp-includes")) !== null &&
      (await page.$(".exp-bookband")) !== null &&
      (await page.$$eval(".exp-nextup-card", (els) => els.length)) === 2 &&
      (await page.$(".exp-reviews")) === null &&
      (await page.$(".exp-stay")) === null,
  );
  await page.screenshot({ path: path.join(out, "detail-desktop.png") });
  await visit("/es/reservar?tour=5-dias&date=2027-01-15&pax=3");
  check(
    "Booking query hydration",
    (await page.$eval('select[name="tour"]', (el) => el.value === "5-dias")) &&
      (await page.$eval(
        'input[name="date"]',
        (el) => el.value === "2027-01-15",
      )),
  );
  check(
    "Booking summary shows no price",
    await page.$eval(
      ".exp-book-summary",
      (el) => !/USD|\$\s?\d/.test(el.textContent),
    ),
  );
  await page.type('input[name="name"]', "Design review");
  await page.type('input[name="contact"]', "review@example.com");
  await page.click('.exp-book-form button[type="submit"]');
  await page.waitForSelector(".exp-enquiry-result");
  check(
    "Prepared WhatsApp includes date, tour and travellers",
    await page.$eval(".exp-enquiry-result a", (el) => {
      const m = decodeURIComponent(el.href);
      /* La fecha va en palabras ("15 de enero de 2027"), no en ISO. */
      return m.includes("2027") && m.includes("5 días") && m.includes("3");
    }),
  );
  await page.screenshot({
    path: path.join(out, "booking-desktop.png"),
    fullPage: true,
  });

  /* ── El cierre ─────────────────────────────────────────────────────── */
  await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1 });
  await visit("/es");
  check(
    "Closing band offers WhatsApp and email",
    await page.$eval(
      ".exp-closing",
      (el) =>
        !!el.querySelector('a[href^="https://wa.me/"]') &&
        !!el.querySelector('a[href^="mailto:"]'),
    ),
  );

  for (const width of [360, 390, 768]) {
    await page.setViewport({
      width,
      height: 844,
      deviceScaleFactor: 1,
      isMobile: width < 768,
      hasTouch: width < 768,
    });
    for (const route of [
      "/es",
      "/en",
      "/es/tours/4-dias",
      "/es/reservar",
      "/es/galeria",
    ]) {
      await visit(route);
      const overflow = await page.evaluate(() => ({
        viewport: innerWidth,
        document: document.documentElement.scrollWidth,
        offenders: [...document.querySelectorAll("main *")]
          .filter(
            (el) =>
              el.getClientRects().length &&
              el.getBoundingClientRect().right > innerWidth + 2,
          )
          .slice(0, 5)
          .map((el) => el.className),
      }));
      check(
        width + " " + route + " no horizontal overflow",
        overflow.document <= width + 1,
        overflow,
      );
      if (width === 390 && route === "/es") {
        await page.screenshot({ path: path.join(out, "home-mobile.png") });
        for (const [selector, name] of [
          [".exp-tours", "tours-mobile"],
          [".exp-reviews", "reviews-mobile"],
        ])
          await (
            await page.$(selector)
          ).screenshot({ path: path.join(out, name + ".png") });
        await page.click(".exp-menu-button");
        check(
          "Mobile menu opens",
          await page.$eval(".exp-menu", (el) => el.open),
        );
        await page.keyboard.press("Escape");
        check(
          "Mobile menu closes",
          await page.$eval(".exp-menu", (el) => !el.open),
        );
      }
    }
  }
  const routes = [
    "/en",
    "/es",
    "/es/tours",
    "/en/tours",
    "/es/tours/3-dias",
    "/en/tours/3-days",
    "/es/tours/4-dias",
    "/en/tours/4-days",
    "/es/tours/5-dias",
    "/en/tours/5-days",
    ...[
      "el-lodge",
      "galeria",
      "preguntas",
      "como-llegar",
      "about",
      "reservar",
    ].flatMap((p) => ["/es/" + p, "/en/" + p]),
  ];
  for (const route of routes) {
    const r = await fetch(base + route);
    check(route + " HTTP 200", r.status === 200);
  }
  const disabled = await fetch(base + "/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{}",
  });
  check("Unconfigured intake never returns success", disabled.status === 503);
  await page.setJavaScriptEnabled(false);
  await visit("/en/tours/4-days");
  check(
    "All itinerary content available without JavaScript",
    await page.$$eval(
      ".exp-dayblock-text",
      (els) =>
        els.length === 4 && els.every((el) => el.textContent.length > 60),
    ),
  );
  check("No application runtime errors", errors.length === 0, errors);
  fs.writeFileSync(
    path.join(out, "report.json"),
    JSON.stringify({ results, errors }, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        passed: results.filter((r) => r.pass).length,
        failed: results.filter((r) => !r.pass),
        errors,
        out,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
