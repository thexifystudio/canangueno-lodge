import { Instrument_Serif, Archivo } from "next/font/google";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TIPOGRAFÍAS
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  DISPLAY · Instrument Serif
 *  Serif de alto contraste y aire editorial. Se eligió por descarte razonado:
 *  Cormorant Garamond y Fraunces son las dos serif que usan absolutamente
 *  todos los hoteles boutique y lodges; con cualquiera de las dos el sitio se
 *  parece a la competencia antes de escribir una línea. Instrument tiene más
 *  drama, aguanta muy bien en tamaños grandes sobre fondo oscuro y casi nadie
 *  la usa en turismo.
 *
 *  UI · Archivo
 *  Grotesca de aperturas cerradas y buen color de texto en cuerpos chicos.
 *  Da el aire de "cuaderno de campo" que buscamos, sin caer en Inter.
 *
 *  ── PARA CAMBIAR EL PAR ──
 *  Cambiá los dos import y los dos bloques. Los nombres de variable CSS
 *  (`--ff-display`, `--ff-sans`) NO se tocan: todo el sitio depende de ellas.
 */

export const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-display",
  display: "swap",
});

export const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ff-sans",
  display: "swap",
});

/** Se aplica en el <html> del layout raíz. */
export const fontVariables = `${display.variable} ${sans.variable}`;
