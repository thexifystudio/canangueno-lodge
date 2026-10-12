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
    tours: "Tours",
    lodge: "El lodge",
    gallery: "Galería",
    journey: "Cómo llegar",
    faq: "Preguntas",
    menu: "Menú",
    close: "Cerrar",
    openMenu: "Abrir el menú",
  },

  common: {
    nights: "noches",
    days: "días",
    day: "día",
    whatsapp: "Escríbenos por WhatsApp",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    all: "Todo",
  },

  tours: {
    /* Página /tours */
    pageTitle: "Los tres recorridos.",
    priceNote:
      "La tarifa se cotiza según fechas, tamaño del grupo y tipo de habitación. Escríbenos por WhatsApp o completa el formulario y te enviamos el detalle.",
    metaTitle: "Tours en Cuyabeno: 3, 4 y 5 días",
  },

  /* Página de un tour: /tours/[slug] */
  tourDetail: {
    eyebrow: "Tour en Cuyabeno",
    allTours: "Todos los tours",
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

  lodge: {
    eyebrow: "El lodge",
    /* Página /el-lodge */
    pageTitle: "Descansar con la selva alrededor.",
    pageLead:
      "Canangueno Lodge, dentro de la Reserva Cuyabeno. Cabañas, comidas y un equipo que te acompaña entre cada salida al río y al bosque.",
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
    routeTitle: "La ruta, paso a paso",
    optionsTitle: "Cómo llegar hasta el puente",
    optionsLead:
      "El tramo Quito → Puente de Cuyabeno se coordina y se paga por separado. Estas son las dos formas de hacerlo.",
    fromOtherCities: "Desde otras ciudades",
    transferTitle: "¿Prefieres que lo organicemos nosotros?",
    /* Página /como-llegar */
    pageTitle: "Llegar ya es parte del viaje.",
    pageLead:
      "De la carretera al río. Te ayudamos a coordinar cada tramo para que llegues al Puente de Cuyabeno con el plan claro.",
    connectionCta: "Coordinar mi llegada",
    connectionWhatsapp:
      "Hola, quisiera coordinar el transporte y punto de encuentro de mi tour a Canangueno Lodge.",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que",
    titleEmphasis: "suelen preguntarnos",
    lead: "Y si falta algo, escríbenos por WhatsApp — respondemos ahí mismo.",
    whatsappMessage: "Hola, tengo una pregunta sobre los tours a Cuyabeno.",
    cdcLink: "Salud del viajero: información oficial para Ecuador (CDC)",
  },

  booking: {
    travelersLabel: "Viajeros",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    phoneLabel: "Teléfono / WhatsApp",
    phonePlaceholder: "Con código de país",

    /* Página /reservar */
    pageTitle: "Consulta fechas y disponibilidad.",
    pageLead:
      "Elige el recorrido, la fecha y cuántos viajan. Preparamos el mensaje y lo confirmas con el equipo de Canangueno por WhatsApp o correo, con la tarifa a la medida de tu viaje.",
    metaTitle: "Planifica tu viaje a Cuyabeno",

    /* Formulario: secciones y campos */
    formJourneyLegend: "Tu viaje",
    formAboutLegend: "Tus datos",
    routeLabel: "Recorrido",
    preferredDateLabel: "Fecha deseada",
    yourNameLabel: "Tu nombre",
    notesLabel: "Comentarios adicionales (opcional)",
    notesPlaceholder:
      "Algo más que quieras contarnos: habitación, niños, alergias…",
    noChargeNote:
      "Prepararemos un mensaje para que elijas enviarlo por WhatsApp o correo. No se realiza ningún cobro.",
    prepareCta: "Preparar mi consulta",
    errDate: "Elige la fecha en que quieres empezar el tour.",
    errDatePast: "Esa fecha ya pasó. Elige una a partir de hoy.",
    errPax: "Indica cuántos viajan: entre 1 y 40 personas.",
    errName: "Escribe tu nombre (al menos 2 letras).",
    errEmail: "Escribe un correo válido, por ejemplo nombre@correo.com.",
    errPhone:
      "Escribe tu número con el código de país, por ejemplo +593 99 123 4567.",
    msgEmail: "Correo: ",
    msgPhone: "Teléfono: ",
    emailSubject: "Consulta Canangueno",

    /* Mensaje que se arma para WhatsApp o correo */
    msgIntro: "Hola, quisiera consultar este viaje a Canangueno Lodge:",
    msgDate: "Fecha deseada: ",
    msgTravelers: "Viajeros: ",
    msgName: "Nombre: ",
    msgNotes: "Comentarios: ",
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
      "Cupo sujeto a confirmación. El lodge te envía por escrito las condiciones de pago y de cancelación, y la reserva queda confirmada con su voucher.",
  },

  footer: {
    tagline:
      "Tours a la Amazonía ecuatoriana en la Reserva de Producción Faunística Cuyabeno.",
    explore: "Explorar",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    builtBy: "Sitio por Thexify",
  },

  meta: {
    homeTitle: "Canangueno Lodge · Tours a Cuyabeno y la Amazonía ecuatoriana",
    homeDescription:
      "Lodge en el corazón de la Reserva Cuyabeno. Tours de 3, 4 y 5 días con guías bilingües, delfines rosados, comunidad Siona y todas las comidas incluidas. Cotiza tu viaje.",
    toursDescription:
      "Compara nuestros tres recorridos por la Reserva Cuyabeno: itinerarios completos y qué incluye cada uno.",
    lodgeTitle: "El lodge en la Reserva Cuyabeno",
    lodgeDescription:
      "Cabañas con baño privado, todas las comidas y guías bilingües en el corazón de la Reserva Cuyabeno, en la Amazonía de Ecuador.",
    galleryTitle: "Galería de fotos de Cuyabeno",
    galleryDescription:
      "Fotografías del lodge, el río Cuyabeno, la fauna y las comunidades Siona.",
    journeyTitle: "Cómo llegar a Cuyabeno desde Quito",
    journeyDescription:
      "Cómo llegar al Puente de Cuyabeno desde Quito en bus o en avión vía El Coca, y de ahí tres horas en canoa hasta el lodge.",
    faqTitle: "Preguntas frecuentes sobre el viaje a Cuyabeno",
    faqDescription:
      "Clima, qué llevar, vacunas, dinero en efectivo, cómo reservar y cómo pagar un tour a la Reserva Cuyabeno.",
    bookDescription:
      "Consulta disponibilidad para los tours de 3, 4 y 5 días en la Reserva Cuyabeno.",
  },
};

/**
 * El tipo sale del español. `en.ts` se declara `: Dictionary`, así que
 * cualquier clave que falte o sobre en inglés es un error de compilación.
 */
export type Dictionary = typeof es;
