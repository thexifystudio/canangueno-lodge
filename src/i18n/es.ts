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
    cuyabeno: "Cuyabeno",
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
    metaPrice: "Cotiza tu viaje",
  },

  statement: {
    eyebrow: "Reserva de Producción Faunística Cuyabeno",
    title: "La selva no se visita.",
    titleEmphasis: "Se vive.",
    body: "Seiscientas mil hectáreas de bosque inundado en el noreste del Ecuador. Delfines rosados en el río, caimanes en la orilla al anochecer, y una comunidad Siona que lleva generaciones ahí. Canangueno Lodge está en el medio de todo eso — no al lado.",
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
    indexLead:
      "Todos los tours empiezan en el Puente de Cuyabeno y siguen tres horas en canoa hasta el lodge. La diferencia está en los días que pasas dentro de la reserva.",
    compare: "Comparar los tres",
    tableDuration: "Duración",
    tablePrice: "Tarifa",
    tableBestFor: "Ideal para",
    disclaimer: "Aviso sobre los itinerarios",
    /* Página /tours */
    pageTitle: "Los tres recorridos.",
    pageLead:
      "El mismo lodge, los mismos guías, la misma selva. Cambia cuántas noches te quedas — y cuánto llegas a ver.",
    priceNote:
      "La tarifa se cotiza según fechas, tamaño del grupo y tipo de habitación. Escríbenos por WhatsApp o completa el formulario y te enviamos el detalle.",
    metaTitle: "Tours en Cuyabeno: 3, 4 y 5 días",
  },


  /* Página de un tour: /tours/[slug] */
  tourDetail: {
    eyebrow: "Tour en Cuyabeno",
    allTours: "Todos los tours",
    includesTitle: "El tour incluye",
    notIncludedLabel: "Aparte:",
    bookTitle: "Reserva este tour.",
    bookBody:
      "Elige tus fechas y te confirmamos disponibilidad, habitación y presupuesto antes de cualquier pago.",
    bookCta: "Reservar este tour",
    askWhatsapp: "Consultar por WhatsApp",
    /** `{days}` se reemplaza por el número de días del tour. */
    whatsappMessage:
      "Hola, me interesa el tour de {days} días en Canangueno Lodge. ¿Me pasan fechas y disponibilidad?",
    nextLodgeTitle: "Conoce nuestro lodge",
    nextLodgeBody: "Cabañas en la selva, baño privado y mosquitero.",
    nextGalleryTitle: "Galería",
    nextGalleryBody: "El río, el bosque y las comunidades, en fotos.",
    view: "Ver",
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
    title: "Míralo antes",
    titleEmphasis: "de reservar",
    lead: "Un video corto, grabado por el equipo del lodge camino al Cuyabeno.",
    play: "Reproducir",
    playShort: "Ver video",
    close: "Cerrar el video",
  },

  photos: {
    eyebrow: "Galería",
    title: "Las fotos",
    titleEmphasis: "que tenemos",
    lead: "El río, las cabañas, la fauna y las comunidades del Cuyabeno.",
    cta: "Ver la galería completa",
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
    /* Página /el-lodge */
    pageTitle: "Descansar con la selva alrededor.",
    pageLead:
      "Canangueno Lodge, dentro de la Reserva Cuyabeno. Cabañas, comidas y un equipo que te acompaña entre cada salida al río y al bosque.",
    lifeTitle: "Así es la vida en el lodge.",
    peopleTitle: "Personas que conocen el lugar.",
    peopleBody:
      "Guías en español e inglés y un equipo que trabaja junto a las comunidades Siona-Seoqueya.",
    peopleLink: "Conoce nuestra historia",
  },

  /* Página /about */
  about: {
    pageTitle: "Un lugar. Y quienes lo hacen posible.",
    pageLead:
      "Canangueno Lodge y las comunidades Siona-Seoqueya: una relación que forma parte de cada recorrido.",
    behindTitle: "Conoce quién está detrás de tu viaje.",
    operatorLabel: "Operador",
    paceTitle: "La selva marca el ritmo.",
    paceBody:
      "Recorremos la reserva con guías en español e inglés y trabajamos con las comunidades locales. La observación de animales depende de la naturaleza; los guías adaptan cada salida a las condiciones del momento.",
    navLabel: "Nosotros",
    metaTitle: "El equipo detrás de Canangueno",
    metaDescription:
      "Quiénes operan Canangueno Lodge y cómo trabajamos junto a las comunidades Siona-Seoqueya dentro de la Reserva Cuyabeno.",
  },

  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que dicen quienes",
    titleEmphasis: "ya estuvieron aquí",
    source: "en TripAdvisor",
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
    optionsLead:
      "El tramo Quito → Puente de Cuyabeno se coordina y se paga por separado. Estas son las dos formas de hacerlo.",
    fromOtherCities: "Desde otras ciudades",
    transferTitle: "¿Prefieres que lo organicemos nosotros?",
    doubtsTitle: "¿Tienes dudas sobre cómo llegar?",
    doubtsBody:
      "Escríbenos y te ayudamos a coordinar el transporte, el horario y el punto de encuentro.",
    /* Página /como-llegar */
    pageTitle: "Llegar ya es parte del viaje.",
    pageLead:
      "De la carretera al río. Te ayudamos a coordinar cada tramo para que llegues al Puente de Cuyabeno con el plan claro.",
    /**
     * Los cuatro tramos reales del trayecto. Salen del itinerario del lodge,
     * no de un folleto: Quito → Puente de Cuyabeno → canoa → lodge.
     */
    steps: [
      {
        title: "Quito, la noche anterior",
        body: "El viaje por carretera suele tomar unas 8–9 horas. Coordina el punto de salida y el horario con el lodge antes de comprar el transporte.",
      },
      {
        title: "Puente de Cuyabeno",
        body: "Es el punto de encuentro para los tours con base en Canangueno. Allí comienza el trayecto en canoa con el equipo.",
      },
      {
        title: "Tres horas por el río",
        body: "La navegación hasta el lodge toma aproximadamente tres horas. El tiempo cambia según el río y las condiciones del recorrido.",
      },
      {
        title: "Canangueno Lodge",
        body: "Llegada, instalación en la habitación y comienzo del programa de actividades con tu guía.",
      },
    ],
    connectionTitle: "Primero, confirma tu conexión.",
    connectionBody:
      "El transporte terrestre se paga por separado. Si llegas desde El Coca, Lago Agrio u otra ciudad, consulta la conexión y los horarios vigentes antes de comprar tus pasajes.",
    connectionCta: "Coordinar mi llegada",
    connectionWhatsapp:
      "Hola, quisiera coordinar el transporte y punto de encuentro de mi tour a Canangueno Lodge.",
    metaTitle: "Cómo llegar a Canangueno Lodge",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que",
    titleEmphasis: "suelen preguntarnos",
    lead: "Y si falta algo, escríbenos por WhatsApp — respondemos ahí mismo.",
    notFound: "¿No encontraste lo que buscabas?",
    whatsappMessage: "Hola, tengo una pregunta sobre los tours a Cuyabeno.",
    cdcLink: "Salud del viajero: información oficial para Ecuador (CDC)",
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
    messagePlaceholder:
      "Alergias, restricciones alimenticias, tipo de habitación…",
    submit: "Consultar disponibilidad",
    submitting: "Enviando…",
    orWhatsapp: "o escríbenos directo por WhatsApp",
    successTitle: "Recibimos tu consulta",
    successBody:
      "Te respondemos dentro de las próximas 24 horas con la disponibilidad y el detalle del tour.",
    errorTitle: "No se pudo enviar",
    errorBody: "Intenta de nuevo o escríbenos por WhatsApp.",
    policyTitle: "Antes de reservar",
    required: "obligatorio",
    summaryTitle: "Tu consulta",
    estimatedTotal: "Cotización",
    estimatedNote:
      "Te enviamos la tarifa exacta según tus fechas y grupo, sin el transporte Quito ↔ Puente de Cuyabeno.",

    /* Página /reservar */
    pageTitle: "Consulta fechas y disponibilidad.",
    pageLead:
      "Elige el recorrido, la fecha y cuántos viajan. Preparamos el mensaje y lo confirmas con el equipo de Canangueno por WhatsApp o correo, con la tarifa a la medida de tu viaje.",
    preparingForm: "Preparando el formulario…",
    beforeTitle: "Antes de confirmar.",
    beforeBody:
      "Te confirmaremos el tipo de habitación, el transporte y las condiciones de cancelación por escrito. El pago completo asegura la reserva junto con el voucher emitido por el lodge.",
    metaTitle: "Planifica tu viaje a Cuyabeno",

    /* Formulario: secciones y campos */
    formJourneyLegend: "Tu viaje",
    formAboutLegend: "Para conocerte un poco",
    routeLabel: "Recorrido",
    preferredDateLabel: "Fecha deseada",
    yourNameLabel: "Tu nombre",
    notesLabel: "Habitación, niños o necesidades especiales (opcional)",
    notesPlaceholder: "Por ejemplo: habitación doble, dos adultos.",
    noChargeNote:
      "Prepararemos un mensaje para que elijas enviarlo por WhatsApp o correo. No se realiza ningún cobro.",
    prepareCta: "Preparar mi consulta",
    contactLabel: "Tu email o WhatsApp",
    contactHint: "Para responderte si el mensaje no llega a salir.",
    errDate: "Elige la fecha en que quieres empezar el tour.",
    errDatePast: "Esa fecha ya pasó. Elige una a partir de hoy.",
    errPax: "Indica cuántos viajan: entre 1 y 40 personas.",
    errName: "Escribe tu nombre (al menos 2 letras).",
    errContact: "Deja un email o un número con código de país para poder responderte.",
    msgContact: "Contacto: ",
    emailSubject: "Consulta Canangueno",

    /* Mensaje que se arma para WhatsApp o correo */
    msgIntro: "Hola, quisiera consultar este viaje a Canangueno Lodge:",
    msgDate: "Fecha deseada: ",
    msgTravelers: "Viajeros: ",
    msgName: "Nombre: ",
    msgNotes: "Notas: ",
    msgClosing:
      "Por favor confirmen disponibilidad, tipo de habitación, extras y condiciones de pago.",

    /* Resultado */
    readyTitle: "Tu consulta está lista.",
    readyBody:
      "Revisa los datos y envía el mensaje desde la aplicación que prefieras. El lodge todavía no ha recibido esta consulta.",
    openWhatsapp: "Abrir WhatsApp",
    openEmail: "Abrir correo",

    /* Resumen lateral */
    summaryEyebrow: "Tu recorrido en Canangueno",
    subtotalNote:
      "El presupuesto final depende de la composición del grupo, el tipo de habitación y las fechas. El lodge te lo confirma antes de cualquier pago.",
    includedTitle: "Incluido",
    includedBody:
      "Habitación con baño privado, comidas, agua purificada, guía y excursiones.",
    extraTitle: "Aparte",
    extraBody:
      "Transporte terrestre y actividades opcionales como la preparación de casabe o la visita al chamán. Bebidas y propinas.",
    availabilityNote:
      "Cupo sujeto a confirmación. La reserva requiere el pago completo y un voucher escrito del lodge.",
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
    tagline:
      "Tours a la Amazonía ecuatoriana en la Reserva de Producción Faunística Cuyabeno.",
    explore: "Explorar",
    contact: "Contacto",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    builtBy: "Sitio por Thexify",
  },

  meta: {
    homeTitle: "Canangueno Lodge · Tours a Cuyabeno y la Amazonía ecuatoriana",
    homeDescription:
      "Lodge en el corazón de la Reserva Cuyabeno. Tours de 3, 4 y 5 días con guías bilingües, delfines rosados, comunidad Siona y todas las comidas incluidas. Cotiza tu viaje.",
    toursTitle: "Tours a Cuyabeno · 3, 4 y 5 días · Canangueno Lodge",
    toursDescription:
      "Compara nuestros tres recorridos por la Reserva Cuyabeno: itinerarios completos y qué incluye cada uno.",
    lodgeTitle: "El lodge en la Reserva Cuyabeno",
    lodgeDescription:
      "Cabañas con baño privado en el corazón de la Reserva Cuyabeno, para un máximo de 40 huéspedes. Operadora autorizada desde 2006.",
    galleryTitle: "Galería de fotos de Cuyabeno",
    galleryDescription:
      "Fotografías del lodge, el río Cuyabeno, la fauna y las comunidades Siona.",
    journeyTitle: "Cómo llegar a Cuyabeno desde Quito · Canangueno Lodge",
    journeyDescription:
      "Cómo llegar al Puente de Cuyabeno desde Quito en bus o en avión vía El Coca, y de ahí tres horas en canoa hasta el lodge.",
    faqTitle: "Preguntas frecuentes sobre el viaje a Cuyabeno",
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
