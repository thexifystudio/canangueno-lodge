import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TOURS — contenido real
 * ────────────────────────────────────────────────────────────────────────────
 *  Itinerarios: transcritos de cananguenolodge.com (páginas Tour 3/4/5 días),
 *  reordenados para leerse mejor pero SIN agregar ni quitar actividades.
 *  Precios: hoja de tarifas del cliente (precio de venta al público).
 *  Inclusiones, descuentos y políticas: PDF "TOUR TARIFA Cuyabeno".
 *
 *  Para cambiar un precio: editá `price` y listo — se propaga a la home, al
 *  índice de tours, a la landing, al formulario de reserva y al JSON-LD.
 *  (Cuando esté el panel admin, este archivo pasa a ser el valor por defecto
 *  y la base de datos manda.)
 */

export type TourDay = {
  n: number;
  title: Localized;
  body: Localized;
  mediaId: MediaId;
};

export type Tour = {
  id: string;
  slug: Localized<string>;
  order: number;
  days: number;
  nights: number;
  /** Precio de venta al público, por persona, en USD. */
  price: number;
  name: Localized;
  tagline: Localized;
  summary: Localized;
  bestFor: Localized;
  highlights: Localized<string[]>;
  itinerary: TourDay[];
  mediaId: MediaId;
  featured?: boolean;
};

