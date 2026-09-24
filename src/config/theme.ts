/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PANEL DE CONTROL VISUAL
 * ────────────────────────────────────────────────────────────────────────────
 *  Único lugar donde se cambia el "look" global. Las paletas viven en
 *  `src/styles/palettes.css`; las tipografías en `src/lib/fonts.ts`.
 *
 *  Regla del proyecto: ningún componente escribe un color literal. Todos usan
 *  tokens semánticos (`--c-ink`, `--c-accent`, `bg-surface`, …). Por eso
 *  cambiar de paleta no rompe nada.
 */

export const PALETTES = [
  "selva-viva",
  "aguas-negras",
  "blackwater-light",
] as const;
export type Palette = (typeof PALETTES)[number];

export const theme = {
  /**
   *  - "selva-viva"       → claro y vivo, verde profundo en las bandas (ACTUAL)
   *  - "aguas-negras"     → oscuro cinematográfico, acento naranja del logo
   *  - "blackwater-light" → crema editorial, acento cobre
   */
  palette: "selva-viva" as Palette,

  /** Bordes rectos: es una marca de expedición, no un producto de consumo. */
  radius: "0px",
} as const;
