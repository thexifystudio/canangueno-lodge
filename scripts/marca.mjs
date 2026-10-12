/**
 * Prepara los assets de marca desde el original del cliente.
 *
 *   node scripts/marca.mjs
 *
 *   public/marca/logo.webp        el logo, para la barra sobre fondo claro
 *   public/marca/logo-claro.webp  la variante en negativo, sobre el hero
 *   src/app/icon.png              el favicon
 *   src/app/apple-icon.png        el icono de iOS al "añadir a inicio"
 *
 * 1. COLORES DE LA MARCA. El dibujo nítido (`logo-imagen-svg.png`) trae un
 *    naranja saturado parejo. El cliente pidió los colores del logo oficial
 *    (`canangueno-lodge horizontal-02.png`): pico tomate arriba y amarillo
 *    abajo, la franja de la panza amarilla y "Canangueno Lodge" en tomate.
 *    Se recolorea el dibujo con esos dos colores, medidos del logo oficial.
 *
 * 2. NEGATIVO. No se dibuja a mano: el tucán es negro y "Cuyabeno" es carbón,
 *    y sobre el verde del hero desaparecen. Se cambian SÓLO los píxeles
 *    neutros por el color de tinta sobre oscuro; los colores quedan intactos.
 *
 * Si el cliente manda otro logo, se vuelve a correr esto y listo.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

/** Los originales que mandó el cliente. */
const SRC = "../imagenes-canangueno-lodge/extra/";
const OUT = "public/marca/";
mkdirSync(OUT, { recursive: true });

/** Los colores del logo oficial (`canangueno-lodge horizontal-02.png`). */
const TOMATO = [236, 142, 41]; // #EC8E29 — pico (arriba) y "Canangueno Lodge"
const YELLOW = [241, 170, 63]; // #F1AA3F — pico (abajo) y franja de la panza

/** Los dos naranjas del dibujo original. */
const SRC_MAIN = [255, 150, 0];
const SRC_LIGHT = [255, 176, 32];

/** --c-on-deep de la paleta activa. */
const INK_ON_DEEP = [243, 247, 238];

const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

/**
 * Recolorea los naranjas del dibujo a los colores de la marca.
 *
 * @param bellyFrom   fila (en px del original) desde donde empieza la panza:
 *                    todo el naranja de ahí para abajo es la franja amarilla.
 * @param toucanUntil columna donde termina el tucán; a la derecha está el texto,
 *                    que va entero en tomate.
 *
 * Cada píxel se corre en la misma medida que su parte naranja: los bordes
 * suavizados (naranja contra negro) se recolorean en proporción y no queda un
 * halo del color viejo.
 */
async function brandColors(file, { bellyFrom, toucanUntil = Infinity }) {
  const { data, info } = await sharp(SRC + file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      if (data[i + 3] === 0) continue;
      const px = [data[i], data[i + 1], data[i + 2]];
      // Cuánto de este píxel es naranja (1 = naranja pleno, 0 = gris/negro).
      const w = clamp((px[0] - px[2]) / 255);
      if (w < 0.15) continue;

      let from, to;
      if (x >= toucanUntil) {
        from = SRC_MAIN;
        to = TOMATO;
      } else if (y >= bellyFrom) {
        from = SRC_MAIN;
        to = YELLOW;
      } else {
        // En el pico, el naranja claro de abajo pasa a amarillo y el de
        // arriba a tomate; el borde entre los dos, en proporción.
        const f = clamp((px[1] - SRC_MAIN[1]) / (SRC_LIGHT[1] - SRC_MAIN[1]));
        from = mix(SRC_MAIN, SRC_LIGHT, f);
        to = mix(TOMATO, YELLOW, f);
      }
      for (let c = 0; c < 3; c++) {
        data[i + c] = Math.round(clamp(px[c] + w * (to[c] - from[c]), 0, 255));
      }
    }
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function reverse(input, out, width) {
  const { data, info } = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2];
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    // Neutro y oscuro = tucán o "Cuyabeno". Los colores tienen saturación alta.
    if (sat < 0.25 && max < 190) {
      // Se conserva el contraste interno del dibujo (el gris del pecho sigue
      // siendo más claro que el negro del lomo), invirtiendo la luminancia.
      const k = 0.84 + 0.16 * (max / 190);
      data[i] = Math.round(INK_ON_DEEP[0] * k);
      data[i + 1] = Math.round(INK_ON_DEEP[1] * k);
      data[i + 2] = Math.round(INK_ON_DEEP[2] * k);
    }
  }
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .webp({ quality: 92, alphaQuality: 100, effort: 6 })
    .toFile(OUT + out);
  return info;
}

/* El logo: el tucán ocupa hasta la columna 466 y la franja de la panza
   empieza en la fila 400 (el pico termina en la 394). */
const logo = await brandColors("logo-imagen-svg.png", {
  bellyFrom: 400,
  toucanUntil: 500,
});

const a = await sharp(logo)
  .resize({ width: 460 })
  .webp({ quality: 92, alphaQuality: 100, effort: 6 })
  .toFile(OUT + "logo.webp");
console.log("logo.webp", a.width + "x" + a.height, (a.size / 1024) | 0, "KB");

const b = await reverse(logo, "logo-claro.webp", 460);
console.log("logo-claro.webp", b.width + "x" + b.height);

/*
 * ICONO DE PESTAÑA
 * ────────────────────────────────────────────────────────────────────────────
 * El App Router genera solo las etiquetas <link> a partir de estos archivos:
 *   src/app/icon.png        → favicon
 *   src/app/apple-icon.png  → icono de iOS al "añadir a inicio"
 *
 * Los dos llevan el fondo claro de la paleta, NO transparente. El tucán del
 * logo es casi negro: sobre la tira de pestañas en modo oscuro (Chrome usa un
 * #202124) desaparecía y sólo quedaba flotando el pico. Con el fondo crema es
 * la misma marca en los dos modos, y de paso es lo que Apple espera para el
 * icono de inicio, que se compone sobre un cuadrado.
 *
 * El margen es del 11 %: sin él el pico toca el borde y en el icono redondeado
 * de iOS se recorta.
 */
/* El tucán solo: el pico termina en la fila 602 y la panza empieza en la 667. */
const tucan = await brandColors("pestaña.png", { bellyFrom: 635 });
const GROUND = "#f4f7f0"; // --c-bg de la paleta activa

async function icon(out, size, inner) {
  const bird = await sharp(tucan)
    .trim()
    .resize({
      width: inner,
      height: inner,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();
  const pad = Math.round((size - inner) / 2);
  await sharp({
    create: { width: size, height: size, channels: 4, background: GROUND },
  })
    .composite([{ input: bird, left: pad, top: pad }])
    .png()
    .toFile(out);
  console.log(out, size + "x" + size);
}

await icon("src/app/icon.png", 512, 456);
await icon("src/app/apple-icon.png", 512, 400);
