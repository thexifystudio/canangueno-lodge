import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { isLocale, pick } from "@/lib/i18n";
import {
  cuyabenoPage,
  cuyabenoFacts,
  cuyabenoChapters,
  cuyabenoWildlifeCopy,
  cuyabenoAnimals,
  cuyabenoAlso,
  cuyabenoWhen,
  cuyabenoCta,
} from "@/content/cuyabeno";
import { Media } from "@/components/ui/Media";
import { ClosingBand } from "@/components/expedition/ClosingBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, {
    title: pick(cuyabenoPage.metaTitle, locale),
    description: pick(cuyabenoPage.metaDescription, locale),
    path: (l) => routes.cuyabeno(l),
    image: "gal-lagoon-2",
  });
}

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  CUYABENO — la reserva
 * ────────────────────────────────────────────────────────────────────────────
 *  El lugar antes que el producto: qué es la reserva, el agua, el bosque, la
 *  gente, los animales y cuándo ir. Cierra mandando a los tours.
 *
 *      título + foto ancha + datos → capítulos (texto/foto alternando)
 *      → animales → cuándo ir → a los tours → cierre
 *
 *  Todo el texto vive en `content/cuyabeno.ts`.
 */
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  return (
    <div className="exp-detail exp-cuyabeno">
      <section className="shell exp-page-intro">
        <p className="exp-cuyabeno-eyebrow">{pick(cuyabenoPage.eyebrow, l)}</p>
        <h1>{pick(cuyabenoPage.title, l)}</h1>
        <p>{pick(cuyabenoPage.lead, l)}</p>
      </section>

      <section className="shell">
        <div className="exp-cuyabeno-banner">
          <Media id="gal-lagoon-2" locale={l} priority sizes="100vw" />
        </div>
        <dl className="exp-cuyabeno-facts">
          {cuyabenoFacts.map((f) => (
            <div key={f.value}>
              <dt>{f.value}</dt>
              <dd>{pick(f.label, l)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mismo bloque que los días de un tour: texto y foto, alternando. */}
      <section className="exp-days">
        <div className="shell">
          {cuyabenoChapters.map((c) => (
            <article className="exp-dayblock" key={c.id}>
              <div className="exp-dayblock-copy">
                <h2>{pick(c.title, l)}</h2>
                <p className="exp-dayblock-text">{pick(c.body, l)}</p>
              </div>
              <div className="exp-dayblock-media">
                <Media
                  id={c.mediaId}
                  locale={l}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="exp-cuyabeno-wildlife">
        <div className="shell">
          <div className="exp-heading">
            <h2>{pick(cuyabenoWildlifeCopy.title, l)}</h2>
            <p>{pick(cuyabenoWildlifeCopy.lead, l)}</p>
          </div>
          <ul className="exp-cuyabeno-animals">
            {cuyabenoAnimals.map((a) => (
              <li key={a.id}>
                <div className="exp-cuyabeno-animal-media">
                  <Media
                    id={a.mediaId}
                    locale={l}
                    sizes="(max-width: 760px) 50vw, 25vw"
                  />
                </div>
                <h3>{pick(a.name, l)}</h3>
                <p>{pick(a.note, l)}</p>
              </li>
            ))}
          </ul>
          <p className="exp-cuyabeno-also">
            <strong>{pick(cuyabenoWildlifeCopy.alsoTitle, l)}:</strong>{" "}
            {cuyabenoAlso.map((x) => pick(x, l)).join(" · ")}
          </p>
        </div>
      </section>

      <section className="shell section-y exp-heading exp-cuyabeno-when">
        <h2>{pick(cuyabenoWhen.title, l)}</h2>
        <p>{pick(cuyabenoWhen.body, l)}</p>
      </section>

      <section className="exp-bookband exp-cuyabeno-cta">
        <div className="shell">
          <h2>{pick(cuyabenoCta.title, l)}</h2>
          <p>{pick(cuyabenoCta.body, l)}</p>
          <div className="exp-bookband-actions">
            <Link href={routes.tours(l)} className="exp-button">
              {pick(cuyabenoCta.link, l)}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <ClosingBand locale={l} />
    </div>
  );
}
