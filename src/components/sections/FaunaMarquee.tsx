import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { fauna } from "@/content/fauna";

/**
 * Cinta de fauna entre secciones.
 *
 * Es un recurso editorial, no decoración: rompe la cadencia de
 * "etiqueta → título → párrafo → grilla" que se repetía en todas las
 * secciones y que es justo lo que hace que una web se lea genérica.
 *
 * Se anima con CSS puro (no JS) duplicando la lista dos veces y desplazando
 * el 50 %. La copia duplicada va oculta a los lectores de pantalla.
 */
export function FaunaMarquee({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = fauna.map((f) => pick(f, locale));

  return (
    <section
      aria-label={dict.fauna.eyebrow}
      className="overflow-hidden border-y border-line-deep bg-bg-deep py-7"
    >
      <div className="flex w-max animate-[marquee_60s_linear_infinite] items-center gap-10 pr-10 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-10"
          >
            {items.map((name) => (
              <span key={name} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-display text-[1.5rem] font-light text-on-deep-soft md:text-[1.9rem]">
                  {name}
                </span>
                <span aria-hidden className="text-accent-soft">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
