/**
 * Galería: de la carpeta de fotos del cliente al sitio.
 *
 * Lee `../imagenes-canangueno-lodge/Listas/Imagenes/<carpeta>/*` (las fotos
 * ya aprobadas, separadas por tema), las pasa a WebP livianas y escribe la
 * lista que usa la página `/galeria`:
 *
 *   node scripts/galeria.mjs
 *
 * Sale:
 *   public/fotos/galeria/<categoria>/<categoria>-001.webp …
 *   src/content/gallery-photos.ts   (generado — no editar a mano)
 *
 * Si el cliente suma fotos a esas carpetas, se vuelve a correr y listo.
 * Las fotos repetidas (mismo archivo en dos carpetas) entran una sola vez.
 */
import sharp from "sharp";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve, extname } from "node:path";

const SRC = resolve("../imagenes-canangueno-lodge/Listas/Imagenes");
const OUT = resolve("public/fotos/galeria");
const LIST = resolve("src/content/gallery-photos.ts");

/** Carpeta del cliente → categoría del sitio. Flora va junto con fauna. */
const FOLDERS = {
  animales: "fauna",
  flora: "fauna",
  paisajes: "paisajes",
  lodge: "lodge",
  "personas'grupos": "personas",
};

/** El lado largo máximo: sobra para el lightbox a pantalla completa. */
const MAX = 1800;

rmSync(OUT, { recursive: true, force: true });

const seen = new Set();
const photos = [];
const counters = {};

for (const [folder, category] of Object.entries(FOLDERS)) {
  const dir = join(SRC, folder);
  let files;
  try {
    files = readdirSync(dir).filter((f) =>
      [".png", ".jpg", ".jpeg", ".webp"].includes(extname(f).toLowerCase()),
    );
  } catch {
    console.warn(`(no existe ${dir}, la salto)`);
    continue;
  }
  files.sort();
  mkdirSync(join(OUT, category), { recursive: true });

  for (const file of files) {
    const buffer = readFileSync(join(dir, file));
    const hash = createHash("sha1").update(buffer).digest("hex");
    if (seen.has(hash)) continue;
    seen.add(hash);

    counters[category] = (counters[category] ?? 0) + 1;
    const name = `${category}-${String(counters[category]).padStart(3, "0")}.webp`;
    const info = await sharp(buffer)
      .rotate()
      .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(OUT, category, name));

    photos.push({
      src: `/fotos/galeria/${category}/${name}`,
      category,
      w: info.width,
      h: info.height,
    });
  }
  console.log(`${folder} → ${category}: ${counters[category] ?? 0}`);
}

const body = photos
  .map(
    (p) =>
      `  { src: "${p.src}", category: "${p.category}", w: ${p.w}, h: ${p.h} },`,
  )
  .join("\n");

writeFileSync(
  LIST,
  `/**
 * ⚠️ ARCHIVO GENERADO por \`node scripts/galeria.mjs\` — no editar a mano.
 * Sale de las carpetas "Listas" del cliente. Para sumar fotos: se agregan a
 * esas carpetas y se vuelve a correr el script.
 */
export type GalleryPhoto = {
  src: string;
  category: "fauna" | "paisajes" | "lodge" | "personas";
  w: number;
  h: number;
};

export const galleryPhotos: GalleryPhoto[] = [
${body}
];
`,
);

console.log(`\n${photos.length} fotos → ${OUT}`);
