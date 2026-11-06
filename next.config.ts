import type { NextConfig } from "next";
import { legacyRedirects } from "./legacy-redirects";
import { site } from "./src/config/site";

/** Direcciones que sirven el mismo sitio pero no son la canónica (`site.url`). */
const NON_CANONICAL_HOSTS = [
  "cananguenolodge.com",
  "canangueno.thexifystudio.workers.dev",
];

/**
 * Cabeceras de seguridad básicas. Sin CSP a propósito: el hero embebe YouTube
 * y una CSP mal ajustada lo rompería sin aviso. HSTS sin `includeSubDomains`,
 * porque `mail.` y `webmail.` siguen en el hosting del correo.
 */
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

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
      // Con el dominio conectado, una sola dirección por página: el dominio
      // sin `www` y la URL provisional de Workers mandan a `www`. Sin esto
      // Google ve tres copias del sitio. Conserva la ruta y los parámetros
      // (UTM de las campañas): una URL vieja de WordPress en el dominio sin
      // `www` hace dos saltos, la suya y ésta, y Google sigue los dos.
      ...(site.live
        ? NON_CANONICAL_HOSTS.map((host) => ({
            source: "/:path*",
            has: [{ type: "host" as const, value: host }],
            destination: `${site.url}/:path*`,
            permanent: true,
          }))
        : []),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...SECURITY_HEADERS,
          // URL provisional: además de robots.txt, cada respuesta dice
          // `noindex` (robots.txt sólo frena el rastreo, no que una URL
          // enlazada se indexe).
          ...(site.live
            ? []
            : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
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
