import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La raíz manda al idioma por defecto. Cuando llegue el momento se puede
  // cambiar por detección de idioma del navegador en un middleware.
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Lista blanca para cuando las fotos vivan en R2 o en un CDN.
    remotePatterns: [],
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
