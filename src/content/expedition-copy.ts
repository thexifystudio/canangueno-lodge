import type { Locale } from "@/lib/i18n";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  TEXTOS DE LA PORTADA Y LAS SECCIONES DE EXPEDICIÓN
 * ────────────────────────────────────────────────────────────────────────────
 *  Registro: frase corta, concreta, verificable. Nada de "una experiencia que
 *  te transforma" ni "la aventura de tu vida" — eso lo escribe toda la
 *  competencia y no dice nada. Si una línea no se puede comprobar con el
 *  itinerario real o con un dato del lodge, no va.
 *
 *  `en` está tipado contra `es`: falta una clave y no compila.
 */

const es = {
  heroEyebrow: "Reserva Cuyabeno · Amazonía de Ecuador",
  hero: ["La Amazonía,", "a tres horas de canoa."],
  intro:
    "Tours de 3, 4 y 5 días en la Reserva Cuyabeno: canoa, guías bilingües, cabaña y comidas incluidas.",
  explore: "Ver los tours",
  /*
   * LA FRANJA DE DATOS BAJO EL HERO
   * ──────────────────────────────────────────────────────────────────────
   * Antes decía "Guías bilingües · Alojamiento y comidas · Entrada por el
   * río": eso ya lo dice el hero y no convence a nadie, porque lo dice
   * también toda la competencia. Un dato sí convence.
   *
   * ⚠️ LOS TRES SON VERIFICABLES. No se inventa ninguno. (Que la operación
   * está autorizada lo dice la franja de avales, justo debajo.)
   *   · 2006 — año en que Pablo Flores, representante del lodge, empieza en
   *     turismo (página "Nosotros" de la web anterior). Por eso dice
   *     "experiencia en turismo" y no "operando en la reserva".
   *   · 590 112 ha — superficie oficial de la Reserva de Producción de Fauna
   *     Cuyabeno. Es un dato público de la reserva, no una cifra del negocio.
   *   · Siona y Seoqueya — las dos comunidades con las que opera la empresa.
   *
   * FALTAN LOS DOS QUE PIDIÓ EL CLIENTE y que NO se pueden inventar:
   * "+10 000 pasajeros" y "+80 países". En cuanto los confirme, se descomenta
   * la entrada de abajo y se borra alguna de las otras. Publicar una cifra de
   * pasajeros inventada es publicidad engañosa ante un público de la UE.
   */
  stats: [
    { n: "Desde 2006", label: "Experiencia en turismo" },
    { n: "590.112 ha", label: "De reserva alrededor del lodge" },
    { n: "Siona · Seoqueya", label: "Comunidades socias del lodge" },
    // { n: "+10 000", label: "Pasajeros desde 2006" },   ← CONFIRMAR
    // { n: "+80", label: "Países que nos han visitado" }, ← CONFIRMAR
  ],
  statsCta: "Opiniones de viajeros",
  tourTitle: "Nuestros tours.",
  allTours: "Conoce todos nuestros tours",
  inclusions: "Alojamiento, comidas, guía y canoa incluidos.",
  play: "Ver el video",
  close: "Cerrar video",
  stayTitle: "El lodge.",
  stayBody:
    "Cabañas en la selva, habitación con baño privado y mosquitero. Un lugar para descansar, comer y volver al río con el guía.",
  stayCta: "Conocer el lodge",
  shotCabins: "Las cabañas",
  shotRoom: "La habitación",
  shotDining: "La comida",
  shotDeck: "El área común, de noche",
  reviewsTitle: "El viaje, contado por quienes estuvieron.",
  reviewsCta: "Leer opiniones en Tripadvisor",
  journeyTitle: "La carretera termina. El río sigue.",
  journeyBody:
    "Desde Quito hasta el Puente de Cuyabeno, donde empieza el trayecto en canoa hacia el lodge. El transporte terrestre se coordina por separado.",
  journeyCta: "Preparar la llegada",
  steps: ["Quito", "Puente de Cuyabeno", "Canangueno Lodge"],
  stepNotes: [
    "Bus nocturno · transporte aparte",
    "Embarque · aprox. 3 h en canoa",
    "Tu base en la reserva",
  ],
  closingEyebrow: "Reservas y consultas",
  closingTitle: "Cuéntanos cuándo quieres venir.",
  closingBody:
    "Escríbenos con tus fechas y cuántos viajan. El equipo del lodge te responde con la disponibilidad, el tipo de habitación y la tarifa para tu grupo.",
  closingWhatsapp: "Escribir por WhatsApp",
  closingMessage: "Hola, quiero planificar un viaje a Canangueno Lodge.",
  closingEmail: "Escribir un correo",
  closingWhatsappHint: "Chat directo con el lodge",
  closingEmailHint: "Ideal para grupos y cotizaciones",
  closingSubject: "Consulta de viaje — Canangueno Lodge",
};

