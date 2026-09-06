import type { Localized } from "@/lib/i18n";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  REGISTRO DE IMÁGENES
 * ────────────────────────────────────────────────────────────────────────────
 *  Ningún componente escribe una ruta de imagen. Todos piden `<Media id="…" />`
 *  y esta tabla decide qué se muestra.
 *
 *  MIENTRAS NO HAYA FOTOS REALES  → `src` va vacío y se dibuja un placeholder
 *  compuesto con los colores de la paleta activa (cambia solo si cambiás de
 *  paleta) más su etiqueta discreta.
 *
 *  CUANDO LLEGUEN LAS FOTOS REALES → se agrega `src` a la entrada y listo.
 *  Una línea por foto, sin tocar un solo componente:
 *
 *      hero: { …, src: "/fotos/hero-rio-amanecer.jpg" }
 *
 *  `tone` define el ambiente del placeholder: canopy · river · dawn · night ·
 *  lagoon · community · lodge · fauna.
 */

export type MediaTone =
  | "canopy"
  | "river"
  | "dawn"
  | "night"
  | "lagoon"
  | "community"
  | "lodge"
  | "fauna";

export type MediaEntry = {
  /** Ruta real de la foto. Vacío = placeholder. */
  src?: string;
  alt: Localized<string>;
  tone: MediaTone;
  /** Aspecto sugerido cuando el contenedor no lo impone. */
  ratio?: string;
};

