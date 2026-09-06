"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import type { MediaId } from "@/config/media";
import { Media } from "@/components/ui/Media";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Una imagen por momento del día, en orden. */
const MOMENT_MEDIA: MediaId[] = [
  "story-dawn",
  "story-wildlife",
  "lodge-dining",
  "gal-lagoon-1",
  "story-night",
];

/**
 * "Un día en Cuyabeno" — el momento de scroll horizontal del sitio.
 *
 * En escritorio la sección se fija y el riel se desplaza en horizontal.
 * En móvil y con `prefers-reduced-motion` no se fija nada: es una lista
 * vertical normal, que se lee igual de bien.
 */
export function StorySection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current;
        const section = root.current;
        if (!el || !section) return;

        const distance = () => el.scrollWidth - window.innerWidth;

        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-bg-deep text-on-deep lg:overflow-hidden">
      <div className="lg:flex lg:h-[100svh] lg:flex-col lg:justify-center">
        {/* Encabezado */}
        <div className="shell pt-[var(--section-y)] lg:pt-0">
          <span className="eyebrow block text-on-deep-faint">{dict.story.eyebrow}</span>
          <h2 className="mt-6 max-w-[24ch] text-[length:var(--text-2xl)]">
            {dict.story.title}{" "}
            <em className="font-light italic">{dict.story.titleEmphasis}</em>
          </h2>
          <p className="mt-5 max-w-[46ch] text-sm text-on-deep-soft">{dict.story.lead}</p>
        </div>

        {/* Riel */}
        <div
          ref={track}
          className="mt-14 flex flex-col gap-14 px-[var(--gutter)] lg:mt-16 lg:w-max lg:flex-row lg:gap-10 lg:pr-[28vw]"
        >
          {dict.story.moments.map((m, i) => (
            <article key={m.time} className="lg:w-[27rem] lg:shrink-0">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Media
                  id={MOMENT_MEDIA[i] ?? "story-dawn"}
                  locale={locale}
                  sizes="(max-width: 1024px) 100vw, 27rem"
                />
              </div>

              <div className="mt-6 flex items-baseline gap-5 border-t border-line-deep pt-5">
                <span className="font-display text-[1.9rem] leading-none tabular-nums text-accent-soft">
                  {m.time}
                </span>
                <h3 className="text-[length:var(--text-lg)] text-on-deep">{m.title}</h3>
              </div>

              <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-on-deep-soft">
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <div className="h-[var(--section-y)] lg:hidden" />
      </div>
    </section>
  );
}
