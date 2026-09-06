import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Minus } from "lucide-react";

import { LOCALES, isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import {
  tours,
  tourBySlug,
  included,
  notIncluded,
  pricingRules,
  bookingPolicy,
  itineraryDisclaimer,
} from "@/content/tours";
import { routes } from "@/lib/routes";
import { site, whatsappLink } from "@/config/site";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TourItinerary } from "@/components/tours/TourItinerary";
import { TourJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    tours.map((tour) => ({ locale, slug: pick(tour.slug, locale) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const tour = tourBySlug(slug);
  if (!tour) return {};

  const l = locale as Locale;
  const name = pick(tour.name, l);
  const title =
    l === "es"
      ? `${name} · Tour ${tour.days} días en Cuyabeno desde USD ${tour.price}`
      : `${name} · ${tour.days}-Day Cuyabeno Tour from USD ${tour.price}`;

  return {
    title,
    description: pick(tour.summary, l),
    alternates: {
      canonical: `/${l}/tours/${pick(tour.slug, l)}`,
      languages: {
        es: `/es/tours/${tour.slug.es}`,
        en: `/en/tours/${tour.slug.en}`,
      },
    },
    openGraph: { title, description: pick(tour.summary, l) },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const tour = tourBySlug(slug);
  if (!tour) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);

  const waMessage =
    l === "es"
      ? `Hola, me interesa el ${pick(tour.name, l)} (${tour.days} días / ${tour.nights} noches). ¿Tienen disponibilidad?`
      : `Hi, I'm interested in the ${pick(tour.name, l)} (${tour.days} days / ${tour.nights} nights). Do you have availability?`;

  return (
    <>
      {/* Encabezado */}
      <section className="relative flex min-h-[76svh] flex-col justify-end overflow-hidden bg-bg-deep pt-32">
        <div className="absolute inset-0">
          <Media id={tour.mediaId} locale={l} priority hideLabel sizes="100vw" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,13,0.6)_0%,rgba(8,18,13,0.28)_38%,rgba(8,18,13,0.9)_100%)]"
          />
        </div>

        <div className="shell relative pb-14">
          <Reveal stagger={0.08}>
            <Link
              href={routes.tours(l)}
              className="inline-flex items-center gap-2 text-sm text-on-deep-soft transition-colors hover:text-on-deep"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              {dict.common.backToTours}
            </Link>

            <p className="eyebrow mt-9 text-on-deep-soft">
              {tour.days} {dict.common.days} / {tour.nights} {dict.common.nights}
            </p>

            <h1 className="mt-5 max-w-[18ch] text-[length:var(--text-3xl)] text-on-deep">
              {pick(tour.tagline, l)}
            </h1>

            <p className="mt-7 max-w-[52ch] text-[length:var(--text-lg)] font-light leading-relaxed text-on-deep-soft">
              {pick(tour.summary, l)}
            </p>
          </Reveal>
        </div>

        {/* Barra de precio */}
        <div className="relative border-t border-on-deep/20">
          <div className="shell flex flex-wrap items-center justify-between gap-6 py-6">
            <div className="flex items-baseline gap-3">
              <span className="eyebrow text-on-deep-faint">{dict.common.from}</span>
              <span className="font-display text-[2rem] leading-none text-on-deep tabular-nums">
                USD {tour.price}
              </span>
              <span className="text-xs text-on-deep-faint">{dict.common.perPerson}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href={routes.book(l)} variant="primary" size="md">
                {dict.common.bookNow}
              </ButtonLink>
              <ButtonLink href={whatsappLink(waMessage)} external variant="light" size="md">
                {dict.common.whatsappShort}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que vas a ver + ideal para */}
      <section className="section-y bg-bg">
        <div className="shell grid gap-x-16 gap-y-12 md:grid-cols-12">
          <Reveal stagger={0.07} className="md:col-span-7">
            <h2 className="eyebrow mb-8 text-ink-faint">{dict.common.highlights}</h2>
            <ul className="flex flex-col">
              {pick(tour.highlights, l).map((h) => (
                <li
                  key={h}
                  className="border-b border-line py-5 font-display text-[1.5rem] leading-tight text-ink"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-5 md:pt-14">
            <h2 className="eyebrow mb-5 text-ink-faint">{dict.common.bestFor}</h2>
            <p className="text-[length:var(--text-lg)] font-light leading-relaxed text-ink-soft">
              {pick(tour.bestFor, l)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Itinerario interactivo */}
      <section className="section-y bg-bg-warm">
        <div className="shell">
          <TourItinerary tour={tour} locale={l} dict={dict} />
          <p className="mt-12 text-xs text-ink-faint">{pick(itineraryDisclaimer, l)}</p>
        </div>
      </section>

      {/* Incluye / no incluye */}
      <section className="section-y bg-bg">
        <div className="shell grid gap-x-12 gap-y-14 md:grid-cols-2">
          <Reveal stagger={0.05}>
            <h2 className="eyebrow mb-7 text-ink-faint">{dict.common.included}</h2>
            <ul className="flex flex-col gap-3">
              {pick(included, l).map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-line pb-3">
                  <Check size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-accent" />
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal stagger={0.05}>
            <h2 className="eyebrow mb-7 text-ink-faint">{dict.common.notIncluded}</h2>
            <ul className="flex flex-col gap-3">
              {pick(notIncluded, l).map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-line pb-3">
                  <Minus size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-ink-faint" />
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Tarifas y condiciones */}
      <section className="bg-bg-deep text-on-deep">
        <div className="shell section-y grid gap-x-16 gap-y-14 md:grid-cols-2">
          <Reveal stagger={0.05}>
            <h2 className="eyebrow mb-7 text-on-deep-faint">{dict.common.price}</h2>
            <dl className="flex flex-col">
              {pick(pricingRules, l).map((rule) => (
                <div
                  key={rule.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line-deep py-4"
                >
                  <dt className="text-sm text-on-deep-soft">{rule.label}</dt>
                  <dd className="whitespace-nowrap text-sm text-on-deep">{rule.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal stagger={0.05}>
            <h2 className="eyebrow mb-7 text-on-deep-faint">{dict.booking.policyTitle}</h2>
            <dl className="flex flex-col gap-6">
              {pick(bookingPolicy, l).map((p) => (
                <div key={p.title}>
                  <dt className="text-base font-medium text-on-deep">{p.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-on-deep-soft">{p.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="border-t border-line-deep">
          <div className="shell flex flex-wrap items-center justify-between gap-6 py-10">
            <p className="max-w-[40ch] font-display text-[1.6rem] leading-tight text-on-deep">
              {l === "es" ? "¿Reservamos tu lugar?" : "Shall we hold your place?"}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={routes.book(l)} variant="primary" size="lg">
                {dict.common.bookNow}
              </ButtonLink>
              <ButtonLink href={whatsappLink(waMessage)} external variant="light" size="lg">
                {dict.common.whatsapp}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Otros tours */}
      <section className="section-y bg-bg">
        <div className="shell">
          <Reveal>
            <h2 className="text-[length:var(--text-xl)] text-ink">
              {l === "es" ? "Otros recorridos" : "Other routes"}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {tours
              .filter((t) => t.id !== tour.id)
              .map((t) => (
                <Reveal key={t.id} y={30}>
                  <Link href={routes.tour(l, pick(t.slug, l))} className="group block">
                    <div className="flex items-center justify-between gap-6 border-t border-line pt-6">
                      <div>
                        <p className="ordinal text-ink-faint">
                          {t.days} {dict.common.days} / {t.nights} {dict.common.nights}
                        </p>
                        <p className="mt-3 font-display text-[1.6rem] text-ink">
                          {pick(t.tagline, l)}
                        </p>
                      </div>
                      <span className="font-display text-[1.4rem] text-ink tabular-nums">
                        USD {t.price}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <TourJsonLd tour={tour} locale={l} />
      <p className="sr-only">
        {site.name} — {site.location.label}
      </p>
    </>
  );
}