export const tours: Tour[] = [
  /* ═══════════════════════════════════════════════════════════ 3 DÍAS ═══ */
  {
    id: "3-dias",
    slug: { es: "3-dias", en: "3-days" },
    order: 1,
    days: 3,
    nights: 2,
    price: 280,
    mediaId: "tour-3-dias",
    name: { es: "Tres días en Cuyabeno", en: "Three days in Cuyabeno" },
    tagline: { es: "La Amazonía esencial", en: "The essential Amazon" },
    summary: {
      es: "El recorrido más corto sin renunciar a lo importante: la Laguna Grande, los caimanes de noche y un día completo con las comunidades Siona y Seoqueya.",
      en: "The shortest route without giving up what matters: Laguna Grande, caimans after dark and a full day with the Siona and Seoqueya communities.",
    },
    bestFor: {
      es: "Familias con niños, parejas y grupos de amigos con pocos días",
      en: "Families with children, couples and groups of friends short on time",
    },
    highlights: {
      es: [
        "Laguna Grande y baño al atardecer",
        "Caimanes y caminata nocturna",
        "Comunidades Siona Taraveya y Seoqueya",
        "Amanecer en el río con delfines rosados",
      ],
      en: [
        "Laguna Grande and a swim at sunset",
        "Caimans and a night walk",
        "Siona Taraveya and Seoqueya communities",
        "Sunrise on the river with pink dolphins",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "story-canoe",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
        },
        body: {
          es: "Llegas al Puente de Cuyabeno después del viaje en bus nocturno desde Quito (unas ocho horas, la noche anterior). Nuestro personal te recibe y un responsable de la Reserva de Producción de Fauna Cuyabeno da las indicaciones generales. Desde ahí, tres horas de canoa por el río Cuyabeno: nuestros guías bilingües, certificados por el Ministerio del Ambiente, van explicando la flora y la fauna del sector y, con algo de suerte, aparecen papagayos, tucanes y el martín pescador. Check-in en el lodge y almuerzo. Después de un rato de descanso subimos río arriba hasta la Laguna Grande para nadar y observar caimanes. Cena y caminata nocturna para cerrar el día.",
          en: "You reach the Cuyabeno Bridge after the overnight bus from Quito (about eight hours, the night before). Our staff welcomes you and an officer from the Cuyabeno Wildlife Reserve gives the general briefing. From there, three hours by canoe along the Cuyabeno river: our bilingual guides, certified by the Ministry of the Environment, explain the flora and fauna along the way — with a bit of luck, macaws, toucans and kingfishers appear. Check-in at the lodge and lunch. After some rest we head upriver to Laguna Grande to swim and watch caimans. Dinner and a night walk to close the day.",
        },
      },
      {
        n: 2,
        mediaId: "exp-culture",
        title: { es: "Comunidad nativa", en: "Native community" },
        body: {
          es: "Después del desayuno salimos en canoa a remo hasta un sendero de una hora y media que lleva a la comunidad Siona Taraveya de Tarapuy, a orillas del río Cuyabeno. Los guías explican su cultura y sus tradiciones. Seguimos hacia la comunidad de Seoqueya, donde una familia hace la demostración de casabe —el pan de yuca— y se encuentran artesanías hechas en el lugar: pulseras, collares, shigras y cerámica. Por la tarde volvemos al lodge en canoa a remo, escuchando aves, monos y buscando delfines rosados. Cena, y el guía cierra con una charla repasando todo lo visto.",
          en: "After breakfast we set out by paddle canoe to a trail that takes about an hour and a half to the Siona Taraveya community of Tarapuy, on the bank of the Cuyabeno river. The guides explain their culture and traditions. We continue to the Seoqueya community, where a family demonstrates how casabe — cassava bread — is made, alongside locally made crafts: bracelets, necklaces, shigras and ceramics. In the afternoon we paddle back to the lodge, listening for birds and monkeys and watching for pink dolphins. Dinner, and the guide closes with a talk recapping everything we saw.",
        },
      },
      {
        n: 3,
        mediaId: "story-dawn",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
        },
        body: {
          es: "A las seis de la mañana salimos a observar animales por el río Cuyabeno mientras amanece: delfines rosados, tucanes, garzas, monos, mariposas y serpientes arbóreas. Volvemos al lodge para el desayuno. Salida a las 09:30 hacia el puente, donde tomás el bus de regreso.",
          en: "At six in the morning we head out to watch wildlife along the Cuyabeno river as the sun comes up: pink dolphins, toucans, herons, monkeys, butterflies and tree snakes. We return to the lodge for breakfast. Departure at 09:30 to the bridge, where you take the bus back.",
        },
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════ 4 DÍAS ═══ */
  {
    id: "4-dias",
    slug: { es: "4-dias", en: "4-days" },
    order: 2,
    days: 4,
    nights: 3,
    price: 350,
    mediaId: "tour-4-dias",
    featured: true,
    name: { es: "Cuatro días en Cuyabeno", en: "Four days in Cuyabeno" },
    tagline: { es: "La experiencia completa", en: "The complete experience" },
    summary: {
      es: "El recorrido que más recomendamos. Todo lo del programa de tres días más un día entero dedicado al bosque primario: los árboles más grandes de la Amazonía, baño en el río y una segunda caminata nocturna.",
      en: "The route we recommend most. Everything in the three-day programme plus a full day devoted to the primary forest: the largest trees in the Amazon, a swim in the river and a second night walk.",
    },
    bestFor: {
      es: "Parejas y familias que quieren ver la mayor cantidad de vida salvaje en pocos días",
      en: "Couples and families who want to see the most wildlife in the fewest days",
    },
    highlights: {
      es: [
        "Atardecer en la Laguna Grande",
        "Día completo con las comunidades Siona y Seoqueya",
        "Caminata de dos horas en bosque primario",
        "Dos caminatas nocturnas y baño en el río",
      ],
      en: [
        "Sunset over Laguna Grande",
        "A full day with the Siona and Seoqueya communities",
        "A two-hour hike through primary forest",
        "Two night walks and a swim in the river",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "story-canoe",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
        },
        body: {
          es: "Viaje en bus desde Quito la noche anterior, unas ocho horas hasta el Puente de Cuyabeno. Desde ahí, tres horas de canoa por el río: nuestros guías bilingües, certificados por el Ministerio del Ambiente, explican la flora y la fauna del sector. Llegada a Canangueno Lodge para el almuerzo y un rato de descanso. Por la tarde subimos río arriba hasta la Laguna Grande para ver el atardecer, y de vuelta buscamos caimanes en la orilla. Cena en el lodge.",
          en: "Overnight bus from Quito the night before, about eight hours to the Cuyabeno Bridge. From there, three hours by canoe along the river: our bilingual guides, certified by the Ministry of the Environment, explain the area's flora and fauna. Arrival at Canangueno Lodge for lunch and some rest. In the afternoon we head upriver to Laguna Grande for the sunset, and on the way back we look for caimans along the bank. Dinner at the lodge.",
        },
      },
      {
        n: 2,
        mediaId: "exp-culture",
        title: { es: "Comunidad nativa · día completo", en: "Native community · full day" },
        body: {
          es: "Después del desayuno, canoa a remo hasta un sendero de hora y media que lleva a la comunidad Siona Taraveya de Tarapuy, a orillas del río Cuyabeno, donde los guías explican su cultura y tradiciones. Después seguimos a la comunidad de Seoqueya: con una familia hacemos la demostración de casabe, el pan de yuca, y encontramos artesanías del lugar —pulseras, collares, shigras y cerámica—. Por la tarde volvemos al lodge en canoa a remo, con el canto de las aves, monos y delfines rosados. Cena.",
          en: "After breakfast, a paddle canoe ride to a trail that takes about an hour and a half to the Siona Taraveya community of Tarapuy, on the bank of the Cuyabeno river, where the guides explain their culture and traditions. We then continue to the Seoqueya community: with a local family we take part in the casabe demonstration — cassava bread — and find handicrafts made there: bracelets, necklaces, shigras and ceramics. In the afternoon we paddle back to the lodge, with birdsong, monkeys and pink dolphins along the way. Dinner.",
        },
      },
      {
        n: 3,
        mediaId: "exp-jungle",
        title: { es: "Contacto directo con la naturaleza", en: "Face to face with the forest" },
        body: {
          es: "Después del desayuno salimos en canoa a remo río arriba. El guía va explicando la diversidad de fauna y flora mientras aparecen mariposas, loros, papagayos y monos, en un ambiente de calma total. Volvemos al lodge para el almuerzo. Por la tarde, caminata de dos horas en el bosque primario: ranas, sapos, hormigas, arañas e insectos, y una variedad enorme de flora —orquídeas, heliconias, ceibos (el árbol más grande de la Amazonía), hongos y morete—. De regreso, baño en el río, cena y caminata nocturna. El guía cierra con una charla repasando todo lo observado.",
          en: "After breakfast we paddle upriver. The guide explains the diversity of wildlife and plant life as butterflies, parrots, macaws and monkeys appear, in complete calm. We return to the lodge for lunch. In the afternoon, a two-hour hike through the primary forest: frogs, toads, ants, spiders and insects, plus an enormous variety of plant life — orchids, heliconias, ceibas (the largest tree in the Amazon), fungi and morete palms. On the way back, a swim in the river, dinner and a night walk. The guide closes with a talk recapping everything observed.",
        },
      },
      {
        n: 4,
        mediaId: "story-dawn",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
        },
        body: {
          es: "Observación de animales por el río Cuyabeno a las seis de la mañana y regreso al lodge para el desayuno. Salida a las 09:30 hacia el puente, para tomar el bus de vuelta.",
          en: "Wildlife watching along the Cuyabeno river at six in the morning, then back to the lodge for breakfast. Departure at 09:30 to the bridge to catch the bus back.",
        },
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════ 5 DÍAS ═══ */
  {
    id: "5-dias",
    slug: { es: "5-dias", en: "5-days" },
    order: 3,
    days: 5,
    nights: 4,
    price: 440,
    mediaId: "tour-5-dias",
    name: { es: "Cinco días en Cuyabeno", en: "Five days in Cuyabeno" },
    tagline: { es: "Selva, laguna y cultura", en: "Forest, lagoon and culture" },
    summary: {
      es: "El programa más completo. Suma la Casa del Chamán y un día entero en la Laguna Grande buscando anacondas entre los macrolobios, con los guías explicando los ecosistemas lacustres y el uso de plantas medicinales.",
      en: "The most complete programme. It adds the Shaman's House and a full day at Laguna Grande searching for anacondas among the macrolobium trees, with the guides explaining the lake ecosystems and the use of medicinal plants.",
    },
    bestFor: {
      es: "Viajeros que quieren entrar de verdad en la selva y tener tiempo sin apuro",
      en: "Travellers who want to go deep into the forest with time to spare",
    },
    highlights: {
      es: [
        "Casa del Chamán en la comunidad Siona",
        "Día completo en la Laguna Grande",
        "Búsqueda de anacondas entre los macrolobios",
        "Plantas medicinales y ecosistemas lacustres",
      ],
      en: [
        "The Shaman's House in the Siona community",
        "A full day at Laguna Grande",
        "Searching for anacondas among the macrolobium trees",
        "Medicinal plants and lake ecosystems",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "story-canoe",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
        },
        body: {
          es: "Viaje en bus desde Quito la noche anterior, unas ocho horas hasta el Puente de Cuyabeno. Después, tres horas de canoa por el río con los guías bilingües explicando la flora y la fauna. Llegada al lodge para el almuerzo y descanso. Por la tarde, río arriba hasta la Laguna Grande para ver el atardecer; de vuelta, observación de caimanes. Cena y caminata nocturna.",
          en: "Overnight bus from Quito the night before, about eight hours to the Cuyabeno Bridge. Then three hours by canoe along the river with the bilingual guides explaining the flora and fauna. Arrival at the lodge for lunch and rest. In the afternoon, upriver to Laguna Grande for the sunset; on the way back, caiman watching. Dinner and a night walk.",
        },
      },
      {
        n: 2,
        mediaId: "exp-culture",
        title: {
          es: "Comunidad nativa · Casa del Chamán",
          en: "Native community · the Shaman's House",
        },
        body: {
          es: "Después del desayuno, canoa a remo y un sendero de hora y media hasta la comunidad Siona Taraveya de Tarapuy, donde los guías explican la cultura y las tradiciones, incluida la visita al chamán. Seguimos a la comunidad de Seoqueya para la demostración de casabe con una familia y las artesanías del lugar. Por la tarde, regreso al lodge en canoa a remo escuchando aves y monos, con delfines rosados en el camino. Cena.",
          en: "After breakfast, a paddle canoe ride and an hour-and-a-half trail to the Siona Taraveya community of Tarapuy, where the guides explain the culture and traditions, including the visit to the shaman. We continue to the Seoqueya community for the casabe demonstration with a local family and the handicrafts made there. In the afternoon, we paddle back to the lodge listening for birds and monkeys, with pink dolphins along the way. Dinner.",
        },
      },
      {
        n: 3,
        mediaId: "exp-wildlife",
        title: { es: "Laguna Grande", en: "Laguna Grande" },
        body: {
          es: "Después del desayuno navegamos río arriba por el Cuyabeno con la oportunidad de ver delfines rosados, gran variedad de aves y monos, hasta llegar a la Laguna Grande. Damos un recorrido alrededor de los macrolobios buscando anacondas y, después del almuerzo, caminamos por el bosque primario. Los guías explican los ecosistemas lacustres, la flora y la fauna, y el uso de plantas medicinales. Cerramos nadando frente a un atardecer de colores sobre el horizonte de Cuyabeno. Regreso al lodge y cena.",
          en: "After breakfast we head upriver along the Cuyabeno with the chance to see pink dolphins, a wide variety of birds and monkeys, until we reach Laguna Grande. We circle the macrolobium trees searching for anacondas and, after lunch, walk through the primary forest. The guides explain the lake ecosystems, the flora and fauna, and the use of medicinal plants. We close the day swimming in front of a coloured sunset over the Cuyabeno horizon. Back to the lodge and dinner.",
        },
      },
      {
        n: 4,
        mediaId: "exp-jungle",
        title: { es: "Contacto directo con la naturaleza", en: "Face to face with the forest" },
        body: {
          es: "Después del desayuno, canoa a remo río arriba, con el guía explicando la diversidad de fauna y flora: mariposas, loros y papagayos, en un ambiente de relajación total. Volvemos al lodge para el almuerzo. Por la tarde, caminata de dos horas por el bosque primario —ranas, sapos, hormigas, arañas e insectos; orquídeas, heliconias, ceibos, hongos y morete—. De regreso, baño en el río, cena y caminata nocturna, con la charla de cierre del guía.",
          en: "After breakfast, a paddle canoe ride upriver with the guide explaining the diversity of wildlife and plant life: butterflies, parrots and macaws, in complete calm. We return to the lodge for lunch. In the afternoon, a two-hour hike through the primary forest — frogs, toads, ants, spiders and insects; orchids, heliconias, ceibas, fungi and morete palms. On the way back, a swim in the river, dinner and a night walk, with the guide's closing talk.",
        },
      },
      {
        n: 5,
        mediaId: "story-dawn",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
        },
        body: {
          es: "Observación de animales por el río Cuyabeno a las seis de la mañana y regreso para el desayuno. Salida del lodge a las 09:30 hacia el puente, para tomar el bus al destino final.",
          en: "Wildlife watching along the Cuyabeno river at six in the morning, then back for breakfast. Departure from the lodge at 09:30 to the bridge, to catch the bus onward.",
        },
      },
    ],
  },
];