const en: typeof es = {
  heroEyebrow: "Cuyabeno Reserve · Ecuadorian Amazon",
  hero: ["The Amazon,", "three hours by canoe."],
  intro:
    "3, 4 and 5-day tours in the Cuyabeno Reserve: canoe, bilingual guides, cabin and meals included.",
  explore: "See the tours",
  stats: [
    { n: "Since 2006", label: "Experience in tourism" },
    { n: "590,112 ha", label: "Of reserve around the lodge" },
    { n: "Siona · Seoqueya", label: "Partner communities of the lodge" },
  ],
  statsCta: "Guest reviews",
  tourTitle: "Our tours.",
  allTours: "See all our tours",
  inclusions: "Lodging, meals, guide and canoe included.",
  play: "Watch the film",
  close: "Close video",
  stayTitle: "The lodge.",
  stayBody:
    "Rainforest cabins, a room with a private bathroom and a mosquito net. Somewhere to rest, share a meal and head back out with your guide.",
  stayCta: "See the lodge",
  shotCabins: "The cabins",
  shotRoom: "The room",
  shotDining: "The food",
  shotDeck: "The common area at night",
  reviewsTitle: "The journey, in their words.",
  reviewsCta: "Read reviews on Tripadvisor",
  journeyTitle: "The road ends. The river continues.",
  journeyBody:
    "Travel from Quito to Cuyabeno Bridge, where the canoe journey to the lodge begins. Ground transport is arranged separately.",
  journeyCta: "Plan your arrival",
  steps: ["Quito", "Cuyabeno Bridge", "Canangueno Lodge"],
  stepNotes: [
    "Overnight bus · booked separately",
    "Board your canoe · approx. 3 h",
    "Your base in the reserve",
  ],
  closingEyebrow: "Bookings and enquiries",
  closingTitle: "Tell us when you’d like to come.",
  closingBody:
    "Send us your dates and how many of you are travelling. The lodge team will reply with availability, room type and the rate for your group.",
  closingWhatsapp: "Message us on WhatsApp",
  closingMessage: "Hi, I’d like to plan a trip to Canangueno Lodge.",
  closingEmail: "Send an email",
  closingWhatsappHint: "Chat directly with the lodge",
  closingEmailHint: "Best for groups and quotes",
  closingSubject: "Trip enquiry — Canangueno Lodge",
};

const de: typeof es = {
  heroEyebrow: "Cuyabeno-Reservat · Amazonas Ecuadors",
  hero: ["Der Amazonas,", "drei Stunden im Kanu."],
  intro:
    "Touren mit 3, 4 und 5 Tagen im Cuyabeno-Reservat: Kanu, zweisprachige Guides, Hütte und Mahlzeiten inklusive.",
  explore: "Touren ansehen",
  stats: [
    { n: "Seit 2006", label: "Erfahrung im Tourismus" },
    { n: "590.112 ha", label: "Reservat rund um die Lodge" },
    { n: "Siona · Seoqueya", label: "Partnergemeinschaften der Lodge" },
  ],
  statsCta: "Gästebewertungen",
  tourTitle: "Unsere Touren.",
  allTours: "Alle Touren entdecken",
  inclusions: "Lodge, Mahlzeiten, Guide und Kanu inklusive.",
  play: "Film ansehen",
  close: "Video schließen",
  stayTitle: "Die Lodge.",
  stayBody:
    "Hütten im Regenwald, Zimmer mit eigenem Bad und Moskitonetz. Ein Ort zum Ausruhen, Essen und für die nächste Tour mit deinem Guide.",
  stayCta: "Lodge entdecken",
  shotCabins: "Die Hütten",
  shotRoom: "Das Zimmer",
  shotDining: "Das Essen",
  shotDeck: "Der Gemeinschaftsbereich am Abend",
  reviewsTitle: "Die Reise, erzählt von unseren Gästen.",
  reviewsCta: "Bewertungen auf Tripadvisor lesen",
  journeyTitle: "Die Straße endet. Der Fluss führt weiter.",
  journeyBody:
    "Von Quito bis zur Cuyabeno-Brücke. Dort beginnt die Kanufahrt zur Lodge. Der Landtransport wird separat organisiert.",
  journeyCta: "Anreise planen",
  steps: ["Quito", "Cuyabeno-Brücke", "Canangueno Lodge"],
  stepNotes: [
    "Nachtbus · Transport separat",
    "Einstieg · ca. 3 h im Kanu",
    "Deine Basis im Reservat",
  ],
  closingEyebrow: "Buchungen und Anfragen",
  closingTitle: "Sag uns, wann du kommen möchtest.",
  closingBody:
    "Schreib uns deine Reisedaten und mit wie vielen Personen du reist. Das Team der Lodge antwortet mit Verfügbarkeit, Zimmertyp und dem Preis für deine Gruppe.",
  closingWhatsapp: "Per WhatsApp schreiben",
  closingMessage: "Hallo, ich möchte eine Reise zur Canangueno Lodge planen.",
  closingEmail: "E-Mail schreiben",
  closingWhatsappHint: "Direkter Chat mit der Lodge",
  closingEmailHint: "Ideal für Gruppen und Angebote",
  closingSubject: "Reiseanfrage — Canangueno Lodge",
};

