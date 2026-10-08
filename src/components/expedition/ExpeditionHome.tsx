import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { expeditionCopy } from "@/content/expedition-copy";
import { pick, type Locale } from "@/lib/i18n";
import {
  cuyabenoPage,
  cuyabenoFacts,
  cuyabenoTeaserAnimals,
  cuyabenoTeaser,
} from "@/content/cuyabeno";
import { routes } from "@/lib/routes";
import { Media } from "@/components/ui/Media";
import { HeroVideo } from "@/components/video/HeroVideo";
import { VideoLightbox } from "@/components/video/VideoLightbox";
import { TourCards } from "./TourCards";
import { LodgePreview } from "./LodgePreview";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ClosingBand } from "./ClosingBand";
import { Credentials } from "@/components/ui/Credentials";
import { ToursListJsonLd } from "@/components/seo/JsonLd";
export function ExpeditionHome({ locale }: { locale: Locale }) {
  const c = expeditionCopy(locale);
  return (
    <div className="exp-home">
      <section className="exp-hero">
        <HeroVideo locale={locale} />
        <div className="exp-hero-veil" aria-hidden />
        <div className="shell exp-hero-content">
          <p className="exp-hero-eyebrow">{c.heroEyebrow}</p>
          {/* Qué es y dónde, en una línea: el dato que ningún competidor
              pone arriba —el lodge está a tres horas de canoa río adentro—
              es lo que hace distinto el viaje. */}
          <h1>
            {c.hero[0]}
            <br />
            {c.hero[1]}
          </h1>
          <p className="exp-hero-intro">{c.intro}</p>
          <div className="exp-hero-actions">
            <a href="#tours" className="exp-button">
              {c.explore}
              <ArrowRight size={17} />
            </a>
            <VideoLightbox label={c.play} closeLabel={c.close} />
          </div>
        </div>
      </section>

      {/*
       * La franja de datos. Números verificables, no promesas: los que
       * faltan (pasajeros, países) están comentados en `expedition-copy.ts`
       * esperando que el cliente los confirme.
       */}
      <div className="exp-trust">
        <div className="shell">
          <dl>
            {c.stats.map((s) => (
              <div key={s.n}>
                <dt>{s.n}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <a href="#guest-reviews">
            {c.statsCta}
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
      {/* Los avales, a la vista apenas termina el hero: quién autoriza la
          operación es lo primero que mira quien no conoce el lodge. */}
      <Credentials locale={locale} />
      <section className="exp-tours" id="tours">
        <div className="shell">
          <h2 className="exp-tours-title">{c.tourTitle}</h2>
          <TourCards locale={locale} />
          <div className="exp-cards-foot">
            <span>{c.inclusions}</span>
            <Link href={routes.tours(locale)} className="exp-button">
              {c.allTours}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <LodgePreview locale={locale} />
      {/*
       * Cuyabeno: el lugar antes que el producto. Un adelanto de `/cuyabeno`
       * —foto grande, cuatro datos y cuatro animales— que manda a la página
       * completa. Reemplazó a "La fauna, con guía" y a la fila de tres fotos
       * de la galería, que decían lo mismo con menos.
       */}
      <section className="exp-cuyabeno-teaser" id="cuyabeno">
        <div className="shell">
          <div className="exp-cuyabeno-teaser-top">
            <div className="exp-cuyabeno-teaser-media">
              <Media
                id="teaser-river"
                locale={locale}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="exp-cuyabeno-teaser-copy">
              <p className="exp-cuyabeno-teaser-eyebrow">
                {pick(cuyabenoPage.eyebrow, locale)}
              </p>
              <h2>{pick(cuyabenoPage.title, locale)}</h2>
              <p>{pick(cuyabenoTeaser.body, locale)}</p>
              <dl>
                {cuyabenoFacts.map((f, i) => (
                  <div key={i}>
                    <dt>{pick(f.value, locale)}</dt>
                    <dd>{pick(f.label, locale)}</dd>
                  </div>
                ))}
              </dl>
              <Link href={routes.cuyabeno(locale)} className="exp-button">
                {pick(cuyabenoTeaser.cta, locale)}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <ul className="exp-cuyabeno-teaser-animals">
            {cuyabenoTeaserAnimals.map((a) => (
              <li key={a.id}>
                <Link href={routes.cuyabeno(locale)}>
                  <div>
                    <Media
                      id={a.mediaId}
                      locale={locale}
                      sizes="(max-width: 760px) 50vw, 25vw"
                    />
                  </div>
                  <span>{pick(a.name, locale)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="exp-cuyabeno-teaser-more">
            <Link
              href={`${routes.cuyabeno(locale)}#animales`}
              className="exp-text-link"
            >
              {pick(cuyabenoTeaser.allSpecies, locale)}
              <ArrowRight size={16} />
            </Link>
            <Link href={routes.gallery(locale)} className="exp-text-link">
              {pick(cuyabenoTeaser.allPhotos, locale)}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <div id="guest-reviews">
        <ReviewsSection locale={locale} />
      </div>
      <section className="exp-arrival">
        <div className="shell">
          <div className="exp-heading">
            <h2>{c.journeyTitle}</h2>
            <div>
              <p>{c.journeyBody}</p>
              <Link className="exp-text-link" href={routes.journey(locale)}>
                {c.journeyCta}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <ol>
            {c.steps.map((s, i) => (
              <li key={s}>
                <span aria-hidden />
                <strong>{s}</strong>
                <small>{c.stepNotes[i]}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ClosingBand locale={locale} />
      <ToursListJsonLd locale={locale} />
    </div>
  );
}
