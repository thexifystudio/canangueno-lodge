"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll suave con Lenis, sincronizado con el ticker de GSAP para que
 * ScrollTrigger no se desfase.
 *
 * Se apaga entero si el visitante pidió menos movimiento — en ese caso el
 * navegador maneja el scroll como siempre.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Escotilla de QA: `?nosmooth=1` desactiva el scroll suave sin tocar código.
    // Sirve para aislar problemas de render y para revisar en herramientas que
    // no se llevan bien con el scroll sintético.
    const disabled = new URLSearchParams(window.location.search).has("nosmooth");
    if (reduce || disabled) return;

    const lenis = new Lenis({
      // Más corto que el default: el scroll suave se nota apenas, no flota.
      duration: 0.8,
      smoothWheel: true,
      // Sin esto los enlaces con ancla (#experiencia) dejan de funcionar:
      // Lenis se queda con el control del scroll y el salto nativo no ocurre.
      anchors: { offset: -76 },
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Disponible para depurar y para que cualquier código futuro pueda pedir
    // un scroll programático (window.scrollTo NO funciona con Lenis activo).
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
