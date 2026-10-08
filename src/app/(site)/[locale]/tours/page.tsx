import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";

import { TourCards } from "@/components/expedition/TourCards";
import { ToursListJsonLd } from "@/components/seo/JsonLd";
import { TourTerms } from "@/components/expedition/TourTerms";
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
    title: dict.tours.metaTitle,
    description: dict.meta.toursDescription,
    path: (l) => routes.tours(l),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t9n = getDictionary(l).tours;

  return (
    <div className="exp-detail">
      <section className="shell exp-page-intro">
        <h1>{t9n.pageTitle}</h1>
      </section>

      <section
        className="shell"
        style={{ paddingBottom: "var(--section-y)", paddingTop: 30 }}
      >
        {/* Bajo el h1 de la página, los nombres de los tours son h2. */}
        <TourCards locale={l} heading="h2" />
        <p className="exp-small exp-tours-note">{t9n.priceNote}</p>
      </section>

      {/* Qué incluye, qué no y las condiciones de reserva (antes en
          /politicas): valen para los tres tours. */}
      <TourTerms locale={l} id="condiciones" />

      <ClosingBand locale={l} />
      <ToursListJsonLd locale={l} />
    </div>
  );
}
