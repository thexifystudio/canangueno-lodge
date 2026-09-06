import { Cormorant_Garamond, Manrope } from "next/font/google";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TIPOGRAFÍAS
 * ────────────────────────────────────────────────────────────────────────────
 *  Dos familias, nada más. El contraste sale del tamaño y del peso.
 *
 *  Para cambiar el par tipográfico: cambiá los dos `import` de arriba y los
 *  dos bloques de abajo. Los nombres de las variables CSS (`--ff-display` y
 *  `--ff-sans`) NO se tocan — el resto del sitio depende de ellas.
 *
 *  Alternativas ya evaluadas para la dirección "Amazon Luxury":
 *    Display · Instrument_Serif  (más dramática, un solo peso)
 *             · Fraunces          (orgánica, eje soft opcional)
 *             · DM_Serif_Display  (más comercial, muy legible en grande)
 *    UI      · Plus_Jakarta_Sans  (geométrica)
 *             · Inter             (neutra)
 *
 *  Se auto-hospedan vía next/font: cero pedidos a Google en cada visita y
 *  cero layout shift.
 */

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
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
