import { ArrowUpRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { expeditionCopy } from "@/content/expedition-copy";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  LO QUE DICEN LOS HUÉSPEDES
 * ────────────────────────────────────────────────────────────────────────────
 *  Seis reseñas REALES de Tripadvisor en tres columnas tipo mosaico (cada
 *  tarjeta mide lo que mide su texto: sin huecos), cada una en el idioma de
 *  la página (ver `content/reviews.ts`:
 *  en inglés va el original; en los otros idiomas, una traducción fiel que
 *  la tarjeta marca como tal).
 *
 *  Lo que NO lleva, y por qué:
 *   · Estrellas ni país del huésped: no los tenemos, y no se inventan.
 *   · El logotipo de Tripadvisor en cada tarjeta: va el nombre en texto; el
 *     logo oficial está en los avales.
 *
 *  El monograma son las iniciales del propio nombre de usuario, no una foto
 *  de perfil inventada.
 */

/** Iniciales de un nombre de usuario: "MelanieB919" → "MB", "Cesar C" → "CC". */
function initials(name: string) {
  const letters = name.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ ]/g, " ").trim();
  const parts = letters.split(/\s+/).filter(Boolean);
  if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
  const caps = letters.replace(/[^A-ZÁÉÍÓÚÑ]/g, "");
  return (
    caps.length > 1 ? caps.slice(0, 2) : letters.slice(0, 2)
  ).toUpperCase();
}

const TRANSLATED: Record<Locale, string> = {
  es: "Traducida del inglés",
  en: "Translated",
  de: "Aus dem Englischen übersetzt",
  fr: "Traduit de l’anglais",
};

/** Cuántas reseñas se muestran: seis, dos por columna. */
const SHOWN = 6;

export function ReviewsSection({ locale }: { locale: Locale }) {
  const c = expeditionCopy(locale);
  const selected = reviews.slice(0, SHOWN);

  return (
    <section className="exp-reviews">
      <div className="shell">
        <div className="exp-reviews-head">
          <h2>{c.reviewsTitle}</h2>
          <a
            className="exp-text-link"
            href={site.social.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.reviewsCta}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="exp-review-grid">
          {selected.map((r) => (
            <figure key={r.id} className="exp-review">
              <blockquote lang={locale}>
                {/* Extracto: en el original sigue. El punto final se cambia
                      por los puntos suspensivos (si no, quedaba ".…"). */}
                {r.excerpt
                  ? pick(r.quote, locale).replace(/[.…\s]+$/, "") + "…"
                  : pick(r.quote, locale)}
              </blockquote>
              <figcaption>
                <span className="exp-review-mono" aria-hidden>
                  {initials(r.author)}
                </span>
                <span className="exp-review-who">
                  <strong>{r.author}</strong>
                  <small>
                    {pick(r.date, locale)} · {r.source}
                    {r.original !== locale && <> · {TRANSLATED[locale]}</>}
                  </small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
