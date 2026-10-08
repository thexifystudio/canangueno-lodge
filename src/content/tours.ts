import { LOCALES, type Localized } from "@/lib/i18n";
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
  /** Precio de venta al público, por persona, en USD. Lo que se cobra hoy. */
  price: number;
  /**
   * Tarifa de mostrador / precio de lista, por persona, en USD.
   *
   * ⚠️ PENDIENTE DE CONFIRMAR CON EL CLIENTE ⚠️
   * Estos valores son PROVISIONALES. La web los muestra tachados al lado del
   * precio actual ("Antes USD X · Ahora USD Y"). Para que eso sea legal y
   * honesto con un público de la UE, EE. UU. y Reino Unido, el `priceRack`
   * tiene que ser un precio que Canangueno realmente haya cobrado o publicado
   * (tarifa de agencia, temporada alta, precio de mostrador), NO un número
   * inflado para simular descuento.
   *
   * Si el cliente NO tiene una tarifa de lista real: borrar este campo del
   * tour y la web vuelve a mostrar sólo "Desde USD Y", sin tachado. El resto
   * del sitio no se toca.
   */
  priceRack?: number;
  name: Localized;
  tagline: Localized;
  summary: Localized;
  /** Bajada de la página del tour, debajo de "3 días / 2 noches". */
  intro: Localized;
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
    slug: { es: "3-dias", en: "3-days", de: "3-tage", fr: "3-jours" },
    order: 1,
    days: 3,
    nights: 2,
    price: 280,
    priceRack: 330, // PROVISIONAL — ver nota en el type Tour
    mediaId: "tour-card-3",
    name: {
      es: "Tres días en Cuyabeno",
      en: "Three days in Cuyabeno",
      de: "Drei Tage in Cuyabeno",
      fr: "Trois jours à Cuyabeno",
    },
    tagline: {
      es: "La Amazonía esencial",
      en: "The essential Amazon",
      de: "Der Amazonas in seiner Essenz",
      fr: "L’Amazonie essentielle",
    },
    summary: {
      es: "El recorrido más corto sin renunciar a lo importante: la Laguna Grande, los caimanes de noche y un día completo con las comunidades Siona y Seoqueya.",
      en: "The shortest route without giving up what matters: Laguna Grande, caimans after dark and a full day with the Siona and Seoqueya communities.",
      de: "Die kürzeste Route, ohne auf das Wesentliche zu verzichten: die Laguna Grande, Kaimane bei Nacht und ein ganzer Tag mit den Gemeinschaften der Siona und Seoqueya.",
      fr: "Le circuit le plus court sans renoncer à l’essentiel : la Laguna Grande, les caïmans à la nuit tombée et une journée entière avec les communautés Siona et Seoqueya.",
    },
    intro: {
      es: "Entras a la reserva en canoa, nadas en la Laguna Grande al caer la tarde y pasas un día con las comunidades Siona y Seoqueya. Al tercer día, el río al amanecer y el regreso.",
      en: "You enter the reserve by canoe, swim in Laguna Grande as the afternoon fades and spend a day with the Siona and Seoqueya communities. On day three, the river at sunrise and the journey home.",
      de: "Du erreichst das Reservat im Kanu, schwimmst am späten Nachmittag in der Laguna Grande und verbringst einen Tag bei den Gemeinschaften der Siona und Seoqueya. Am dritten Tag: der Fluss bei Sonnenaufgang und die Rückreise.",
      fr: "Vous entrez dans la réserve en pirogue, vous nagez dans la Laguna Grande en fin d’après-midi et passez une journée avec les communautés Siona et Seoqueya. Le troisième jour : le fleuve au lever du soleil, puis le retour.",
    },
    bestFor: {
      es: "Familias con niños, parejas y grupos de amigos con pocos días",
      en: "Families with children, couples and groups of friends short on time",
      de: "Familien mit Kindern, Paare und Freundesgruppen mit wenig Zeit",
      fr: "Familles avec enfants, couples et groupes d’amis disposant de peu de temps",
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
      de: [
        "Laguna Grande und ein Bad bei Sonnenuntergang",
        "Kaimane und eine Nachtwanderung",
        "Die Gemeinschaften Siona Taraveya und Seoqueya",
        "Sonnenaufgang auf dem Fluss mit rosa Flussdelfinen",
      ],
      fr: [
        "La Laguna Grande et une baignade au coucher du soleil",
        "Caïmans et marche nocturne",
        "Les communautés Siona Taraveya et Seoqueya",
        "Lever du soleil sur le fleuve avec les dauphins roses",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "day-3-1",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
          de: "Quito · Cuyabeno-Brücke · Lodge",
          fr: "Quito · Pont de Cuyabeno · Lodge",
        },
        body: {
          es: "Llegas al Puente de Cuyabeno después del viaje en bus nocturno desde Quito (unas 8–9 horas, la noche anterior). Nuestro personal te recibe y un responsable de la Reserva de Producción de Fauna Cuyabeno da las indicaciones generales. Desde ahí, tres horas de canoa por el río Cuyabeno: nuestros guías bilingües, certificados por el Ministerio del Ambiente, van explicando la flora y la fauna del sector y, con algo de suerte, aparecen papagayos, tucanes y el martín pescador. Check-in en el lodge y almuerzo. Después de un rato de descanso subimos río arriba hasta la Laguna Grande para nadar y observar caimanes. Cena y caminata nocturna para cerrar el día.",
          en: "You reach the Cuyabeno Bridge after the overnight bus from Quito (about 8–9 hours, the night before). Our staff welcomes you and an officer from the Cuyabeno Wildlife Reserve gives the general briefing. From there, three hours by canoe along the Cuyabeno river: our bilingual guides, certified by the Ministry of the Environment, explain the flora and fauna along the way — with a bit of luck, macaws, toucans and kingfishers appear. Check-in at the lodge and lunch. After some rest we head upriver to Laguna Grande to swim and watch caimans. Dinner and a night walk to close the day.",
          de: "Du erreichst die Cuyabeno-Brücke nach der Nachtbusfahrt ab Quito (etwa 8–9 Stunden, in der Nacht zuvor). Unser Team empfängt dich und ein Mitarbeiter des Cuyabeno-Wildreservats gibt die allgemeine Einweisung. Von dort geht es drei Stunden mit dem Kanu über den Río Cuyabeno: Unsere zweisprachigen Guides, zertifiziert vom Umweltministerium, erklären unterwegs die Pflanzen- und Tierwelt — mit etwas Glück zeigen sich Aras, Tukane und Eisvögel. Check-in in der Lodge und Mittagessen. Nach einer Pause fahren wir flussaufwärts zur Laguna Grande, um zu schwimmen und Kaimane zu beobachten. Abendessen und eine Nachtwanderung zum Abschluss.",
          fr: "Vous arrivez au pont de Cuyabeno après le bus de nuit depuis Quito (environ 8 à 9 heures, la veille au soir). Notre équipe vous accueille et un agent de la réserve de faune de Cuyabeno donne les consignes générales. De là, trois heures de pirogue sur le río Cuyabeno : nos guides bilingues, certifiés par le ministère de l’Environnement, expliquent la flore et la faune en chemin — avec un peu de chance, des aras, des toucans et des martins-pêcheurs apparaissent. Arrivée au lodge et déjeuner. Après un temps de repos, nous remontons le fleuve jusqu’à la Laguna Grande pour nager et observer les caïmans. Dîner et marche nocturne pour clore la journée.",
        },
      },
      {
        n: 2,
        mediaId: "day-3-2",
        title: {
          es: "Comunidad nativa",
          en: "Native community",
          de: "Indigene Gemeinschaft",
          fr: "Communauté native",
        },
        body: {
          es: "Después del desayuno salimos en canoa a remo hasta un sendero de una hora y media que lleva a la comunidad Siona Taraveya de Tarapuy, a orillas del río Cuyabeno. Los guías explican su cultura y sus tradiciones. Seguimos hacia la comunidad de Seoqueya, donde una familia hace la demostración de casabe —el pan de yuca— y se encuentran artesanías hechas en el lugar: pulseras, collares, shigras y cerámica. Por la tarde volvemos al lodge en canoa a remo, escuchando aves, monos y buscando delfines rosados. Cena, y el guía cierra con una charla repasando todo lo visto.",
          en: "After breakfast we set out by paddle canoe to a trail that takes about an hour and a half to the Siona Taraveya community of Tarapuy, on the bank of the Cuyabeno river. The guides explain their culture and traditions. We continue to the Seoqueya community, where a family demonstrates how casabe — cassava bread — is made, alongside locally made crafts: bracelets, necklaces, shigras and ceramics. In the afternoon we paddle back to the lodge, listening for birds and monkeys and watching for pink dolphins. Dinner, and the guide closes with a talk recapping everything we saw.",
          de: "Nach dem Frühstück fahren wir mit dem Paddelkanu los, danach folgt ein etwa anderthalbstündiger Pfad zur Siona-Taraveya-Gemeinschaft von Tarapuy am Ufer des Río Cuyabeno. Die Guides erklären ihre Kultur und ihre Traditionen. Weiter geht es zur Gemeinschaft Seoqueya, wo eine Familie zeigt, wie Casabe — das Yuca-Brot — hergestellt wird; dort gibt es auch vor Ort gefertigtes Kunsthandwerk: Armbänder, Ketten, Shigras und Keramik. Am Nachmittag paddeln wir zurück zur Lodge und achten dabei auf Vögel, Affen und rosa Flussdelfine. Abendessen, und der Guide schließt den Tag mit einem Rückblick auf alles Gesehene ab.",
          fr: "Après le petit-déjeuner, nous partons en pirogue à rame, puis un sentier d’environ une heure et demie mène à la communauté Siona Taraveya de Tarapuy, au bord du río Cuyabeno. Les guides expliquent leur culture et leurs traditions. Nous continuons vers la communauté Seoqueya, où une famille fait la démonstration du casabe — le pain de manioc — accompagnée d’artisanat fabriqué sur place : bracelets, colliers, shigras et céramiques. L’après-midi, retour au lodge à la rame, à l’écoute des oiseaux et des singes et à l’affût des dauphins roses. Dîner, puis le guide conclut par un récapitulatif de tout ce que nous avons vu.",
        },
      },
      {
        n: 3,
        mediaId: "day-3-3",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
          de: "Sonnenaufgang auf dem Fluss · Rückreise",
          fr: "Lever du soleil sur le fleuve · retour",
        },
        body: {
          es: "A las seis de la mañana salimos a observar animales por el río Cuyabeno mientras amanece: delfines rosados, tucanes, garzas, monos, mariposas y serpientes arbóreas. Volvemos al lodge para el desayuno. Salida a las 09:30 hacia el puente, donde tomás el bus de regreso.",
          en: "At six in the morning we head out to watch wildlife along the Cuyabeno river as the sun comes up: pink dolphins, toucans, herons, monkeys, butterflies and tree snakes. We return to the lodge for breakfast. Departure at 09:30 to the bridge, where you take the bus back.",
          de: "Um sechs Uhr morgens fahren wir hinaus, um bei Sonnenaufgang Tiere am Río Cuyabeno zu beobachten: rosa Flussdelfine, Tukane, Reiher, Affen, Schmetterlinge und Baumschlangen. Zurück in der Lodge gibt es Frühstück. Abfahrt um 09:30 Uhr zur Brücke, wo du den Bus zurück nimmst.",
          fr: "À six heures du matin, nous partons observer les animaux le long du río Cuyabeno au lever du soleil : dauphins roses, toucans, hérons, singes, papillons et serpents arboricoles. Retour au lodge pour le petit-déjeuner. Départ à 09h30 vers le pont, où vous reprenez le bus.",
        },
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════ 4 DÍAS ═══ */
  {
    id: "4-dias",
    slug: { es: "4-dias", en: "4-days", de: "4-tage", fr: "4-jours" },
    order: 2,
    days: 4,
    nights: 3,
    price: 350,
    priceRack: 410, // PROVISIONAL — ver nota en el type Tour
    mediaId: "tour-card-4",
    featured: true,
    name: {
      es: "Cuatro días en Cuyabeno",
      en: "Four days in Cuyabeno",
      de: "Vier Tage in Cuyabeno",
      fr: "Quatre jours à Cuyabeno",
    },
    tagline: {
      es: "La experiencia completa",
      en: "The complete experience",
      de: "Das vollständige Erlebnis",
      fr: "L’expérience complète",
    },
    summary: {
      es: "El recorrido que más recomendamos. Todo lo del programa de tres días más un día entero dedicado al bosque primario: los árboles más grandes de la Amazonía, baño en el río y una segunda caminata nocturna.",
      en: "The route we recommend most. Everything in the three-day programme plus a full day devoted to the primary forest: the largest trees in the Amazon, a swim in the river and a second night walk.",
      de: "Die Route, die wir am häufigsten empfehlen. Alles aus dem Drei-Tage-Programm und dazu ein ganzer Tag im Primärwald: die größten Bäume des Amazonas, ein Bad im Fluss und eine zweite Nachtwanderung.",
      fr: "Le circuit que nous recommandons le plus. Tout le programme de trois jours, plus une journée entière consacrée à la forêt primaire : les plus grands arbres d’Amazonie, une baignade dans le fleuve et une deuxième marche nocturne.",
    },
    intro: {
      es: "Tres noches en el lodge con tiempo para todo: el atardecer en la Laguna Grande, un día con las comunidades Siona y Seoqueya y otro entero en el bosque primario, entre ceibas gigantes, con baño en el río y caminata nocturna.",
      en: "Three nights at the lodge with time for everything: sunset at Laguna Grande, a day with the Siona and Seoqueya communities and another in the primary forest among giant ceibas, with a swim in the river and a night walk.",
      de: "Drei Nächte in der Lodge mit Zeit für alles: Sonnenuntergang an der Laguna Grande, ein Tag bei den Gemeinschaften der Siona und Seoqueya und ein weiterer im Primärwald zwischen riesigen Ceiba-Bäumen, mit einem Bad im Fluss und einer Nachtwanderung.",
      fr: "Trois nuits au lodge, le temps de tout vivre : le coucher du soleil sur la Laguna Grande, une journée avec les communautés Siona et Seoqueya et une autre en forêt primaire parmi les fromagers géants, avec une baignade dans le fleuve et une marche de nuit.",
    },
    bestFor: {
      es: "Parejas y familias que quieren ver la mayor cantidad de vida salvaje en pocos días",
      en: "Couples and families who want to see the most wildlife in the fewest days",
      de: "Paare und Familien, die in wenigen Tagen möglichst viele Tiere sehen möchten",
      fr: "Couples et familles qui veulent voir un maximum d’animaux en peu de jours",
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
      de: [
        "Sonnenuntergang über der Laguna Grande",
        "Ein ganzer Tag mit den Gemeinschaften Siona und Seoqueya",
        "Eine zweistündige Wanderung durch den Primärwald",
        "Zwei Nachtwanderungen und ein Bad im Fluss",
      ],
      fr: [
        "Coucher de soleil sur la Laguna Grande",
        "Une journée entière avec les communautés Siona et Seoqueya",
        "Une randonnée de deux heures en forêt primaire",
        "Deux marches nocturnes et une baignade dans le fleuve",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "day-4-1",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
          de: "Quito · Cuyabeno-Brücke · Lodge",
          fr: "Quito · Pont de Cuyabeno · Lodge",
        },
        body: {
          es: "Viaje en bus desde Quito la noche anterior, unas 8–9 horas hasta el Puente de Cuyabeno. Desde ahí, tres horas de canoa por el río: nuestros guías bilingües, certificados por el Ministerio del Ambiente, explican la flora y la fauna del sector. Llegada a Canangueno Lodge para el almuerzo y un rato de descanso. Por la tarde subimos río arriba hasta la Laguna Grande para ver el atardecer, y de vuelta buscamos caimanes en la orilla. Cena en el lodge.",
          en: "Overnight bus from Quito the night before, about 8–9 hours to the Cuyabeno Bridge. From there, three hours by canoe along the river: our bilingual guides, certified by the Ministry of the Environment, explain the area's flora and fauna. Arrival at Canangueno Lodge for lunch and some rest. In the afternoon we head upriver to Laguna Grande for the sunset, and on the way back we look for caimans along the bank. Dinner at the lodge.",
          de: "Nachtbus ab Quito am Vorabend, etwa 8–9 Stunden bis zur Cuyabeno-Brücke. Von dort drei Stunden mit dem Kanu über den Fluss: Unsere zweisprachigen Guides, zertifiziert vom Umweltministerium, erklären die Pflanzen- und Tierwelt der Region. Ankunft in der Canangueno Lodge zum Mittagessen und etwas Ruhe. Am Nachmittag fahren wir flussaufwärts zur Laguna Grande zum Sonnenuntergang, auf dem Rückweg suchen wir am Ufer nach Kaimanen. Abendessen in der Lodge.",
          fr: "Bus de nuit depuis Quito la veille, environ 8 à 9 heures jusqu’au pont de Cuyabeno. De là, trois heures de pirogue sur le fleuve : nos guides bilingues, certifiés par le ministère de l’Environnement, expliquent la flore et la faune de la région. Arrivée au Canangueno Lodge pour le déjeuner et un temps de repos. L’après-midi, nous remontons jusqu’à la Laguna Grande pour le coucher du soleil, et au retour nous cherchons les caïmans le long de la rive. Dîner au lodge.",
        },
      },
      {
        n: 2,
        mediaId: "day-4-2",
        title: {
          es: "Comunidad nativa · día completo",
          en: "Native community · full day",
          de: "Indigene Gemeinschaft · ganzer Tag",
          fr: "Communauté native · journée entière",
        },
        body: {
          es: "Después del desayuno, canoa a remo hasta un sendero de hora y media que lleva a la comunidad Siona Taraveya de Tarapuy, a orillas del río Cuyabeno, donde los guías explican su cultura y tradiciones. Después seguimos a la comunidad de Seoqueya: con una familia hacemos la demostración de casabe, el pan de yuca, y encontramos artesanías del lugar —pulseras, collares, shigras y cerámica—. Por la tarde volvemos al lodge en canoa a remo, con el canto de las aves, monos y delfines rosados. Cena.",
          en: "After breakfast, a paddle canoe ride to a trail that takes about an hour and a half to the Siona Taraveya community of Tarapuy, on the bank of the Cuyabeno river, where the guides explain their culture and traditions. We then continue to the Seoqueya community: with a local family we take part in the casabe demonstration — cassava bread — and find handicrafts made there: bracelets, necklaces, shigras and ceramics. In the afternoon we paddle back to the lodge, with birdsong, monkeys and pink dolphins along the way. Dinner.",
          de: "Nach dem Frühstück geht es mit dem Paddelkanu los, danach ein etwa anderthalbstündiger Pfad zur Siona-Taraveya-Gemeinschaft von Tarapuy am Ufer des Río Cuyabeno, wo die Guides Kultur und Traditionen erklären. Anschließend geht es weiter zur Gemeinschaft Seoqueya: Mit einer ortsansässigen Familie nehmen wir an der Casabe-Demonstration teil — dem Yuca-Brot — und finden dort gefertigtes Kunsthandwerk: Armbänder, Ketten, Shigras und Keramik. Am Nachmittag paddeln wir zurück zur Lodge, begleitet von Vogelstimmen, Affen und rosa Flussdelfinen. Abendessen.",
          fr: "Après le petit-déjeuner, sortie en pirogue à rame puis un sentier d’environ une heure et demie jusqu’à la communauté Siona Taraveya de Tarapuy, au bord du río Cuyabeno, où les guides expliquent leur culture et leurs traditions. Nous poursuivons vers la communauté Seoqueya : avec une famille locale, nous participons à la démonstration du casabe — le pain de manioc — et découvrons l’artisanat fabriqué sur place : bracelets, colliers, shigras et céramiques. L’après-midi, retour au lodge à la rame, au son des oiseaux, des singes et avec des dauphins roses en chemin. Dîner.",
        },
      },
      {
        n: 3,
        mediaId: "day-4-3",
        title: {
          es: "Contacto directo con la naturaleza",
          en: "Face to face with the forest",
          de: "Auge in Auge mit dem Regenwald",
          fr: "Face à face avec la forêt",
        },
        body: {
          es: "Después del desayuno salimos en canoa a remo río arriba. El guía va explicando la diversidad de fauna y flora mientras aparecen mariposas, loros, papagayos y monos, en un ambiente de calma total. Volvemos al lodge para el almuerzo. Por la tarde, caminata de dos horas en el bosque primario: ranas, sapos, hormigas, arañas e insectos, y una variedad enorme de flora —orquídeas, heliconias, ceibas (el árbol más grande de la Amazonía), hongos y morete—. De regreso, baño en el río, cena y caminata nocturna. El guía cierra con una charla repasando todo lo observado.",
          en: "After breakfast we paddle upriver. The guide explains the diversity of wildlife and plant life as butterflies, parrots, macaws and monkeys appear, in complete calm. We return to the lodge for lunch. In the afternoon, a two-hour hike through the primary forest: frogs, toads, ants, spiders and insects, plus an enormous variety of plant life — orchids, heliconias, ceibas (the largest tree in the Amazon), fungi and morete palms. On the way back, a swim in the river, dinner and a night walk. The guide closes with a talk recapping everything observed.",
          de: "Nach dem Frühstück paddeln wir flussaufwärts. Der Guide erklärt die Vielfalt der Tier- und Pflanzenwelt, während in aller Ruhe Schmetterlinge, Papageien, Aras und Affen auftauchen. Zum Mittagessen kehren wir in die Lodge zurück. Am Nachmittag folgt eine zweistündige Wanderung durch den Primärwald: Frösche, Kröten, Ameisen, Spinnen und Insekten sowie eine enorme Pflanzenvielfalt — Orchideen, Helikonien, Ceibas (der größte Baum des Amazonas), Pilze und Morete-Palmen. Auf dem Rückweg ein Bad im Fluss, Abendessen und eine Nachtwanderung. Der Guide schließt mit einem Rückblick auf alles Beobachtete ab.",
          fr: "Après le petit-déjeuner, nous remontons le fleuve à la rame. Le guide explique la diversité de la faune et de la flore tandis qu’apparaissent, dans le calme le plus complet, papillons, perroquets, aras et singes. Retour au lodge pour le déjeuner. L’après-midi, une randonnée de deux heures dans la forêt primaire : grenouilles, crapauds, fourmis, araignées et insectes, ainsi qu’une énorme variété végétale — orchidées, héliconias, ceibas (le plus grand arbre d’Amazonie), champignons et palmiers morete. Au retour, baignade dans le fleuve, dîner et marche nocturne. Le guide conclut par un récapitulatif de tout ce qui a été observé.",
        },
      },
      {
        n: 4,
        mediaId: "day-4-4",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
          de: "Sonnenaufgang auf dem Fluss · Rückreise",
          fr: "Lever du soleil sur le fleuve · retour",
        },
        body: {
          es: "Observación de animales por el río Cuyabeno a las seis de la mañana y regreso al lodge para el desayuno. Salida a las 09:30 hacia el puente, para tomar el bus de vuelta.",
          en: "Wildlife watching along the Cuyabeno river at six in the morning, then back to the lodge for breakfast. Departure at 09:30 to the bridge to catch the bus back.",
          de: "Tierbeobachtung am Río Cuyabeno um sechs Uhr morgens, danach zurück zur Lodge zum Frühstück. Abfahrt um 09:30 Uhr zur Brücke, um den Bus zurück zu nehmen.",
          fr: "Observation des animaux le long du río Cuyabeno à six heures du matin, puis retour au lodge pour le petit-déjeuner. Départ à 09h30 vers le pont pour reprendre le bus.",
        },
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════ 5 DÍAS ═══ */
  {
    id: "5-dias",
    slug: { es: "5-dias", en: "5-days", de: "5-tage", fr: "5-jours" },
    order: 3,
    days: 5,
    nights: 4,
    price: 440,
    priceRack: 520, // PROVISIONAL — ver nota en el type Tour
    mediaId: "tour-card-5",
    name: {
      es: "Cinco días en Cuyabeno",
      en: "Five days in Cuyabeno",
      de: "Fünf Tage in Cuyabeno",
      fr: "Cinq jours à Cuyabeno",
    },
    tagline: {
      es: "Selva, laguna y cultura",
      en: "Forest, lagoon and culture",
      de: "Wald, Lagune und Kultur",
      fr: "Forêt, lagune et culture",
    },
    summary: {
      es: "El programa más completo. Suma la Casa del Chamán y un día entero en la Laguna Grande buscando anacondas entre los macrolobios, con los guías explicando los ecosistemas lacustres y el uso de plantas medicinales.",
      en: "The most complete programme. It adds the Shaman's House and a full day at Laguna Grande searching for anacondas among the macrolobium trees, with the guides explaining the lake ecosystems and the use of medicinal plants.",
      de: "Das vollständigste Programm. Es kommen das Haus des Schamanen und ein ganzer Tag an der Laguna Grande hinzu, auf der Suche nach Anakondas zwischen den Macrolobium-Bäumen, während die Guides die Ökosysteme des Sees und die Verwendung von Heilpflanzen erklären.",
      fr: "Le programme le plus complet. Il ajoute la Maison du Chaman et une journée entière à la Laguna Grande, à la recherche d’anacondas parmi les macrolobiums, pendant que les guides expliquent les écosystèmes du lac et l’usage des plantes médicinales.",
    },
    intro: {
      es: "Cuatro noches para recorrer Cuyabeno sin apuro: las comunidades Siona y Seoqueya, un día entero en la Laguna Grande buscando anacondas entre los macrolobios y otro caminando el bosque primario.",
      en: "Four nights to explore Cuyabeno unhurried: the Siona and Seoqueya communities, a full day at Laguna Grande looking for anacondas among the macrolobium trees, and another walking the primary forest.",
      de: "Vier Nächte, um Cuyabeno ohne Eile zu erleben: die Gemeinschaften der Siona und Seoqueya, ein ganzer Tag an der Laguna Grande auf der Suche nach Anakondas zwischen den Macrolobium-Bäumen und ein weiterer zu Fuß im Primärwald.",
      fr: "Quatre nuits pour parcourir Cuyabeno sans se presser : les communautés Siona et Seoqueya, une journée entière sur la Laguna Grande à la recherche d’anacondas parmi les macrolobiums, et une autre à pied en forêt primaire.",
    },
    bestFor: {
      es: "Viajeros que quieren entrar de verdad en la selva y tener tiempo sin apuro",
      en: "Travellers who want to go deep into the forest with time to spare",
      de: "Reisende, die tief in den Regenwald eintauchen und sich Zeit lassen möchten",
      fr: "Voyageurs qui souhaitent s’enfoncer dans la forêt sans être pressés",
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
      de: [
        "Das Haus des Schamanen in der Siona-Gemeinschaft",
        "Ein ganzer Tag an der Laguna Grande",
        "Auf der Suche nach Anakondas zwischen den Macrolobium-Bäumen",
        "Heilpflanzen und Ökosysteme des Sees",
      ],
      fr: [
        "La Maison du Chaman dans la communauté Siona",
        "Une journée entière à la Laguna Grande",
        "À la recherche d’anacondas parmi les macrolobiums",
        "Plantes médicinales et écosystèmes du lac",
      ],
    },
    itinerary: [
      {
        n: 1,
        mediaId: "day-5-1",
        title: {
          es: "Quito · Puente de Cuyabeno · Lodge",
          en: "Quito · Cuyabeno Bridge · Lodge",
          de: "Quito · Cuyabeno-Brücke · Lodge",
          fr: "Quito · Pont de Cuyabeno · Lodge",
        },
        body: {
          es: "Viaje en bus desde Quito la noche anterior, unas 8–9 horas hasta el Puente de Cuyabeno. Después, tres horas de canoa por el río con los guías bilingües explicando la flora y la fauna. Llegada al lodge para el almuerzo y descanso. Por la tarde, río arriba hasta la Laguna Grande para ver el atardecer; de vuelta, observación de caimanes. Cena y caminata nocturna.",
          en: "Overnight bus from Quito the night before, about 8–9 hours to the Cuyabeno Bridge. Then three hours by canoe along the river with the bilingual guides explaining the flora and fauna. Arrival at the lodge for lunch and rest. In the afternoon, upriver to Laguna Grande for the sunset; on the way back, caiman watching. Dinner and a night walk.",
          de: "Nachtbus ab Quito am Vorabend, etwa 8–9 Stunden bis zur Cuyabeno-Brücke. Danach drei Stunden mit dem Kanu über den Fluss, während die zweisprachigen Guides die Pflanzen- und Tierwelt erklären. Ankunft in der Lodge zum Mittagessen und zur Ruhe. Am Nachmittag flussaufwärts zur Laguna Grande zum Sonnenuntergang; auf dem Rückweg Kaimanbeobachtung. Abendessen und Nachtwanderung.",
          fr: "Bus de nuit depuis Quito la veille, environ 8 à 9 heures jusqu’au pont de Cuyabeno. Ensuite trois heures de pirogue sur le fleuve, les guides bilingues expliquant la flore et la faune. Arrivée au lodge pour le déjeuner et le repos. L’après-midi, remontée jusqu’à la Laguna Grande pour le coucher du soleil ; au retour, observation des caïmans. Dîner et marche nocturne.",
        },
      },
      {
        n: 2,
        mediaId: "day-5-2",
        title: {
          es: "Comunidad nativa · Casa del Chamán",
          en: "Native community · the Shaman's House",
          de: "Indigene Gemeinschaft · das Haus des Schamanen",
          fr: "Communauté native · la Maison du Chaman",
        },
        body: {
          es: "Después del desayuno, canoa a remo y un sendero de hora y media hasta la comunidad Siona Taraveya de Tarapuy, donde los guías explican la cultura y las tradiciones, incluida la visita al chamán. Seguimos a la comunidad de Seoqueya para la demostración de casabe con una familia y las artesanías del lugar. Por la tarde, regreso al lodge en canoa a remo escuchando aves y monos, con delfines rosados en el camino. Cena.",
          en: "After breakfast, a paddle canoe ride and an hour-and-a-half trail to the Siona Taraveya community of Tarapuy, where the guides explain the culture and traditions, including the visit to the shaman. We continue to the Seoqueya community for the casabe demonstration with a local family and the handicrafts made there. In the afternoon, we paddle back to the lodge listening for birds and monkeys, with pink dolphins along the way. Dinner.",
          de: "Nach dem Frühstück eine Fahrt im Paddelkanu und ein anderthalbstündiger Pfad zur Siona-Taraveya-Gemeinschaft von Tarapuy, wo die Guides Kultur und Traditionen erklären, einschließlich des Besuchs beim Schamanen. Weiter geht es zur Gemeinschaft Seoqueya zur Casabe-Demonstration mit einer ortsansässigen Familie und zum dort gefertigten Kunsthandwerk. Am Nachmittag paddeln wir zurück zur Lodge und achten auf Vögel und Affen, mit rosa Flussdelfinen unterwegs. Abendessen.",
          fr: "Après le petit-déjeuner, sortie en pirogue à rame et sentier d’une heure et demie jusqu’à la communauté Siona Taraveya de Tarapuy, où les guides expliquent la culture et les traditions, y compris la visite au chaman. Nous continuons vers la communauté Seoqueya pour la démonstration du casabe avec une famille locale et l’artisanat fabriqué sur place. L’après-midi, retour au lodge à la rame, à l’écoute des oiseaux et des singes, avec des dauphins roses en chemin. Dîner.",
        },
      },
      {
        n: 3,
        mediaId: "day-5-3",
        title: {
          es: "Laguna Grande",
          en: "Laguna Grande",
          de: "Laguna Grande",
          fr: "Laguna Grande",
        },
        body: {
          es: "Después del desayuno navegamos río arriba por el Cuyabeno con la oportunidad de ver delfines rosados, gran variedad de aves y monos, hasta llegar a la Laguna Grande. Damos un recorrido alrededor de los macrolobios buscando anacondas y, después del almuerzo, caminamos por el bosque primario. Los guías explican los ecosistemas lacustres, la flora y la fauna, y el uso de plantas medicinales. Cerramos nadando frente a un atardecer de colores sobre el horizonte de Cuyabeno. Regreso al lodge y cena.",
          en: "After breakfast we head upriver along the Cuyabeno with the chance to see pink dolphins, a wide variety of birds and monkeys, until we reach Laguna Grande. We circle the macrolobium trees searching for anacondas and, after lunch, walk through the primary forest. The guides explain the lake ecosystems, the flora and fauna, and the use of medicinal plants. We close the day swimming in front of a coloured sunset over the Cuyabeno horizon. Back to the lodge and dinner.",
          de: "Nach dem Frühstück fahren wir den Cuyabeno flussaufwärts, mit der Chance auf rosa Flussdelfine, eine große Vogelvielfalt und Affen, bis wir die Laguna Grande erreichen. Wir umrunden die Macrolobium-Bäume auf der Suche nach Anakondas und wandern nach dem Mittagessen durch den Primärwald. Die Guides erklären die Ökosysteme des Sees, die Pflanzen- und Tierwelt sowie die Verwendung von Heilpflanzen. Zum Abschluss schwimmen wir vor einem farbigen Sonnenuntergang am Horizont des Cuyabeno. Zurück zur Lodge und Abendessen.",
          fr: "Après le petit-déjeuner, nous remontons le Cuyabeno avec la possibilité de voir des dauphins roses, une grande variété d’oiseaux et des singes, jusqu’à la Laguna Grande. Nous contournons les macrolobiums à la recherche d’anacondas et, après le déjeuner, marchons dans la forêt primaire. Les guides expliquent les écosystèmes du lac, la flore et la faune, ainsi que l’usage des plantes médicinales. Nous terminons la journée en nageant face à un coucher de soleil coloré sur l’horizon du Cuyabeno. Retour au lodge et dîner.",
        },
      },
      {
        n: 4,
        mediaId: "day-5-4",
        title: {
          es: "Contacto directo con la naturaleza",
          en: "Face to face with the forest",
          de: "Auge in Auge mit dem Regenwald",
          fr: "Face à face avec la forêt",
        },
        body: {
          es: "Después del desayuno, canoa a remo río arriba, con el guía explicando la diversidad de fauna y flora: mariposas, loros y papagayos, en un ambiente de relajación total. Volvemos al lodge para el almuerzo. Por la tarde, caminata de dos horas por el bosque primario —ranas, sapos, hormigas, arañas e insectos; orquídeas, heliconias, ceibas, hongos y morete—. De regreso, baño en el río, cena y caminata nocturna, con la charla de cierre del guía.",
          en: "After breakfast, a paddle canoe ride upriver with the guide explaining the diversity of wildlife and plant life: butterflies, parrots and macaws, in complete calm. We return to the lodge for lunch. In the afternoon, a two-hour hike through the primary forest — frogs, toads, ants, spiders and insects; orchids, heliconias, ceibas, fungi and morete palms. On the way back, a swim in the river, dinner and a night walk, with the guide's closing talk.",
          de: "Nach dem Frühstück eine Fahrt im Paddelkanu flussaufwärts, während der Guide die Vielfalt der Tier- und Pflanzenwelt erklärt: Schmetterlinge, Papageien und Aras, in aller Ruhe. Zum Mittagessen kehren wir in die Lodge zurück. Am Nachmittag eine zweistündige Wanderung durch den Primärwald — Frösche, Kröten, Ameisen, Spinnen und Insekten; Orchideen, Helikonien, Ceibas, Pilze und Morete-Palmen. Auf dem Rückweg ein Bad im Fluss, Abendessen und eine Nachtwanderung, mit dem abschließenden Rückblick des Guides.",
          fr: "Après le petit-déjeuner, sortie en pirogue à rame vers l’amont, le guide expliquant la diversité de la faune et de la flore : papillons, perroquets et aras, dans le calme le plus complet. Retour au lodge pour le déjeuner. L’après-midi, une randonnée de deux heures dans la forêt primaire — grenouilles, crapauds, fourmis, araignées et insectes ; orchidées, héliconias, ceibas, champignons et palmiers morete. Au retour, baignade dans le fleuve, dîner et marche nocturne, avec le récapitulatif final du guide.",
        },
      },
      {
        n: 5,
        mediaId: "day-5-5",
        title: {
          es: "Amanecer en el río · regreso",
          en: "Sunrise on the river · departure",
          de: "Sonnenaufgang auf dem Fluss · Rückreise",
          fr: "Lever du soleil sur le fleuve · retour",
        },
        body: {
          es: "Observación de animales por el río Cuyabeno a las seis de la mañana y regreso para el desayuno. Salida del lodge a las 09:30 hacia el puente, para tomar el bus al destino final.",
          en: "Wildlife watching along the Cuyabeno river at six in the morning, then back for breakfast. Departure from the lodge at 09:30 to the bridge, to catch the bus onward.",
          de: "Tierbeobachtung am Río Cuyabeno um sechs Uhr morgens, danach zurück zum Frühstück. Abfahrt von der Lodge um 09:30 Uhr zur Brücke, um den Bus weiter zu nehmen.",
          fr: "Observation des animaux le long du río Cuyabeno à six heures du matin, puis retour pour le petit-déjeuner. Départ du lodge à 09h30 vers le pont, pour reprendre le bus.",
        },
      },
    ],
  },
];

