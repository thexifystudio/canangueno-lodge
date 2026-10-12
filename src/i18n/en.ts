import type { Dictionary } from "./es";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  INTERFACE COPY · ENGLISH
 * ────────────────────────────────────────────────────────────────────────────
 *  Not a literal translation of the Spanish: same argument, same figures,
 *  plain international-English register for travellers.
 *
 *  Typed against the Spanish dictionary — a missing key breaks the build.
 */

export const en: Dictionary = {
  nav: {
    cuyabeno: "Cuyabeno",
    tours: "Tours",
    lodge: "The lodge",
    gallery: "Gallery",
    journey: "Getting here",
    faq: "FAQ",
    menu: "Menu",
    close: "Close",
    openMenu: "Open the menu",
  },

  common: {
    nights: "nights",
    days: "days",
    day: "day",
    whatsapp: "Message us on WhatsApp",
    close: "Close",
    previous: "Previous",
    next: "Next",
    all: "All",
  },

  tours: {
    pageTitle: "The three routes.",
    priceNote:
      "Rates are quoted based on dates, group size and room type. Message us on WhatsApp or fill in the form and we'll send you the details.",
    metaTitle: "Cuyabeno tours: 3, 4 and 5 days",
  },

  tourDetail: {
    eyebrow: "Cuyabeno tour",
    allTours: "All tours",
    bookTitle: "Book this tour.",
    bookBody:
      "Choose your dates and we will confirm availability, room and your quote before any payment.",
    bookCta: "Book this tour",
    askWhatsapp: "Ask on WhatsApp",
    whatsappMessage:
      "Hi, I'm interested in the {days}-day Canangueno Lodge tour. Could you send dates and availability?",
    nextLodgeTitle: "See our lodge",
    nextLodgeBody: "Cabins in the jungle, private bathroom and mosquito net.",
    nextGalleryTitle: "Gallery",
    nextGalleryBody: "The river, the forest and the communities, in photos.",
    view: "View",
  },

  lodge: {
    eyebrow: "The lodge",
    pageTitle: "Sleep surrounded by the forest.",
    pageLead:
      "Canangueno Lodge, inside the Cuyabeno Reserve. Cabins, meals and a team to look after you between each journey into the forest and along the river.",
  },

  gallery: {
    eyebrow: "Gallery",
    title: "Cuyabeno",
    titleEmphasis: "in pictures",
    lead: "Photographs of the lodge, the river, the forest and the communities we work with.",
    filterLabel: "Filter by",
  },

  journey: {
    eyebrow: "Getting here",
    routeTitle: "The route, step by step",
    optionsTitle: "How to reach the bridge",
    optionsLead:
      "The Quito → Cuyabeno Bridge leg is arranged and paid separately. These are the two ways to do it.",
    fromOtherCities: "From other cities",
    transferTitle: "Would you rather we arranged it?",
    pageTitle: "Getting here is part of the journey.",
    pageLead:
      "From the road to the river. We will help you coordinate each leg so you reach Cuyabeno Bridge with a clear plan.",
    connectionCta: "Arrange my arrival",
    connectionWhatsapp:
      "Hi, I would like to coordinate transport and the meeting point for my Canangueno Lodge tour.",
  },

  faq: {
    eyebrow: "Frequently asked",
    title: "Everything people",
    titleEmphasis: "usually ask us",
    lead: "And if something's missing, message us on WhatsApp — we answer right there.",
    whatsappMessage: "Hi, I have a question about the Cuyabeno tours.",
    cdcLink: "Travel health: official Ecuador guidance (CDC)",
  },

  booking: {
    travelersLabel: "Travellers",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    phoneLabel: "Phone / WhatsApp",
    phonePlaceholder: "With country code",

    pageTitle: "Check dates and availability.",
    pageLead:
      "Choose the route, the date and how many are travelling. We prepare the message and you confirm it with the Canangueno team by WhatsApp or email, with a rate tailored to your trip.",
    metaTitle: "Plan your Cuyabeno trip",

    formJourneyLegend: "Your journey",
    formAboutLegend: "Your details",
    routeLabel: "Itinerary",
    preferredDateLabel: "Preferred date",
    yourNameLabel: "Your name",
    notesLabel: "Additional comments (optional)",
    notesPlaceholder:
      "Anything else you’d like to tell us: room, children, allergies…",
    noChargeNote:
      "We will prepare a message for you to send via WhatsApp or email. No payment is taken.",
    prepareCta: "Prepare my enquiry",
    errDate: "Choose the date you'd like to start the tour.",
    errDatePast: "That date has already passed. Choose one from today onwards.",
    errPax: "Tell us how many are travelling: between 1 and 40 people.",
    errName: "Enter your name (at least 2 letters).",
    errEmail: "Enter a valid email, for example name@email.com.",
    errPhone:
      "Enter your number with the country code, for example +1 555 123 4567.",
    msgEmail: "Email: ",
    msgPhone: "Phone: ",
    emailSubject: "Canangueno enquiry",

    msgIntro:
      "Hello, I would like to enquire about this Canangueno Lodge trip:",
    msgDate: "Preferred date: ",
    msgTravelers: "Travellers: ",
    msgName: "Name: ",
    msgNotes: "Comments: ",
    msgClosing:
      "Please confirm availability, room type, extras and payment terms.",

    readyTitle: "Your enquiry is ready.",
    readyBody:
      "Review the details and send the message from your preferred app. The lodge has not received this enquiry yet.",
    openWhatsapp: "Open WhatsApp",
    openEmail: "Open email",

    summaryEyebrow: "Your Canangueno itinerary",
    subtotalNote:
      "The final quote depends on your group size, room type and dates. The lodge confirms it before any payment.",
    includedTitle: "Included",
    includedBody:
      "Private-bathroom accommodation, meals, purified water, guide and excursions.",
    extraTitle: "Extra",
    extraBody:
      "Ground transport and optional activities such as the cassava-bread demonstration or the shaman visit. Drinks and tips.",
    availabilityNote:
      "Subject to availability. The lodge sends you the payment and cancellation terms in writing, and your booking is confirmed with its voucher.",
  },

  footer: {
    tagline:
      "Ecuadorian Amazon tours in the Cuyabeno Wildlife Production Reserve.",
    explore: "Explore",
    contact: "Contact",
    rights: "All rights reserved.",
    builtBy: "Site by Thexify",
  },

  meta: {
    homeTitle: "Canangueno Lodge · Cuyabeno & Ecuadorian Amazon Tours",
    homeDescription:
      "Lodge in the heart of the Cuyabeno Reserve. 3, 4 and 5-day tours with bilingual guides, pink dolphins, the Siona community and all meals included. Get a quote.",
    toursDescription:
      "Compare our three routes through the Cuyabeno Reserve: full itineraries and what each one includes.",
    lodgeTitle: "The Lodge in the Cuyabeno Reserve",
    lodgeDescription:
      "Cabins with private bathrooms, all meals and bilingual guides in the heart of the Cuyabeno Reserve, in the Ecuadorian Amazon.",
    galleryTitle: "Cuyabeno Photo Gallery",
    galleryDescription:
      "Photographs of the lodge, the Cuyabeno river, the wildlife and the Siona communities.",
    journeyTitle: "How to Get to Cuyabeno from Quito",
    journeyDescription:
      "How to reach the Cuyabeno Bridge from Quito by bus or by air via El Coca, then three hours by canoe to the lodge.",
    faqTitle: "Frequently Asked Questions about Cuyabeno",
    faqDescription:
      "Weather, what to pack, vaccinations, cash, how to book and how to pay for a tour to the Cuyabeno Reserve.",
    bookDescription:
      "Check availability for the 3, 4 and 5-day tours in the Cuyabeno Reserve.",
  },
};
