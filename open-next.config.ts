import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Todas las páginas se generan en el build (`dynamicParams = false` en el
 * layout de `[locale]`) y no se revalidan: el caché de solo lectura sobre los
 * assets estáticos alcanza, sin KV ni R2.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