const fr: typeof es = {
  heroEyebrow: "Réserve de Cuyabeno · Amazonie équatorienne",
  hero: ["L’Amazonie,", "à trois heures de pirogue."],
  intro:
    "Circuits de 3, 4 et 5 jours dans la réserve de Cuyabeno : pirogue, guides bilingues, cabane et repas inclus.",
  explore: "Voir les circuits",
  stats: [
    { n: "Depuis 2006", label: "Expérience dans le tourisme" },
    { n: "590 112 ha", label: "De réserve autour du lodge" },
    { n: "Siona · Seoqueya", label: "Communautés partenaires du lodge" },
  ],
  statsCta: "Avis des voyageurs",
  tourTitle: "Nos circuits.",
  allTours: "Découvrir tous nos circuits",
  inclusions: "Hébergement, repas, guide et pirogue inclus.",
  play: "Voir le film",
  close: "Fermer la vidéo",
  stayTitle: "Le lodge.",
  stayBody:
    "Des cabanes dans la forêt, une chambre avec salle de bain privée et moustiquaire. Un lieu pour se reposer, partager un repas et repartir avec son guide.",
  stayCta: "Découvrir le lodge",
  shotCabins: "Les cabanes",
  shotRoom: "La chambre",
  shotDining: "La cuisine",
  shotDeck: "L’espace commun, le soir",
  reviewsTitle: "Le voyage raconté par celles et ceux qui l’ont vécu.",
  reviewsCta: "Lire les avis sur Tripadvisor",
  journeyTitle: "La route s’arrête. La rivière continue.",
  journeyBody:
    "Depuis Quito jusqu’au pont de Cuyabeno, où commence le trajet en pirogue vers le lodge. Le transport terrestre s’organise séparément.",
  journeyCta: "Préparer l’arrivée",
  steps: ["Quito", "Pont de Cuyabeno", "Canangueno Lodge"],
  stepNotes: [
    "Bus de nuit · transport séparé",
    "Embarquement · environ 3 h en pirogue",
    "Votre base dans la réserve",
  ],
  closingEyebrow: "Réservations et demandes",
  closingTitle: "Dites-nous quand vous aimeriez venir.",
  closingBody:
    "Envoyez-nous vos dates et le nombre de voyageurs. L’équipe du lodge vous répond avec les disponibilités, le type de chambre et le tarif pour votre groupe.",
  closingWhatsapp: "Écrire sur WhatsApp",
  closingMessage:
    "Bonjour, je souhaite organiser un séjour à Canangueno Lodge.",
  closingEmail: "Envoyer un e-mail",
  closingWhatsappHint: "Échange direct avec le lodge",
  closingEmailHint: "Idéal pour les groupes et les devis",
  closingSubject: "Demande de voyage — Canangueno Lodge",
};

const COPY: Record<Locale, typeof es> = { es, en, de, fr };

export const expeditionCopy = (locale: Locale) => COPY[locale];
