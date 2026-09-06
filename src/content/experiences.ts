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
    title: { es: "Selva", en: "Forest" },
    body: {
      es: "Caminatas de dos horas por bosque primario y salidas nocturnas con linterna, siempre con guía. Es donde aparecen los ceibos —el árbol más grande de la Amazonía—, las orquídeas, las heliconias y todo lo que sólo sale cuando se hace de noche.",
      en: "Two-hour hikes through primary forest and night walks by torchlight, always with a guide. This is where you find the ceibas — the largest tree in the Amazon — along with orchids, heliconias and everything that only comes out after dark.",
    },
    detail: {
      es: ["Bosque primario", "Caminatas nocturnas", "Ranas, insectos y arañas", "Orquídeas y heliconias"],
      en: ["Primary forest", "Night walks", "Frogs, insects and spiders", "Orchids and heliconias"],
    },
    mediaId: "exp-jungle",
  },
  {
    id: "rio",
    n: "02",
    title: { es: "Río", en: "River" },
    body: {
      es: "Tres horas de canoa desde el Puente de Cuyabeno para llegar, y después el río todos los días: a remo por la mañana, río arriba hasta la Laguna Grande por la tarde para nadar y ver el atardecer.",
      en: "Three hours by canoe from the Cuyabeno Bridge to get here, and then the river every day: paddling in the morning, upriver to Laguna Grande in the afternoon to swim and watch the sunset.",
    },
    detail: {
      es: ["Canoa a remo", "Laguna Grande", "Baño en el río", "Atardeceres sobre el agua"],
      en: ["Paddle canoe", "Laguna Grande", "Swimming in the river", "Sunsets over the water"],
    },
    mediaId: "exp-river",
  },
  {
    id: "fauna",
    n: "03",
    title: { es: "Vida salvaje", en: "Wildlife" },
    body: {
      es: "Delfines rosados, caimanes al anochecer, monos, tucanes, papagayos, garzas, mariposas y serpientes arbóreas. Los guías son naturalistas certificados por el Ministerio del Ambiente: saben dónde mirar.",
      en: "Pink dolphins, caimans at dusk, monkeys, toucans, macaws, herons, butterflies and tree snakes. Our guides are naturalists certified by the Ministry of the Environment — they know where to look.",
    },
    detail: {
      es: ["Delfines rosados", "Caimanes de noche", "Monos y aves", "Anacondas en la laguna"],
      en: ["Pink dolphins", "Caimans after dark", "Monkeys and birds", "Anacondas in the lagoon"],
    },
    mediaId: "exp-wildlife",
  },
  {
    id: "cultura",
    n: "04",
    title: { es: "Comunidad", en: "Community" },
    body: {
      es: "Un día entero con las comunidades Siona Taraveya de Tarapuy y Seoqueya: la visita al chamán, la demostración de casabe —el pan de yuca— con una familia, y las artesanías hechas ahí mismo.",
      en: "A full day with the Siona Taraveya community of Tarapuy and with Seoqueya: the visit to the shaman, the casabe demonstration — cassava bread — with a local family, and handicrafts made right there.",
    },
    detail: {
      es: ["Comunidad Siona", "Casa del Chamán", "Demostración de casabe", "Artesanías locales"],
      en: ["Siona community", "The Shaman's House", "Casabe demonstration", "Local handicrafts"],
    },
    mediaId: "exp-culture",
  },
];
