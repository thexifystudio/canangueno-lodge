import type { Localized } from "@/lib/i18n";

/**
 * Especies y plantas que aparecen NOMBRADAS en los itinerarios reales del
 * lodge. No es una lista de fauna amazónica genérica: es lo que sus propios
 * guías dicen que se ve en el recorrido.
 *
 * Se usa en la cinta que corre entre secciones (`FaunaMarquee`).
 */
export const fauna: Localized<string>[] = [
  { es: "Delfín rosado", en: "Pink dolphin",
  de: "Rosa Flussdelfin",
  fr: "Dauphin rose" },
  { es: "Caimán", en: "Caiman",
  de: "Kaiman",
  fr: "Caïman" },
  { es: "Tucán", en: "Toucan",
  de: "Tukan",
  fr: "Toucan" },
  { es: "Guacamayo", en: "Macaw",
  de: "Ara",
  fr: "Ara" },
  { es: "Mono ardilla", en: "Squirrel monkey",
  de: "Totenkopfäffchen",
  fr: "Singe-écureuil" },
  { es: "Anaconda", en: "Anaconda",
  de: "Anakonda",
  fr: "Anaconda" },
  { es: "Martín pescador", en: "Kingfisher",
  de: "Eisvogel",
  fr: "Martin-pêcheur" },
  { es: "Garza", en: "Heron",
  de: "Reiher",
  fr: "Héron" },
  { es: "Serpiente arbórea", en: "Tree snake",
  de: "Baumschlange",
  fr: "Serpent arboricole" },
  { es: "Mariposas", en: "Butterflies",
  de: "Schmetterlinge",
  fr: "Papillons" },
  { es: "Ceibo", en: "Ceiba tree",
  de: "Ceiba-Baum",
  fr: "Ceiba" },
  { es: "Orquídeas", en: "Orchids",
  de: "Orchideen",
  fr: "Orchidées" },
  { es: "Heliconias", en: "Heliconias",
  de: "Helikonien",
  fr: "Héliconias" },
  { es: "Morete", en: "Morete palm",
  de: "Morete-Palme",
  fr: "Palmier morete" },
  { es: "Ranas y sapos", en: "Frogs and toads",
  de: "Frösche und Kröten",
  fr: "Grenouilles et crapauds" },
];
