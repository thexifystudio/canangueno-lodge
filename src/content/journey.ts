import type { Localized } from "@/lib/i18n";

/**
 * Cómo llegar — contenido real de cananguenolodge.com/como-llegar.
 * Resuelve de paso la confusión histórica Lago Agrio / Puente de Cuyabeno:
 * son dos puntos distintos de la MISMA ruta, no dos puntos de encuentro.
 * El punto de encuentro es siempre el Puente de Cuyabeno, antes de las 11:00.
 */

export type JourneyStep = {
  n: string;
  place: Localized;
  detail: Localized;
  duration: Localized;
  mode: "bus" | "plane" | "canoe" | "lodge";
};

/** La ruta troncal, la misma para todos los pasajeros. */
export const journeySteps: JourneyStep[] = [
  {
    n: "01",
    place: { es: "Quito", en: "Quito",
    de: "Quito",
    fr: "Quito" },
    detail: {
      es: "El viaje arranca la noche anterior al día 1 del tour.",
      en: "The journey starts the night before day 1 of the tour.",
      de: "Die Anreise beginnt in der Nacht vor Tag 1 der Tour.",
      fr: "Le trajet commence la veille du jour 1 du circuit.",
    },
    duration: { es: "Punto de partida", en: "Starting point",
    de: "Ausgangspunkt",
    fr: "Point de départ" },
    mode: "bus",
  },
  {
    n: "02",
    place: { es: "Puente de Cuyabeno", en: "Cuyabeno Bridge",
    de: "Cuyabeno-Brücke",
    fr: "Pont de Cuyabeno" },
    detail: {
      es: "Nuestro punto de encuentro. Los guías te esperan, explican la logística y te embarcan en la canoa. Hay que llegar antes de las 11:00.",
      en: "Our meeting point. The guides are waiting for you, explain the logistics and get you on board the canoe. You need to arrive before 11:00.",
      de: "Unser Treffpunkt. Die Guides erwarten dich, erklären den Ablauf und bringen dich an Bord des Kanus. Du musst vor 11:00 Uhr dort sein.",
      fr: "Notre point de rendez-vous. Les guides vous attendent, expliquent l’organisation et vous font embarquer en pirogue. Il faut arriver avant 11h00.",
    },
    duration: { es: "≈ 8 h en bus desde Quito", en: "≈ 8 h by bus from Quito",
    de: "≈ 8 Std. mit dem Bus ab Quito",
    fr: "≈ 8 h de bus depuis Quito" },
    mode: "bus",
  },
  {
    n: "03",
    place: { es: "Río Cuyabeno", en: "Cuyabeno River",
    de: "Río Cuyabeno",
    fr: "Río Cuyabeno" },
    detail: {
      es: "Canoa río adentro. Los guías van explicando la flora y la fauna: con suerte aparecen papagayos, tucanes y el martín pescador antes de llegar.",
      en: "Canoe deep into the reserve. The guides explain the flora and fauna along the way — with luck, macaws, toucans and kingfishers appear before you arrive.",
      de: "Mit dem Kanu tief in das Reservat hinein. Die Guides erklären unterwegs die Pflanzen- und Tierwelt — mit Glück zeigen sich schon vor der Ankunft Aras, Tukane und Eisvögel.",
      fr: "En pirogue au cœur de la réserve. Les guides expliquent la flore et la faune en chemin — avec un peu de chance, des aras, des toucans et des martins-pêcheurs apparaissent avant l’arrivée.",
    },
    duration: { es: "≈ 3 h en canoa", en: "≈ 3 h by canoe",
    de: "≈ 3 Std. mit dem Kanu",
    fr: "≈ 3 h en pirogue" },
    mode: "canoe",
  },
  {
    n: "04",
    place: { es: "Canangueno Lodge", en: "Canangueno Lodge",
    de: "Canangueno Lodge",
    fr: "Canangueno Lodge" },
    detail: {
      es: "Check-in y almuerzo. La primera salida es esa misma tarde.",
      en: "Check-in and lunch. The first excursion is that same afternoon.",
      de: "Check-in und Mittagessen. Der erste Ausflug findet noch am selben Nachmittag statt.",
      fr: "Arrivée et déjeuner. La première excursion a lieu l’après-midi même.",
    },
    duration: { es: "Llegada", en: "Arrival",
    de: "Ankunft",
    fr: "Arrivée" },
    mode: "lodge",
  },
];

/** Las formas reales de cubrir el tramo Quito → Puente de Cuyabeno. */
export type JourneyOption = {
  id: string;
  mode: "plane" | "bus";
  title: Localized;
  body: Localized;
  legs: Localized<string[]>;
};

