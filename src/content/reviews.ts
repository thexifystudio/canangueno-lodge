import type { Locale, Localized } from "@/lib/i18n";

/**
 * Reseñas reales de huéspedes en TripAdvisor (las que publicaba
 * cananguenolodge.com en su widget). Todas se escribieron en inglés.
 *
 * Cada una se muestra en el idioma de la página: en inglés va el texto
 * original; en español, alemán y francés va una traducción fiel —sin
 * agregar ni quitar nada— y la tarjeta lo dice ("Traducida del inglés"),
 * para que nadie la lea como si el huésped la hubiera escrito así.
 *
 * ⚠️ ANTES DE PUBLICAR EN EL DOMINIO REAL: lo ideal es el widget oficial de
 * TripAdvisor o de Google Reviews, con los datos en vivo.
 */

export type Review = {
  id: string;
  quote: Localized;
  author: string;
  date: Localized;
  /** Idioma en que el huésped escribió la reseña. */
  original: Locale;
  source: "TripAdvisor";
  /** true si en el original el texto continúa. */
  excerpt?: boolean;
};

export const reviews: Review[] = [
  {
    id: "hamzan",
    quote: {
      en: "The guide we had was more knowledgeable than i ever could have hoped for. You can tell that they care.",
      es: "El guía que tuvimos sabía más de lo que jamás hubiera esperado. Se nota que les importa.",
      de: "Unser Guide wusste mehr, als ich mir je hätte erhoffen können. Man merkt, dass es ihnen am Herzen liegt.",
      fr: "Notre guide en savait plus que tout ce que j’aurais pu espérer. On sent que ça leur tient à cœur.",
    },
    author: "313hamzan",
    date: { es: "Septiembre 2022", en: "September 2022", de: "September 2022", fr: "septembre 2022" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "melanieb919",
    quote: {
      en: "The stuff and manager was super friendly, flexible and always willing to help. The lodge is beautiful and the rooms very clean, super nice and safe from all the bugs.",
      es: "El personal y el encargado fueron súper amables, flexibles y siempre dispuestos a ayudar. El lodge es precioso y las habitaciones, muy limpias, muy lindas y a salvo de todos los bichos.",
      de: "Das Personal und der Manager waren super freundlich, flexibel und immer hilfsbereit. Die Lodge ist wunderschön und die Zimmer sehr sauber, sehr schön und sicher vor allen Insekten.",
      fr: "Le personnel et le gérant étaient super sympathiques, flexibles et toujours prêts à aider. Le lodge est magnifique et les chambres très propres, très agréables et à l’abri de tous les insectes.",
    },
    author: "MelanieB919",
    date: { es: "Marzo 2022", en: "March 2022", de: "März 2022", fr: "mars 2022" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "cesarc",
    quote: {
      en: "Cuyabeno nice and unique place to visit, guide very polite he known a lot and people in Canangueno are so polite and all the time they made feel us at home.",
      es: "Cuyabeno es un lugar lindo y único para visitar. El guía, muy amable, sabía muchísimo, y la gente de Canangueno es muy atenta: todo el tiempo nos hicieron sentir como en casa.",
      de: "Cuyabeno ist ein schöner und einzigartiger Ort. Der Guide war sehr höflich und wusste viel, und die Leute bei Canangueno sind so freundlich – wir haben uns die ganze Zeit wie zu Hause gefühlt.",
      fr: "Cuyabeno est un endroit beau et unique. Le guide, très poli, savait énormément de choses, et les gens de Canangueno sont si attentionnés : ils nous ont fait sentir chez nous tout le temps.",
    },
    author: "Cesar C",
    date: { es: "Noviembre 2023", en: "November 2023", de: "November 2023", fr: "novembre 2023" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "nadavm47",
    quote: {
      en: "One of the best guide I ever had in South America. The lodge it self is a beautiful place and the stuff were warm and kind people.",
      es: "Uno de los mejores guías que tuve en Sudamérica. El lodge en sí es un lugar precioso y el personal, gente cálida y amable.",
      de: "Einer der besten Guides, die ich in Südamerika je hatte. Die Lodge selbst ist ein wunderschöner Ort und das Personal waren herzliche, freundliche Menschen.",
      fr: "L’un des meilleurs guides que j’aie eus en Amérique du Sud. Le lodge lui-même est un endroit magnifique et le personnel, des gens chaleureux et bienveillants.",
    },
    author: "NadavM47",
    date: { es: "Octubre 2021", en: "October 2021", de: "Oktober 2021", fr: "octobre 2021" },
    original: "en",
    source: "TripAdvisor",
  },
  {
    id: "mathilded355",
    quote: {
      en: "We really enjoyed our experience at the Canangueno lodge this summer. The guide knew everything about the forest and we learned a lot about animals.",
      es: "Disfrutamos muchísimo nuestra experiencia en Canangueno Lodge este verano. El guía sabía todo sobre la selva y aprendimos mucho sobre los animales.",
      de: "Wir haben unseren Aufenthalt in der Canangueno Lodge diesen Sommer sehr genossen. Der Guide wusste alles über den Wald und wir haben viel über die Tiere gelernt.",
      fr: "Nous avons vraiment apprécié notre séjour au Canangueno Lodge cet été. Le guide savait tout sur la forêt et nous avons beaucoup appris sur les animaux.",
    },
    author: "MathildeD355",
    date: { es: "Septiembre 2021", en: "September 2021", de: "September 2021", fr: "septembre 2021" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "davidomv",
    quote: {
      en: "All was so great. The guide, Fabian is so friendly, bilingual and we quickly have confidence in him. The team was really nice, the food too.",
      es: "Todo fue genial. El guía, Fabián, es muy simpático y bilingüe, y enseguida le tuvimos confianza. El equipo fue muy amable, y la comida también estuvo muy buena.",
      de: "Alles war großartig. Der Guide, Fabian, ist sehr freundlich und zweisprachig, und wir hatten schnell Vertrauen zu ihm. Das Team war wirklich nett, das Essen auch.",
      fr: "Tout était génial. Le guide, Fabian, est très sympathique et bilingue, et nous lui avons vite fait confiance. L’équipe était vraiment agréable, la nourriture aussi.",
    },
    author: "DavidoMV",
    date: { es: "Enero 2021", en: "January 2021", de: "Januar 2021", fr: "janvier 2021" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "benjen6352",
    quote: {
      en: "Excellent guides, amazing experience. Me and my girlfriend had a WONDERFUL experience here. Guides were wonderful, helpful, and respectful of nature.",
      es: "Guías excelentes, una experiencia increíble. Mi novia y yo la pasamos MARAVILLOSO aquí. Los guías fueron maravillosos, serviciales y respetuosos con la naturaleza.",
      de: "Hervorragende Guides, ein unglaubliches Erlebnis. Meine Freundin und ich hatten hier eine WUNDERBARE Zeit. Die Guides waren großartig, hilfsbereit und respektvoll gegenüber der Natur.",
      fr: "Des guides excellents, une expérience incroyable. Ma copine et moi avons passé un séjour MERVEILLEUX ici. Les guides étaient formidables, serviables et respectueux de la nature.",
    },
    author: "BenJen6352",
    date: { es: "Febrero 2021", en: "February 2021", de: "Februar 2021", fr: "février 2021" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "julienc",
    quote: {
      en: "I had the best experience in Amazonia in Canangueno lodge. It is settled deep in the jungle. You really feel the special ambiance of the wildlife in here.",
      es: "Tuve la mejor experiencia de la Amazonía en Canangueno Lodge. Está en lo profundo de la selva. Aquí de verdad se siente el ambiente especial de la vida silvestre.",
      de: "Meine beste Erfahrung im Amazonas hatte ich in der Canangueno Lodge. Sie liegt tief im Dschungel. Hier spürt man wirklich die besondere Atmosphäre der Tierwelt.",
      fr: "J’ai vécu ma meilleure expérience en Amazonie au Canangueno Lodge. Il est installé au cœur de la jungle. On y ressent vraiment l’ambiance si particulière de la vie sauvage.",
    },
    author: "Julien C",
    date: { es: "Noviembre 2019", en: "November 2019", de: "November 2019", fr: "novembre 2019" },
    original: "en",
    source: "TripAdvisor",
    excerpt: true,
  },
];
