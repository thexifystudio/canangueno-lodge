import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import type { Tour } from "@/content/tours";
import { routes } from "@/lib/routes";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";

/**
 * Tarjeta de tour. Sin borde ni sombra: la jerarquía sale de la fotografía y
 * del espacio. Al pasar el cursor la imagen hace un zoom lento y el enlace
 * se subraya.
 */
export function TourCard({
  tour,
  locale,
  dict,
  index,
  className,
}: {
  tour: Tour;
  locale: Locale;
  dict: Dictionary;
  index: number;
  className?: string;
}) {
  const href = routes.tour(locale, pick(tour.slug, locale));

  return (
    <article className={cn("group", className)}>
      <Link href={href} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-bg-deep">
          <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
            <Media
              id={tour.mediaId}
              locale={locale}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {tour.featured && (
            <span className="absolute left-4 top-4 z-10 bg-accent px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-accent-ink">
              {dict.tours.recommended}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <span className="ordinal text-ink-faint">
            {String(index + 1).padStart(2, "0")} — {tour.days} {dict.common.days}
          </span>
          <span className="ordinal text-ink-faint">
            {tour.nights} {dict.common.nights}
          </span>
        </div>

        <h3 className="mt-5 text-[length:var(--text-xl)] text-ink">
          {pick(tour.tagline, locale)}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {pick(tour.summary, locale)}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <p className="leading-tight">
            <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
              {dict.common.from}
            </span>
            <span className="font-display text-[1.75rem] leading-none text-ink tabular-nums">
              USD {tour.price}
            </span>
            <span className="mt-1 block text-xs text-ink-faint">{dict.common.perPerson}</span>
          </p>

          <span className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm text-ink transition-colors group-hover:border-ink">
            {dict.common.viewItinerary}
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
