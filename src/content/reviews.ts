import type { Localized } from "@/lib/i18n";

/**
 * Reseñas reales de huéspedes, publicadas hoy en cananguenolodge.com
 * (widget de TripAdvisor). Se conservan textualmente, en el idioma original
 * en que fueron escritas — traducir una reseña la vuelve falsa.
 *
 * ⚠️ ANTES DE PUBLICAR: reemplazar por el widget oficial de TripAdvisor o de
 * Google Reviews para que los datos vengan en vivo y con atribución correcta.
 * Este arreglo es el contenido de arranque, no la solución definitiva.
 * Varias son extractos: en el sitio original terminan en "read more".
 */

export type Review = {
  id: string;
  quote: string;
  author: string;
  date: Localized<string>;
  source: "TripAdvisor";
  /** true si en el original el texto continúa. */
  excerpt?: boolean;
};

export const reviews: Review[] = [
  {
    id: "nadavm47",
    quote:
      "One of the best guide I ever had in South America. The lodge it self is a beautiful place and the stuff were warm and kind people.",
    author: "NadavM47",
    date: { es: "Octubre 2021", en: "October 2021" },
    source: "TripAdvisor",
  },
  {
    id: "benjen6352",
    quote:
      "Excellent guides, amazing experience. Me and my girlfriend had a WONDERFUL experience here. Guides were wonderful, helpful, and respectful of nature. Lovely location removed from almost all civilization.",
    author: "BenJen6352",
    date: { es: "Febrero 2021", en: "February 2021" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "julienc",
    quote:
      "I had the best experience in Amazonia in Canangueno lodge. It is settled deep in the jungle. You really feel the special ambiance of the wildlife in here.",
    author: "Julien C",
    date: { es: "Noviembre 2019", en: "November 2019" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "melanieb919",
    quote:
      "The stuff and manager was super friendly, flexible and always willing to help. The lodge is beautiful and the rooms very clean, super nice and safe from all the bugs.",
    author: "MelanieB919",
    date: { es: "Marzo 2022", en: "March 2022" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "davidomv",
    quote:
      "All was so great. The guide, Fabian is so friendly, bilingual and we quickly have confidence in him. The team was really nice, the food too.",
    author: "DavidoMV",
    date: { es: "Enero 2021", en: "January 2021" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "mathilded355",
    quote:
      "We really enjoyed our experience at the canangueno lodge this summer. The guide knew everything about the forest and we learned a lot about animals.",
    author: "MathildeD355",
    date: { es: "Septiembre 2021", en: "September 2021" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "cesarc",
    quote:
      "Cuyabeno nice and unique place to visit, guide very polite he known a lot and people in Canangueno are so polite and all the time they made feel us at home.",
    author: "Cesar C",
    date: { es: "Noviembre 2023", en: "November 2023" },
    source: "TripAdvisor",
    excerpt: true,
  },
  {
    id: "hamzan",
    quote:
      "The guide we had was more knowledgeable than i ever could have hoped for. You can tell that they care.",
    author: "313hamzan",
    date: { es: "Septiembre 2022", en: "September 2022" },
    source: "TripAdvisor",
    excerpt: true,
  },
];
