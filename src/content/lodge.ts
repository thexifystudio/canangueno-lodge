import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * El lodge: instalaciones (de las inclusiones del tour) y los textos de la
 * página `/el-lodge`. Nada agregado.
 */

export type Facility = {
  id: string;
  title: Localized;
  body: Localized;
  mediaId: MediaId;
};

export const facilities: Facility[] = [
  {
    id: "cabanas",
    title: { es: "Cabañas", en: "Cabins",
    de: "Hütten",
    fr: "Cabanes" },
    body: {
      es: "Habitaciones con baño privado —sanitario, ducha y lavabo—, mosquitero y capacidad total para 40 huéspedes entre simples, dobles y compartidas.",
      en: "Rooms with a private bathroom — toilet, shower and sink — mosquito nets, and a total capacity of 40 guests across single, double and shared rooms.",
      de: "Zimmer mit eigenem Bad — WC, Dusche und Waschbecken — Moskitonetzen und einer Gesamtkapazität von 40 Gästen in Einzel-, Doppel- und Gemeinschaftszimmern.",
      fr: "Des chambres avec salle de bain privée — toilettes, douche et lavabo — des moustiquaires, et une capacité totale de 40 personnes en chambres simples, doubles et partagées.",
    },
    mediaId: "lodge-bathroom",
  },
  {
    id: "comedor",
    title: { es: "Comedor", en: "Dining",
    de: "Verpflegung",
    fr: "Restauration" },
    body: {
      es: "Todas las comidas del tour están incluidas: desayuno, almuerzo y cena, con agua purificada y té disponibles en el lodge.",
      en: "All meals during the tour are included: breakfast, lunch and dinner, with purified water and tea available at the lodge.",
      de: "Alle Mahlzeiten während der Tour sind inbegriffen: Frühstück, Mittag- und Abendessen, dazu gereinigtes Wasser und Tee in der Lodge.",
      fr: "Tous les repas du circuit sont inclus : petit-déjeuner, déjeuner et dîner, avec de l’eau purifiée et du thé disponibles au lodge.",
    },
    mediaId: "lodge-dining",
  },
  {
    id: "equipo",
    title: { es: "Equipo de campo", en: "Field gear",
    de: "Ausrüstung",
    fr: "Équipement" },
    body: {
      es: "Impermeable, botas de caucho, mosquitero y chaleco salvavidas para cada huésped. Hay electricidad por horas para cargar cámaras y baterías.",
      en: "Rain jacket, rubber boots, mosquito net and life vest for every guest. Electricity is available at set hours to charge cameras and batteries.",
      de: "Regenjacke, Gummistiefel, Moskitonetz und Schwimmweste für jeden Gast. Zu festgelegten Zeiten steht Strom zum Laden von Kameras und Akkus zur Verfügung.",
      fr: "Veste de pluie, bottes en caoutchouc, moustiquaire et gilet de sauvetage pour chaque hôte. L’électricité est disponible à heures fixes pour recharger appareils photo et batteries.",
    },
    mediaId: "journey-road",
  },
];

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PÁGINA /el-lodge
 * ────────────────────────────────────────────────────────────────────────────
 *  Ordenada como se vive una estadía: dónde dormís, dónde comés y qué pasa
 *  entre salida y salida. Cada bloque va con las fotos reales del cliente.
 */
