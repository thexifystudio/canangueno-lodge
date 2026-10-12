/**
 * Versiones livianas de todas las fotos, para que cada pantalla baje la que
 * necesita en vez de la foto entera.
 *
 *   node scripts/imagenes.mjs
 *
 * Por cada foto de `public/fotos/` (también las de la galería) escribe una
 * copia de 480 y otra de 800 px de ancho en `public/fotos/_w/<ancho>/…`, con
 * el mismo nombre y formato. `src/lib/image-loader.ts` arma el `srcset` con
 * ellas: un teléfono baja la de 480 u 800 y una pantalla grande, la original.
 *
 * 800 y no más: la foto original más angosta mide 941 px, así que ninguna
 * copia termina siendo un duplicado de la original.
 *
 * Es incremental: sólo procesa las fotos nuevas o cambiadas, y borra las
 * copias de fotos que ya no existen. Corre solo antes de `npm run dev` y de
 * `npm run build` (ver `predev` y `prebuild` en package.json).
 */
import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";

const ROOT = resolve("public/fotos");
const OUT = join(ROOT, "_w");
/** Tienen que coincidir con `WIDTHS` de src/lib/image-loader.ts. */
const WIDTHS = [480, 800];
const EXT = new Set([".webp", ".jpg", ".jpeg", ".png"]);

/** Todas las fotos originales (sin entrar a `_w`). */
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return p === OUT ? [] : walk(p);
    return EXT.has(extname(e.name).toLowerCase()) ? [p] : [];
  });
}

const sources = walk(ROOT);
let made = 0;

for (const src of sources) {
  const rel = relative(ROOT, src);
  const mtime = statSync(src).mtimeMs;
  for (const w of WIDTHS) {
    const dest = join(OUT, String(w), rel);
    if (existsSync(dest) && statSync(dest).mtimeMs >= mtime) continue;
    mkdirSync(dirname(dest), { recursive: true });
    const img = sharp(src)
      .rotate()
      .resize({ width: w, withoutEnlargement: true });
    const ext = extname(src).toLowerCase();
    if (ext === ".webp") await img.webp({ quality: 78 }).toFile(dest);
    else if (ext === ".png") await img.png({ compressionLevel: 9 }).toFile(dest);
    else await img.jpeg({ quality: 80, mozjpeg: true }).toFile(dest);
    made++;
  }
}

// Copias de fotos que ya no están.
const wanted = new Set(
  sources.flatMap((s) => WIDTHS.map((w) => join(OUT, String(w), relative(ROOT, s)))),
);
let removed = 0;
if (existsSync(OUT)) {
  const stale = (dir) =>
    readdirSync(dir, { withFileTypes: true }).forEach((e) => {
      const p = join(dir, e.name);
      if (e.isDirectory()) stale(p);
      else if (!wanted.has(p)) {
        rmSync(p);
        removed++;
      }
    });
  stale(OUT);
}

console.log(
  `imágenes: ${sources.length} fotos · ${made} copias nuevas · ${removed} borradas`,
);
