"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  closeLabel: string;
  variant?: "pill" | "circle" | "cover";
  onDeep?: boolean;
  className?: string;
};

/**
 * Reproductor del video oficial del lodge.
 *
 * Patrón "fachada": la página sólo pinta un botón. El iframe de YouTube se
 * crea recién al hacer clic, así el video no suma peso ni cookies de terceros
 * a la carga inicial. Se usa el dominio `youtube-nocookie.com`.
 */
export function VideoLightbox({
  label,
  closeLabel,
  variant = "pill",
  onDeep = true,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    // Se guarda el botón que abrió el modal para devolverle el foco al cerrar.
    const opener = triggerRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center transition-colors duration-300",
          variant === "pill" &&
            cn(
              "gap-3 rounded-full border py-2.5 pl-2.5 pr-6 text-sm font-medium backdrop-blur-sm",
              onDeep
                ? "border-on-deep/35 text-on-deep hover:border-on-deep hover:bg-on-deep/10"
                : "border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.04]",
            ),
          variant === "circle" && "flex-col gap-4",
          variant === "cover" && "flex-col gap-3.5 text-on-deep",
          className,
        )}
      >
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-105",
            variant === "pill" && "h-9 w-9 bg-accent text-accent-ink",
            variant === "circle" &&
              "h-20 w-20 border border-on-deep/50 bg-on-deep/10 text-on-deep backdrop-blur-md md:h-28 md:w-28",
            variant === "cover" &&
              "h-16 w-16 bg-accent text-accent-ink shadow-[0_16px_44px_-10px_rgba(0,0,0,0.55)] md:h-20 md:w-20",
          )}
        >
          <Play
            size={variant === "pill" ? 15 : variant === "cover" ? 22 : 26}
            strokeWidth={1.4}
            className="ml-0.5 fill-current"
          />
        </span>
        {variant === "circle" ? (
          <span className="eyebrow text-on-deep-soft">{label}</span>
        ) : variant === "cover" ? (
          <span className="eyebrow text-on-deep drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            {label}
          </span>
        ) : (
          label
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={site.video.title}
          className="fixed inset-0 z-[90] flex flex-col bg-black/92 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-[var(--gutter)] py-5">
            <p className="text-sm text-white/70">{site.video.title}</p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="p-2 text-white transition-opacity hover:opacity-70"
            >
              <X size={22} strokeWidth={1.4} />
            </button>
          </div>

          {/* Clic fuera del video para cerrar. Es un div y no un botón porque
              adentro va un iframe, y HTML no permite contenido interactivo
              dentro de un <button>. El cierre accesible son Esc y la X. */}
          <div
            onClick={close}
            className="flex flex-1 items-center justify-center px-[var(--gutter)] pb-10"
          >
            <div
              className="aspect-video w-full max-w-[76rem] overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={site.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
