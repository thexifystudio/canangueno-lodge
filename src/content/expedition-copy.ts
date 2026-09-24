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
  availability: "Planificar mi viaje",
  perPerson: "por persona",
  from: "Desde",
  place: "Reserva Cuyabeno · Ecuador",
  /*
   * LA FRANJA DE DATOS BAJO EL HERO
   * ──────────────────────────────────────────────────────────────────────
   * Antes decía "Guías bilingües · Alojamiento y comidas · Entrada por el
   * río": eso ya lo dice el hero y no convence a nadie, porque lo dice
   * también toda la competencia. Un dato sí convence.
   *
   * ⚠️ LOS CUATRO SON VERIFICABLES. No se inventa ninguno:
   *   · 2006 — año en que Pablo Flores empieza en turismo (ver content/lodge).
   *   · 590 112 ha — superficie oficial de la Reserva de Producción de Fauna
   *     Cuyabeno. Es un dato público de la reserva, no una cifra del negocio.
   *   · Siona y Seoqueya — las dos comunidades con las que opera la empresa.
   *   · El registro forestal está en `config/site.ts`, sale del PDF legal.
   *
   * FALTAN LOS DOS QUE PIDIÓ EL CLIENTE y que NO se pueden inventar:
   * "+10 000 pasajeros" y "+80 países". En cuanto los confirme, se descomenta
   * la entrada de abajo y se borra alguna de las otras. Publicar una cifra de
   * pasajeros inventada es publicidad engañosa ante un público de la UE.
   */
  stats: [
    { n: "Desde 2006", label: "Operando en la Reserva Cuyabeno" },
    { n: "590 112 ha", label: "De reserva alrededor del lodge" },
    { n: "Siona · Seoqueya", label: "Comunidades socias del lodge" },
    { n: "Autorizados", label: "Ministerio de Turismo y del Ambiente" },
    // { n: "+10 000", label: "Pasajeros desde 2006" },   ← CONFIRMAR
    // { n: "+80", label: "Países que nos han visitado" }, ← CONFIRMAR
  ],
  statsCta: "Opiniones de viajeros",
  tourTitle: "Nuestros tours.",
  tourIntro:
    "El mismo lodge y los mismos guías en los tres. Cambia cuántas noches te quedas.",
  days: "días",
  nights: "noches",
  itinerary: "Ver el itinerario",
  compare: "Comparar los tres tours",
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
  shotDeck: "Las hamacas",
  galleryTitle: "El Cuyabeno que vas a recorrer.",
  galleryBody:
    "Río, bosque, comunidad. Cada parte del viaje merece su espacio.",
  galleryCta: "Explorar la galería",
  wildlifeTitle: "La fauna, con guía.",
  wildlifeBody:
    "En canoa y a pie, los guías ayudan a reconocer sonidos, rastros y especies. La fauna vive libre: los avistamientos dependen del clima, el río y un poco de suerte.",
  moments: [
    ["Por el río", "Canoas por el Cuyabeno y atardeceres en la Laguna Grande."],
    [
      "Dentro del bosque",
      "Caminatas diurnas y nocturnas acompañadas por guías bilingües.",
    ],
    [
      "Con la comunidad",
      "Visita a las comunidades Siona y Seoqueya y preparación de casabe con una familia local.",
    ],
  ],
  reviewsTitle: "El viaje, contado por quienes estuvieron.",
  reviewsBody:
    "Experiencias compartidas en Tripadvisor y recogidas en la web de Canangueno.",
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
  closingTitle: "Cuéntanos cuándo quieres venir.",
  closingBody:
    "Escríbenos y el equipo del lodge te responde en persona, con fechas, disponibilidad y la tarifa para tu grupo.",
  closingWhatsapp: "Escribir por WhatsApp",
  closingMessage: "Hola, quiero planificar un viaje a Canangueno Lodge.",
  closingEmail: "Escribir un correo",
};

