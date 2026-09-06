"use client";

import { useState } from "react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import type { Tour } from "@/content/tours";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";

/**
 * Itinerario interactivo. En vez de apilar día tras día con su foto (que es
 * lo que hace el sitio viejo y se lee larguísimo), la lista de días queda a
 * la izquierda y al elegir uno cambian la imagen y el texto de la derecha.
 *
 * Sin JS se ve el primer día completo y la lista entera de títulos, así que
 * la información no se pierde.
 */
export function TourItinerary({
  tour,
  locale,
  dict,
}: {
  tour: Tour;
  locale: Locale;
  dict: Dictionary;
}) {
  const [active, setActive] = useState(0);
  const day = tour.itinerary[active];

  return (
    <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
      {/* Lista de días */}
      <div className="lg:col-span-5">
        <h2 className="eyebrow mb-8 text-ink-faint">{dict.common.itinerary}</h2>

        <ol className="flex flex-col">
          {tour.itinerary.map((d, i) => {
            const isActive = i === active;
            return (
              <li key={d.n} className="relative">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "group flex w-full items-start gap-6 border-b border-line py-6 text-left transition-colors",
                    isActive ? "border-ink/40" : "hover:border-ink/25",
                  )}
                >
                  <span
                    className={cn(
                      "ordinal mt-1.5 shrink-0 transition-colors",
                      isActive ? "text-accent-text" : "text-ink-faint",
                    )}
                  >
                    {String(d.n).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-[1.35rem] leading-tight transition-colors",
                      isActive ? "text-ink" : "text-ink-soft group-hover:text-ink",
                    )}
                  >
                    {pick(d.title, locale)}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detalle del día */}
      <div className="lg:col-span-7">
        <div className="relative aspect-[3/2] overflow-hidden">
          {/* Se montan todas y se cruzan por opacidad: el cambio no parpadea */}
          {tour.itinerary.map((d, i) => (
            <div
              key={d.n}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === active ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={i !== active}
            >
              <Media
                id={d.mediaId}
                locale={locale}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="ordinal text-ink-faint">
            {dict.common.day} {String(day.n).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-[length:var(--text-xl)] text-ink">
            {pick(day.title, locale)}
          </h3>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-soft">
            {pick(day.body, locale)}
          </p>
        </div>
      </div>
    </div>
  );
}
