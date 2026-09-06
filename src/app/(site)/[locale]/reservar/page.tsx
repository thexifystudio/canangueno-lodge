import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { bookingPolicy } from "@/content/tours";
import { PageHeader } from "@/components/layout/PageHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.bookTitle,
    description: dict.meta.bookDescription,
    alternates: {
      canonical: `/${locale}/reservar`,
      languages: { es: "/es/reservar", en: "/en/reservar" },
    },
    robots: { index: false, follow: true },
  };
}

export default async function BookPage({
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
        mediaId="story-canoe"
        eyebrow={dict.booking.eyebrow}
        title={dict.booking.title}
        emphasis={dict.booking.titleEmphasis}
        lead={dict.booking.lead}
      />

      <section className="section-y bg-bg">
        <div className="shell">
          <Suspense fallback={<p className="text-ink-faint">{dict.common.loading}…</p>}>
            <BookingForm locale={l} dict={dict} />
          </Suspense>
        </div>
      </section>

      <section className="bg-bg-warm">
        <div className="shell section-y">
          <Reveal>
            <h2 className="text-[length:var(--text-2xl)] text-ink">
              {dict.booking.policyTitle}
            </h2>
          </Reveal>

          <Reveal stagger={0.07} className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {pick(bookingPolicy, l).map((p) => (
              <div key={p.title} className="border-t border-line pt-6">
                <h3 className="text-base font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