const en: typeof es = {
  heroEyebrow: "Cuyabeno Reserve · Ecuadorian Amazon",
  hero: ["The Amazon,", "three hours by canoe."],
  intro:
    "3, 4 and 5-day tours in the Cuyabeno Reserve: canoe, bilingual guides, cabin and meals included.",
  explore: "See the tours",
  availability: "Plan my trip",
  perPerson: "per person",
  from: "From",
  place: "Cuyabeno Reserve · Ecuador",
  stats: [
    { n: "Since 2006", label: "Operating in the Cuyabeno Reserve" },
    { n: "590,112 ha", label: "Of reserve around the lodge" },
    { n: "Siona · Seoqueya", label: "Partner communities of the lodge" },
    { n: "Licensed", label: "Ministries of Tourism and Environment" },
  ],
  statsCta: "Guest reviews",
  tourTitle: "Our tours.",
  tourIntro:
    "Same lodge, same guides in all three. What changes is how many nights you stay.",
  days: "days",
  nights: "nights",
  itinerary: "See the itinerary",
  compare: "Compare the three tours",
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
  shotDeck: "The hammocks",
  galleryTitle: "The places along your route.",
  galleryBody:
    "River, forest, community. A closer look at each part of Cuyabeno.",
  galleryCta: "Explore the gallery",
  wildlifeTitle: "Wildlife, with a guide.",
  wildlifeBody:
    "On the water and on foot, guides help you recognise sounds, tracks and species. Wildlife is free to roam: sightings depend on the weather, river conditions and a little luck.",
  moments: [
    [
      "On the river",
      "Canoe journeys along the Cuyabeno and sunsets at Laguna Grande.",
    ],
    [
      "Under the canopy",
      "Daytime hikes and night walks with bilingual guides.",
    ],
    [
      "With the community",
      "Visit the Siona and Seoqueya communities and make cassava bread with a local family.",
    ],
  ],
  reviewsTitle: "The journey, in their words.",
  reviewsBody:
    "Experiences shared on Tripadvisor and featured on Canangueno's website.",
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
  closingTitle: "Tell us when you’d like to come.",
  closingBody:
    "Write to us and the lodge team will reply in person, with dates, availability and a rate for your group.",
  closingWhatsapp: "Message us on WhatsApp",
  closingMessage: "Hi, I’d like to plan a trip to Canangueno Lodge.",
  closingEmail: "Send an email",
};

const de: typeof es = {
  heroEyebrow: "Cuyabeno-Reservat · Amazonas Ecuadors",
  hero: ["Der Amazonas,", "drei Stunden im Kanu."],
  intro:
    "Touren mit 3, 4 und 5 Tagen im Cuyabeno-Reservat: Kanu, zweisprachige Guides, Hütte und Mahlzeiten inklusive.",
  explore: "Touren ansehen",
  availability: "Reise planen",
  perPerson: "pro Person",
  from: "Ab",
  place: "Cuyabeno-Reservat · Ecuador",
  stats: [
    { n: "Seit 2006", label: "Im Cuyabeno-Reservat tätig" },
    { n: "590.112 ha", label: "Reservat rund um die Lodge" },
    { n: "Siona · Seoqueya", label: "Partnergemeinschaften der Lodge" },
    { n: "Lizenziert", label: "Tourismus- und Umweltministerium" },
  ],
  statsCta: "Gästebewertungen",
  tourTitle: "Unsere Touren.",
  tourIntro:
    "Dieselbe Lodge und dieselben Guides bei allen drei Touren. Nur die Zahl der Nächte ändert sich.",
  days: "Tage",
  nights: "Nächte",
  itinerary: "Reiseverlauf ansehen",
  compare: "Die drei Touren vergleichen",
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
  shotDeck: "Die Hängematten",
  galleryTitle: "Das Cuyabeno auf deiner Route.",
  galleryBody:
    "Fluss, Wald, Gemeinschaft. Jeder Teil der Reise verdient seinen eigenen Blick.",
  galleryCta: "Galerie entdecken",
  wildlifeTitle: "Tierwelt, mit Guide.",
  wildlifeBody:
    "Auf dem Wasser und zu Fuß helfen die Guides, Geräusche, Spuren und Arten zu erkennen. Die Tiere leben frei: Sichtungen hängen von Wetter, Fluss und etwas Glück ab.",
  moments: [
    ["Auf dem Fluss", "Kanufahrten auf dem Cuyabeno und Sonnenuntergänge an der Laguna Grande."],
    ["Unter dem Blätterdach", "Wanderungen bei Tag und Nacht mit zweisprachigen Guides."],
    ["Bei der Gemeinschaft", "Besuch der Siona- und Seoqueya-Gemeinschaften und Zubereitung von Maniokbrot mit einer lokalen Familie."],
  ],
  reviewsTitle: "Die Reise, erzählt von unseren Gästen.",
  reviewsBody:
    "Erlebnisse, die auf Tripadvisor geteilt und auf der Website von Canangueno vorgestellt wurden.",
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
  closingTitle: "Sag uns, wann du kommen möchtest.",
  closingBody:
    "Schreib uns, und das Team der Lodge antwortet dir persönlich – mit Terminen, Verfügbarkeit und einem Preis für deine Gruppe.",
  closingWhatsapp: "Per WhatsApp schreiben",
  closingMessage: "Hallo, ich möchte eine Reise zur Canangueno Lodge planen.",
  closingEmail: "E-Mail schreiben",
};

