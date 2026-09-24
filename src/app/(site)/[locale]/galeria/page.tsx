import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
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
    title: dict.meta.galleryTitle,
    description: dict.meta.galleryDescription,
    path: (l) => routes.gallery(l),
    image: "gal-lagoon-1",
  });
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

      <section className="bg-bg" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="shell">
          <GalleryGrid
            locale={l}
            labels={{
              filter: dict.gallery.filterLabel,
              all: dict.common.all,
              gallery: dict.nav.gallery,
              close: dict.common.close,
              previous: dict.common.previous,
              next: dict.common.next,
            }}
          />
        </div>
      </section>
      <ClosingBand locale={l} />
    </>
  );
}
