import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { tours } from "@/content/tours";
import { pick, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { whatsappLink } from "@/config/site";
import { Media } from "@/components/ui/Media";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  LAS TRES TARJETAS DE TOUR
 * ────────────────────────────────────────────────────────────────────────────
 *  Un solo producto: 3, 4 y 5 días con base en el lodge. Las tres tarjetas
 *  se ven a la vez —no un selector que esconde dos de tres—. No se muestra
 *  precio: el que quiere la tarifa la pide por WhatsApp desde la tarjeta.
 *
 *  Es un componente de servidor: no hay estado, sólo enlaces.
 */

const T = {
  es: {
    itinerary: "Ver el itinerario",
    ask: "Consultar por WhatsApp",
    days: "días",
    nights: "noches",
    whatsapp: (days: number) =>
      `Hola, me interesa el tour de ${days} días en Canangueno Lodge. ¿Me pasan fechas y disponibilidad?`,
  },
  en: {
    itinerary: "See the itinerary",
    ask: "Ask on WhatsApp",
    days: "days",
    nights: "nights",
    whatsapp: (days: number) =>
      `Hi, I'm interested in the ${days}-day Canangueno Lodge tour. Could you send dates and availability?`,
  },
  de: {
    itinerary: "Reiseverlauf ansehen",
    ask: "Auf WhatsApp fragen",
    days: "Tage",
    nights: "Nächte",
    whatsapp: (days: number) =>
      `Hallo, ich interessiere mich für die ${days}-Tage-Tour in der Canangueno Lodge. Könnt ihr mir Termine und Verfügbarkeit schicken?`,
  },
  fr: {
    itinerary: "Voir l’itinéraire",
    ask: "Demander sur WhatsApp",
    days: "jours",
    nights: "nuits",
    whatsapp: (days: number) =>
      `Bonjour, je m’intéresse au circuit de ${days} jours à Canangueno Lodge. Pourriez-vous m’envoyer les dates et les disponibilités ?`,
  },
} as const;

export function TourCards({
  locale,
  heading: Heading = "h3",
}: {
  locale: Locale;
  /** `h3` bajo el h2 de una sección (portada); `h2` bajo el h1 de /tours. */
  heading?: "h2" | "h3";
}) {
  const t = T[locale];

  return (
    <div className="exp-cards">
      {tours.map((tour, i) => {
        const href = routes.tour(locale, pick(tour.slug, locale));

        return (
          <article key={tour.id} className="exp-card">
            <div className="exp-card-media">
              <Media
                id={tour.mediaId}
                locale={locale}
                /* En /tours las tarjetas son lo primero que se ve. */
                priority={Heading === "h2" && i === 0}
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <span className="exp-card-nights">
                {tour.days} {t.days} / {tour.nights} {t.nights}
              </span>
            </div>

            <div className="exp-card-body">
              <p className="exp-card-kicker">{pick(tour.tagline, locale)}</p>
              <Heading className="exp-card-title">
                {pick(tour.name, locale)}
              </Heading>
              <p className="exp-card-summary">{pick(tour.summary, locale)}</p>

              <ul className="exp-card-highlights">
                {pick(tour.highlights, locale)
                  .slice(0, 3)
                  .map((h) => (
                    <li key={h}>
                      <Check size={14} strokeWidth={2.5} aria-hidden />
                      {h}
                    </li>
                  ))}
              </ul>


              <div className="exp-card-actions">
                {/*
                 * Enlace estirado: el ::after de este botón (en el CSS) cubre
                 * toda la tarjeta, así un clic en cualquier parte abre el
                 * itinerario. El de WhatsApp se eleva con z-index para seguir
                 * siendo clicable por encima.
                 */}
                <Link
                  href={href}
                  className="exp-button exp-card-link"
                  aria-label={`${t.itinerary}: ${pick(tour.name, locale)}`}
                >
                  {t.itinerary}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={whatsappLink(t.whatsapp(tour.days))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-text-link exp-card-aside"
                >
                  <MessageCircle size={15} aria-hidden />
                  {t.ask}
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