const fr: typeof es = {
  heroEyebrow: "Réserve de Cuyabeno · Amazonie équatorienne",
  hero: ["L’Amazonie,", "à trois heures de pirogue."],
  intro:
    "Circuits de 3, 4 et 5 jours dans la réserve de Cuyabeno : pirogue, guides bilingues, cabane et repas inclus.",
  explore: "Voir les circuits",
  availability: "Préparer mon voyage",
  perPerson: "par personne",
  from: "À partir de",
  place: "Réserve de Cuyabeno · Équateur",
  stats: [
    { n: "Depuis 2006", label: "Présents dans la réserve de Cuyabeno" },
    { n: "590 112 ha", label: "De réserve autour du lodge" },
    { n: "Siona · Seoqueya", label: "Communautés partenaires du lodge" },
    { n: "Agréés", label: "Ministères du Tourisme et de l’Environnement" },
  ],
  statsCta: "Avis des voyageurs",
  tourTitle: "Nos circuits.",
  tourIntro:
    "Le même lodge et les mêmes guides pour les trois. Seul le nombre de nuits change.",
  days: "jours",
  nights: "nuits",
  itinerary: "Voir l’itinéraire",
  compare: "Comparer les trois circuits",
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
  shotDeck: "Les hamacs",
  galleryTitle: "Le Cuyabeno que vous allez parcourir.",
  galleryBody:
    "Rivière, forêt, communauté. Chaque partie du voyage mérite qu’on s’y attarde.",
  galleryCta: "Explorer la galerie",
  wildlifeTitle: "La faune, avec un guide.",
  wildlifeBody:
    "Sur l’eau et à pied, les guides vous aident à reconnaître sons, traces et espèces. Les animaux vivent en liberté : les observations dépendent du climat, de la rivière et d’un peu de chance.",
  moments: [
    ["Sur la rivière", "Balades en pirogue sur le Cuyabeno et couchers de soleil à la Laguna Grande."],
    ["Sous la canopée", "Randonnées de jour et marches nocturnes avec des guides bilingues."],
    ["Avec la communauté", "Visite des communautés Siona et Seoqueya et préparation du pain de manioc avec une famille locale."],
  ],
  reviewsTitle: "Le voyage raconté par celles et ceux qui l’ont vécu.",
  reviewsBody:
    "Des expériences partagées sur Tripadvisor et présentées sur le site de Canangueno.",
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
  closingTitle: "Dites-nous quand vous aimeriez venir.",
  closingBody:
    "Écrivez-nous : l’équipe du lodge vous répond personnellement, avec les dates, les disponibilités et un tarif pour votre groupe.",
  closingWhatsapp: "Écrire sur WhatsApp",
  closingMessage: "Bonjour, je souhaite organiser un séjour à Canangueno Lodge.",
  closingEmail: "Envoyer un e-mail",
};

const COPY: Record<Locale, typeof es> = { es, en, de, fr };

export const expeditionCopy = (locale: Locale) => COPY[locale];