/** Aviso del propio material del lodge, presente en su itinerario de 5 días. */
export const itineraryDisclaimer: Localized = {
  es: "Los itinerarios están sujetos a cambios por la variación del clima en Cuyabeno.",
  en: "Itineraries are subject to change due to weather conditions in Cuyabeno.",
};

/* ─────────────────────────── Qué incluye y qué no ─────────────────────── */

export const included: Localized<string[]> = {
  es: [
    "Guías bilingües certificados por el Ministerio del Ambiente",
    "Excursiones diurnas y nocturnas",
    "Equipo de campo: impermeable, botas, mosquitero y chaleco salvavidas",
    "Habitación con baño privado",
    "Todas las comidas y agua purificada",
    "Electricidad para cargar baterías",
    "Transporte interno en canoa desde el Puente de Cuyabeno",
  ],
  en: [
    "Bilingual guides certified by the Ministry of the Environment",
    "Day and night excursions",
    "Field gear: rain jacket, boots, mosquito net and life vest",
    "Room with private bathroom",
    "All meals and purified water",
    "Electricity to charge batteries",
    "Internal canoe transport from the Cuyabeno Bridge",
  ],
};

/**
 * ⚠️ DISCREPANCIA A CONFIRMAR CON EL CLIENTE:
 * la hoja de tarifas 2026 (PDF) dice USD 10 por persona para las actividades
 * del chamán y del casabe; la web actual (FAQs) dice USD 5. Acá se usa el
 * dato más reciente (el PDF). Confirmar antes de publicar.
 */
