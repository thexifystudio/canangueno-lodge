/**
 * ────────────────────────────────────────────────────────────────────────────
 *  DATOS DEL NEGOCIO — fuente única de verdad
 * ────────────────────────────────────────────────────────────────────────────
 *  Todo dato de contacto, legal o de red social se edita SOLO acá.
 *  Origen: cananguenolodge.com (páginas Nosotros / Contactos) y los PDFs de
 *  tarifas e itinerarios que entregó el cliente. Nada inventado.
 */

/**
 * ⚠️ EL INTERRUPTOR DE PUBLICACIÓN
 *
 * `false` mientras el sitio vive en la URL provisional de Cloudflare:
 *   · todas las páginas van con `noindex` y robots.txt bloquea todo, para que
 *     Google no indexe la versión de prueba ni compita con la web actual;
 *   · los enlaces absolutos (canonical, sitemap, Open Graph, JSON-LD,
 *     llms.txt) apuntan a la URL provisional, así al compartirla por
 *     WhatsApp se ve la foto de la página.
 *
 * El día que `cananguenolodge.com` apunte a este sitio: `true`, y listo.
 */
const LIVE = false;

export const site = {
  name: "Canangueno Lodge",
  live: LIVE,
  url: LIVE
    ? "https://www.cananguenolodge.com"
    : "https://canangueno.thexifystudio.workers.dev",

  legal: {
    companyName: "EMOTIONPLANET CIA. LTDA.",
  },

  contact: {
    /**
     * ⚠️ PENDIENTE OPERATIVO: este número es el celular personal de un miembro
     * de la familia dueña. Cuando el lodge tenga una línea de WhatsApp
     * Business propia, se cambia acá (los dos campos) y se actualiza solo en
     * todo el sitio.
     */
    phone: "+593 99 277 3360",
    /** Sólo dígitos, formato wa.me */
    whatsapp: "593992773360",
    email: "info@cananguenolodge.com",
  },

  location: {
    region: "Sucumbíos",
    /**
     * Ubicación del lodge, tomada de su ficha de Google Maps ("Canangueno
     * Lodge Cuyabeno"; la de la habitación da el mismo punto).
     */
    lat: -0.1085053,
    lng: -76.0716701,
    /** La ficha del lodge en Google Maps, para el botón "Abrir en Google Maps". */
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Canangueno+Lodge+Cuyabeno",
  },

  /**
   * Video oficial del lodge en YouTube (material propio del cliente). Va de
   * fondo en el hero, sin sonido, y completo en el botón "Ver el video".
   */
  video: {
    youtubeId: "Auj1H9UziKM",
    title: "Canangueno Lodge — Cuyabeno Tours Ecuador",
  },

  social: {
    instagram: "https://www.instagram.com/cananguenolodge/",
    facebook: "https://www.facebook.com/CananguenoLodge",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g1603627-d17623241-Reviews-Tour_Cuyabeno_Canangueno_Lodge-Nueva_Loja_Sucumbios_Province.html",
  },
} as const;

/** Arma un enlace de WhatsApp con mensaje pre-escrito. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
