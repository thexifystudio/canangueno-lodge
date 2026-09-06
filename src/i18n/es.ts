/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TEXTOS DE INTERFAZ · ESPAÑOL
 * ────────────────────────────────────────────────────────────────────────────
 *  Acá vive TODO el texto de chrome: navegación, botones, títulos de sección,
 *  etiquetas de formulario, footer. El contenido con datos (tours, FAQs,
 *  reseñas) vive en `src/content/`.
 *
 *  Registro: español neutro con "tú". El público es internacional (Italia,
 *  EE.UU., Suiza, Alemania, Francia, Países Bajos, Canadá y Ecuador), así que
 *  se evita el voseo, que lee muy regional.
 *
 *  `en.ts` está tipado contra este archivo: si falta una clave en inglés,
 *  ROMPE EL BUILD. Nunca se publica media página traducida.
 */

export const es = {
  nav: {
    experience: "Experiencia",
    tours: "Tours",
    lodge: "El lodge",
    gallery: "Galería",
    journey: "Cómo llegar",
    faq: "Preguntas",
    book: "Reservar",
    menu: "Menú",
    close: "Cerrar",
    openMenu: "Abrir el menú",
  },

  common: {
    from: "Desde",
    perPerson: "por persona",
    nights: "noches",
    days: "días",
    night: "noche",
    day: "día",
    viewItinerary: "Ver itinerario",
    viewAllTours: "Ver todos los tours",
    bookNow: "Reservar ahora",
    whatsapp: "Escríbenos por WhatsApp",
    whatsappShort: "WhatsApp",
    backToTours: "Volver a los tours",
    included: "Qué incluye",
    notIncluded: "Qué no incluye",
    highlights: "Lo que vas a ver",
    bestFor: "Ideal para",
    itinerary: "Itinerario",
    price: "Precio",
    scroll: "Desliza",
    loading: "Cargando",
    image: "Imagen",
    imagePending: "Foto pendiente",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    all: "Todo",
  },

  hero: {
    eyebrow: "Cuyabeno · Ecuador",
    title: "Vive la Amazonía",
    titleEmphasis: "desde dentro",
    lead: "Una experiencia auténtica en la Reserva de Producción Faunística Cuyabeno, a tres horas de canoa río adentro.",
    ctaPrimary: "Explorar tours",
    ctaSecondary: "Reservar ahora",
    metaDuration: "3 — 5 días",
    metaLocation: "Reserva Cuyabeno",
    metaPrice: "Desde USD 280",
  },

  statement: {
    eyebrow: "Reserva de Producción Faunística Cuyabeno",
    title: "La selva no se visita.",
    titleEmphasis: "Se vive.",
    body: "Seiscientas mil hectáreas de bosque inundado en el noreste del Ecuador. Delfines rosados en el río, caimanes en la orilla al anochecer, y una comunidad Siona que lleva generaciones ahí. Canangueno Lodge está en el medio de todo eso — no al lado.",
    stats: [
      { value: "40", label: "huéspedes como máximo" },
      { value: "3 h", label: "de canoa río adentro" },
      { value: "2006", label: "operando en Cuyabeno" },
    ],
  },

  experience: {
    eyebrow: "La experiencia",
    title: "No vienes solamente a hospedarte.",
    titleEmphasis: "Vienes a vivir esto.",
  },

  tours: {
    eyebrow: "Los programas",
    title: "Elige tu aventura",
    lead: "Tres recorridos con el mismo lodge, los mismos guías y la misma selva. Cambia cuánto tiempo te quedas — y cuánto alcanzas a ver.",
    recommended: "El más recomendado",
    indexTitle: "Tours a Cuyabeno",
    indexLead: "Todos los tours empiezan en el Puente de Cuyabeno y siguen tres horas en canoa hasta el lodge. La diferencia está en los días que pasas dentro de la reserva.",
    compare: "Comparar los tres",
    tableDuration: "Duración",
    tablePrice: "Precio",
    tableBestFor: "Ideal para",
    disclaimer: "Aviso sobre los itinerarios",
  },

  story: {
    eyebrow: "Un día en Cuyabeno",
    title: "Así es la mañana",
    titleEmphasis: "de un día cualquiera",
    lead: "Sacado del itinerario real, no de un folleto.",
    moments: [
      {
        time: "06:00",
        title: "El río antes que nadie",
        body: "Sales en canoa a observar animales mientras amanece. La niebla todavía está sobre el agua.",
      },
      {
        time: "06:30",
        title: "Lo que aparece",
        body: "Delfines rosados, tucanes, garzas, monos, mariposas y serpientes arbóreas. El guía sabe dónde mirar.",
      },
      {
        time: "08:00",
        title: "Desayuno en el lodge",
        body: "Se vuelve para comer. Todas las comidas están incluidas, con agua purificada y té.",
      },
      {
        time: "16:00",
        title: "Río arriba, a la Laguna Grande",
        body: "El atardecer se ve desde el agua. Muchos se meten a nadar antes de que baje el sol.",
      },
      {
        time: "19:30",
        title: "Caimanes y caminata nocturna",
        body: "De regreso se buscan caimanes en la orilla. Después de la cena, la selva se camina con linterna.",
      },
    ],
  },

  video: {
    eyebrow: "El video",
    title: "Tres horas río adentro",
    titleEmphasis: "y ya no hay señal",
    lead: "Grabado en el río Cuyabeno, camino al lodge.",
    play: "Ver el video",
    playShort: "Ver video",
    close: "Cerrar el video",
  },

  fauna: {
    eyebrow: "Lo que se cruza en el camino",
  },

  lodge: {
    eyebrow: "El lodge",
    title: "Una casa en medio",
    titleEmphasis: "de la selva",
    aboutTitle: "Quiénes somos",
    missionTitle: "Misión",
    visionTitle: "Visión",
    facilitiesTitle: "Instalaciones",
    credentialsTitle: "Operación autorizada",
    registryLabel: "Registro forestal",
    companyLabel: "Razón social",
    sinceLabel: "En turismo desde",
  },

  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que dicen quienes",
    titleEmphasis: "ya estuvieron aquí",
    source: "en TripAdvisor",
    excerptNote: "Extracto",
  },

  gallery: {
    eyebrow: "Galería",
    title: "Cuyabeno",
    titleEmphasis: "en imágenes",
    lead: "Fotografías del lodge, del río, de la selva y de las comunidades con las que trabajamos.",
    filterLabel: "Filtrar por",
  },

  journey: {
    eyebrow: "Cómo llegar",
    title: "Llegar es parte",
    titleEmphasis: "de la aventura",
    lead: "Todos nuestros tours empiezan en el Puente de Cuyabeno, nuestro punto de encuentro. Hay que llegar antes de las 11:00 para salir a tiempo.",
    routeTitle: "La ruta, paso a paso",
    optionsTitle: "Cómo llegar hasta el puente",
    optionsLead: "El tramo Quito → Puente de Cuyabeno no está incluido en el precio del tour. Estas son las dos formas de hacerlo.",
    fromOtherCities: "Desde otras ciudades",
    transferTitle: "¿Prefieres que lo organicemos nosotros?",
    doubtsTitle: "¿Tienes dudas sobre cómo llegar?",
    doubtsBody: "Escríbenos y te ayudamos a coordinar el transporte, el horario y el punto de encuentro.",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que",
    titleEmphasis: "suelen preguntarnos",
    lead: "Y si falta algo, escríbenos por WhatsApp — respondemos ahí mismo.",
  },

  booking: {
    eyebrow: "Planifica tu viaje",
    title: "¿Listo para vivir",
    titleEmphasis: "Cuyabeno?",
    lead: "Cuéntanos cuándo quieres viajar y cuántos son. Te confirmamos disponibilidad y te enviamos el detalle.",
    tourLabel: "Tour",
    tourPlaceholder: "Elige un recorrido",
    dateLabel: "Fecha de viaje",
    travelersLabel: "Viajeros",
    nameLabel: "Nombre y apellido",
    namePlaceholder: "Cómo te llamas",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    phoneLabel: "Teléfono o WhatsApp",
    phonePlaceholder: "Con código de país",
    countryLabel: "País",
    countryPlaceholder: "De dónde nos escribes",
    messageLabel: "Algo más que debamos saber",
    messagePlaceholder: "Alergias, restricciones alimenticias, tipo de habitación…",
    submit: "Consultar disponibilidad",
    submitting: "Enviando…",
    orWhatsapp: "o escríbenos directo por WhatsApp",
    successTitle: "Recibimos tu consulta",
    successBody: "Te respondemos dentro de las próximas 24 horas con la disponibilidad y el detalle del tour.",
    errorTitle: "No se pudo enviar",
    errorBody: "Intenta de nuevo o escríbenos por WhatsApp.",
    policyTitle: "Antes de reservar",
    required: "obligatorio",
    summaryTitle: "Tu consulta",
    estimatedTotal: "Total estimado",
    estimatedNote: "Referencial, por persona y sin el transporte Quito ↔ Puente de Cuyabeno.",
  },

  location: {
    eyebrow: "Dónde estamos",
    title: "Reserva Cuyabeno,",
    titleEmphasis: "Sucumbíos",
    officeTitle: "Oficina en Quito",
    meetingTitle: "Punto de encuentro",
    mapLabel: "Ver en el mapa",
  },

  footer: {
    tagline: "Tours a la Amazonía ecuatoriana en la Reserva de Producción Faunística Cuyabeno.",
    explore: "Explorar",
    contact: "Contacto",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    builtBy: "Sitio por Thexify",
  },

  meta: {
    homeTitle: "Canangueno Lodge · Tours a Cuyabeno y la Amazonía ecuatoriana",
    homeDescription:
      "Lodge en el corazón de la Reserva Cuyabeno. Tours de 3, 4 y 5 días con guías bilingües, delfines rosados, comunidad Siona y todas las comidas incluidas. Desde USD 280.",
    toursTitle: "Tours a Cuyabeno · 3, 4 y 5 días · Canangueno Lodge",
    toursDescription:
      "Compara nuestros tres recorridos por la Reserva Cuyabeno: itinerarios completos, precios y qué incluye cada uno.",
    lodgeTitle: "El lodge · Canangueno Lodge, Reserva Cuyabeno",
    lodgeDescription:
      "Cabañas con baño privado en el corazón de la Reserva Cuyabeno, para un máximo de 40 huéspedes. Operadora autorizada desde 2006.",
    galleryTitle: "Galería · Canangueno Lodge, Cuyabeno",
    galleryDescription: "Fotografías del lodge, el río Cuyabeno, la fauna y las comunidades Siona.",
    journeyTitle: "Cómo llegar a Cuyabeno desde Quito · Canangueno Lodge",
    journeyDescription:
      "Cómo llegar al Puente de Cuyabeno desde Quito en bus o en avión vía El Coca, y de ahí tres horas en canoa hasta el lodge.",
    faqTitle: "Preguntas frecuentes · Canangueno Lodge, Cuyabeno",
    faqDescription:
      "Clima, qué llevar, vacunas, proceso de reserva, formas de pago y política de cancelación.",
    bookTitle: "Reservar tu tour a Cuyabeno · Canangueno Lodge",
    bookDescription:
      "Consulta disponibilidad para los tours de 3, 4 y 5 días en la Reserva Cuyabeno.",
  },
};

/**
 * El tipo sale del español. `en.ts` se declara `: Dictionary`, así que
 * cualquier clave que falte o sobre en inglés es un error de compilación.
 */
export type Dictionary = typeof es;
