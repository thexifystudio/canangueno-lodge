import { ArrowUpRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { expeditionCopy } from "@/content/expedition-copy";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  LO QUE DICEN LOS HUÉSPEDES
 * ────────────────────────────────────────────────────────────────────────────
 *  Tres reseñas REALES de Tripadvisor, en tarjetas del mismo alto.
 *
 *  Lo que NO lleva, y por qué:
 *   · Estrellas. La reseña original las tiene, pero ese dato no está en
 *     `content/reviews.ts`. Pintar cinco estrellas "porque suena bien" es
 *     inventarse una calificación.
 *   · El país del huésped. Tampoco lo tenemos. Sería lo más bonito de la
 *     tarjeta y es justo lo que no se puede fabricar.
 *   · El logotipo de Tripadvisor. Usar la marca sin el kit oficial es
 *     apropiación; va el nombre en texto hasta que el cliente lo entregue.
 *
 *  El monograma NO es una foto de perfil inventada: son las iniciales del
 *  propio nombre de usuario, generadas del texto. Da a la tarjeta el ancla
 *  visual que le faltaba sin fingir que sabemos quién es esa persona.
 *
 *  Cuando llegue el widget oficial de Tripadvisor, esto se reemplaza entero y
 *  los datos vienen en vivo. Ver la nota en `content/reviews.ts`.
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

/* Las reseñas van en su idioma original (traducirlas las volvería falsas);
   en las páginas en otro idioma se avisa, para que no parezca un descuido. */
const ORIGINAL: Record<Locale, string> = {
  es: "Reseña original en inglés",
  en: "",
  de: "Originalbewertung auf Englisch",
  fr: "Avis original en anglais",
};

export function ReviewsSection({ locale }: { locale: Locale }) {
  const c = expeditionCopy(locale);
  const selected = ["hamzan", "melanieb919", "cesarc"]
    .map((id) => reviews.find((r) => r.id === id)!)
    .filter(Boolean);

  return (
    <section className="exp-reviews">
      <div className="shell">
        <div className="exp-heading">
          <h2>{c.reviewsTitle}</h2>
          <div>
            <p>{c.reviewsBody}</p>
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
        </div>

        <div className="exp-review-grid">
          {selected.map((r) => (
            <figure key={r.id} className="exp-review">
              <blockquote lang="en">
                {r.quote}
                {/* Extracto: en el original sigue. Sin los puntos parecía
                    una cita completa. */}
                {r.excerpt && "…"}
              </blockquote>
              <figcaption>
                <span className="exp-review-mono" aria-hidden>
                  {initials(r.author)}
                </span>
                <span className="exp-review-who">
                  <strong>{r.author}</strong>
                  <small>
                    {pick(r.date, locale)} · {r.source}
                    {ORIGINAL[locale] && <> · {ORIGINAL[locale]}</>}
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
