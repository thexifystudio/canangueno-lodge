/**
 * ────────────────────────────────────────────────────────────────────────────
 *  URLS DE LA WEB VIEJA (WordPress) → PÁGINAS NUEVAS
 * ────────────────────────────────────────────────────────────────────────────
 *  El día que `cananguenolodge.com` apunte a este sitio, Google y todos los
 *  enlaces que andan por ahí (Tripadvisor, Facebook, blogs, agencias) siguen
 *  llevando a las URLs de WordPress. Sin esto, cada uno cae en un 404 y el
 *  sitio pierde el posicionamiento que tiene hoy.
 *
 *  Salen del sitemap real (`/page-sitemap.xml`, septiembre de 2026). Son 301
 *  (permanentes): le dicen a Google que la página se mudó y que pase su
 *  posicionamiento a la nueva.
 *
 *  Los tours de 6 y 8 días ya no se venden: van al listado de tours, que es
 *  lo más cercano a lo que buscaba quien entró por ahí.
 */
type Redirect = { source: string; destination: string; permanent: true };

const map: Record<string, string> = {
  // Español (la web vieja lo servía sin prefijo de idioma)
  "/tour-3-dias": "/es/tours/3-dias",
  "/tour-4-dias": "/es/tours/4-dias",
  "/tour-5-dias": "/es/tours/5-dias",
  "/tours-a-cuyabeno": "/es/tours",
  "/tour-en-circuito-cuyabeno-6-dias": "/es/tours",
  "/camino-del-delfin-rosado-6-dias": "/es/tours",
  "/lo-mejor-de-la-amazonia-ecuatoriana-8-dias-7-noches": "/es/tours",
  "/faqs": "/es/preguntas",
  "/contactos": "/es/reservar",
  "/nosotros": "/es/about",
  "/como-llegar": "/es/como-llegar",
  "/galeria": "/es/galeria",
  "/images-cuyabeno-lake": "/es/galeria",
  "/cuyabeno-lake-2": "/es/galeria",
  "/imagenes-de-flora-y-fauna-de-cuyabeno": "/es/galeria",
  "/imagenes-de-la-laguna-de-cuyabeno": "/es/galeria",
  "/imagenes-del-tour-del-shaman": "/es/galeria",
  "/imagenes-nuestros-clientes-en-cuyabeno": "/es/galeria",
  "/imagenes-de-cabanas-de-canangueno-lodge": "/es/el-lodge",
  "/imagenes-de-nuestro-restaurante": "/es/el-lodge",

  // Inglés
  "/en/3-days-tour": "/en/tours/3-days",
  "/en/4-days-tour": "/en/tours/4-days",
  "/en/5-days-tour": "/en/tours/5-days",
  "/en/our-tours": "/en/tours",
  "/en/jungle-tours-ecuador": "/en/tours",
  "/en/pink-dolphin-trail-adventure-6-days": "/en/tours",
  "/en/canoeing-adventure-cuyabeno-6-days-loop-tour": "/en/tours",
  "/en/the-best-of-the-ecuadorian-amazon-8-days": "/en/tours",
  "/en/shaman-tour": "/en/tours",
  "/en/faqs-en": "/en/preguntas",
  "/en/contact-us": "/en/reservar",
  "/en/about-us": "/en/about",
  "/en/how-to-get": "/en/como-llegar",
  "/en/gallery": "/en/galeria",
  "/en/flora-and-fauna-of-cuyobeno": "/en/galeria",
  "/en/cuyabeno-lake": "/en/galeria",
  "/en/lake-cuyabeno": "/en/galeria",
  "/en/images-of-canangeno-cabins": "/en/el-lodge",
};

export const legacyRedirects: Redirect[] = Object.entries(map).map(
  ([source, destination]) => ({ source, destination, permanent: true }),
);
