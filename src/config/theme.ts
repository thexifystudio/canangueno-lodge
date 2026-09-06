/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PANEL DE CONTROL VISUAL DEL SITIO
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  Este archivo es el único lugar donde se cambia el "look" global.
 *  Cambiar `palette` de una línea reescribe TODO el sitio: fondos, textos,
 *  bordes, acentos, botones y hasta los placeholders de imagen.
 *
 *  Las paletas viven en `src/styles/palettes.css`.
 *  Las tipografías viven en `src/lib/fonts.ts`.
 *
 *  Regla del proyecto: NINGÚN componente escribe un color literal (#hex o
 *  `text-green-700`). Todos usan tokens semánticos (`bg-surface`, `text-ink`,
 *  `border-line`, `bg-accent`). Por eso cambiar de paleta no rompe nada.
 */

export const PALETTES = ["eco-luxury", "night-canopy", "river-mist"] as const;
export type Palette = (typeof PALETTES)[number];

export const theme = {
  /**
   * Paleta activa. Opciones:
   *  - "eco-luxury"   → Ivory + arena + verde selva + terracota  (ACTUAL)
   *  - "night-canopy" → Oscuro cinematográfico, acento ámbar
   *  - "river-mist"   → Claro editorial frío, acento delfín rosado
   */
  palette: "eco-luxury" as Palette,

  /**
   * Redondeo global de bordes. La dirección de arte pide "bordes mínimos",
   * así que el default es casi recto. Subir a "0.75rem" lo hace más suave.
   */
  radius: "2px",

  /** Intensidad del grano de película sobre las imágenes (0 = apagado). */
  grain: 0.045,
} as const;