export const lodgePage = {
  facts: [
    {
      value: "2006",
      label: {
        es: "operando en la Reserva Cuyabeno",
        en: "operating in the Cuyabeno Reserve",
        de: "im Cuyabeno-Reservat tätig",
        fr: "en activité dans la réserve de Cuyabeno",
      },
    },
    {
      value: "3",
      label: {
        es: "comidas al día, incluidas",
        en: "meals a day, included",
        de: "Mahlzeiten am Tag, inklusive",
        fr: "repas par jour, inclus",
      },
    },
    {
      value: "100 %",
      label: {
        es: "habitaciones con baño privado",
        en: "rooms with a private bathroom",
        de: "Zimmer mit eigenem Bad",
        fr: "chambres avec salle de bain privée",
      },
    },
  ],
  rooms: {
    title: {
      es: "Las habitaciones",
      en: "The rooms",
      de: "Die Zimmer",
      fr: "Les chambres",
    },
    body: {
      es: "Cabañas de madera levantadas del suelo, con ventanales hacia el bosque. Hay habitaciones simples, dobles y compartidas; todas con mosquitero y con su propio baño —ducha, lavabo y sanitario—.",
      en: "Wooden cabins raised off the ground, with wide windows onto the forest. There are single, double and shared rooms; all with mosquito nets and their own bathroom — shower, sink and toilet.",
      de: "Holzhütten auf Stelzen, mit großen Fenstern zum Wald. Es gibt Einzel-, Doppel- und Gemeinschaftszimmer, alle mit Moskitonetz und eigenem Bad — Dusche, Waschbecken und WC.",
      fr: "Des cabanes en bois surélevées, avec de grandes fenêtres sur la forêt. Chambres simples, doubles et partagées, toutes avec moustiquaire et leur propre salle de bain — douche, lavabo et toilettes.",
    },
    captions: {
      double: {
        es: "Matrimonial, con mosquitero",
        en: "Double bed, with mosquito net",
        de: "Doppelbett, mit Moskitonetz",
        fr: "Lit double, avec moustiquaire",
      },
      twin: {
        es: "Doble, dos camas",
        en: "Twin, two beds",
        de: "Zweibettzimmer",
        fr: "Twin, deux lits",
      },
      shower: {
        es: "Baño privado · ducha",
        en: "Private bathroom · shower",
        de: "Eigenes Bad · Dusche",
        fr: "Salle de bain privée · douche",
      },
      sink: {
        es: "Baño privado · lavabo",
        en: "Private bathroom · sink",
        de: "Eigenes Bad · Waschbecken",
        fr: "Salle de bain privée · lavabo",
      },
    },
  },
  table: {
    title: {
      es: "La mesa",
      en: "At the table",
      de: "Am Tisch",
      fr: "À table",
    },
    body: {
      es: "Desayuno, almuerzo y cena están incluidos en todos los tours. Cocina casera, jugos naturales y agua purificada siempre a mano. De noche, la cena es en el comedor abierto, con velas y el ruido de la selva de fondo.",
      en: "Breakfast, lunch and dinner are included on every tour. Home cooking, fresh juices and purified water always at hand. At night, dinner is served in the open-air dining room, by candlelight, with the sounds of the forest all around.",
      de: "Frühstück, Mittag- und Abendessen sind bei jeder Tour inbegriffen. Hausgemachte Küche, frische Säfte und gereinigtes Wasser stehen immer bereit. Abends wird im offenen Speisesaal bei Kerzenlicht gegessen, mit den Geräuschen des Waldes ringsum.",
      fr: "Petit-déjeuner, déjeuner et dîner sont inclus dans tous les circuits. Cuisine maison, jus frais et eau purifiée toujours à disposition. Le soir, le dîner est servi dans la salle à manger ouverte, aux chandelles, avec les bruits de la forêt tout autour.",
    },
    captions: {
      meal: {
        es: "El almuerzo",
        en: "Lunch",
        de: "Mittagessen",
        fr: "Le déjeuner",
      },
      dinner: {
        es: "La cena, con velas",
        en: "Dinner, by candlelight",
        de: "Abendessen bei Kerzenlicht",
        fr: "Le dîner, aux chandelles",
      },
    },
  },
  between: {
    title: {
      es: "Entre salida y salida",
      en: "Between outings",
      de: "Zwischen den Ausflügen",
      fr: "Entre deux sorties",
    },
    body: {
      es: "El área común es un gran espacio techado y abierto al bosque. Ahí se descansa en las hamacas después del almuerzo, se estira el cuerpo por la mañana y el guía reúne al grupo para contar lo que se vio en el día.",
      en: "The common area is a large covered space open to the forest. It’s where you rest in the hammocks after lunch, stretch in the morning, and where the guide gathers the group to talk through what everyone saw that day.",
      de: "Der Gemeinschaftsbereich ist ein großer, überdachter Raum, offen zum Wald. Hier ruht man sich nach dem Mittagessen in den Hängematten aus, dehnt sich am Morgen, und hier versammelt der Guide die Gruppe, um über das Gesehene zu sprechen.",
      fr: "L’espace commun est un grand lieu couvert, ouvert sur la forêt. On s’y repose dans les hamacs après le déjeuner, on s’y étire le matin, et c’est là que le guide réunit le groupe pour revenir sur ce que chacun a vu dans la journée.",
    },
    captions: {
      hammocks: {
        es: "Hamacas después del almuerzo",
        en: "Hammocks after lunch",
        de: "Hängematten nach dem Mittagessen",
        fr: "Les hamacs après le déjeuner",
      },
      stretch: {
        es: "Estiramientos por la mañana",
        en: "Morning stretches",
        de: "Dehnen am Morgen",
        fr: "Étirements du matin",
      },
      group: {
        es: "La charla del grupo",
        en: "The group talk",
        de: "Die Gruppenrunde",
        fr: "La discussion de groupe",
      },
    },
  },
  map: {
    title: {
      es: "Dónde vas a estar",
      en: "Where you’ll stay",
      de: "Wo du wohnst",
      fr: "Où vous serez",
    },
    body: {
      es: "Canangueno Lodge está dentro de la Reserva Cuyabeno, en la comunidad Siona–Seoqueya, a orillas del río. No hay carretera hasta el lodge: se llega en canoa desde el Puente de Cuyabeno.",
      en: "Canangueno Lodge is inside the Cuyabeno Reserve, in the Siona–Seoqueya community, on the riverbank. There is no road to the lodge: you arrive by canoe from the Cuyabeno Bridge.",
      de: "Die Canangueno Lodge liegt im Cuyabeno-Reservat, in der Gemeinschaft Siona–Seoqueya, direkt am Fluss. Es führt keine Straße zur Lodge: Man kommt mit dem Kanu von der Cuyabeno-Brücke.",
      fr: "Le Canangueno Lodge se trouve dans la réserve de Cuyabeno, dans la communauté Siona–Seoqueya, au bord du fleuve. Aucune route ne mène au lodge : on y arrive en pirogue depuis le pont de Cuyabeno.",
    },
    facts: [
      {
        label: {
          es: "Desde el Puente de Cuyabeno",
          en: "From the Cuyabeno Bridge",
          de: "Ab der Cuyabeno-Brücke",
          fr: "Depuis le pont de Cuyabeno",
        },
        value: {
          es: "3 h en canoa",
          en: "3 h by canoe",
          de: "3 Std. im Kanu",
          fr: "3 h en pirogue",
        },
      },
      {
        label: {
          es: "Desde Quito hasta el puente",
          en: "From Quito to the bridge",
          de: "Von Quito zur Brücke",
          fr: "De Quito au pont",
        },
        value: {
          es: "8–9 h en bus nocturno",
          en: "8–9 h by overnight bus",
          de: "8–9 Std. im Nachtbus",
          fr: "8–9 h en bus de nuit",
        },
      },
      {
        label: {
          es: "Coordenadas",
          en: "Coordinates",
          de: "Koordinaten",
          fr: "Coordonnées",
        },
        value: {
          es: "0°06′31″ S · 76°04′18″ O",
          en: "0°06′31″ S · 76°04′18″ W",
          de: "0°06′31″ S · 76°04′18″ W",
          fr: "0°06′31″ S · 76°04′18″ O",
        },
      },
    ],
    openMaps: {
      es: "Abrir en Google Maps",
      en: "Open in Google Maps",
      de: "In Google Maps öffnen",
      fr: "Ouvrir dans Google Maps",
    },
    howTo: {
      es: "Cómo llegar",
      en: "How to get here",
      de: "Anreise",
      fr: "Comment venir",
    },
    frameTitle: {
      es: "Mapa con la ubicación de Canangueno Lodge en la Reserva Cuyabeno",
      en: "Map showing Canangueno Lodge in the Cuyabeno Reserve",
      de: "Karte mit der Lage der Canangueno Lodge im Cuyabeno-Reservat",
      fr: "Carte de l’emplacement du Canangueno Lodge dans la réserve de Cuyabeno",
    },
  },
  gearTitle: {
    es: "Para cada huésped",
    en: "For every guest",
    de: "Für jeden Gast",
    fr: "Pour chaque hôte",
  },
} as const;
