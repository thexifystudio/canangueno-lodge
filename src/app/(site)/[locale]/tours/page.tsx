import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { tours, included, notIncluded, pricingRules, itineraryDisclaimer } from "@/content/tours";
import { routes } from "@/lib/routes";
import { PageHeader } from "@/components/layout/PageHeader";
import { TourCard } from "@/components/tours/TourCard";
import { Reveal } from "@/components/motion/Reveal";
import { ToursListJsonLd } from "@/components/seo/JsonLd";
import { BookingCta } from "@/components/sections/BookingCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.toursTitle,
    description: dict.meta.toursDescription,
    alternates: { canonical: `/${locale}/tours`, languages: { es: "/es/tours", en: "/en/tours" } },
  };
}

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <PageHeader
        locale={l}
        mediaId="home-statement"
        eyebrow={dict.tours.eyebrow}
        title={dict.tours.indexTitle}
        lead={dict.tours.indexLead}
      />

      {/* Tarjetas */}
      <section className="section-y bg-bg">
        <div className="shell grid gap-x-8 gap-y-16 md:grid-cols-3">
          {tours.map((tour, i) => (
            <Reveal key={tour.id} y={40} delay={i * 0.08}>
              <TourCard tour={tour} locale={l} dict={dict} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparativa */}
      <section className="section-y bg-bg-warm">
        <div className="shell">
          <Reveal>
            <h2 className="text-[length:var(--text-2xl)] text-ink">{dict.tours.compare}</h2>
          </Reveal>

          <Reveal className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/20">
                  <th className="eyebrow py-4 pr-6 text-ink-faint">{dict.common.itinerary}</th>
                  <th className="eyebrow py-4 pr-6 text-ink-faint">
                    {dict.tours.tableDuration}
                  </th>
                  <th className="eyebrow py-4 pr-6 text-ink-faint">{dict.tours.tablePrice}</th>
                  <th className="eyebrow py-4 pr-6 text-ink-faint">
                    {dict.tours.tableBestFor}
                  </th>
                  <th className="py-4" />
                </tr>
              </thead>
              <tbody>
                {tours.map((t) => (
                  <tr key={t.id} className="border-b border-line align-top">
                    <td className="py-6 pr-6">
                      <span className="font-display text-[1.3rem] text-ink">
                        {pick(t.tagline, l)}
                      </span>
                    </td>
                    <td className="py-6 pr-6 text-sm text-ink-soft tabular-nums">
                      {t.days} {dict.common.days} / {t.nights} {dict.common.nights}
                    </td>
                    <td className="py-6 pr-6">
                      <span className="font-display text-[1.3rem] text-ink tabular-nums">
                        USD {t.price}
                      </span>
                      <span className="block text-xs text-ink-faint">
                        {dict.common.perPerson}
                      </span>
                    </td>
                    <td className="max-w-[22rem] py-6 pr-6 text-sm text-ink-soft">
                      {pick(t.bestFor, l)}
                    </td>
                    <td className="py-6">
                      <Link
                        href={routes.tour(l, pick(t.slug, l))}
                        className="inline-flex items-center gap-2 whitespace-nowrap border-b border-ink/25 pb-1 text-sm text-ink transition-colors hover:border-ink"
                      >
                        {dict.common.viewItinerary}
                        <ArrowRight size={14} strokeWidth={1.5} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-6 text-xs text-ink-faint">{pick(itineraryDisclaimer, l)}</p>
        </div>
      </section>

      {/* Qué incluye / qué no / tarifas */}
      <section className="section-y bg-bg">
        <div className="shell grid gap-x-12 gap-y-14 md:grid-cols-3">
          <Reveal stagger={0.06}>
            <h3 className="eyebrow mb-7 text-ink-faint">{dict.common.included}</h3>
            <ul className="flex flex-col gap-3">
              {pick(included, l).map((item) => (
                <li key={item} className="border-b border-line pb-3 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal stagger={0.06}>
            <h3 className="eyebrow mb-7 text-ink-faint">{dict.common.notIncluded}</h3>
            <ul className="flex flex-col gap-3">
              {pick(notIncluded, l).map((item) => (
                <li key={item} className="border-b border-line pb-3 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal stagger={0.06}>
            <h3 className="eyebrow mb-7 text-ink-faint">{dict.common.price}</h3>
            <dl className="flex flex-col gap-3">
              {pick(pricingRules, l).map((rule) => (
                <div
                  key={rule.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
                >
                  <dt className="text-sm text-ink-soft">{rule.label}</dt>
                  <dd className="whitespace-nowrap text-sm text-ink">{rule.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <BookingCta locale={l} dict={dict} />
      <ToursListJsonLd locale={l} />
    </>
  );
}
