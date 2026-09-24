import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * Las cuatro experiencias que estructuran la estadía.
 * Todo sale de las actividades reales de los itinerarios — no hay nada
 * agregado que el lodge no haga.
 */

export type Experience = {
  id: string;
  n: string;
  title: Localized;
  body: Localized;
  detail: Localized<string[]>;
  mediaId: MediaId;
};

export const experiences: Experience[] = [
  {
    id: "selva",
    n: "01",
    title: { es: "Selva", en: "Forest",
    de: "Regenwald",
    fr: "Forêt" },
    body: {
      es: "Caminatas de dos horas por bosque primario y salidas nocturnas con linterna, siempre con guía. Es donde aparecen los ceibos —el árbol más grande de la Amazonía—, las orquídeas, las heliconias y todo lo que sólo sale cuando se hace de noche.",
      en: "Two-hour hikes through primary forest and night walks by torchlight, always with a guide. This is where you find the ceibas — the largest tree in the Amazon — along with orchids, heliconias and everything that only comes out after dark.",
      de: "Zweistündige Wanderungen durch den Primärwald und Nachtwanderungen mit der Taschenlampe, immer in Begleitung eines Guides. Hier stehen die Ceibas — der größte Baum des Amazonas — zusammen mit Orchideen, Helikonien und allem, was erst nach Einbruch der Dunkelheit hervorkommt.",
      fr: "Des randonnées de deux heures en forêt primaire et des marches nocturnes à la lampe torche, toujours accompagnées d’un guide. C’est ici que se trouvent les ceibas — le plus grand arbre d’Amazonie — ainsi que les orchidées, les héliconias et tout ce qui ne sort qu’à la nuit tombée.",
    },
    detail: {
      es: [
        "Bosque primario",
        "Caminatas nocturnas",
        "Ranas, insectos y arañas",
        "Orquídeas y heliconias",
      ],
      en: [
        "Primary forest",
        "Night walks",
        "Frogs, insects and spiders",
        "Orchids and heliconias",
      ],
      de: [
        "Primärwald",
        "Nachtwanderungen",
        "Frösche, Insekten und Spinnen",
        "Orchideen und Helikonien",
      ],
      fr: [
        "Forêt primaire",
        "Marches nocturnes",
        "Grenouilles, insectes et araignées",
        "Orchidées et héliconias",
      ],
    },
    mediaId: "exp-jungle",
  },
  {
    id: "rio",
    n: "02",
    title: { es: "Río", en: "River",
    de: "Fluss",
    fr: "Fleuve" },
    body: {
      es: "Tres horas de canoa desde el Puente de Cuyabeno para llegar, y después el río todos los días: a remo por la mañana, río arriba hasta la Laguna Grande por la tarde para nadar y ver el atardecer.",
      en: "Three hours by canoe from the Cuyabeno Bridge to get here, and then the river every day: paddling in the morning, upriver to Laguna Grande in the afternoon to swim and watch the sunset.",
      de: "Drei Stunden mit dem Kanu ab der Cuyabeno-Brücke bis hierher — und danach jeden Tag der Fluss: morgens paddeln, nachmittags flussaufwärts zur Laguna Grande, zum Schwimmen und für den Sonnenuntergang.",
      fr: "Trois heures de pirogue depuis le pont de Cuyabeno pour arriver ici, puis le fleuve chaque jour : à la rame le matin, en amont vers la Laguna Grande l’après-midi, pour nager et voir le coucher du soleil.",
    },
    detail: {
      es: [
        "Canoa a remo",
        "Laguna Grande",
        "Baño en el río",
        "Atardeceres sobre el agua",
      ],
      en: [
        "Paddle canoe",
        "Laguna Grande",
        "Swimming in the river",
        "Sunsets over the water",
      ],
      de: [
        "Paddelkanu",
        "Laguna Grande",
        "Baden im Fluss",
        "Sonnenuntergänge über dem Wasser",
      ],
      fr: [
        "Pirogue à rame",
        "Laguna Grande",
        "Baignade dans le fleuve",
        "Couchers de soleil sur l’eau",
      ],
    },
    mediaId: "exp-river",
  },
  {
    id: "fauna",
    n: "03",
    title: { es: "Vida salvaje", en: "Wildlife",
    de: "Tierwelt",
    fr: "Faune" },
    body: {
      es: "Delfines rosados, caimanes al anochecer, monos, tucanes, papagayos, garzas, mariposas y serpientes arbóreas. Los guías son naturalistas certificados por el Ministerio del Ambiente: saben dónde mirar.",
      en: "Pink dolphins, caimans at dusk, monkeys, toucans, macaws, herons, butterflies and tree snakes. Our guides are naturalists certified by the Ministry of the Environment — they know where to look.",
      de: "Rosa Flussdelfine, Kaimane in der Dämmerung, Affen, Tukane, Aras, Reiher, Schmetterlinge und Baumschlangen. Unsere Guides sind vom Umweltministerium zertifizierte Naturführer — sie wissen, wo man hinschauen muss.",
      fr: "Dauphins roses, caïmans au crépuscule, singes, toucans, aras, hérons, papillons et serpents arboricoles. Nos guides sont des naturalistes certifiés par le ministère de l’Environnement — ils savent où regarder.",
    },
    detail: {
      es: [
        "Delfines rosados",
        "Caimanes de noche",
        "Monos y aves",
        "Anacondas en la laguna",
      ],
      en: [
        "Pink dolphins",
        "Caimans after dark",
        "Monkeys and birds",
        "Anacondas in the lagoon",
      ],
      de: [
        "Rosa Flussdelfine",
        "Kaimane bei Nacht",
        "Affen und Vögel",
        "Anakondas in der Lagune",
      ],
      fr: [
        "Dauphins roses",
        "Caïmans à la nuit tombée",
        "Singes et oiseaux",
        "Anacondas dans la lagune",
      ],
    },
    mediaId: "exp-wildlife",
  },
  {
    id: "cultura",
    n: "04",
    title: { es: "Comunidad", en: "Community",
    de: "Gemeinschaft",
    fr: "Communauté" },
    body: {
      es: "Un día entero con las comunidades Siona Taraveya de Tarapuy y Seoqueya: la visita al chamán, la demostración de casabe —el pan de yuca— con una familia, y las artesanías hechas ahí mismo.",
      en: "A full day with the Siona Taraveya community of Tarapuy and with Seoqueya: the visit to the shaman, the casabe demonstration — cassava bread — with a local family, and handicrafts made right there.",
      de: "Ein ganzer Tag mit der Siona-Taraveya-Gemeinschaft von Tarapuy und mit Seoqueya: der Besuch beim Schamanen, die Casabe-Demonstration — das Yuca-Brot — mit einer ortsansässigen Familie und das dort gefertigte Kunsthandwerk.",
      fr: "Une journée entière avec la communauté Siona Taraveya de Tarapuy et avec Seoqueya : la visite au chaman, la démonstration du casabe — le pain de manioc — avec une famille locale, et l’artisanat fabriqué sur place.",
    },
    detail: {
      es: [
        "Comunidad Siona",
        "Casa del Chamán",
        "Demostración de casabe",
        "Artesanías locales",
      ],
      en: [
        "Siona community",
        "The Shaman's House",
        "Casabe demonstration",
        "Local handicrafts",
      ],
      de: [
        "Siona-Gemeinschaft",
        "Das Haus des Schamanen",
        "Casabe-Demonstration",
        "Lokales Kunsthandwerk",
      ],
      fr: [
        "Communauté Siona",
        "La Maison du Chaman",
        "Démonstration du casabe",
        "Artisanat local",
      ],
    },
    mediaId: "exp-culture",
  },
];
