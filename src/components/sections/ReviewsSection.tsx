import { Star } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { reviews } from "@/content/reviews";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Reseñas reales con tratamiento editorial: la nota grande a un lado, una cita
 * destacada en display, y el resto en dos columnas tranquilas. Sin carrusel
 * horizontal — eso se veía barato.
 */
export function ReviewsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [featured, ...rest] = reviews;

  return (
    <section className="section-y bg-bg-deep text-on-deep">
      <div className="shell">
        {/* Encabezado + nota */}
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-12 md:items-end">
          <Reveal stagger={0.1} className="md:col-span-8">
            <span className="eyebrow block text-on-deep-faint">{dict.reviews.eyebrow}</span>
            <h2 className="mt-6 max-w-[16ch] text-[length:var(--text-3xl)] text-on-deep">
              {dict.reviews.title}{" "}
              <em className="font-light italic">{dict.reviews.titleEmphasis}</em>
            </h2>
          </Reveal>

          <Reveal className="md:col-span-4 md:justify-self-end">
            <div className="flex items-end gap-3">
              <span className="font-display text-[3.4rem] leading-[0.8] text-on-deep tabular-nums">
                {site.rating.value.toFixed(1)}
              </span>
              <div className="pb-1.5">
                <span className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent-soft text-accent-soft"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <p className="mt-1.5 text-xs text-on-deep-faint">{dict.reviews.source}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cita destacada */}
        <Reveal className="mt-14 border-t border-line-deep pt-12 md:mt-20 md:pt-16">
          <blockquote className="max-w-[26ch] font-display text-[length:var(--text-2xl)] font-light leading-[1.16] text-on-deep">
            <span className="text-accent-soft" aria-hidden>
              &ldquo;
            </span>
            {featured.quote}
            <span className="text-accent-soft" aria-hidden>
              &rdquo;
            </span>
          </blockquote>
          <footer className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="font-medium text-on-deep">{featured.author}</span>
            <span className="hidden h-px w-8 bg-line-deep sm:block" aria-hidden />
            <span className="text-on-deep-faint">
              {pick(featured.date, locale)} &middot; {featured.source}
            </span>
          </footer>
        </Reveal>

        {/* Resto */}
        <div className="mt-14 grid gap-x-16 gap-y-12 md:mt-20 md:grid-cols-2">
          {rest.map((r) => (
            <Reveal key={r.id} y={26}>
              <div className="h-full border-t border-line-deep pt-7">
                <blockquote className="font-display text-[1.3rem] font-light leading-snug text-on-deep-soft">
                  {r.quote}
                </blockquote>
                <footer className="mt-5 flex items-baseline justify-between gap-4 text-xs">
                  <span className="font-medium text-on-deep">{r.author}</span>
                  <span className="text-on-deep-faint">{pick(r.date, locale)}</span>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
