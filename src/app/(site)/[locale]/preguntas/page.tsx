import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { faqGroups } from "@/content/faqs";
import { whatsappLink } from "@/config/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.faqTitle,
    description: dict.meta.faqDescription,
    alternates: {
      canonical: `/${locale}/preguntas`,
      languages: { es: "/es/preguntas", en: "/en/preguntas" },
    },
  };
}

export default async function FaqPage({
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
      ? "Hola, tengo una pregunta sobre los tours a Cuyabeno."
      : "Hi, I have a question about the Cuyabeno tours.";

  return (
    <>
      <PageHeader
        locale={l}
        mediaId="exp-jungle"
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        emphasis={dict.faq.titleEmphasis}
        lead={dict.faq.lead}
      />

      <section className="section-y bg-bg">
        <div className="shell flex flex-col gap-20">
          {faqGroups.map((group) => (
            <div key={group.id} className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h2 className="text-[length:var(--text-xl)] text-ink lg:sticky lg:top-32">
                  {pick(group.title, l)}
                </h2>
              </Reveal>

              <Reveal y={24} className="lg:col-span-8">
                <Accordion
                  items={group.items.map((item, i) => ({
                    id: `${group.id}-${i}`,
                    q: pick(item.q, l),
                    a: pick(item.a, l),
                  }))}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-warm">
        <div className="shell flex flex-wrap items-center justify-between gap-8 py-16">
          <p className="max-w-[34ch] font-display text-[length:var(--text-xl)] text-ink">
            {l === "es"
              ? "¿No encontraste lo que buscabas?"
              : "Didn't find what you were looking for?"}
          </p>
          <ButtonLink href={whatsappLink(waMessage)} external variant="primary" size="lg">
            {dict.common.whatsapp}
          </ButtonLink>
        </div>
      </section>

      <FaqJsonLd locale={l} />
    </>
  );
}
