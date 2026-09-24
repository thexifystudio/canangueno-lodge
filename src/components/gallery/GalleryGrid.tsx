"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import {
  galleryCategories,
  galleryPhotos,
  type GalleryPhoto,
} from "@/content/gallery";

/** Cuántas fotos se muestran de entrada y cuántas suma cada "Ver más". */
const PAGE = 30;

const MORE: Record<Locale, string> = {
  es: "Ver más fotos",
  en: "Show more photos",
  de: "Mehr Fotos anzeigen",
  fr: "Voir plus de photos",
};

const ENLARGE: Record<Locale, string> = {
  es: "Ampliar: ",
  en: "Enlarge: ",
  de: "Vergrößern: ",
  fr: "Agrandir : ",
};

/**
 * "Todas" intercala las categorías (una de cada una, y otra vez) en vez de
 * mostrar sesenta animales seguidos antes de llegar al lodge.
 */
function interleave(photos: GalleryPhoto[]) {
  const groups = galleryCategories.map((c) =>
    photos.filter((p) => p.category === c.id),
  );
  const out: GalleryPhoto[] = [];
  for (let i = 0; out.length < photos.length; i++) {
    for (const g of groups) if (g[i]) out.push(g[i]);
  }
  return out;
}

export function GalleryGrid({
  locale,
  labels,
}: {
  locale: Locale;
  /** Sólo los textos que usa, no el diccionario entero en el cliente. */
  labels: {
    filter: string;
    all: string;
    gallery: string;
    close: string;
    previous: string;
    next: string;
  };
}) {
  const [filter, setFilter] = useState<string>("all"),
    [shown, setShown] = useState(PAGE),
    [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const all = useMemo(() => interleave(galleryPhotos), []);
  const items =
    filter === "all" ? all : galleryPhotos.filter((p) => p.category === filter);
  const visible = items.slice(0, shown);

  const altOf = (p: GalleryPhoto) =>
    pick(galleryCategories.find((c) => c.id === p.category)!.alt, locale);

  const move = (delta: number) =>
    setActive((i) =>
      i === null ? null : (i + delta + items.length) % items.length,
    );
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );
  return (
    <>
      <div
        className="exp-gallery-filters"
        role="group"
        aria-label={labels.filter}
      >
        {[
          { id: "all", label: labels.all, n: galleryPhotos.length },
          ...galleryCategories.map((c) => ({
            id: c.id,
            label: pick(c.label, locale),
            n: galleryPhotos.filter((p) => p.category === c.id).length,
          })),
        ].map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={filter === c.id}
            onClick={() => {
              setFilter(c.id);
              setShown(PAGE);
              setActive(null);
            }}
          >
            {c.label} <small>{c.n}</small>
          </button>
        ))}
      </div>
      {/*
       * Grilla, no multi-columna: con `grid` + una proporción única cada tile
       * ocupa su celda y todas entran en el flujo normal (la carga diferida
       * de `next/image` funciona). Se muestran de a 30 —cierra justo en 5,
       * 3 y 2 columnas— para no pedir las 176 fotos de golpe.
       */}
      <ul className="exp-gallery-grid">
        {visible.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              className="relative block w-full overflow-hidden"
              aria-label={ENLARGE[locale] + altOf(p)}
              onClick={() => {
                setActive(i);
                dialog.current?.showModal();
                document.body.style.overflow = "hidden";
              }}
            >
              <Image
                src={p.src}
                alt={altOf(p)}
                fill
                priority={i < 4}
                className="object-cover"
                sizes="(max-width: 560px) 50vw, (max-width: 1100px) 33vw, 25vw"
              />
            </button>
          </li>
        ))}
      </ul>
      {shown < items.length && (
        <div className="exp-gallery-more">
          <button
            type="button"
            className="exp-button"
            onClick={() => setShown((n) => n + PAGE)}
          >
            {MORE[locale]} ({items.length - shown})
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        className="exp-video-dialog exp-gallery-dialog"
        aria-label={labels.gallery}
        onClose={() => {
          setActive(null);
          document.body.style.overflow = "";
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="exp-video-bar">
          <p aria-live="polite">
            {active !== null ? active + 1 + " / " + items.length : ""}
          </p>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label={labels.close}
          >
            <X size={25} />
          </button>
        </div>
        {active !== null && items[active] && (
          <>
            <div className="exp-gallery-stage">
              <Image
                key={items[active].src}
                src={items[active].src}
                alt={altOf(items[active])}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="exp-gallery-caption">
              <p aria-live="polite">{altOf(items[active])}</p>
              <div>
                <button
                  onClick={() => move(-1)}
                  aria-label={labels.previous}
                >
                  <ChevronLeft size={22} />
                </button>
                <button onClick={() => move(1)} aria-label={labels.next}>
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
