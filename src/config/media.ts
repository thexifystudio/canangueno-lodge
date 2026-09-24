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
  "lodge-bathroom": {
    src: "/fotos/bano.webp",
    alt: {
      es: "Baño privado de las cabañas de Canangueno",
      en: "Private bathroom in a Canangueno cabin",
      de: "Eigenes Bad in einer Hütte von Canangueno",
      fr: "Salle de bain privée dans une cabane de Canangueno",
    },
    tone: "lodge",
    ratio: "3/4",
  },
  /* ─── Portada ─── */
  /**
   * ✅ FOTO REAL. Fotograma del video oficial del propio lodge
   * (youtube.com/watch?v=Auj1H9UziKM): toma aérea de una canoa navegando el
   * río Cuyabeno. Es material del cliente, no una imagen de banco ni de IA.
   */
  hero: {
    src: "/fotos/rio-cuyabeno-canoa.jpg",
    alt: {
      es: "Vista aérea de una canoa navegando el río Cuyabeno entre la selva",
      en: "Aerial view of a canoe travelling the Cuyabeno river through the rainforest",
      de: "Luftaufnahme eines Kanus auf dem Río Cuyabeno mitten im Regenwald",
      fr: "Vue aérienne d’une pirogue remontant le río Cuyabeno à travers la forêt",
    },
    tone: "river",
    ratio: "16/9",
  },
  "home-statement": {
    src: "/fotos/canoa-rio-grupo.webp",
    alt: {
      es: "Selva primaria de la Reserva Cuyabeno vista desde el agua",
      en: "Primary rainforest of the Cuyabeno Reserve seen from the water",
      de: "Primärwald des Cuyabeno-Reservats, vom Wasser aus gesehen",
      fr: "Forêt primaire de la réserve de Cuyabeno vue depuis l’eau",
    },
    tone: "canopy",
    ratio: "21/9",
  },
  "home-closing": {
    src: "/fotos/atardecer-laguna-2.webp",
    alt: {
      es: "Atardecer en la Laguna Grande de Cuyabeno",
      en: "Sunset over Laguna Grande in Cuyabeno",
      de: "Sonnenuntergang über der Laguna Grande in Cuyabeno",
      fr: "Coucher de soleil sur la Laguna Grande à Cuyabeno",
    },
    tone: "lagoon",
    ratio: "21/9",
  },

  /* ─── Experiencias ─── */
  "exp-jungle": {
    src: "/fotos/bosque-primario.webp",
    alt: {
      es: "Caminata por el bosque primario",
      en: "Hiking through the primary forest",
      de: "Wanderung durch den Primärwald",
      fr: "Randonnée dans la forêt primaire",
    },
    tone: "canopy",
    ratio: "4/5",
  },
  "exp-river": {
    src: "/fotos/canoa-espejo.webp",
    alt: {
      es: "Canoa a remo por el río Cuyabeno",
      en: "Paddling a canoe on the Cuyabeno river",
      de: "Mit dem Paddelkanu auf dem Río Cuyabeno",
      fr: "En pirogue à rame sur le río Cuyabeno",
    },
    tone: "river",
    ratio: "4/5",
  },
  "exp-wildlife": {
    src: "/fotos/guacamayos.webp",
    alt: {
      es: "Pareja de guacamayos escarlata entre las hojas",
      en: "A pair of scarlet macaws among the leaves",
      de: "Ein Paar Hellrote Aras zwischen den Blättern",
      fr: "Un couple d’aras rouges parmi les feuilles",
    },
    tone: "fauna",
    ratio: "4/5",
  },
  "exp-culture": {
    src: "/fotos/comunidad-artesania.webp",
    alt: {
      es: "Visitantes con una niña de la comunidad Siona",
      en: "Visitors with a young girl from the Siona community",
      de: "Besucher mit einem Mädchen aus der Siona-Gemeinschaft",
      fr: "Des visiteurs avec une fillette de la communauté siona",
    },
    tone: "community",
    ratio: "4/5",
  },

  /* ─── Tours ─── */
  "tour-3-dias": {
    src: "/fotos/canoa-rio-grupo.webp",
    alt: { es: "Tour de 3 días en Cuyabeno", en: "3-day Cuyabeno tour",
    de: "Cuyabeno-Tour über 3 Tage",
    fr: "Circuit de 3 jours à Cuyabeno" },
    tone: "river",
    ratio: "3/4",
  },
  "tour-4-dias": {
    src: "/fotos/canoa-espejo.webp",
    alt: { es: "Tour de 4 días en Cuyabeno", en: "4-day Cuyabeno tour",
    de: "Cuyabeno-Tour über 4 Tage",
    fr: "Circuit de 4 jours à Cuyabeno" },
    tone: "canopy",
    ratio: "3/4",
  },
  "tour-5-dias": {
    src: "/fotos/atardecer-laguna.webp",
    alt: { es: "Tour de 5 días en Cuyabeno", en: "5-day Cuyabeno tour",
    de: "Cuyabeno-Tour über 5 Tage",
    fr: "Circuit de 5 jours à Cuyabeno" },
    tone: "lagoon",
    ratio: "3/4",
  },

  /* ─── Relato del día (storytelling) ─── */
  "story-dawn": {
    src: "/fotos/atardecer-laguna-2.webp",
    alt: {
      es: "La niebla cubre el río al amanecer",
      en: "Mist covering the river at dawn",
      de: "Nebel über dem Fluss im Morgengrauen",
      fr: "Brume sur le fleuve à l’aube",
    },
    tone: "dawn",
    ratio: "3/2",
  },
  "story-canoe": {
    src: "/fotos/canoa-rio-grupo.webp",
    alt: { es: "Subiendo a la canoa", en: "Boarding the canoe",
    de: "Einstieg ins Kanu",
    fr: "Embarquement en pirogue" },
    tone: "river",
    ratio: "3/2",
  },
  "story-wildlife": {
    src: "/fotos/mono-ardilla.webp",
    alt: { es: "Monos entre los árboles", en: "Monkeys among the trees",
    de: "Affen zwischen den Bäumen",
    fr: "Singes parmi les arbres" },
    tone: "fauna",
    ratio: "3/2",
  },
  "story-night": {
    src: "/fotos/rana-heliconia.webp",
    alt: {
      es: "Rana sobre una flor de heliconia en la caminata nocturna",
      en: "A frog on a heliconia flower during the night walk",
      de: "Ein Frosch auf einer Helikonienblüte bei der Nachtwanderung",
      fr: "Une grenouille sur une fleur d’héliconia pendant la marche nocturne",
    },
    tone: "night",
    ratio: "3/2",
  },

  /* ─── El lodge ─── */
  "lodge-exterior": {
    src: "/fotos/lodge-cabanas.webp",
    alt: { es: "Cabañas de Canangueno Lodge", en: "Canangueno Lodge cabins",
    de: "Hütten der Canangueno Lodge",
    fr: "Cabanes du Canangueno Lodge" },
    tone: "lodge",
    ratio: "16/10",
  },
  "lodge-room": {
    src: "/fotos/habitacion.webp",
    alt: {
      es: "Habitación con baño privado y mosquitero",
      en: "Room with private bathroom and mosquito net",
      de: "Zimmer mit eigenem Bad und Moskitonetz",
      fr: "Chambre avec salle de bain privée et moustiquaire",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-dining": {
    src: "/fotos/comedor.webp",
    alt: { es: "Comedor del lodge", en: "Lodge dining area",
    de: "Essbereich der Lodge",
    fr: "Salle à manger du lodge" },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-deck": {
    src: "/fotos/hamacas.webp",
    alt: { es: "Mirador sobre el río", en: "Deck overlooking the river",
    de: "Terrasse mit Blick auf den Fluss",
    fr: "Terrasse donnant sur le fleuve" },
    tone: "river",
    ratio: "4/3",
  },

  /* ─── Cómo llegar ─── */
  "journey-road": {
    src: "/fotos/pasarela.webp",
    alt: {
      es: "Viajeros caminando por la pasarela hacia el lodge",
      en: "Travellers walking along the boardwalk to the lodge",
      de: "Reisende auf dem Holzsteg zur Lodge",
      fr: "Des voyageurs marchent sur la passerelle vers le lodge",
    },
    tone: "canopy",
    ratio: "16/9",
  },

  /* ─── Galería ─── */
  "gal-lagoon-1": {
    src: "/fotos/atardecer-laguna.webp",
    alt: { es: "Laguna Grande al atardecer", en: "Laguna Grande at sunset",
    de: "Laguna Grande bei Sonnenuntergang",
    fr: "La Laguna Grande au coucher du soleil" },
    tone: "lagoon",
    ratio: "3/2",
  },
  "gal-lagoon-2": {
    src: "/fotos/atardecer-rio.webp",
    alt: {
      es: "Atardecer sobre el río Cuyabeno",
      en: "Sunset over the Cuyabeno river",
      de: "Sonnenuntergang über dem Río Cuyabeno",
      fr: "Coucher de soleil sur le río Cuyabeno",
    },
    tone: "lagoon",
    ratio: "2/3",
  },
  "gal-fauna-1": {
    src: "/fotos/guacamayos.webp",
    alt: {
      es: "Pareja de guacamayos escarlata entre las hojas",
      en: "A pair of scarlet macaws among the leaves",
      de: "Ein Paar Hellrote Aras zwischen den Blättern",
      fr: "Un couple d’aras rouges parmi les feuilles",
    },
    tone: "fauna",
    ratio: "3/2",
  },
  "gal-fauna-2": {
    src: "/fotos/caiman.webp",
    alt: { es: "Caimán en la orilla", en: "Caiman on the riverbank",
    de: "Kaiman am Flussufer",
    fr: "Caïman sur la berge" },
    tone: "night",
    ratio: "3/2",
  },
  "gal-fauna-3": {
    src: "/fotos/tucan.webp",
    alt: {
      es: "Arasarí, un tucán pequeño, posado en una rama",
      en: "An aracari, a small toucan, perched on a branch",
      de: "Ein Arassari, ein kleiner Tukan, auf einem Ast",
      fr: "Un araçari, un petit toucan, perché sur une branche",
    },
    tone: "canopy",
    ratio: "2/3",
  },
  "gal-forest-1": {
    src: "/fotos/pasarela-bosque.webp",
    alt: {
      es: "Pasarela de madera entre la vegetación del bosque",
      en: "Wooden boardwalk through the forest vegetation",
      de: "Holzsteg durch die Vegetation des Waldes",
      fr: "Passerelle en bois à travers la végétation de la forêt",
    },
    tone: "canopy",
    ratio: "2/3",
  },
  "gal-forest-2": {
    src: "/fotos/sendero-bosque.webp",
    alt: {
      es: "Grupo de caminata con su guía en el bosque",
      en: "A hiking group with their guide in the forest",
      de: "Eine Wandergruppe mit ihrem Guide im Wald",
      fr: "Un groupe de randonnée avec son guide en forêt",
    },
    tone: "canopy",
    ratio: "3/2",
  },
  "gal-community-1": {
    src: "/fotos/comunidad-artesania.webp",
    alt: {
      es: "Visitantes con una niña de la comunidad Siona",
      en: "Visitors with a young girl from the Siona community",
      de: "Besucher mit einem Mädchen aus der Siona-Gemeinschaft",
      fr: "Des visiteurs avec une fillette de la communauté siona",
    },
    tone: "community",
    ratio: "3/2",
  },
  "gal-community-2": {
    src: "/fotos/casabe.webp",
    alt: {
      es: "Viajeros rallando yuca para preparar casabe",
      en: "Travellers grating cassava to make casabe bread",
      de: "Reisende reiben Maniok für Casabe-Brot",
      fr: "Des voyageurs râpent du manioc pour préparer le casabe",
    },
    tone: "community",
    ratio: "2/3",
  },
  "gal-lodge-1": {
    src: "/fotos/lodge-cabanas.webp",
    alt: {
      es: "Cabañas entre la vegetación",
      en: "Cabins among the vegetation",
      de: "Hütten inmitten der Vegetation",
      fr: "Cabanes au milieu de la végétation",
    },
    tone: "lodge",
    ratio: "3/2",
  },
  "gal-lodge-2": {
    src: "/fotos/habitacion-mosquitero.webp",
    alt: {
      es: "Habitación del lodge con cama y mosquitero",
      en: "Lodge room with a bed and mosquito net",
      de: "Zimmer der Lodge mit Bett und Moskitonetz",
      fr: "Chambre du lodge avec lit et moustiquaire",
    },
    tone: "lodge",
    ratio: "3/2",
  },
  "gal-river-1": {
    src: "/fotos/canoa-rio-grupo.webp",
    alt: {
      es: "Canoa a remo por el Cuyabeno",
      en: "Paddle canoe on the Cuyabeno",
      de: "Paddelkanu auf dem Cuyabeno",
      fr: "Pirogue à rame sur le Cuyabeno",
    },
    tone: "river",
    ratio: "3/2",
  },
  "gal-fauna-4": {
    src: "/fotos/monos-aulladores.webp",
    alt: {
      es: "Dos monos aulladores rojos en la copa de un árbol",
      en: "Two red howler monkeys in the treetops",
      de: "Zwei rote Brüllaffen in den Baumwipfeln",
      fr: "Deux singes hurleurs roux à la cime des arbres",
    },
    tone: "fauna",
    ratio: "3/2",
  },
  "gal-fauna-5": {
    src: "/fotos/buhos.webp",
    alt: {
      es: "Pareja de búhos posados en una rama del bosque",
      en: "A pair of owls perched on a forest branch",
      de: "Ein Eulenpaar auf einem Ast im Wald",
      fr: "Un couple de hiboux perchés sur une branche",
    },
    tone: "night",
    ratio: "2/3",
  },
  "gal-fauna-6": {
    src: "/fotos/perezoso.webp",
    alt: {
      es: "Perezoso trepando entre las ramas altas",
      en: "A sloth climbing through the high branches",
      de: "Ein Faultier klettert durch die hohen Äste",
      fr: "Un paresseux grimpant dans les hautes branches",
    },
    tone: "canopy",
    ratio: "2/3",
  },
  "gal-community-3": {
    src: "/fotos/comunidad-siona.webp",
    alt: {
      es: "Visitantes con un miembro de la comunidad Siona",
      en: "Visitors with a member of the Siona community",
      de: "Besucher mit einem Mitglied der Siona-Gemeinschaft",
      fr: "Des visiteurs avec un membre de la communauté Siona",
    },
    tone: "community",
    ratio: "3/2",
  },
  "gal-lodge-3": {
    src: "/fotos/hamacas.webp",
    alt: {
      es: "Hamacas en la terraza del lodge frente al río",
      en: "Hammocks on the lodge deck facing the river",
      de: "Hängematten auf der Terrasse der Lodge mit Blick auf den Fluss",
      fr: "Hamacs sur la terrasse du lodge face au fleuve",
    },
    tone: "lodge",
    ratio: "3/2",
  },
  "gal-river-3": {
    src: "/fotos/canoa-espejo.webp",
    alt: {
      es: "Canoa navegando el Cuyabeno sobre el agua espejada",
      en: "A canoe travelling the Cuyabeno over mirror-still water",
      de: "Ein Kanu auf dem Cuyabeno über spiegelglattem Wasser",
      fr: "Une pirogue sur le Cuyabeno, sur une eau lisse comme un miroir",
    },
    tone: "river",
    ratio: "2/3",
  },
  "gal-river-2": {
    src: "/fotos/nadando.webp",
    alt: {
      es: "Viajeros nadando en la Laguna Grande",
      en: "Travellers swimming in Laguna Grande",
      de: "Reisende schwimmen in der Laguna Grande",
      fr: "Des voyageurs nagent dans la Laguna Grande",
    },
    tone: "dawn",
    ratio: "2/3",
  },
  /* ─── Página del lodge (fotos del cliente, set 2026-09) ─── */
  "lodge-building": {
    src: "/fotos/lodge-edificio.webp",
    alt: {
      es: "Edificio de cabañas de madera de Canangueno Lodge entre la selva",
      en: "Canangueno Lodge’s wooden cabin building surrounded by rainforest",
      de: "Das Holzgebäude der Canangueno Lodge mitten im Regenwald",
      fr: "Le bâtiment en bois du Canangueno Lodge entouré de forêt",
    },
    tone: "lodge",
    ratio: "9/16",
  },
  "lodge-room-double": {
    src: "/fotos/habitacion-matrimonial.webp",
    alt: {
      es: "Habitación con cama matrimonial y mosquitero",
      en: "Room with a double bed and mosquito net",
      de: "Zimmer mit Doppelbett und Moskitonetz",
      fr: "Chambre avec lit double et moustiquaire",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-room-twin": {
    src: "/fotos/habitacion-doble.webp",
    alt: {
      es: "Habitación con dos camas y ventanales al bosque",
      en: "Room with two beds and windows onto the forest",
      de: "Zimmer mit zwei Betten und Fenstern zum Wald",
      fr: "Chambre à deux lits avec fenêtres sur la forêt",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-bath-shower": {
    src: "/fotos/bano-ducha.webp",
    alt: {
      es: "Baño privado con ducha",
      en: "Private bathroom with shower",
      de: "Eigenes Bad mit Dusche",
      fr: "Salle de bain privée avec douche",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-bath-sink": {
    src: "/fotos/bano-lavabo.webp",
    alt: {
      es: "Baño privado con lavabo y sanitario",
      en: "Private bathroom with sink and toilet",
      de: "Eigenes Bad mit Waschbecken und WC",
      fr: "Salle de bain privée avec lavabo et toilettes",
    },
    tone: "lodge",
    ratio: "4/3",
  },
  "lodge-meal": {
    src: "/fotos/comida-almuerzo.webp",
    alt: {
      es: "Almuerzo en el comedor del lodge con jugo natural",
      en: "Lunch in the lodge dining room with fresh juice",
      de: "Mittagessen im Speisesaal der Lodge mit frischem Saft",
      fr: "Déjeuner dans la salle à manger du lodge avec un jus frais",
    },
    tone: "lodge",
    ratio: "9/16",
  },
  "lodge-dinner": {
    src: "/fotos/cena-velas.webp",
    alt: {
      es: "Cena a la luz de las velas con los huéspedes",
      en: "Candlelit dinner with guests",
      de: "Abendessen bei Kerzenlicht mit den Gästen",
      fr: "Dîner aux chandelles avec les hôtes",
    },
    tone: "lodge",
    ratio: "9/16",
  },
  "lodge-hammocks": {
    src: "/fotos/hamacas-area-comun.webp",
    alt: {
      es: "Hamacas en el área común techada",
      en: "Hammocks in the covered common area",
      de: "Hängematten im überdachten Gemeinschaftsbereich",
      fr: "Hamacs dans l’espace commun couvert",
    },
    tone: "lodge",
    ratio: "9/16",
  },
  "lodge-stretch": {
    src: "/fotos/actividad-estiramientos.webp",
    alt: {
      es: "Estiramientos por la mañana en el área común",
      en: "Morning stretching in the common area",
      de: "Morgendliches Dehnen im Gemeinschaftsbereich",
      fr: "Étirements du matin dans l’espace commun",
    },
    tone: "lodge",
    ratio: "1/1",
  },
  "lodge-group": {
    src: "/fotos/actividad-grupo.webp",
    alt: {
      es: "Grupo reunido en círculo en el área común",
      en: "A group gathered in a circle in the common area",
      de: "Eine Gruppe im Kreis im Gemeinschaftsbereich",
      fr: "Un groupe réuni en cercle dans l’espace commun",
    },
    tone: "lodge",
    ratio: "4/3",
  },
} satisfies Record<string, MediaEntry>;

export type MediaId = keyof typeof media;

export function getMedia(id: MediaId): MediaEntry {
  return media[id];
}
