import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { whatsappLink } from "@/config/site";
import { ArrowRight, Bus, House, MapPin, Plane, Waves } from "lucide-react";
import {
  journeySteps,
  journeyOptions,
  journeyFacts,
  fromGuayaquil,
  privateTransfer,
  type JourneyStep,
} from "@/content/journey";
import { Media } from "@/components/ui/Media";
import { WhatsAppGlyph } from "@/components/ui/BrandIcons";
import { LodgeMap } from "@/components/expedition/LodgeMap";
import { ClosingBand } from "@/components/expedition/ClosingBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, {
    title: dict.journey.metaTitle,
    description: dict.meta.journeyDescription,
    path: (l) => routes.journey(l),
    image: "journey-sign",
  });
}

/** El ícono de cada tramo de la ruta. */
const STEP_ICON: Record<JourneyStep["mode"], typeof Bus> = {
  bus: Bus,
  plane: Plane,
  canoe: Waves,
  lodge: House,
};

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  CÓMO LLEGAR
 * ────────────────────────────────────────────────────────────────────────────
 *  Todo el contenido sale de `content/journey.ts` (la página "Cómo llegar"
 *  de cananguenolodge.com, ordenada):
 *
 *      título + los tres datos clave + foto de la entrada a la reserva
 *      → la ruta en 4 tramos → bus o avión hasta el puente
 *      → otras ciudades / traslado privado → el mapa → cierre
 */
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t9n = getDictionary(l).journey;

  return (
    <div className="exp-detail exp-journey">
      {/* ── Título, datos clave y la entrada a la reserva ──────────────── */}
      <section className="shell exp-journey-intro">
        <div>
          <p className="exp-journey-eyebrow">{t9n.eyebrow}</p>
          <h1>{t9n.pageTitle}</h1>
          <p className="exp-journey-lead">{t9n.pageLead}</p>
          <dl className="exp-journey-facts">
            {journeyFacts.map((f) => (
              <div key={f.label.es}>
                <dt>{pick(f.value, l)}</dt>
                <dd>{pick(f.label, l)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="exp-journey-photo">
          <Media
            id="journey-sign"
            locale={l}
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>

      {/* ── La ruta, tramo por tramo ──────────────────────────────────── */}
      <section className="exp-journey-route">
        <div className="shell">
          <h2>{t9n.routeTitle}</h2>
          <ol className="exp-journey-steps">
            {journeySteps.map((step) => {
              const Icon = STEP_ICON[step.mode];
              return (
                <li key={step.n}>
                  <span className="exp-journey-step-icon" aria-hidden>
                    <Icon size={22} />
                  </span>
                  <p className="exp-journey-step-n">{step.n}</p>
                  <h3>{pick(step.place, l)}</h3>
                  <p className="exp-journey-step-time">
                    {pick(step.duration, l)}
                  </p>
                  <p className="exp-journey-step-text">
                    {pick(step.detail, l)}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Hasta el puente: bus o avión ──────────────────────────────── */}
      <section className="shell section-y">
        <div className="exp-heading">
          <h2>{t9n.optionsTitle}</h2>
          <p>{t9n.optionsLead}</p>
        </div>
        <div className="exp-journey-options">
          {journeyOptions.map((o) => {
            const Icon = o.mode === "plane" ? Plane : Bus;
            return (
              <article key={o.id} className="exp-journey-option">
                <span className="exp-journey-option-icon" aria-hidden>
                  <Icon size={24} />
                </span>
                <h3>{pick(o.title, l)}</h3>
                <p>{pick(o.body, l)}</p>
                <ul>
                  {pick(o.legs, l).map((leg) => (
                    <li key={leg}>
                      <ArrowRight size={15} aria-hidden />
                      {leg}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="exp-journey-extra">
          <article>
            <MapPin size={20} aria-hidden />
            <div>
              <h3>{t9n.fromOtherCities}</h3>
              <p>{pick(fromGuayaquil, l)}</p>
            </div>
          </article>
          <article className="is-transfer">
            <WhatsAppGlyph size={20} />
            <div>
              <h3>{t9n.transferTitle}</h3>
              <p>{pick(privateTransfer, l)}</p>
              <a
                className="exp-button"
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink(t9n.connectionWhatsapp)}
              >
                {t9n.connectionCta}
                <ArrowRight size={17} />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ── Dónde queda el lodge ──────────────────────────────────────── */}
      <div className="exp-journey-map">
        <LodgeMap locale={l} showJourneyLink={false} />
      </div>

      <ClosingBand locale={l} />
    </div>
  );
}
