import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { about, facilities } from "@/content/lodge";
import { site } from "@/config/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
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
    title: dict.meta.lodgeTitle,
    description: dict.meta.lodgeDescription,
    alternates: {
      canonical: `/${locale}/el-lodge`,
      languages: { es: "/es/el-lodge", en: "/en/el-lodge" },
    },
  };
}

export default async function LodgePage({
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
        mediaId="lodge-exterior"
        eyebrow={dict.lodge.eyebrow}
        title={dict.lodge.title}
        emphasis={dict.lodge.titleEmphasis}
        lead={pick(about.intro, l)}
      />

      {/* Quiénes somos */}
      <section className="section-y bg-bg">
        <div className="shell grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-[length:var(--text-2xl)] text-ink lg:sticky lg:top-32">
              {dict.lodge.aboutTitle}
            </h2>
          </Reveal>

          <Reveal stagger={0.1} className="lg:col-span-8">
            <p className="max-w-[62ch] text-[length:var(--text-lg)] font-light leading-relaxed text-ink-soft">
              {pick(about.company, l)}
            </p>

            <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-3">
              <div className="border-t border-line pt-5">
                <dt className="eyebrow text-ink-faint">{dict.lodge.companyLabel}</dt>
                <dd className="mt-2 text-sm text-ink">{site.legal.companyName}</dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className="eyebrow text-ink-faint">{dict.lodge.registryLabel}</dt>
                <dd className="mt-2 text-sm text-ink tabular-nums">
                  {site.legal.forestryRegistry}
                </dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className="eyebrow text-ink-faint">{dict.lodge.sinceLabel}</dt>
                <dd className="mt-2 text-sm text-ink tabular-nums">
                  {site.legal.operatingSince}
                </dd>
              </div>
            </dl>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
              {site.legal.authorities.map((a) => (
                <li key={a} className="text-xs text-ink-faint">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="section-y bg-bg-warm">
        <div className="shell">
          <Reveal>
            <h2 className="text-[length:var(--text-2xl)] text-ink">
              {dict.lodge.facilitiesTitle}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.id} y={34} delay={i * 0.07}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Media
                    id={f.mediaId}
                    locale={l}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 text-[length:var(--text-lg)] text-ink">
                  {pick(f.title, l)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pick(f.body, l)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="bg-bg-deep text-on-deep">
        <div className="shell section-y grid gap-x-16 gap-y-14 md:grid-cols-2">
          <Reveal stagger={0.08}>
            <h2 className="eyebrow mb-6 text-on-deep-faint">{dict.lodge.missionTitle}</h2>
            <p className="max-w-[52ch] text-[length:var(--text-lg)] font-light leading-relaxed">
              {pick(about.mission, l)}
            </p>
          </Reveal>
          <Reveal stagger={0.08}>
            <h2 className="eyebrow mb-6 text-on-deep-faint">{dict.lodge.visionTitle}</h2>
            <p className="max-w-[52ch] text-[length:var(--text-lg)] font-light leading-relaxed text-on-deep-soft">
              {pick(about.vision, l)}
            </p>
          </Reveal>
        </div>
      </section>

      <ReviewsSection locale={l} dict={dict} />
      <BookingCta locale={l} dict={dict} />
    </>
  );
}
