import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * Galería. Las categorías son las mismas que ya usa el lodge en su sitio
 * (cabañas, flora y fauna, laguna, comunidad, restaurante, río).
 *
 * Para sumar fotos: agregá la entrada en `src/config/media.ts` y su id acá.
 */

export type GalleryCategory = {
  id: string;
  label: Localized;
  items: MediaId[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    id: "laguna",
    label: { es: "Laguna", en: "Lagoon" },
    items: ["gal-lagoon-1", "gal-lagoon-2"],
  },
  {
    id: "fauna",
    label: { es: "Flora y fauna", en: "Flora & fauna" },
    items: ["gal-fauna-1", "gal-fauna-2", "gal-fauna-3", "gal-forest-1", "gal-forest-2"],
  },
  {
    id: "comunidad",
    label: { es: "Comunidad", en: "Community" },
    items: ["gal-community-1", "gal-community-2"],
  },
  {
    id: "lodge",
    label: { es: "El lodge", en: "The lodge" },
    items: ["gal-lodge-1", "gal-lodge-2"],
  },
  {
    id: "rio",
    label: { es: "Río", en: "River" },
    items: ["gal-river-1", "gal-river-2"],
  },
];

/** Todas las fotos, en el orden en que se muestran sin filtro. */
export const allGalleryItems: MediaId[] = galleryCategories.flatMap((c) => c.items);
