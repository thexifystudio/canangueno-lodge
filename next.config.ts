import type { NextConfig } from "next";
import { legacyRedirects } from "./legacy-redirects";
import { site } from "./src/config/site";

const nextConfig: NextConfig = {
  // La raíz `/` la resuelve `src/middleware.ts` (idioma del navegador). Acá:
  // páginas que se eliminaron y las URLs de la web vieja de WordPress (ver
  // `legacy-redirects.ts`).
  async redirects() {
    return [
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
    // En Workers no hay optimización de imágenes sin el servicio pago de
    // Cloudflare Images. `scripts/imagenes.mjs` deja hechas copias de 480 y
    // 800 px de cada foto y este cargador arma el `srcset` con ellas: cada
    // pantalla baja la que necesita (ver src/lib/image-loader.ts).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Los anchos del `srcset`: las dos copias y la original (≤ 1800 px).
    deviceSizes: [480, 800, 1800],
    imageSizes: [],
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
