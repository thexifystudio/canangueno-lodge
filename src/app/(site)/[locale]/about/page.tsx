import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { getDictionary } from "@/i18n";

import { about } from "@/content/lodge";
import { site } from "@/config/site";
import { Media } from "@/components/ui/Media";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t9n = getDictionary(locale).about;
  return pageMetadata(locale, {
    title: t9n.metaTitle,
    description: t9n.metaDescription,
    path: (l) => routes.about(l),
    image: "gal-community-1",
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const dict = getDictionary(l);
  const t9n = dict.about;
  return (
    <div className="exp-detail">
      <section className="shell exp-page-intro">
        <h1>{t9n.pageTitle}</h1>
        <p>{t9n.pageLead}</p>
      </section>
      <section className="shell exp-split">
        <div className="exp-split-media">
          <Media
            id="exp-culture"
            locale={l}
            priority
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
        <div className="exp-split-copy">
          <h2>{t9n.behindTitle}</h2>
          <p>{pick(about.company, l)}</p>
          <dl>
            <div>
              <dt>{t9n.operatorLabel}</dt>
              <dd>{site.legal.companyName}</dd>
            </div>
            <div>
              <dt>{dict.lodge.registryLabel}</dt>
              <dd className="tabular-nums">{site.legal.forestryRegistry}</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="exp-inclusions">
        <div className="shell exp-heading" style={{ marginBottom: 0 }}>
          <h2>{t9n.paceTitle}</h2>
          <p>{t9n.paceBody}</p>
        </div>
      </section>
      <ReviewsSection locale={l} />
    </div>
  );
}
