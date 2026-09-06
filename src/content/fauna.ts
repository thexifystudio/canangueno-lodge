import type { Localized } from "@/lib/i18n";

/**
 * Especies y plantas que aparecen NOMBRADAS en los itinerarios reales del
 * lodge. No es una lista de fauna amazónica genérica: es lo que sus propios
 * guías dicen que se ve en el recorrido.
 *
 * Se usa en la cinta que corre entre secciones (`FaunaMarquee`).
 */
export const fauna: Localized<string>[] = [
  { es: "Delfín rosado", en: "Pink dolphin" },
  { es: "Caimán", en: "Caiman" },
  { es: "Tucán", en: "Toucan" },
  { es: "Guacamayo", en: "Macaw" },
  { es: "Mono ardilla", en: "Squirrel monkey" },
  { es: "Anaconda", en: "Anaconda" },
  { es: "Martín pescador", en: "Kingfisher" },
  { es: "Garza", en: "Heron" },
  { es: "Serpiente arbórea", en: "Tree snake" },
  { es: "Mariposas", en: "Butterflies" },
  { es: "Ceibo", en: "Ceiba tree" },
  { es: "Orquídeas", en: "Orchids" },
  { es: "Heliconias", en: "Heliconias" },
  { es: "Morete", en: "Morete palm" },
  { es: "Ranas y sapos", en: "Frogs and toads" },
];
