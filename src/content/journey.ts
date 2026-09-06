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
    place: { es: "Quito", en: "Quito" },
    detail: {
      es: "El viaje arranca la noche anterior al día 1 del tour.",
      en: "The journey starts the night before day 1 of the tour.",
    },
    duration: { es: "Punto de partida", en: "Starting point" },
    mode: "bus",
  },
  {
    n: "02",
    place: { es: "Puente de Cuyabeno", en: "Cuyabeno Bridge" },
    detail: {
      es: "Nuestro punto de encuentro. Los guías te esperan, explican la logística y te embarcan en la canoa. Hay que llegar antes de las 11:00.",
      en: "Our meeting point. The guides are waiting for you, explain the logistics and get you on board the canoe. You need to arrive before 11:00.",
    },
    duration: { es: "≈ 8 h en bus desde Quito", en: "≈ 8 h by bus from Quito" },
    mode: "bus",
  },
  {
    n: "03",
    place: { es: "Río Cuyabeno", en: "Cuyabeno River" },
    detail: {
      es: "Canoa río adentro. Los guías van explicando la flora y la fauna: con suerte aparecen papagayos, tucanes y el martín pescador antes de llegar.",
      en: "Canoe deep into the reserve. The guides explain the flora and fauna along the way — with luck, macaws, toucans and kingfishers appear before you arrive.",
    },
    duration: { es: "≈ 3 h en canoa", en: "≈ 3 h by canoe" },
    mode: "canoe",
  },
  {
    n: "04",
    place: { es: "Canangueno Lodge", en: "Canangueno Lodge" },
    detail: {
      es: "Check-in y almuerzo. La primera salida es esa misma tarde.",
      en: "Check-in and lunch. The first excursion is that same afternoon.",
    },
    duration: { es: "Llegada", en: "Arrival" },
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
    title: { es: "En avión", en: "By plane" },
    body: {
      es: "La opción más rápida. Vuelo Quito – El Coca con LATAM, según los horarios de la aerolínea, y desde ahí transporte privado hasta el Puente de Cuyabeno.",
      en: "The fastest option. A Quito – El Coca flight with LATAM, subject to the airline's schedule, and private transport from there to the Cuyabeno Bridge.",
    },
    legs: {
      es: ["Quito → El Coca · vuelo de ≈ 45 min", "El Coca → Puente de Cuyabeno · ≈ 3 h en transporte privado"],
      en: ["Quito → El Coca · ≈ 45 min flight", "El Coca → Cuyabeno Bridge · ≈ 3 h by private transport"],
    },
  },
  {
    id: "bus",
    mode: "bus",
    title: { es: "En bus", en: "By bus" },
    body: {
      es: "La opción más común y económica. Hay bus directo hasta el puente desde el terminal de Quitumbe con la cooperativa Putumayo, y también salidas desde la zona de La Mariscal. La alternativa es viajar a Lago Agrio (Nueva Loja) desde el terminal de Carcelén y tomar allí otro bus hasta el puente.",
      en: "The most common and affordable option. There is a direct bus to the bridge from Quitumbe terminal with the Putumayo company, and departures from the La Mariscal area too. The alternative is to travel to Lago Agrio (Nueva Loja) from Carcelén terminal and take another bus from there to the bridge.",
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
    },
  },
];

/** Salidas desde otras ciudades. */
export const fromGuayaquil: Localized<string> = {
  es: "Desde Guayaquil la única vía aérea es haciendo escala en el aeropuerto Mariscal Sucre de Quito y siguiendo desde ahí los pasos de arriba. Por tierra, la compañía Transportes Baños llega a Lago Agrio en unas 14 horas.",
  en: "From Guayaquil the only air route is via Mariscal Sucre airport in Quito, following the steps above from there. Overland, the Transportes Baños company reaches Lago Agrio in about 14 hours.",
};

/** El lodge también arma el traslado. */
export const privateTransfer: Localized<string> = {
  es: "También podemos organizarte el transporte terrestre privado desde tu hotel en Quito. Escríbenos y lo coordinamos.",
  en: "We can also arrange private ground transport from your hotel in Quito. Message us and we will organise it.",
};
