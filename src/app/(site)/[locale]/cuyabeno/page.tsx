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
import { TourCards } from "@/components/expedition/TourCards";

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
 *      → animales (4 × 4) → cuándo ir (temporadas + clima) → los tours → cierre
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
          {cuyabenoFacts.map((f, i) => (
            <div key={i}>
              <dt>{pick(f.value, l)}</dt>
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

      <section className="exp-cuyabeno-wildlife" id="animales">
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

      {/* ── Cuándo ir: la foto de la lluvia, las tres temporadas y el clima ── */}
      <section className="shell section-y exp-cuyabeno-when">
        <div className="exp-cuyabeno-when-media">
          <Media
            id="when-rain"
            locale={l}
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="exp-cuyabeno-when-copy">
          <p className="exp-cuyabeno-eyebrow">{pick(cuyabenoWhen.eyebrow, l)}</p>
          <h2>{pick(cuyabenoWhen.title, l)}</h2>
          <p className="exp-cuyabeno-when-lead">{pick(cuyabenoWhen.body, l)}</p>
          <ol className="exp-cuyabeno-seasons">
            {cuyabenoWhen.seasons.map((season) => (
              <li key={season.months.es}>
                <p className="exp-cuyabeno-season-months">
                  {pick(season.months, l)}
                </p>
                <h3>{pick(season.name, l)}</h3>
                <p>{pick(season.text, l)}</p>
              </li>
            ))}
          </ol>
          <dl className="exp-cuyabeno-climate">
            {cuyabenoWhen.climate.map((c) => (
              <div key={c.value}>
                <dt>{c.value}</dt>
                <dd>{pick(c.label, l)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Nuestros tours: de mirar el lugar a elegir cómo vivirlo ───── */}
      <section className="exp-cuyabeno-tours">
        <div className="shell">
          <div className="exp-heading">
            <div>
              <p className="exp-cuyabeno-eyebrow">{pick(cuyabenoCta.eyebrow, l)}</p>
              <h2>{pick(cuyabenoCta.title, l)}</h2>
            </div>
            <div>
              <p>{pick(cuyabenoCta.body, l)}</p>
              <Link href={routes.tours(l)} className="exp-text-link">
                {pick(cuyabenoCta.link, l)}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <TourCards locale={l} />
        </div>
      </section>

      <ClosingBand locale={l} />
    </div>
  );
}
