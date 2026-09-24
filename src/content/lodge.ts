import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * El lodge y la empresa. Contenido real de cananguenolodge.com/nosotros
 * (misión, visión, registro legal) y de las inclusiones del tour
 * (instalaciones). Nada agregado.
 */

export const about: {
  intro: Localized;
  mission: Localized;
  vision: Localized;
  company: Localized;
} = {
  intro: {
    es: "Canangueno Lodge está en la comunidad Siona–Seoqueya, dentro de la Reserva de Producción Faunística de Cuyabeno, a tres horas de canoa río adentro. No es un hotel con excursiones: es una casa en medio de la selva desde la que se sale a caminar, a remar y a mirar.",
    en: "Canangueno Lodge sits in the Siona–Seoqueya community, inside the Cuyabeno Wildlife Production Reserve, three hours upriver by canoe. It is not a hotel with excursions attached: it is a house in the middle of the rainforest that you set out from — to walk, to paddle and to look.",
    de: "Die Canangueno Lodge liegt in der Gemeinschaft Siona–Seoqueya, innerhalb des Cuyabeno-Wildreservats, drei Stunden flussaufwärts mit dem Kanu. Sie ist kein Hotel mit angehängten Ausflügen: Sie ist ein Haus mitten im Regenwald, von dem aus du aufbrichst — um zu wandern, zu paddeln und zu schauen.",
    fr: "Le Canangueno Lodge se trouve dans la communauté Siona–Seoqueya, à l’intérieur de la réserve de production faunique de Cuyabeno, à trois heures de pirogue en amont. Ce n’est pas un hôtel avec des excursions en supplément : c’est une maison au milieu de la forêt d’où l’on part — pour marcher, pour pagayer et pour observer.",
  },
  company: {
    es: "Somos una operadora de turismo legalmente autorizada por el Ministerio de Turismo y el Ministerio del Ambiente del Ecuador, con registro forestal RNAB20168950448 para operar dentro del Patrimonio de Áreas Naturales del Estado. Nuestro representante legal, Pablo Flores, trabaja en turismo desde 2006 y mantiene una relación estrecha con las comunidades Siona–Seoqueya, con las que la empresa opera en conjunto.",
    en: "We are a tour operator legally licensed by Ecuador's Ministry of Tourism and Ministry of the Environment, holding forestry registration RNAB20168950448 to operate within the State's Natural Areas. Our legal representative, Pablo Flores, has worked in tourism since 2006 and maintains a close relationship with the Siona–Seoqueya communities, with whom the company works directly.",
    de: "Wir sind ein vom ecuadorianischen Tourismus- und Umweltministerium offiziell lizenzierter Reiseveranstalter mit dem Forstregister RNAB20168950448 für den Betrieb in den Naturschutzgebieten des Staates. Unser gesetzlicher Vertreter, Pablo Flores, ist seit 2006 im Tourismus tätig und pflegt eine enge Beziehung zu den Gemeinschaften der Siona–Seoqueya, mit denen das Unternehmen direkt zusammenarbeitet.",
    fr: "Nous sommes un tour-opérateur légalement autorisé par le ministère du Tourisme et le ministère de l’Environnement de l’Équateur, titulaire du registre forestier RNAB20168950448 pour opérer dans les aires naturelles de l’État. Notre représentant légal, Pablo Flores, travaille dans le tourisme depuis 2006 et entretient une relation étroite avec les communautés Siona–Seoqueya, avec lesquelles l’entreprise collabore directement.",
  },
  mission: {
    es: "Garantizar una aventura amazónica inolvidable, mostrando responsabilidad por el medio ambiente y promoviendo un vínculo estrecho entre los viajeros, la naturaleza y la cultura de la Amazonía. Cuidamos la seguridad de visitantes y tripulación, promovemos el intercambio cultural con la comunidad Siona y trabajamos por la conservación de la biodiversidad y los ecosistemas de la Reserva Cuyabeno.",
    en: "To guarantee an unforgettable Amazon adventure, showing responsibility towards the environment and building a close bond between travellers, nature and Amazonian culture. We look after the safety of visitors and crew, encourage cultural exchange with the Siona community, and work for the conservation of the biodiversity and ecosystems of the Cuyabeno Reserve.",
    de: "Ein unvergessliches Amazonas-Abenteuer zu ermöglichen, mit Verantwortung gegenüber der Umwelt und einer engen Verbindung zwischen Reisenden, Natur und amazonischer Kultur. Wir achten auf die Sicherheit von Gästen und Crew, fördern den kulturellen Austausch mit der Siona-Gemeinschaft und setzen uns für den Erhalt der Artenvielfalt und der Ökosysteme des Cuyabeno-Reservats ein.",
    fr: "Garantir une aventure amazonienne inoubliable, en faisant preuve de responsabilité envers l’environnement et en créant un lien étroit entre les voyageurs, la nature et la culture amazonienne. Nous veillons à la sécurité des visiteurs et de l’équipage, encourageons l’échange culturel avec la communauté Siona et œuvrons à la conservation de la biodiversité et des écosystèmes de la réserve de Cuyabeno.",
  },
  vision: {
    es: "Ser un touroperador social y eco-responsable, con servicios y tours de excelencia, que opere según las preferencias de sus huéspedes y las frágiles condiciones de la selva amazónica, ofreciendo formas creativas de ecoturismo e intercambio cultural.",
    en: "To be a socially and ecologically responsible tour operator, with excellent service and tours, working around both our guests' preferences and the fragile conditions of the Amazon rainforest, offering creative forms of ecotourism and cultural exchange.",
    de: "Ein sozial und ökologisch verantwortungsvoller Reiseveranstalter zu sein, mit exzellentem Service und exzellenten Touren, der sich sowohl an den Wünschen unserer Gäste als auch an den fragilen Bedingungen des Amazonas-Regenwaldes orientiert und kreative Formen von Ökotourismus und kulturellem Austausch anbietet.",
    fr: "Être un tour-opérateur socialement et écologiquement responsable, offrant un service et des circuits d’excellence, en tenant compte à la fois des préférences de nos hôtes et de la fragilité de la forêt amazonienne, et en proposant des formes créatives d’écotourisme et d’échange culturel.",
  },
};

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
      value: "40",
      label: {
        es: "huéspedes como máximo",
        en: "guests at most",
        de: "Gäste höchstens",
        fr: "hôtes au maximum",
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
  gearTitle: {
    es: "Para cada huésped",
    en: "For every guest",
    de: "Für jeden Gast",
    fr: "Pour chaque hôte",
  },
} as const;
