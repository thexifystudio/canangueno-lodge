/**
 * ────────────────────────────────────────────────────────────────────────────
 *  DATOS DEL NEGOCIO — fuente única de verdad
 * ────────────────────────────────────────────────────────────────────────────
 *  Todo dato de contacto, legal o de red social se edita SOLO acá.
 *  Origen: cananguenolodge.com (páginas Nosotros / Contactos) y los PDFs de
 *  tarifas e itinerarios que entregó el cliente. Nada inventado.
 */

export const site = {
  name: "Canangueno Lodge",
  /** Cómo se lee la marca en el hero, sin la palabra "Lodge". */
  shortName: "Canangueno",
  domain: "cananguenolodge.com",
  url: "https://www.cananguenolodge.com",

  legal: {
    companyName: "EMOTIONPLANET CIA. LTDA.",
    tradeName: "Canangueno Lodge",
    /** Registro forestal para operar en el Patrimonio de Áreas Naturales del Estado. */
    forestryRegistry: "RNAB20168950448",
    legalRepresentative: "Pablo Flores",
    operatingSince: 2006,
    authorities: ["Ministerio de Turismo del Ecuador", "Ministerio del Ambiente del Ecuador"],
  },

  contact: {
    /**
     * ⚠️ PENDIENTE OPERATIVO: este número es el celular personal de un miembro
     * de la familia dueña. Antes de publicar hay que migrar a una línea
     * dedicada del negocio (ver "Plan de Ejecución - Canangueno", sección
     * WhatsApp Business) y actualizarlo acá una sola vez.
     */
    phone: "+593 99 277 3360",
    phoneAlt: "+593 98 972 6295",
    /** Sólo dígitos, formato wa.me */
    whatsapp: "593992773360",
    email: "info@cananguenolodge.com",
    salesEmail: "sales@cananguenolodge.com",
  },

  office: {
    label: "Oficina Quito",
    street: "Francisco de Caldas OE3-34 y Venezuela",
    city: "Quito",
    country: "Ecuador",
  },

  location: {
    label: "Reserva de Producción de Fauna Cuyabeno",
    region: "Sucumbíos",
    country: "Ecuador",
    /** Punto de encuentro real de todos los tours. */
    meetingPoint: "Puente de Cuyabeno",
    /** Aproximado de la reserva — se ajusta cuando el cliente confirme el punto exacto. */
    lat: -0.0,
    lng: -76.18,
  },

  /**
   * Video oficial del lodge en YouTube (material propio del cliente).
   * Se incrusta con la técnica de "fachada": primero se muestra el póster y
   * el iframe se carga recién al hacer clic. Así el video no penaliza el
   * tiempo de carga ni mete cookies de terceros a todo el que entra.
   */
  video: {
    youtubeId: "Auj1H9UziKM",
    title: "Canangueno Lodge — Cuyabeno Tours Ecuador",
  },

  social: {
    instagram: "https://www.instagram.com/cananguenolodge/",
    facebook: "https://www.facebook.com/cananguenolodge",
    tripadvisor: "https://www.tripadvisor.com/",
  },

  capacity: {
    /** Confirmado por el cliente: 40 pax entre simples, dobles y compartidas. */
    maxGuests: 40,
  },

  /** Reseñas públicas del lodge (TripAdvisor). Ver `src/content/reviews.ts`. */
  rating: {
    value: 5,
    source: "TripAdvisor",
  },
} as const;

/** Arma un enlace de WhatsApp con mensaje pre-escrito. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
