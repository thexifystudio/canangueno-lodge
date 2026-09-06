import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
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
    title: dict.meta.galleryTitle,
    description: dict.meta.galleryDescription,
    alternates: {
      canonical: `/${locale}/galeria`,
      languages: { es: "/es/galeria", en: "/en/galeria" },
    },
  };
}

export default async function GalleryPage({
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
        mediaId="gal-lagoon-1"
        eyebrow={dict.gallery.eyebrow}
        title={dict.gallery.title}
        emphasis={dict.gallery.titleEmphasis}
        lead={dict.gallery.lead}
      />

      <section className="section-y bg-bg">
        <div className="shell">
          <GalleryGrid locale={l} dict={dict} />
        </div>
      </section>

      <BookingCta locale={l} dict={dict} />
    </>
  );
}
