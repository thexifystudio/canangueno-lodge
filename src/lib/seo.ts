import type { Metadata } from "next";
import { LOCALES, pick, type Locale } from "@/lib/i18n";
import { site } from "@/config/site";
import { getMedia, type MediaId } from "@/config/media";

const OG_LOCALE: Record<Locale, string> = {
  es: "es_EC",
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
};

/**
 * Metadatos completos de una página: título, descripción, canonical,
 * hreflang (con `x-default`) y Open Graph.
 *
 * Next reemplaza el objeto `openGraph` ENTERO en cada página que lo define,
 * y hereda el del layout en las que no: sin esto, compartir `/es/tours`
 * mostraba el título y la URL de la portada, y los tours salían sin imagen.
 * Por eso cada página arma el suyo completo acá, nunca a mano.
 */
export function pageMetadata(
  locale: Locale,
  {
    title,
    description,
    path,
    image = "hero",
  }: {
    /** Sin la marca: el layout le agrega "· Canangueno Lodge". */
    title: string;
    description: string;
    /** La URL de esta misma página en cada idioma. */
    path: (l: Locale) => string;
    image?: MediaId;
  },
): Metadata {
  const img = getMedia(image);
  return {
    title,
    description,
    alternates: {
      canonical: path(locale),
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, path(l)])),
        "x-default": path("en"),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: OG_LOCALE[locale],
      title: `${title} · ${site.name}`,
      description,
      url: path(locale),
      images: img.src ? [{ url: img.src, alt: pick(img.alt, locale) }] : [],
    },
  };
}