export const notIncluded: Localized<string[]> = {
  es: [
    "Transporte Quito ↔ Puente de Cuyabeno (bus o avión)",
    "Comidas antes y después del tour",
    "Actividad del chamán · USD 10 por persona",
    "Actividad de casabe · USD 10 por persona",
    "Bebidas alcohólicas y gaseosas",
    "Propinas",
  ],
  en: [
    "Quito ↔ Cuyabeno Bridge transport (bus or flight)",
    "Meals before and after the tour",
    "Shaman activity · USD 10 per person",
    "Casabe activity · USD 10 per person",
    "Alcoholic and soft drinks",
    "Tips",
  ],
};

/* ─────────────────────────────── Tarifas ──────────────────────────────── */

export const pricingRules: Localized<{ label: string; value: string }[]> = {
  es: [
    { label: "Niños de 0 a 3 años", value: "Gratis" },
    { label: "Niños de 4 a 8 años", value: "50 % del precio" },
    { label: "Niños de 9 a 12 años", value: "25 % de descuento" },
    { label: "Habitación simple o suite", value: "+ USD 70" },
    { label: "Grupos de 15 pasajeros o más", value: "1 pasajero gratis" },
  ],
  en: [
    { label: "Children aged 0 to 3", value: "Free" },
    { label: "Children aged 4 to 8", value: "50% of the price" },
    { label: "Children aged 9 to 12", value: "25% discount" },
    { label: "Single room or suite", value: "+ USD 70" },
    { label: "Groups of 15 or more", value: "1 traveller free" },
  ],
};

