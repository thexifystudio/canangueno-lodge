"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { galleryCategories, allGalleryItems } from "@/content/gallery";
import { getMedia, type MediaId } from "@/config/media";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";

/**
 * Galería en mosaico con filtro por categoría y lightbox.
 * El lightbox se maneja con teclado (←, →, Esc) y devuelve el foco al cerrar.
 */
export function GalleryGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items: MediaId[] =
    filter === "all"
      ? allGalleryItems
      : (galleryCategories.find((c) => c.id === filter)?.items ?? []);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? null : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        <span className="eyebrow text-ink-faint">{dict.gallery.filterLabel}</span>
        {[{ id: "all", label: dict.common.all }, ...galleryCategories.map((c) => ({
          id: c.id,
          label: pick(c.label, locale),
        }))].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              setFilter(c.id);
              setOpen(null);
            }}
            aria-pressed={filter === c.id}
            className={cn(
              "border-b pb-1 text-sm transition-colors",
              filter === c.id
                ? "border-ink text-ink"
                : "border-transparent text-ink-faint hover:text-ink",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Mosaico.
          Va con `columns` y no con `grid`: una grilla con `row-span` deja
          celdas vacías cuando las fotos tienen alturas distintas, y se ven
          agujeros. Con multi-columna las piezas se acomodan solas sin huecos,
          y cada una conserva su proporción real. */}
      <ul className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6 [column-fill:balance]">
        {items.map((id, i) => {
          const entry = getMedia(id);
          return (
            <li key={id} className="mb-4 break-inside-avoid md:mb-6">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden"
                style={{ aspectRatio: entry.ratio ?? "3/2" }}
              >
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                  <Media
                    id={id}
                    locale={locale}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Lightbox */}
      {open !== null && items[open] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={getMedia(items[open]).alt[locale]}
          className="fixed inset-0 z-[80] flex flex-col bg-bg-deep/97 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-[var(--gutter)] py-5">
            <span className="ordinal text-on-deep-faint tabular-nums">
              {String(open + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={dict.common.close}
              className="p-2 text-on-deep transition-opacity hover:opacity-70"
            >
              <X size={22} strokeWidth={1.4} />
            </button>
          </div>

          <div className="relative flex-1 px-[var(--gutter)] pb-6">
            <div className="relative h-full w-full">
              <Media id={items[open]} locale={locale} hideLabel sizes="100vw" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 px-[var(--gutter)] pb-8">
            <p className="max-w-[54ch] text-sm text-on-deep-soft">
              {getMedia(items[open]).alt[locale]}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label={dict.common.previous}
                className="border border-on-deep/30 p-3 text-on-deep transition-colors hover:bg-on-deep/10"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label={dict.common.next}
                className="border border-on-deep/30 p-3 text-on-deep transition-colors hover:bg-on-deep/10"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
