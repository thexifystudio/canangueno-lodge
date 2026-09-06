"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** "motes" = polen/luciérnagas subiendo. "haze" = neblina que respira. */
  variant?: "motes" | "haze";
  className?: string;
};

/**
 * Capa de ambiente sobre los bloques oscuros: polen flotando y una neblina
 * que respira muy despacio.
 *
 * Por qué en canvas y no con un video generado por IA: el fondo de estas
 * secciones es la FOTOGRAFÍA REAL del lodge. Superponerle material inventado
 * la ensucia y la contradice. Esto agrega vida sin tapar nada, pesa cero
 * kilobytes y toma sus colores de la paleta activa, así que sigue funcionando
 * si se cambia el tema.
 *
 * Se apaga solo con `prefers-reduced-motion` y se pausa cuando la sección no
 * está a la vista, para no gastar batería de fondo.
 */
export function Ambient({ variant = "motes", className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = false;
    let w = 0;
    let h = 0;

    type Mote = { x: number; y: number; r: number; speed: number; phase: number };
    let motes: Mote[] = [];

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--c-accent-soft").trim() ||
      "#c06b40";
    const light = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--c-on-deep").trim() ||
      "#f2f0e8";

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Menos partículas en pantallas chicas: es adorno, no puede costar batería.
      const count = w < 700 ? 14 : 26;
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.9,
        speed: 0.06 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function frame(t: number) {
      ctx!.clearRect(0, 0, w, h);

      if (variant === "haze") {
        const breathe = 0.5 + 0.5 * Math.sin(t / 5200);
        const grad = ctx!.createLinearGradient(0, h, 0, h * 0.35);
        grad.addColorStop(0, `rgba(255,255,255,${0.05 + breathe * 0.045})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, w, h);
      }

      const warm = accent();
      const pale = light();

      motes.forEach((m, i) => {
        m.y -= m.speed;
        m.x += Math.sin(t / 2600 + m.phase) * 0.22;
        if (m.y < -6) {
          m.y = h + 6;
          m.x = Math.random() * w;
        }

        const alpha = 0.18 + 0.42 * (0.5 + 0.5 * Math.sin(t / 1500 + m.phase));
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = i % 4 === 0 ? warm : pale;
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = ctx!.fillStyle as string;
        ctx!.beginPath();
        ctx!.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx!.fill();
      });

      ctx!.globalAlpha = 1;
      ctx!.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();

    // Sólo anima mientras la sección está a la vista.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [variant]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