export const bookingPolicy: Localized<{ title: string; body: string }[]> = {
  es: [
    {
      title: "Confirmación",
      body: "La reserva queda confirmada únicamente con el voucher escrito del lodge.",
    },
    {
      title: "Pago",
      body: "Se solicita el 100 % del valor del tour por adelantado para garantizar el cupo.",
    },
    {
      title: "Cancelación",
      body: "Con 31 días o más de anticipación se devuelve el 100 %. Entre 30 y 16 días, el 50 %. Con menos de 15 días no hay devolución.",
    },
    {
      title: "Facturación",
      body: "A extranjeros sin IVA, a ecuatorianos con IVA. A empresas, con retención.",
    },
  ],
  en: [
    {
      title: "Confirmation",
      body: "A booking is confirmed only with a written voucher from the lodge.",
    },
    {
      title: "Payment",
      body: "Full payment is required in advance to secure your place.",
    },
    {
      title: "Cancellation",
      body: "Cancelling 31 days or more in advance is refunded in full. Between 30 and 16 days, 50%. Less than 15 days, no refund.",
    },
    {
      title: "Invoicing",
      body: "Foreign visitors are invoiced without VAT, Ecuadorian residents with VAT. Companies with withholding.",
    },
  ],
};

/* ──────────────────────────────── Helpers ─────────────────────────────── */

export function tourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug.es === slug || t.slug.en === slug);
}

export function tourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

/** Precio más bajo del catálogo, para el "desde USD …" del hero. */
export const priceFrom = Math.min(...tours.map((t) => t.price));
