import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, pick, type Locale } from "@/lib/i18n";
import { tours, tourBySlug } from "@/content/tours";
import { TourDetail } from "@/components/expedition/TourDetail";
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
  /* Sin la marca al final: la agrega el `template` del layout. */
  const title = {
    es: `${name} · Tour de ${tour.days} días`,
    en: `${name} · ${tour.days}-Day Tour`,
    de: `${name} · ${tour.days}-Tage-Tour`,
    fr: `${name} · Circuit de ${tour.days} jours`,
  }[l];

  return pageMetadata(l, {
    title,
    description: pick(tour.summary, l),
    path: (target) => routes.tour(target, pick(tour.slug, target)),
    image: tour.mediaId,
  });
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const tour = tourBySlug(slug);
  if (!tour || pick(tour.slug, locale) !== slug) notFound();
  return <TourDetail tour={tour} locale={locale} />;
}
