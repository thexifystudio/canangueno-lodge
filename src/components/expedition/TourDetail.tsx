import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { itineraryDisclaimer, type Tour } from "@/content/tours";
import { routes } from "@/lib/routes";
import { whatsappLink } from "@/config/site";
import { Media } from "@/components/ui/Media";
import { TourJsonLd } from "@/components/seo/JsonLd";
import { TourTerms } from "./TourTerms";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PÁGINA DE UN TOUR
 * ────────────────────────────────────────────────────────────────────────────
 *  La estructura es la de cananguenolodge.com/tour-3-dias, que es la que el
 *  cliente quiere y la que funciona: el itinerario ES la página. Nada de
 *  acordeones que esconden el contenido, ni reseñas, ni un bloque del lodge
 *  metido en medio. Se entra a leer qué se hace cada día y se sale a reservar.
 *
 *      "3 días / 2 noches" + bajada → DÍA 1, 2, 3… (texto + foto)
 *      → qué incluye / qué no / antes de reservar → reservar
 *      → el lodge y la galería → fin
 *
 *  Los días se muestran ABIERTOS y con su fotografía, alternando el lado de
 *  la imagen. Antes eran `<details>` cerrados: el contenido por el que la
 *  gente entra a esta página estaba a un clic de distancia y no se veía.
 *
 *  Vale para los tres tours sin tocar nada: todo sale de `content/tours.ts`.
 */
export function TourDetail({
  tour,
  locale: l,
}: {
  tour: Tour;
  locale: Locale;
}) {
  const dict = getDictionary(l);
  const t9n = dict.tourDetail;
  const book = routes.book(l) + "?tour=" + tour.id;
  const nights = `${tour.days} ${dict.common.days} / ${tour.nights} ${dict.common.nights}`;
  const dayLabel =
    dict.common.day.charAt(0).toUpperCase() + dict.common.day.slice(1);
  const whatsapp = whatsappLink(
    t9n.whatsappMessage.replace("{days}", String(tour.days)),
  );

  return (
    <div className="exp-detail exp-tourpage">
      {/* ── Título ─────────────────────────────────────────────────────── */}
      {/* Sin botones ni foto arriba: el título y la bajada, y enseguida el
          itinerario. "Reserva este tour" está al final, después de los días. */}
      <section className="shell exp-tourpage-head">
        <div className="exp-tourpage-head-copy">
          <Link href={routes.tours(l)} className="exp-text-link">
            <ArrowLeft size={15} />
            {t9n.allTours}
          </Link>
          <p className="exp-tourpage-eyebrow">{t9n.eyebrow}</p>
          {/* El título es la duración: es lo que la gente compara entre los
              tres tours y lo primero que busca al entrar. */}
          <h1>{nights}</h1>
          <p className="exp-tourpage-lead">{pick(tour.intro, l)}</p>
        </div>
      </section>

      {/* ── Los días ───────────────────────────────────────────────────── */}
      <section className="exp-days" id="itinerary">
        <div className="shell">
          {tour.itinerary.map((day) => (
            <article className="exp-dayblock" key={day.n}>
              <div className="exp-dayblock-copy">
                <h2>
                  {dayLabel} {day.n}
                </h2>
                {/* El "·" se pega a la palabra de antes: nunca abre un renglón. */}
                <p className="exp-dayblock-title">
                  {pick(day.title, l).replaceAll(" · ", " · ")}
                </p>
                <p className="exp-dayblock-text">{pick(day.body, l)}</p>
              </div>
              <div className="exp-dayblock-media">
                <Media
                  id={day.mediaId}
                  locale={l}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
            </article>
          ))}
          <p className="exp-small exp-tourpage-note">
            {pick(itineraryDisclaimer, l)}
          </p>
        </div>
      </section>

      {/* ── Qué incluye, qué no y antes de reservar ───────────────────── */}
      <TourTerms locale={l} />

      {/* ── Reservar ───────────────────────────────────────────────────── */}
      <section className="exp-bookband">
        <div className="shell">
          <h2>{t9n.bookTitle}</h2>
          <p>{t9n.bookBody}</p>
          <div className="exp-bookband-actions">
            <Link href={book} className="exp-button">
              {t9n.bookCta}
              <ArrowRight size={17} />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-text-link"
            >
              {t9n.askWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ── Y se acabó la página: dos salidas ──────────────────────────── */}
      <section className="exp-nextup">
        <div className="shell exp-nextup-grid">
          {(
            [
              [
                routes.lodge(l),
                t9n.nextLodgeTitle,
                t9n.nextLodgeBody,
                "lodge-exterior" as const,
              ],
              [
                routes.gallery(l),
                t9n.nextGalleryTitle,
                t9n.nextGalleryBody,
                "nextup-gallery" as const,
              ],
            ] as const
          ).map(([href, title, body, mediaId]) => (
            <Link key={href} href={href} className="exp-nextup-card">
              <div className="exp-nextup-media">
                <Media
                  id={mediaId}
                  locale={l}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="exp-nextup-body">
                <h2>{title}</h2>
                <p>{body}</p>
                <span className="exp-text-link">
                  {t9n.view}
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TourJsonLd tour={tour} locale={l} />
    </div>
  );
}
