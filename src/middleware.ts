import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

/**
 * URLs sin un idioma válido (`/xx/algo`, `/contacto`) → el 404 en español
 * del sitio, con su cabecera y su pie.
 *
 * Sin esto, el layout de `[locale]` (que es el layout raíz) rechazaba el
 * idioma inválido y Next mostraba su 404 genérico: negro, en inglés y sin
 * nada del sitio. Se reescribe (no se redirige): la URL queda igual y la
 * respuesta sale con estado 404, como corresponde.
 *
 * Las URLs viejas de WordPress no llegan acá: las redirecciones de
 * `next.config.ts` se resuelven antes.
 */
export function middleware(request: NextRequest) {
  const first = request.nextUrl.pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/es/pagina-no-encontrada";
  return NextResponse.rewrite(url);
}

export const config = {
  /* Todo menos la raíz (redirige al idioma), los archivos de Next, la API,
     las fotos y cualquier archivo con extensión (robots.txt, icon.png…). */
  matcher: ["/((?!_next|api|fotos|marca|.*\\..*).+)"],
};
