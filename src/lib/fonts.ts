import { Fraunces, Manrope } from "next/font/google";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TIPOGRAFÍAS
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  DISPLAY · Fraunces (variable)
 *  Es una "soft serif" con ejes propios: `SOFT` redondea los terminales y
 *  `WONK` activa formas ligeramente irregulares. Se eligió a propósito por
 *  encima de Cormorant Garamond:
 *
 *    · Cormorant es LA serif de lujo de internet — está en cada web de hotel
 *      boutique. Cumple, pero no distingue a nadie.
 *    · Cormorant tiene un contraste altísimo y trazos muy finos: sobre fondos
 *      oscuros y en pantallas chicas se debilita y pierde legibilidad.
 *    · Fraunces es orgánica y botánica —encaja con la selva sin ser literal—,
 *      tiene rango de peso real (200-900) y aguanta bien en oscuro y en móvil.
 *
 *  UI · Manrope
 *  Geométrica, limpia, buena en tamaños chicos. Se queda.
 *
 *  ── PARA CAMBIAR EL PAR TIPOGRÁFICO ──
 *  Cambiá el `import` de arriba y el bloque `display` de abajo. El nombre de
 *  la variable CSS (`--ff-display`) NO se toca: todo el sitio depende de ella.
 *
 *  Alternativas ya evaluadas para esta dirección:
 *    · Instrument_Serif  → más dramática y editorial, un solo peso
 *    · Cormorant_Garamond → la opción clásica de lujo (la anterior)
 *    · Newsreader        → con tamaño óptico, más cálida y periodística
 */

// Sin `weight`: así next/font sirve la fuente VARIABLE completa, que es la
// única forma de poder pedir los ejes SOFT y WONK. Con una lista de pesos
// fijos, `axes` no está permitido.
export const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--ff-display",
  display: "swap",
});

export const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--ff-sans",
  display: "swap",
});

/** Se aplica en el <html> del layout raíz. */
export const fontVariables = `${display.variable} ${sans.variable}`;
