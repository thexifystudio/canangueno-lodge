import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Compass,
  Plus,
  Wallet,
} from "lucide-react";
import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { faqGroups } from "@/content/faqs";
import { Media } from "@/components/ui/Media";
import { ClosingBand } from "@/components/expedition/ClosingBand";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, {
    title: dict.meta.faqTitle,
    description: dict.meta.faqDescription,
    path: (l) => routes.faq(l),
    image: "faq-walk",
  });
}

/* Ícono y bajada de cada tema (los temas y las preguntas, en content/faqs). */
const GROUP_META: Record<
  string,
  { icon: typeof Compass; lead: Record<Locale, string> }
> = {
  viaje: {
    icon: Compass,
    lead: {
      es: "Dónde está el lodge, el clima, qué llevar, salud y dinero.",
      en: "Where the lodge is, the weather, what to pack, health and money.",
      de: "Lage der Lodge, Klima, Packliste, Gesundheit und Geld.",
      fr: "Où se trouve le lodge, le climat, les bagages, la santé et l’argent.",
    },
  },
  reservas: {
    icon: Wallet,
    lead: {
      es: "Cómo se reserva, qué datos pedimos y cómo se paga.",
      en: "How to book, the details we need and how to pay.",
      de: "Wie man bucht, welche Angaben wir brauchen und wie man bezahlt.",
      fr: "Comment réserver, les informations demandées et le paiement.",
    },
  },
};

const UI: Record<
  Locale,
  { topics: string; count: (n: number) => string; see: string }
> = {
  es: {
    topics: "Elige un tema",
    count: (n) => `${n} preguntas`,
    see: "Ver preguntas",
  },
  en: {
    topics: "Pick a topic",
    count: (n) => `${n} questions`,
    see: "See questions",
  },
  de: {
    topics: "Wähle ein Thema",
    count: (n) => `${n} Fragen`,
    see: "Fragen ansehen",
  },
  fr: {
    topics: "Choisissez un thème",
    count: (n) => `${n} questions`,
    see: "Voir les questions",
  },
};

/**
 * Una respuesta que es una lista larga ("Recomendamos: a, b, c… y z.") se
 * muestra como lista de casillas: así se lee "qué llevar" de un vistazo en
 * vez de un párrafo de doce líneas. Cualquier otra respuesta queda igual.
 */
function Answer({ text }: { text: string }) {
  // Hasta los ÚLTIMOS dos puntos ("…Recomendamos:"): lo de antes es la
  // introducción y lo de después, la lista.
  const m = text.match(/^([\s\S]*:)\s+([\s\S]+)$/);
  const items = m?.[2]
    .replace(/\.$/, "")
    .split(/,\s+|\s+(?:y|and|sowie|und|et)\s+(?=[^,]+$)/)
    .map((s) => s.trim().replace(/^(?:y|and|und|sowie|et)\s+/i, ""))
    .filter(Boolean);
  if (!m || !items || items.length < 8) return <p>{text}</p>;
  return (
    <>
      <p>{m[1]}</p>
      <ul className="exp-faq-checklist">
        {items.map((item) => (
          <li key={item}>
            <Check size={14} strokeWidth={3} aria-hidden />
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PREGUNTAS FRECUENTES
 * ────────────────────────────────────────────────────────────────────────────
 *      título + foto → dos tarjetas de tema (saltan a cada sección)
 *      → cada tema: título fijo al costado + preguntas desplegables
 *      → cierre con WhatsApp y correo
 *
 *  Los desplegables son `<details>` nativos: funcionan sin JavaScript, el
 *  navegador maneja el teclado y Google indexa las respuestas.
 */
export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const ui = UI[l];

  return (
    <div className="exp-detail exp-faq">
      {/* ── Título y foto ──────────────────────────────────────────────── */}
      <section className="shell exp-faq-intro">
        <div>
          <p className="exp-faq-eyebrow">{dict.faq.eyebrow}</p>
          <h1>
            {dict.faq.title} {dict.faq.titleEmphasis}
          </h1>
          <p className="exp-faq-lead">{dict.faq.lead}</p>
        </div>
        <div className="exp-faq-photo">
          <Media
            id="faq-walk"
            locale={l}
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* ── Los temas: cada tarjeta salta a su sección ─────────────────── */}
      <section className="shell exp-faq-topics" aria-label={ui.topics}>
        <p className="exp-faq-topics-label">{ui.topics}</p>
        <div>
          {faqGroups.map((g) => {
            const meta = GROUP_META[g.id];
            const Icon = meta?.icon ?? Compass;
            return (
              <a key={g.id} href={`#${g.id}`} className="exp-faq-topic">
                <span className="exp-faq-topic-icon" aria-hidden>
                  <Icon size={22} />
                </span>
                <span className="exp-faq-topic-text">
                  <strong>{pick(g.title, l)}</strong>
                  {meta && <small>{meta.lead[l]}</small>}
                </span>
                <span className="exp-faq-topic-count">
                  {ui.count(g.items.length)}
                  <ArrowDown size={15} aria-hidden />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── Las preguntas, por tema ────────────────────────────────────── */}
      {faqGroups.map((g) => {
        const meta = GROUP_META[g.id];
        const Icon = meta?.icon ?? Compass;
        return (
          <section key={g.id} id={g.id} className="shell exp-faq-group">
            <div className="exp-faq-group-head">
              <span className="exp-faq-topic-icon" aria-hidden>
                <Icon size={22} />
              </span>
              <h2>{pick(g.title, l)}</h2>
              {meta && <p>{meta.lead[l]}</p>}
            </div>
            <div className="exp-faq-list">
              {g.items.map((item, i) => (
                <details
                  key={i}
                  className="exp-faq-item"
                  open={i === 0 && g === faqGroups[0]}
                >
                  <summary>
                    <span>{pick(item.q, l)}</span>
                    <span className="exp-faq-toggle" aria-hidden>
                      <Plus size={18} strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="exp-faq-answer">
                    <Answer text={pick(item.a, l)} />
                    {/* La fuente oficial de salud para viajeros, junto a la
                        pregunta de las vacunas. */}
                    {g.id === "viaje" &&
                      /vacun|vaccin|impf/i.test(pick(item.q, l)) && (
                        <a
                          href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/ecuador/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-text-link"
                        >
                          {dict.faq.cdcLink}
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        );
      })}

      <ClosingBand locale={l} />
      <FaqJsonLd locale={l} />
    </div>
  );
}