export const media = {
  /* ─── Portada ─── */
  hero: {
    alt: {
      es: "Amanecer sobre el río Cuyabeno visto desde una canoa",
      en: "Sunrise over the Cuyabeno river seen from a canoe",
    },
    tone: "dawn",
    ratio: "16/9",
  },
  "home-statement": {
    alt: {
      es: "Selva primaria de la Reserva Cuyabeno vista desde el agua",
      en: "Primary rainforest of the Cuyabeno Reserve seen from the water",
    },
    tone: "canopy",
    ratio: "21/9",
  },
  "home-closing": {
    alt: {
      es: "Atardecer en la Laguna Grande de Cuyabeno",
      en: "Sunset over Laguna Grande in Cuyabeno",
    },
    tone: "lagoon",
    ratio: "21/9",
  },

  /* ─── Experiencias ─── */
  "exp-jungle": {
    alt: { es: "Caminata por el bosque primario", en: "Hiking through the primary forest" },
    tone: "canopy",
    ratio: "4/5",
  },
  "exp-river": {
    alt: { es: "Canoa a remo por el río Cuyabeno", en: "Paddling a canoe on the Cuyabeno river" },
    tone: "river",
    ratio: "4/5",
  },
  "exp-wildlife": {
    alt: { es: "Delfines rosados y fauna del Cuyabeno", en: "Pink dolphins and Cuyabeno wildlife" },
    tone: "fauna",
    ratio: "4/5",
  },
  "exp-culture": {
    alt: {
      es: "Comunidad Siona preparando casabe",
      en: "Siona community preparing cassava bread",
    },
    tone: "community",
    ratio: "4/5",
  },

  /* ─── Tours ─── */
  "tour-3-dias": {
    alt: { es: "Tour de 3 días en Cuyabeno", en: "3-day Cuyabeno tour" },
    tone: "river",
    ratio: "3/4",
  },
  "tour-4-dias": {
    alt: { es: "Tour de 4 días en Cuyabeno", en: "4-day Cuyabeno tour" },
    tone: "canopy",
    ratio: "3/4",
  },
  "tour-5-dias": {
    alt: { es: "Tour de 5 días en Cuyabeno", en: "5-day Cuyabeno tour" },
    tone: "lagoon",
    ratio: "3/4",
  },

  /* ─── Relato del día (storytelling) ─── */
  "story-dawn": {
    alt: { es: "La niebla cubre el río al amanecer", en: "Mist covering the river at dawn" },
    tone: "dawn",
    ratio: "3/2",
  },
  "story-canoe": {
    alt: { es: "Subiendo a la canoa", en: "Boarding the canoe" },
    tone: "river",
    ratio: "3/2",
  },
  "story-wildlife": {
    alt: { es: "Monos entre los árboles", en: "Monkeys among the trees" },
    tone: "fauna",
    ratio: "3/2",
  },
  "story-night": {
    alt: { es: "Caminata nocturna en la selva", en: "Night walk in the jungle" },
    tone: "night",
    ratio: "3/2",
  },

  /* ─── El lodge ─── */
  "lodge-exterior": {
    alt: { es: "Cabañas de Canangueno Lodge", en: "Canangueno Lodge cabins" },
    tone: "lodge",
    ratio: "16/10",
  },
  "lodge-room": {
    alt: {
      es: "Habitación con baño privado y mosquitero",
      en: "Room with private bathroom and mosquito net",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-dining": {
    alt: { es: "Comedor del lodge", en: "Lodge dining area" },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-deck": {
    alt: { es: "Mirador sobre el río", en: "Deck overlooking the river" },
    tone: "river",
    ratio: "4/3",
  },

  /* ─── Cómo llegar ─── */
  "journey-road": {
    alt: { es: "Ruta hacia el Puente de Cuyabeno", en: "Road to the Cuyabeno Bridge" },
    tone: "canopy",
    ratio: "16/9",
  },

  /* ─── Galería ─── */
  "gal-lagoon-1": {
    alt: { es: "Laguna Grande al atardecer", en: "Laguna Grande at sunset" },
    tone: "lagoon",
    ratio: "3/2",
  },
  "gal-lagoon-2": {
    alt: { es: "Baño en la Laguna Grande", en: "Swimming in Laguna Grande" },
    tone: "lagoon",
    ratio: "2/3",
  },
  "gal-fauna-1": {
    alt: { es: "Guacamayos sobre el dosel", en: "Macaws above the canopy" },
    tone: "fauna",
    ratio: "3/2",
  },
  "gal-fauna-2": {
    alt: { es: "Caimán en la orilla", en: "Caiman on the riverbank" },
    tone: "night",
    ratio: "3/2",
  },
  "gal-fauna-3": {
    alt: { es: "Mono ardilla en el bosque", en: "Squirrel monkey in the forest" },
    tone: "canopy",
    ratio: "2/3",
  },
  "gal-forest-1": {
    alt: { es: "Ceibo, el árbol más grande de la Amazonía", en: "Ceiba, the largest tree in the Amazon" },
    tone: "canopy",
    ratio: "2/3",
  },
  "gal-forest-2": {
    alt: { es: "Orquídeas y heliconias del sotobosque", en: "Orchids and heliconias in the understory" },
    tone: "canopy",
    ratio: "3/2",
  },
  "gal-community-1": {
    alt: { es: "Demostración de casabe en Seoqueya", en: "Cassava bread demonstration in Seoqueya" },
    tone: "community",
    ratio: "3/2",
  },
  "gal-community-2": {
    alt: { es: "Artesanías de la comunidad Siona", en: "Handicrafts from the Siona community" },
    tone: "community",
    ratio: "2/3",
  },
  "gal-lodge-1": {
    alt: { es: "Cabañas entre la vegetación", en: "Cabins among the vegetation" },
    tone: "lodge",
    ratio: "3/2",
  },
  "gal-lodge-2": {
    alt: { es: "Restaurante del lodge", en: "Lodge restaurant" },
    tone: "lodge",
    ratio: "3/2",
  },
  "gal-river-1": {
    alt: { es: "Canoa a remo por el Cuyabeno", en: "Paddle canoe on the Cuyabeno" },
    tone: "river",
    ratio: "3/2",
  },
  "gal-river-2": {
    alt: { es: "Niebla sobre el río al amanecer", en: "Mist over the river at dawn" },
    tone: "dawn",
    ratio: "2/3",
  },
} satisfies Record<string, MediaEntry>;

export type MediaId = keyof typeof media;

export function getMedia(id: MediaId): MediaEntry {
  return media[id];
}