export const journeyOptions: JourneyOption[] = [
  {
    id: "avion",
    mode: "plane",
    title: { es: "En avión", en: "By plane",
    de: "Mit dem Flugzeug",
    fr: "En avion" },
    body: {
      es: "La opción más rápida. Vuelo Quito – El Coca con LATAM, según los horarios de la aerolínea, y desde ahí transporte privado hasta el Puente de Cuyabeno.",
      en: "The fastest option. A Quito – El Coca flight with LATAM, subject to the airline's schedule, and private transport from there to the Cuyabeno Bridge.",
      de: "Die schnellste Variante. Ein Flug Quito – El Coca mit LATAM, abhängig vom Flugplan der Airline, und von dort privater Transport zur Cuyabeno-Brücke.",
      fr: "L’option la plus rapide. Un vol Quito – El Coca avec LATAM, selon les horaires de la compagnie, puis un transport privé jusqu’au pont de Cuyabeno.",
    },
    legs: {
      es: [
        "Quito → El Coca · vuelo de ≈ 45 min",
        "El Coca → Puente de Cuyabeno · ≈ 3 h en transporte privado",
      ],
      en: [
        "Quito → El Coca · ≈ 45 min flight",
        "El Coca → Cuyabeno Bridge · ≈ 3 h by private transport",
      ],
      de: [
        "Quito → El Coca · ≈ 45 Min. Flug",
        "El Coca → Cuyabeno-Brücke · ≈ 3 Std. mit privatem Transport",
      ],
      fr: [
        "Quito → El Coca · ≈ 45 min de vol",
        "El Coca → pont de Cuyabeno · ≈ 3 h en transport privé",
      ],
    },
  },
  {
    id: "bus",
    mode: "bus",
    title: { es: "En bus", en: "By bus",
    de: "Mit dem Bus",
    fr: "En bus" },
    body: {
      es: "La opción más común y económica. Hay bus directo hasta el puente desde el terminal de Quitumbe con la cooperativa Putumayo, y también salidas desde la zona de La Mariscal. La alternativa es viajar a Lago Agrio (Nueva Loja) desde el terminal de Carcelén y tomar allí otro bus hasta el puente.",
      en: "The most common and affordable option. There is a direct bus to the bridge from Quitumbe terminal with the Putumayo company, and departures from the La Mariscal area too. The alternative is to travel to Lago Agrio (Nueva Loja) from Carcelén terminal and take another bus from there to the bridge.",
      de: "Die häufigste und günstigste Variante. Vom Terminal Quitumbe fährt ein Direktbus der Gesellschaft Putumayo zur Brücke, außerdem gibt es Abfahrten aus dem Viertel La Mariscal. Alternativ fährt man vom Terminal Carcelén nach Lago Agrio (Nueva Loja) und nimmt von dort einen weiteren Bus zur Brücke.",
      fr: "L’option la plus courante et la plus économique. Un bus direct vers le pont part du terminal de Quitumbe avec la compagnie Putumayo, et il existe aussi des départs depuis le quartier de La Mariscal. L’alternative consiste à rejoindre Lago Agrio (Nueva Loja) depuis le terminal de Carcelén, puis à prendre un autre bus jusqu’au pont.",
    },
    legs: {
      es: [
        "Quito (Quitumbe) → Puente de Cuyabeno · directo, cooperativa Putumayo",
        "Quito (Carcelén) → Lago Agrio · ≈ 8 h, y de ahí bus al puente",
      ],
      en: [
        "Quito (Quitumbe) → Cuyabeno Bridge · direct, Putumayo bus company",
        "Quito (Carcelén) → Lago Agrio · ≈ 8 h, then a bus to the bridge",
      ],
      de: [
        "Quito (Quitumbe) → Cuyabeno-Brücke · direkt, Busgesellschaft Putumayo",
        "Quito (Carcelén) → Lago Agrio · ≈ 8 Std., danach ein Bus zur Brücke",
      ],
      fr: [
        "Quito (Quitumbe) → pont de Cuyabeno · direct, compagnie Putumayo",
        "Quito (Carcelén) → Lago Agrio · ≈ 8 h, puis un bus jusqu’au pont",
      ],
    },
  },
];

/** Salidas desde otras ciudades. */
export const fromGuayaquil: Localized<string> = {
  es: "Desde Guayaquil la única vía aérea es haciendo escala en el aeropuerto Mariscal Sucre de Quito y siguiendo desde ahí los pasos de arriba. Por tierra, la compañía Transportes Baños llega a Lago Agrio en unas 14 horas.",
  en: "From Guayaquil the only air route is via Mariscal Sucre airport in Quito, following the steps above from there. Overland, the Transportes Baños company reaches Lago Agrio in about 14 hours.",
  de: "Aus Guayaquil führt der einzige Luftweg über den Flughafen Mariscal Sucre in Quito, von dort gelten die oben genannten Schritte. Über Land erreicht die Gesellschaft Transportes Baños Lago Agrio in etwa 14 Stunden.",
  fr: "Depuis Guayaquil, la seule voie aérienne passe par l’aéroport Mariscal Sucre de Quito, puis suivez les étapes ci-dessus. Par la route, la compagnie Transportes Baños rejoint Lago Agrio en environ 14 heures.",
};

/** El lodge también arma el traslado. */
export const privateTransfer: Localized<string> = {
  es: "También podemos organizarte el transporte terrestre privado desde tu hotel en Quito. Escríbenos y lo coordinamos.",
  en: "We can also arrange private ground transport from your hotel in Quito. Message us and we will organise it.",
  de: "Wir können auch einen privaten Landtransport ab deinem Hotel in Quito organisieren. Schreib uns, und wir kümmern uns darum.",
  fr: "Nous pouvons aussi organiser un transport terrestre privé depuis votre hôtel à Quito. Écrivez-nous et nous nous en chargeons.",
};
