import type { NextConfig } from "next";
import { legacyRedirects } from "./legacy-redirects";
import { site } from "./src/config/site";

const nextConfig: NextConfig = {
  // La raíz manda al idioma por defecto. Cuando llegue el momento se puede
  // cambiar por detección de idioma del navegador en un middleware.
  // Después, las URLs de la web vieja de WordPress (ver `legacy-redirects.ts`).
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      // La página "Nosotros" (/about) se eliminó: quien tenga el enlace de la
      // URL provisional llega a la del lodge en vez de a un 404.
      {
        source: "/:locale(es|en|de|fr)/about",
        destination: "/:locale/el-lodge",
        permanent: true,
      },
      // La página de políticas se integró en /tours (y en cada tour).
      {
        source: "/:locale(es|en|de|fr)/politicas",
        destination: "/:locale/tours#condiciones",
        permanent: true,
      },
      ...legacyRedirects,
    ];
  },

  // URL provisional: además de robots.txt, cada respuesta dice `noindex`
  // (robots.txt sólo frena el rastreo, no que una URL enlazada se indexe).
  async headers() {
    if (site.live) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  images: {
    // Las fotos ya salen optimizadas (WebP, lado largo ≤ 1800 px, ver
    // `scripts/galeria.mjs`) y en Workers la optimización de `next/image`
    // necesita el servicio pago de Cloudflare Images. Se sirven tal cual.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    // Lista blanca para cuando las fotos vivan en R2 o en un CDN.
    remotePatterns: [],
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