/** Aviso del propio material del lodge, presente en su itinerario de 5 días. */
export const itineraryDisclaimer: Localized = {
  es: "Los itinerarios están sujetos a cambios por la variación del clima en Cuyabeno.",
  en: "Itineraries are subject to change due to weather conditions in Cuyabeno.",
  de: "Die Reiseverläufe können sich aufgrund der Wetterbedingungen in Cuyabeno ändern.",
  fr: "Les itinéraires peuvent être modifiés en raison des conditions météorologiques à Cuyabeno.",
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
  de: [
    "Zweisprachige, vom Umweltministerium zertifizierte Guides",
    "Ausflüge bei Tag und bei Nacht",
    "Ausrüstung: Regenjacke, Stiefel, Moskitonetz und Schwimmweste",
    "Zimmer mit eigenem Bad",
    "Alle Mahlzeiten und gereinigtes Wasser",
    "Strom zum Laden von Akkus",
    "Kanutransport ab der Cuyabeno-Brücke",
  ],
  fr: [
    "Guides bilingues certifiés par le ministère de l’Environnement",
    "Excursions de jour et de nuit",
    "Équipement : veste de pluie, bottes, moustiquaire et gilet de sauvetage",
    "Chambre avec salle de bain privée",
    "Tous les repas et eau purifiée",
    "Électricité pour recharger les batteries",
    "Transport interne en pirogue depuis le pont de Cuyabeno",
  ],
};

