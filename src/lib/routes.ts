import type { Locale } from "./i18n";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  RUTAS
 * ────────────────────────────────────────────────────────────────────────────
 *  TODOS los enlaces del sitio pasan por acá. Ningún componente escribe una
 *  URL a mano.
 *
 *  Hoy los segmentos de ruta son los mismos en los dos idiomas
 *  (`/en/tours/4-days`, `/en/galeria`). Los *slugs de tour* sí están
 *  traducidos, que es donde más pesa el SEO.
 *
 *  Si más adelante se quieren rutas 100% traducidas (`/en/gallery`,
 *  `/en/how-to-get-here`), se cambia únicamente este archivo + un mapa de
 *  rewrites en `next.config.ts`. Ningún componente se entera.
 */
export const routes = {
  about: (l: Locale) => `/${l}/about`,
  home: (l: Locale) => `/${l}`,
  cuyabeno: (l: Locale) => `/${l}/cuyabeno`,
  tours: (l: Locale) => `/${l}/tours`,
  tour: (l: Locale, slug: string) => `/${l}/tours/${slug}`,
  lodge: (l: Locale) => `/${l}/el-lodge`,
  gallery: (l: Locale) => `/${l}/galeria`,
  journey: (l: Locale) => `/${l}/como-llegar`,
  faq: (l: Locale) => `/${l}/preguntas`,
  book: (l: Locale) => `/${l}/reservar`,
} as const;

export type RouteKey = keyof typeof routes;
