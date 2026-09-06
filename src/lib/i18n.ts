/**
 * Base de internacionalización.
 *
 * Patrón: el contenido estructurado (tours, FAQs, reseñas) guarda sus dos idiomas
 * juntos con `Localized<T>`, para que editar un tour sea tocar UN solo bloque.
 * Los textos de interfaz (botones, labels, navegación) viven en `src/i18n/es.ts`
 * y `src/i18n/en.ts`.
 */

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/** Un valor que existe en los dos idiomas. */
export type Localized<T = string> = Record<Locale, T>;

/** Devuelve la variante del idioma pedido. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Etiquetas del selector de idioma. */
export const LOCALE_LABELS: Record<Locale, { short: string; long: string }> = {
  es: { short: "ES", long: "Español" },
  en: { short: "EN", long: "English" },
};