export const notIncluded: Localized<string[]> = {
  es: [
    "Transporte Quito ↔ Puente de Cuyabeno (bus o avión)",
    "Comidas antes y después del tour",
    "Actividad del chamán (costo aparte, por persona)",
    "Actividad de casabe (costo aparte, por persona)",
    "Bebidas adicionales",
    "Propinas",
  ],
  en: [
    "Quito ↔ Cuyabeno Bridge transport (bus or flight)",
    "Meals before and after the tour",
    "Shaman activity (extra cost, per person)",
    "Casabe activity (extra cost, per person)",
    "Additional drinks",
    "Tips",
  ],
  de: [
    "Transport Quito ↔ Cuyabeno-Brücke (Bus oder Flug)",
    "Mahlzeiten vor und nach der Tour",
    "Schamanen-Aktivität (Aufpreis, pro Person)",
    "Casabe-Aktivität (Aufpreis, pro Person)",
    "Zusätzliche Getränke",
    "Trinkgelder",
  ],
  fr: [
    "Transport Quito ↔ pont de Cuyabeno (bus ou avion)",
    "Repas avant et après le circuit",
    "Activité chamane (coût en supplément, par personne)",
    "Activité casabe (coût en supplément, par personne)",
    "Boissons supplémentaires",
    "Pourboires",
  ],
};

/* ──────────────────────────────── Helpers ─────────────────────────────── */

/**
 * Busca por slug en CUALQUIER idioma. Recorre `LOCALES` en vez de nombrar
 * `es` y `en` a mano: al agregarse alemán y francés, sus slugs traducidos
 * (`3-tage`, `3-jours`) devolvían `undefined` y la página daba 404.
 */
export function tourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => LOCALES.some((l) => t.slug[l] === slug));
}

export function tourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

/** Precio más bajo del catálogo, para el "desde USD …" del hero. */
export const priceFrom = Math.min(...tours.map((t) => t.price));
