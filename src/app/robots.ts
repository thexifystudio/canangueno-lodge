import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // URL provisional: nada se indexa hasta conectar el dominio real.
  if (!site.live) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // `/reservar` NO se bloquea acá: lleva `noindex`, y si el robot no
        // puede entrar nunca llega a leerlo (y la URL igual se indexa sola).
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
