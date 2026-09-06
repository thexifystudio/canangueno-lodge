"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Hero a pantalla completa.
 *
 * Composición asimétrica: el texto vive abajo a la izquierda y la franja de
 * datos corre por el borde inferior. Nada centrado — la foto manda.
 *
 * Movimiento: la imagen entra con máscara y un parallax lento al hacer scroll;
 * el texto entra en cascada. Todo el estado inicial lo pone GSAP antes del
 * primer pintado, así que sin JS el hero se ve completo y quieto.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-media", {
        clipPath: "inset(14% 12% 14% 12%)",
        scale: 1.14,
        duration: 1.5,
        ease: "power2.out",
      })
        .from(
          ".hero-line",
          { yPercent: 108, duration: 1.1, stagger: 0.09 },
          "-=1.05",
        )
        .from(".hero-lead", { opacity: 0, y: 22, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from(".hero-meta", { opacity: 0, duration: 0.8 }, "-=0.4");

      // Red de seguridad: si el navegador no corre rAF, la línea de tiempo
      // nunca avanza y el hero queda vacío. A los 2,5 s se salta al final.
      // Ver la misma lógica y su porqué en `components/motion/Reveal.tsx`.
      const safety = window.setTimeout(() => {
        if (tl.progress() === 0) tl.progress(1);
      }, 2500);

      // Parallax: la imagen se mueve más lento que la página.
      gsap.to(".hero-media", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => window.clearTimeout(safety);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex h-[100svh] min-h-[36rem] flex-col justify-end overflow-hidden bg-bg-deep"
    >
      {/* Imagen */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-media absolute inset-[-8%]">
          <Media id="hero" locale={locale} priority hideLabel sizes="100vw" />
        </div>
        {/* Velo para que el texto siempre tenga contraste */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,13,0.28)_0%,rgba(8,18,13,0.10)_32%,rgba(8,18,13,0.70)_72%,rgba(8,18,13,0.90)_100%)]"
        />
      </div>

      <div className="shell relative pb-10 md:pb-14">
        <div className="max-w-[54rem]">
          <div className="overflow-hidden">
            <p className="hero-line eyebrow text-on-deep-soft">{dict.hero.eyebrow}</p>
          </div>

          <h1 className="mt-7 text-on-deep">
            <span className="block overflow-hidden">
              <span className="hero-line display-hero block">{dict.hero.title}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line display-hero block font-light italic">
                {dict.hero.titleEmphasis}
              </span>
            </span>
          </h1>

          <p className="hero-lead mt-8 max-w-[46ch] text-[length:var(--text-lg)] font-light leading-relaxed text-on-deep-soft">
            {dict.hero.lead}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <span className="hero-cta">
              <ButtonLink href={routes.tours(locale)} variant="primary" size="lg">
                {dict.hero.ctaPrimary}
              </ButtonLink>
            </span>
            <span className="hero-cta">
              <ButtonLink href={routes.book(locale)} variant="light" size="lg">
                {dict.hero.ctaSecondary}
              </ButtonLink>
            </span>
          </div>
        </div>
      </div>

      {/* Franja de datos en el borde inferior */}
      <div className="hero-meta relative border-t border-on-deep/20">
        <div className="shell flex items-center justify-between gap-6 py-5">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-2 text-on-deep-soft">
            <div className="flex items-baseline gap-2.5">
              <dt className="sr-only">{dict.location.eyebrow}</dt>
              <dd className="eyebrow">{dict.hero.metaLocation}</dd>
            </div>
            <div className="flex items-baseline gap-2.5">
              <dt className="sr-only">{dict.tours.tableDuration}</dt>
              <dd className="eyebrow">{dict.hero.metaDuration}</dd>
            </div>
            <div className="flex items-baseline gap-2.5">
              <dt className="sr-only">{dict.common.price}</dt>
              <dd className="eyebrow text-on-deep">{dict.hero.metaPrice}</dd>
            </div>
          </dl>

          <span className="hidden items-center gap-2.5 text-on-deep-faint sm:flex" aria-hidden>
            <span className="eyebrow">{dict.common.scroll}</span>
            <ArrowDown size={15} strokeWidth={1.5} className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
