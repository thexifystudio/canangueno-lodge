/**
 * ────────────────────────────────────────────────────────────────────────────
 *  CARGADOR DE IMÁGENES
 * ────────────────────────────────────────────────────────────────────────────
 *  En Cloudflare Workers no hay optimización automática de imágenes (sería el
 *  servicio pago de Cloudflare Images). En su lugar, `scripts/imagenes.mjs`
 *  deja hechas dos copias de cada foto, de 480 y 800 px de ancho, y este
 *  cargador arma el `srcset` con ellas: un teléfono baja 480 u 800 px y una
 *  pantalla grande, la foto original.
 *
 *  Lo que no está en `/fotos/` (los logos de `/marca/`) pasa tal cual.
 */

/** Tienen que coincidir con `WIDTHS` de scripts/imagenes.mjs. */
const WIDTHS = [480, 800];

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  if (!src.startsWith("/fotos/")) return src;
  const w = WIDTHS.find((x) => width <= x);
  return w ? `/fotos/_w/${w}${src.slice("/fotos".length)}` : src;
}
