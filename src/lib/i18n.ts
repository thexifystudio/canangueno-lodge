/**
 * Base de internacionalización.
 *
 * Patrón: el contenido estructurado (tours, FAQs, reseñas) guarda sus idiomas
 * juntos con `Localized<T>`, para que editar un tour sea tocar UN solo bloque.
 * por bloque. Los textos de interfaz (botones, labels, navegación) viven en
 * `src/i18n/{es,en,de,fr}.ts`.
 */

export const LOCALES = ["es", "en", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/**
 * TODO contenido existe en LOS CUATRO idiomas. No es negociable y lo obliga
 * el compilador: si falta una traducción, el build ROMPE.
 *
 * Antes este tipo hacía `de` y `fr` opcionales, con respaldo al inglés. Eso
 * parecía prudente pero publicaba en silencio páginas mitad alemán mitad
 * inglés — el visitante veía el menú traducido y todo el contenido que vende
 * en otro idioma, sin que nada en el build lo advirtiera. Un fallo visible
 * (no compila) es mejor que uno invisible (compila y sale mal publicado).
 *
 * Para agregar un idioma: se suma a LOCALES y el compilador enumera, archivo
 * por archivo, exactamente qué falta traducir.
 */
export type Localized<T = string> = Record<Locale, T>;

/** Devuelve la variante del idioma pedido. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Etiquetas del selector de idioma. */
export const LOCALE_LABELS: Record<
  Locale,
  { long: string; aria: string }
> = {
  es: { long: "Español", aria: "Ver en español" },
  en: { long: "English", aria: "View in English" },
  de: { long: "Deutsch", aria: "Auf Deutsch anzeigen" },
  fr: { long: "Français", aria: "Afficher en français" },
};
