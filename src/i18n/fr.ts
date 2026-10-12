import type { Dictionary } from "./es";

/** Textes d’interface en français, adaptés à un public de voyageurs. */
export const fr: Dictionary = {
  nav: {
    cuyabeno: "Cuyabeno",
    tours: "Circuits",
    lodge: "Le lodge",
    gallery: "Galerie",
    journey: "Accès",
    faq: "FAQ",
    menu: "Menu",
    close: "Fermer",
    openMenu: "Ouvrir le menu",
  },
  common: {
    nights: "nuits",
    days: "jours",
    day: "jour",
    whatsapp: "Écrivez-nous sur WhatsApp",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    all: "Tous",
  },
  tours: {
    pageTitle: "Les trois circuits.",
    priceNote:
      "Le tarif est établi selon les dates, la taille du groupe et le type de chambre. Écrivez-nous sur WhatsApp ou remplissez le formulaire, et nous vous enverrons les détails.",
    metaTitle: "Circuits à Cuyabeno : 3, 4 et 5 jours",
  },

  tourDetail: {
    eyebrow: "Circuit à Cuyabeno",
    allTours: "Tous les circuits",
    bookTitle: "Réservez ce circuit.",
    bookBody:
      "Choisissez vos dates : nous confirmons la disponibilité, la chambre et le devis avant tout paiement.",
    bookCta: "Réserver ce circuit",
    askWhatsapp: "Demander sur WhatsApp",
    whatsappMessage:
      "Bonjour, je suis intéressé(e) par le circuit de {days} jours au Canangueno Lodge. Pourriez-vous m’envoyer les dates et les disponibilités ?",
    nextLodgeTitle: "Découvrir notre lodge",
    nextLodgeBody:
      "Des cabanes en pleine forêt, salle de bain privée et moustiquaire.",
    nextGalleryTitle: "Galerie",
    nextGalleryBody: "Le fleuve, la forêt et les communautés, en photos.",
    view: "Voir",
  },
  lodge: {
    eyebrow: "Le lodge",
    pageTitle: "Dormir entouré par la forêt.",
    pageLead:
      "Le Canangueno Lodge, au cœur de la réserve de Cuyabeno. Des cabanes, des repas et une équipe qui vous accompagne entre chaque sortie sur le fleuve et en forêt.",
  },

  gallery: {
    eyebrow: "Galerie",
    title: "Cuyabeno",
    titleEmphasis: "en images",
    lead: "Photographies du lodge, de la rivière, de la forêt et des communautés avec lesquelles nous travaillons.",
    filterLabel: "Filtrer par",
  },
  journey: {
    eyebrow: "Accès",
    routeTitle: "Le trajet, étape par étape",
    optionsTitle: "Comment rejoindre le pont",
    optionsLead:
      "Le trajet Quito → pont de Cuyabeno s’organise et se règle séparément. Deux options sont possibles.",
    fromOtherCities: "Depuis d’autres villes",
    transferTitle: "Vous préférez que nous organisions le transfert ?",
    pageTitle: "Le trajet fait déjà partie du voyage.",
    pageLead:
      "De la route au fleuve. Nous vous aidons à organiser chaque étape pour que vous arriviez au pont de Cuyabeno avec un plan clair.",
    connectionCta: "Organiser mon arrivée",
    connectionWhatsapp:
      "Bonjour, je souhaiterais organiser le transport et le point de rendez-vous pour mon circuit au Canangueno Lodge.",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout ce que les voyageurs",
    titleEmphasis: "nous demandent souvent",
    lead: "S’il manque quelque chose, écrivez-nous sur WhatsApp — nous vous répondrons directement.",
    whatsappMessage: "Bonjour, j’ai une question sur les circuits à Cuyabeno.",
    cdcLink:
      "Santé du voyageur : informations officielles sur l’Équateur (CDC)",
  },
  booking: {
    travelersLabel: "Voyageurs",
    emailLabel: "E-mail",
    emailPlaceholder: "vous@email.com",
    phoneLabel: "Téléphone / WhatsApp",
    phonePlaceholder: "Avec l’indicatif du pays",

    pageTitle: "Vérifiez les dates et les disponibilités.",
    pageLead:
      "Choisissez le circuit, la date et le nombre de voyageurs. Nous préparons le message et vous le confirmez auprès de l’équipe de Canangueno par WhatsApp ou par e-mail, avec un tarif adapté à votre voyage.",
    metaTitle: "Planifiez votre voyage à Cuyabeno",

    formJourneyLegend: "Votre voyage",
    formAboutLegend: "Vos coordonnées",
    routeLabel: "Circuit",
    preferredDateLabel: "Date souhaitée",
    yourNameLabel: "Votre nom",
    notesLabel: "Commentaires (facultatif)",
    notesPlaceholder: "Autre chose à nous dire : chambre, enfants, allergies…",
    noChargeNote:
      "Nous préparerons un message que vous pourrez envoyer par WhatsApp ou par e-mail. Aucun paiement n’est effectué.",
    prepareCta: "Préparer ma demande",
    errDate: "Choisissez la date de début du circuit.",
    errDatePast:
      "Cette date est déjà passée. Choisissez-en une à partir d’aujourd’hui.",
    errPax: "Indiquez le nombre de voyageurs : entre 1 et 40 personnes.",
    errName: "Saisissez votre nom (au moins 2 lettres).",
    errEmail: "Saisissez un e-mail valide, par exemple nom@email.com.",
    errPhone:
      "Saisissez votre numéro avec l’indicatif du pays, par exemple +33 6 12 34 56 78.",
    msgEmail: "E-mail : ",
    msgPhone: "Téléphone : ",
    emailSubject: "Demande Canangueno",

    msgIntro:
      "Bonjour, je souhaiterais des renseignements sur ce voyage au Canangueno Lodge :",
    msgDate: "Date souhaitée : ",
    msgTravelers: "Voyageurs : ",
    msgName: "Nom : ",
    msgNotes: "Commentaires : ",
    msgClosing:
      "Merci de confirmer la disponibilité, le type de chambre, les extras et les conditions de paiement.",

    readyTitle: "Votre demande est prête.",
    readyBody:
      "Vérifiez les informations et envoyez le message depuis l’application de votre choix. Le lodge n’a pas encore reçu cette demande.",
    openWhatsapp: "Ouvrir WhatsApp",
    openEmail: "Ouvrir l’e-mail",

    summaryEyebrow: "Votre circuit à Canangueno",
    subtotalNote:
      "Le devis final dépend de la composition du groupe, du type de chambre et des dates. Le lodge le confirme avant tout paiement.",
    includedTitle: "Inclus",
    includedBody:
      "Chambre avec salle de bain privée, repas, eau purifiée, guide et excursions.",
    extraTitle: "Non inclus",
    extraBody:
      "Transport terrestre et activités facultatives comme la préparation du casabe ou la visite du chamane. Boissons et pourboires.",
    availabilityNote:
      "Places sous réserve de disponibilité. Le lodge vous envoie par écrit les conditions de paiement et d’annulation, et la réservation est confirmée par son voucher.",
  },
  footer: {
    tagline:
      "Circuits en Amazonie équatorienne dans la Réserve de production de faune de Cuyabeno.",
    explore: "Explorer",
    contact: "Contact",
    rights: "Tous droits réservés.",
    builtBy: "Site réalisé par Thexify",
  },
  meta: {
    homeTitle:
      "Canangueno Lodge · Circuits à Cuyabeno et en Amazonie équatorienne",
    homeDescription:
      "Lodge au cœur de la réserve de Cuyabeno. Circuits de 3, 4 et 5 jours avec guides bilingues, communauté Siona et repas inclus. Demandez votre devis.",
    toursDescription:
      "Comparez nos trois itinéraires dans la réserve de Cuyabeno : programmes complets et prestations incluses.",
    lodgeTitle: "Le lodge dans la réserve de Cuyabeno",
    lodgeDescription:
      "Cabanes avec salle de bain privée, tous les repas et des guides bilingues au cœur de la réserve de Cuyabeno, en Amazonie équatorienne.",
    galleryTitle: "Galerie photo de Cuyabeno",
    galleryDescription:
      "Photographies du lodge, de la rivière Cuyabeno, de la faune et des communautés Siona.",
    journeyTitle: "Comment aller de Quito à Cuyabeno",
    journeyDescription:
      "Rejoignez le pont de Cuyabeno depuis Quito en bus ou en avion via El Coca, puis continuez trois heures en pirogue jusqu’au lodge.",
    faqTitle: "Questions fréquentes sur le voyage à Cuyabeno",
    faqDescription:
      "Climat, bagages, vaccins, argent liquide, réservation et paiement d’un circuit dans la réserve de Cuyabeno.",
    bookDescription:
      "Vérifiez les disponibilités pour les circuits de 3, 4 et 5 jours dans la réserve de Cuyabeno.",
  },
};
