import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { whatsappLink } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, {
    title: dict.journey.metaTitle,
    description: dict.meta.journeyDescription,
    path: (l) => routes.journey(l),
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t9n = getDictionary(l).journey;
  return (
    <div className="exp-detail">
      <section className="shell exp-page-intro">
        <h1>{t9n.pageTitle}</h1>
        <p>{t9n.pageLead}</p>
      </section>
      <section
        className="shell exp-itinerary-grid"
        style={{ paddingBottom: "var(--section-y)" }}
      >
        <div className="relative aspect-[4/5]">
          <Media
            id="hero"
            locale={l}
            priority
            sizes="(max-width: 760px) 100vw, 40vw"
          />
        </div>
        <ol className="list-none p-0">
          {t9n.steps.map((step) => (
            <li key={step.title} className="border-t border-line py-6">
              <h2 style={{ fontSize: "1.8rem" }}>{step.title}</h2>
              <p className="mt-4 max-w-[60ch] text-sm text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="exp-inclusions">
        <div className="shell exp-heading" style={{ marginBottom: 0 }}>
          <h2>{t9n.connectionTitle}</h2>
          <div>
            <p>{t9n.connectionBody}</p>
            <a
              className="exp-button mt-7"
              target="_blank"
              rel="noopener noreferrer"
              href={whatsappLink(t9n.connectionWhatsapp)}
            >
              {t9n.connectionCta}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
