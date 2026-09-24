/**
 * Prepara los assets de marca desde el original del cliente.
 *
 *   logo.webp        el logo tal cual, para la barra sobre fondo claro
 *   logo-claro.webp  la variante en negativo, para la barra sobre el hero
 *
 * La variante en negativo NO se dibuja a mano: se recolorea el original. El
 * tucán es negro y la palabra "Cuyabeno" es carbón; sobre el verde profundo
 * del hero los dos desaparecen. Lo que se hace es cambiar SÓLO los píxeles
 * neutros (poca saturación) por el color de tinta sobre oscuro, y dejar
 * intactos el naranja del wordmark y el del pico, que ya contrastan bien.
 * Así, si mañana el cliente manda otro logo, se vuelve a correr esto y listo.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

/** Los originales que mandó el cliente. */
const SRC = "../imagenes-canangueno-lodge/extra/";
const OUT = "public/marca/";
mkdirSync(OUT, { recursive: true });

/** --c-on-deep de la paleta activa. */
const INK_ON_DEEP = [243, 247, 238];

async function reverse(file, out, width) {
  const { data, info } = await sharp(SRC + file)
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
    // Neutro y oscuro = tucán o "Cuyabeno". El naranja tiene saturación alta.
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

const a = await sharp(SRC + "logo-imagen-svg.png")
  .resize({ width: 460 })
  .webp({ quality: 92, alphaQuality: 100, effort: 6 })
  .toFile(OUT + "logo.webp");
console.log("logo.webp", a.width + "x" + a.height, (a.size / 1024) | 0, "KB");

const b = await reverse("logo-imagen-svg.png", "logo-claro.webp", 460);
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
 * #202124) desaparecía y sólo quedaba flotando el naranja del pico. Con el
 * fondo crema es la misma marca en los dos modos, y de paso es lo que Apple
 * espera para el icono de inicio, que se compone sobre un cuadrado.
 *
 * El margen es del 11 %: sin él el pico toca el borde y en el icono redondeado
 * de iOS se recorta.
 */
const TUCAN = SRC + "pestaña.png";
const GROUND = "#f4f7f0"; // --c-bg de la paleta activa

async function icon(out, size, inner) {
  const bird = await sharp(TUCAN)
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
