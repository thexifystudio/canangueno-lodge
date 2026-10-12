import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, pick } from "@/lib/i18n";
import { tours } from "@/content/tours";
import { site } from "@/config/site";

/** Rutas fijas del sitio (los slugs de tour se agregan aparte, por idioma). */
const STATIC_PATHS = [
  "",
  "/cuyabeno",
  "/tours",
  "/el-lodge",
  "/galeria",
  "/como-llegar",
  "/preguntas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const locale of LOCALES) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${site.url}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(
              LOCALES.map((l) => [l, `${site.url}/${l}${path}`]),
            ),
            "x-default": `${site.url}/${DEFAULT_LOCALE}${path}`,
          },
        },
      });
    }

    for (const tour of tours) {
      entries.push({
        url: `${site.url}/${locale}/tours/${pick(tour.slug, locale)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: {
            ...Object.fromEntries(
              LOCALES.map((l) => [
                l,
                `${site.url}/${l}/tours/${pick(tour.slug, l)}`,
              ]),
            ),
            "x-default": `${site.url}/${DEFAULT_LOCALE}/tours/${pick(tour.slug, DEFAULT_LOCALE)}`,
          },
        },
      });
    }
  }

  return entries;
}
