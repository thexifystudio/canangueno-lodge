import { Star } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Reseñas reales. Carrusel horizontal con scroll nativo (con snap): no
 * necesita JS, funciona con teclado y en móvil es lo que la gente espera.
 */
export function ReviewsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg-warm">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal stagger={0.1}>
            <span className="eyebrow block text-ink-faint">{dict.reviews.eyebrow}</span>
            <h2 className="mt-6 max-w-[20ch] text-[length:var(--text-2xl)] text-ink">
              {dict.reviews.title}{" "}
              <em className="font-light italic">{dict.reviews.titleEmphasis}</em>
            </h2>
          </Reveal>

          <Reveal className="flex items-center gap-3 md:pb-2">
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-accent text-accent" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm text-ink-soft">
              {site.rating.value.toFixed(1)} {dict.reviews.source}
            </span>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14 md:mt-20">
        <ul
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[var(--gutter)] pb-6 [scrollbar-width:thin]"
          tabIndex={0}
          aria-label={dict.reviews.eyebrow}
        >
          {reviews.map((r) => (
            <li
              key={r.id}
              className="flex w-[19rem] shrink-0 snap-start flex-col justify-between border-t border-ink/20 pt-6 sm:w-[22rem]"
            >
              <blockquote className="font-display text-[1.35rem] font-light leading-snug text-ink">
                “{r.quote}”
              </blockquote>

              <footer className="mt-7 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">{r.author}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">
                    {pick(r.date, locale)} · {r.source}
                  </p>
                </div>
                {r.excerpt && (
                  <span className="text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint">
                    {dict.reviews.excerptNote}
                  </span>
                )}
              </footer>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
