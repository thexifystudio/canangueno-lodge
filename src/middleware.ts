import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "@/lib/i18n";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  IDIOMA DE ENTRADA Y 404 SIN IDIOMA
 * ────────────────────────────────────────────────────────────────────────────
 *  · `/` → al idioma del navegador si es uno de los cuatro; si no, inglés
 *    (`DEFAULT_LOCALE`, también el `x-default` del hreflang). Redirección
 *    temporal: la raíz no es una página, es una puerta.
 *
 *  · URLs sin un idioma válido (`/xx/algo`, `/contacto`) → el 404 del sitio,
 *    en el idioma del navegador, con su cabecera y su pie. Sin esto, el
 *    layout de `[locale]` (que es el layout raíz) rechazaba el idioma y Next
 *    mostraba su 404 genérico: negro, en inglés y sin nada del sitio. Se
 *    reescribe (no se redirige): la URL queda igual y el estado es 404.
 *
 *  Las URLs viejas de WordPress no llegan acá: las redirecciones de
 *  `next.config.ts` se resuelven antes.
 */

/** El primero de los idiomas del navegador que el sitio tiene. */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .filter((x) => x.lang && !Number.isNaN(x.q))
    .sort((a, b) => b.q - a.q);
  const found = ranked.find((x) =>
    (LOCALES as readonly string[]).includes(x.lang),
  );
  return found ? (found.lang as Locale) : DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale(request)}`;
    const res = NextResponse.redirect(url, 307);
    res.headers.set("Vary", "Accept-Language");
    return res;
  }

  if (isLocale(pathname.split("/")[1])) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}/pagina-no-encontrada`;
  return NextResponse.rewrite(url);
}

export const config = {
  /* La raíz y todo lo demás, menos los archivos de Next, las fotos y
     cualquier archivo con extensión (robots.txt, llms.txt, icon.png…). */
  matcher: ["/", "/((?!_next|fotos|marca|.*\\..*).+)"],
};
