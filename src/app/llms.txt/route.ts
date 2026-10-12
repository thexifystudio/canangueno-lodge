import { LOCALES, LOCALE_LABELS, pick } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/config/site";
import { tours, included, notIncluded } from "@/content/tours";
import { journeyOptions, journeySteps, fromGuayaquil } from "@/content/journey";
import { cuyabenoWhen } from "@/content/cuyabeno";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  /llms.txt — GEO (Generative Engine Optimization)
 * ────────────────────────────────────────────────────────────────────────────
 *  Un resumen en texto plano para que los asistentes de IA (ChatGPT,
 *  Perplexity, Gemini…) citen bien al lodge: qué es, dónde está, los tours,
 *  qué incluyen, cómo se llega y cómo se reserva. Formato de llmstxt.org.
 *
 *  Se arma desde el MISMO contenido que muestra el sitio: si cambia un tour o
 *  un dato, este archivo cambia solo. En inglés, que es lo que mejor leen
 *  estos modelos; enlaza a las páginas en los cuatro idiomas.
 */
export const dynamic = "force-static";

export function GET() {
  const u = (path: string) => `${site.url}${path}`;
  const l = "en" as const;

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a jungle lodge inside the Cuyabeno Wildlife Production Reserve, in the Ecuadorian Amazon (Sucumbíos province), in the Siona–Seoqueya community. It runs 3, 4 and 5-day guided tours with bilingual guides, private-bathroom cabins and all meals included. The lodge is reached by a three-hour canoe ride from the Cuyabeno Bridge.`,
    "",
    "Rates are quoted on request (WhatsApp or email) according to dates, group size and room type; they are not published on the website.",
    "",
    "## Tours",
    "",
    ...tours.flatMap((t) => [
      `- [${t.days} days / ${t.nights} nights — ${pick(t.name, l)}](${u(routes.tour(l, pick(t.slug, l)))}): ${pick(t.intro, l)}`,
      ...t.itinerary.map((d) => `  - Day ${d.n}: ${pick(d.title, l)}`),
    ]),
    "",
    "## What the tours include",
    "",
    ...pick(included, l).map((i) => `- ${i}`),
    "",
    "Not included:",
    "",
    ...pick(notIncluded, l).map((i) => `- ${i}`),
    "",
    "## How to get there",
    "",
    ...journeySteps.map(
      (s) =>
        `- ${pick(s.place, l)} (${pick(s.duration, l)}): ${pick(s.detail, l)}`,
    ),
    ...journeyOptions.map((o) => `- ${pick(o.title, l)}: ${pick(o.body, l)}`),
    `- From other cities: ${pick(fromGuayaquil, l)}`,
    "",
    `Lodge location: ${site.location.lat}, ${site.location.lng} (${site.location.googleMaps})`,
    "",
    "## When to go",
    "",
    pick(cuyabenoWhen.body, l),
    ...cuyabenoWhen.seasons.map(
      (s) => `- ${pick(s.months, l)} — ${pick(s.name, l)}: ${pick(s.text, l)}`,
    ),
    "",
    "## Contact and booking",
    "",
    `- WhatsApp / phone: ${site.contact.phone}`,
    `- Email: ${site.contact.email}`,
    `- Booking enquiries: ${u(routes.book(l))}`,
    `- Reviews: ${site.social.tripadvisor}`,
    "",
    "## Pages",
    "",
    `- [Tours](${u(routes.tours(l))})`,
    `- [The lodge](${u(routes.lodge(l))})`,
    `- [The Cuyabeno Reserve: wildlife, lagoons and seasons](${u(routes.cuyabeno(l))})`,
    `- [How to get here](${u(routes.journey(l))})`,
    `- [Frequently asked questions](${u(routes.faq(l))})`,
    `- [Photo gallery](${u(routes.gallery(l))})`,
    "",
    "## Other languages",
    "",
    ...LOCALES.map(
      (loc) => `- ${LOCALE_LABELS[loc].long}: ${u(routes.home(loc))}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
