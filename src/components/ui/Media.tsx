import Image from "next/image";
import { getMedia, type MediaId } from "@/config/media";
import { pick, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const PENDING_LABEL: Record<Locale, string> = {
  es: "Foto pendiente",
  en: "Photo pending",
  de: "Foto folgt",
  fr: "Photo à venir",
};

type Props = {
  id: MediaId;
  locale: Locale;
  /** Clases del elemento visual (el contenedor debe ser `relative`). */
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Oculta la etiqueta "foto pendiente" (ej. en el hero a pantalla completa). */
  hideLabel?: boolean;
};

/**
 * Punto único por el que pasan TODAS las imágenes del sitio.
 *
 * · Si la entrada de `src/config/media.ts` tiene `src`, se sirve con
 *   `next/image` (WebP/AVIF, srcset, lazy).
 * · Si no, se dibuja un placeholder compuesto con la paleta activa.
 *
 * Siempre llena a su contenedor, que tiene que ser `relative` + tener alto.
 */
export function Media({
  id,
  locale,
  className,
  priority,
  sizes,
  hideLabel,
}: Props) {
  const entry = getMedia(id);
  const alt = pick(entry.alt, locale);

  if (entry.src) {
    return (
      <Image
        src={entry.src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn("media-ph", className)}
      data-tone={entry.tone}
      role="img"
      aria-label={PENDING_LABEL[locale] + ": " + alt}
    >
      {!hideLabel && (
        <span className="media-ph__label">
          <strong>{PENDING_LABEL[locale]}</strong>
          <small>{alt}</small>
        </span>
      )}
    </div>
  );
}
