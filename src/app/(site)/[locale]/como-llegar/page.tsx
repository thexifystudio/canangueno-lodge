import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bus, Plane, Sailboat, Home } from "lucide-react";

import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { journeySteps, journeyOptions, fromGuayaquil, privateTransfer } from "@/content/journey";
import { whatsappLink } from "@/config/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { LocationSection } from "@/components/sections/LocationSection";

const ICONS = { bus: Bus, plane: Plane, canoe: Sailboat, lodge: Home };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.journeyTitle,
    description: dict.meta.journeyDescription,
    alternates: {
      canonical: `/${locale}/como-llegar`,
      languages: { es: "/es/como-llegar", en: "/en/como-llegar" },
    },
  };
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  const waMessage =
    l === "es"
      ? "Hola, tengo dudas sobre cómo llegar al Puente de Cuyabeno."
      : "Hi, I have questions about getting to the Cuyabeno Bridge.";

  return (
    <>
      <PageHeader
        locale={l}
        mediaId="journey-road"
        eyebrow={dict.journey.eyebrow}
        title={dict.journey.title}
        emphasis={dict.journey.titleEmphasis}
        lead={dict.journey.lead}
      />

      {/* La ruta en cuatro etapas */}
      <section className="section-y bg-bg">
        <div className="shell">
          <Reveal>
            <h2 className="text-[length:var(--text-2xl)] text-ink">{dict.journey.routeTitle}</h2>
          </Reveal>

          <ol className="mt-14 grid gap-y-2 md:grid-cols-4 md:gap-x-8">
            {journeySteps.map((step, i) => {
              const Icon = ICONS[step.mode];
              return (
                <Reveal key={step.n} y={30} delay={i * 0.09} as="li" className="relative">
                  {/* Línea de conexión */}
                  <div className="flex items-center gap-4 md:block">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-ink">
                      <Icon size={18} strokeWidth={1.4} />
                    </span>
                    <span
                      aria-hidden
                      className="hidden h-px w-full bg-line md:mt-[-1.375rem] md:ml-11 md:block"
                    />
                  </div>

                  <div className="mt-5 pb-10 md:pb-0">
                    <span className="ordinal text-ink-faint">{step.n}</span>
                    <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-ink">
                      {pick(step.place, l)}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-accent">
                      {pick(step.duration, l)}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {pick(step.detail, l)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Cómo llegar al puente */}
      <section className="section-y bg-bg-warm">
        <div className="shell">
          <Reveal stagger={0.1}>
            <h2 className="text-[length:var(--text-2xl)] text-ink">
              {dict.journey.optionsTitle}
            </h2>
            <p className="mt-6 max-w-[56ch] text-[length:var(--text-lg)] font-light leading-relaxed text-ink-soft">
              {dict.journey.optionsLead}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {journeyOptions.map((opt) => {
              const Icon = ICONS[opt.mode];
              return (
                <Reveal key={opt.id} y={30}>
                  <div className="border-t border-ink/20 pt-7">
                    <div className="flex items-center gap-4">
                      <Icon size={20} strokeWidth={1.4} className="text-accent" />
                      <h3 className="font-display text-[1.6rem] text-ink">
                        {pick(opt.title, l)}
                      </h3>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                      {pick(opt.body, l)}
                    </p>

                    <ul className="mt-7 flex flex-col gap-3">
                      {pick(opt.legs, l).map((leg) => (
                        <li
                          key={leg}
                          className="border-b border-line pb-3 text-sm text-ink tabular-nums"
                        >
                          {leg}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <h3 className="eyebrow mb-4 text-ink-faint">{dict.journey.fromOtherCities}</h3>
              <p className="max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                {pick(fromGuayaquil, l)}
              </p>
            </div>
            <div>
              <h3 className="eyebrow mb-4 text-ink-faint">{dict.journey.transferTitle}</h3>
              <p className="max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                {pick(privateTransfer, l)}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dudas */}
      <section className="bg-bg-deep text-on-deep">
        <div className="shell flex flex-wrap items-center justify-between gap-8 py-16">
          <div className="max-w-[42ch]">
            <h2 className="font-display text-[length:var(--text-xl)]">
              {dict.journey.doubtsTitle}
            </h2>
            <p className="mt-3 text-sm text-on-deep-soft">{dict.journey.doubtsBody}</p>
          </div>
          <ButtonLink href={whatsappLink(waMessage)} external variant="primary" size="lg">
            {dict.common.whatsapp}
          </ButtonLink>
        </div>
      </section>

      <LocationSection locale={l} dict={dict} />
    </>
  );
}
