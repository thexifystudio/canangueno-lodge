import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { expeditionCopy } from "@/content/expedition-copy";
import { Media } from "@/components/ui/Media";
import { routes } from "@/lib/routes";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  EL LODGE, EN LA PORTADA
 * ────────────────────────────────────────────────────────────────────────────
 *  Un titular corto, CUATRO FOTOGRAFÍAS y un botón a la página del lodge. Eso
 *  es todo lo que esta sección tiene que hacer desde la portada.
 *
 *  Antes era texto a la izquierda, una lista de tres viñetas, dos fotos a la
 *  derecha y una nota al pie. Demasiado para un adelanto: lo que vende el
 *  alojamiento son las fotos, y el detalle (horarios de electricidad, tipos de
 *  habitación) está mejor en `/el-lodge`, que es donde alguien va cuando ya
 *  quiere ese detalle.
 *
 *  `showLink={false}` lo usa la propia página del lodge, donde el botón
 *  llevaría a la página en la que ya estás.
 */
export function LodgePreview({
  locale,
  showLink = true,
}: {
  locale: Locale;
  showLink?: boolean;
}) {
  const c = expeditionCopy(locale);
  const shots = [
    ["lodge-building", c.shotCabins],
    ["lodge-room-double", c.shotRoom],
    ["lodge-meal", c.shotDining],
    ["lodge-hammocks", c.shotDeck],
  ] as const;

  return (
    <section className="exp-stay">
      <div className="shell">
        {/* Título y texto juntos a la izquierda, el botón a la derecha a la
            altura del texto: se lee de un tirón y el botón no se pierde. */}
        <div className="exp-stay-head">
          <div>
            <h2>{c.stayTitle}</h2>
            <p>{c.stayBody}</p>
          </div>
          {showLink && (
            <Link className="exp-button" href={routes.lodge(locale)}>
              {c.stayCta}
              <ArrowRight size={17} />
            </Link>
          )}
        </div>
        <div className="exp-stay-shots">
          {shots.map(([id, caption], i) => (
            <figure key={id}>
              <div>
                <Media
                  id={id}
                  locale={locale}
                  /* En /el-lodge estas fotos son lo primero de la página. */
                  priority={!showLink && i < 2}
                  /* Recortadas en vertical: piden más ancho del que ocupan. */
                  sizes="(max-width: 760px) 60vw, 34vw"
                />
              </div>
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
