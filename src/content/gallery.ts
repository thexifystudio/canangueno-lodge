import type { Localized } from "@/lib/i18n";
import { galleryPhotos, type GalleryPhoto } from "./gallery-photos";

/**
 * Galería. Las fotos salen de las carpetas "Listas" del cliente vía
 * `node scripts/galeria.mjs`, que genera `gallery-photos.ts`. Acá sólo viven
 * los nombres de las categorías y el texto alternativo de cada una.
 */

export type GalleryCategoryId = GalleryPhoto["category"];

export const galleryCategories: {
  id: GalleryCategoryId;
  label: Localized;
  /** Texto alternativo de las fotos de esta categoría. */
  alt: Localized;
}[] = [
  {
    id: "fauna",
    label: { es: "Flora y fauna", en: "Flora & fauna", de: "Flora & Fauna", fr: "Faune & flore" },
    alt: {
      es: "Flora y fauna de la Reserva Cuyabeno",
      en: "Wildlife and plants of the Cuyabeno Reserve",
      de: "Tier- und Pflanzenwelt im Cuyabeno-Reservat",
      fr: "Faune et flore de la réserve de Cuyabeno",
    },
  },
  {
    id: "paisajes",
    label: { es: "Paisajes", en: "Landscapes", de: "Landschaften", fr: "Paysages" },
    alt: {
      es: "Paisaje del río y las lagunas de Cuyabeno",
      en: "Landscape of the Cuyabeno river and lagoons",
      de: "Landschaft mit Fluss und Lagunen in Cuyabeno",
      fr: "Paysage du fleuve et des lagunes de Cuyabeno",
    },
  },
  {
    id: "lodge",
    label: { es: "El lodge", en: "The lodge", de: "Die Lodge", fr: "Le lodge" },
    alt: {
      es: "Instalaciones de Canangueno Lodge",
      en: "Canangueno Lodge facilities",
      de: "Die Anlage der Canangueno Lodge",
      fr: "Les installations du Canangueno Lodge",
    },
  },
  {
    id: "personas",
    label: { es: "Viajeros", en: "Travellers", de: "Reisende", fr: "Voyageurs" },
    alt: {
      es: "Viajeros durante un tour en Cuyabeno",
      en: "Travellers on a tour in Cuyabeno",
      de: "Reisende auf einer Tour in Cuyabeno",
      fr: "Voyageurs pendant un circuit à Cuyabeno",
    },
  },
];

export { galleryPhotos, type GalleryPhoto };
