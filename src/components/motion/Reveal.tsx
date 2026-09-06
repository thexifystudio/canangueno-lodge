"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Desplazamiento vertical inicial, en px. */
  y?: number;
  delay?: number;
  /** Si es > 0, anima los hijos directos en cascada en vez del bloque entero. */
  stagger?: number;
  /** Revelado con máscara, de abajo hacia arriba. Ideal para imágenes. */
  clip?: boolean;
  /** Punto del viewport donde dispara. */
  start?: string;
};

/**
 * Revelado al hacer scroll.
 *
 * El estado inicial se aplica dentro de `useGSAP` (layout effect, antes del
 * primer pintado): con JS no hay parpadeo y sin JS no hay nada escondido.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 30,
  delay = 0,
  stagger = 0,
  clip = false,
  start = "top 86%",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets: Element[] = stagger > 0 ? Array.from(el.children) : [el];
      if (targets.length === 0) return;

      const from = clip
        ? { clipPath: "inset(0% 0% 100% 0%)", scale: 1.06 }
        : { opacity: 0, y };
      const to = clip
        ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
        : { opacity: 1, y: 0 };

      gsap.set(targets, from);

      const tween = gsap.to(targets, {
        ...to,
        duration: clip ? 1.15 : 0.85,
        ease: clip ? "power2.out" : "power3.out",
        delay,
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });

      /**
       * Red de seguridad.
       *
       * Si por lo que sea el navegador no está corriendo `requestAnimationFrame`
       * (pestaña en segundo plano, throttling agresivo, algún panel embebido),
       * GSAP deja el estado inicial puesto y el bloque queda invisible para
       * siempre. Este temporizador —que NO depende de rAF— revisa a los 2,5 s
       * si el elemento está a la vista y la animación no arrancó, y en ese caso
       * lo muestra sin animar.
       *
       * Regla del proyecto: preferimos perder la animación antes que perder el
       * contenido.
       */
      const safety = window.setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && tween.progress() === 0) gsap.set(targets, to);
      }, 2500);

      return () => window.clearTimeout(safety);
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
