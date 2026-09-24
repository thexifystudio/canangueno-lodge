"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Revelado al entrar en pantalla.
 *
 * Se hace con IntersectionObserver + una transición CSS, sin GSAP: son ~40
 * líneas contra ~80 KB de librería, y evita el bug que ya nos mordió antes
 * (si el navegador no corre `requestAnimationFrame`, una animación por JS deja
 * el contenido invisible para siempre).
 *
 * El estado inicial lo pone el propio efecto, no el CSS del servidor: si el
 * JavaScript falla, la página se ve entera, sólo que sin animación.
 */

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Retardo en ms; sirve para escalonar hermanos. */
  delay?: number;
  /** Desplazamiento inicial en px. */
  y?: number;
  /** Anima los hijos directos en cascada en lugar del bloque entero. */
  stagger?: number;
};

const DURATION = "760ms";
const EASE = "cubic-bezier(0.22, 0.68, 0.24, 1)";

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 18,
  stagger = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] =
      stagger > 0
        ? (Array.from(host.children) as HTMLElement[])
        : [host as unknown as HTMLElement];
    if (targets.length === 0) return;

    targets.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translate3d(0," + y + "px,0)";
      el.style.transition =
        "opacity " +
        DURATION +
        " " +
        EASE +
        ", transform " +
        DURATION +
        " " +
        EASE;
      el.style.transitionDelay = delay + i * stagger + "ms";
      el.style.willChange = "opacity, transform";
    });

    const show = () => {
      targets.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      // `will-change` sostenido cuesta memoria; se suelta al terminar.
      window.setTimeout(
        () => {
          targets.forEach((el) => {
            el.style.willChange = "";
          });
        },
        1200 + delay + targets.length * stagger,
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        show();
        io.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(host);

    // Red de seguridad: si el observer nunca dispara (pestaña en segundo
    // plano, navegador raro), a los 2,5 s se muestra igual. Preferimos perder
    // la animación antes que perder el contenido.
    const safety = window.setTimeout(show, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
