import type { Metadata } from "next";
import "@/app/globals.css";
import { fontVariables } from "@/lib/fonts";
import { theme } from "@/config/theme";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "404 · Canangueno Lodge",
  robots: { index: false },
};

/**
 * 404 de las URLs que ni siquiera tienen un idioma válido (`/xx/…`). El
 * layout de `[locale]` no puede atenderlas —no sabe en qué idioma hablar—,
 * así que esta página se sirve sola, con su propio `<html>`, y ofrece los
 * cuatro idiomas en vez de adivinar uno.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="es"
      data-palette={theme.palette}
      className={fontVariables}
      style={{ ["--radius" as string]: theme.radius }}
    >
      <body>
        <main id="main" className="exp-notfound">
          <div className="shell">
            <p className="exp-notfound-code" aria-hidden>
              404
            </p>
            <h1>Esta página se perdió en la selva.</h1>
            <p lang="en">This page got lost in the jungle.</p>
            <nav aria-label="Idioma · Language" className="exp-detail-actions">
              {LOCALES.map((l) => (
                <a key={l} href={routes.home(l)} lang={l} className="exp-text-link">
                  {LOCALE_LABELS[l].long}
                </a>
              ))}
            </nav>
          </div>
        </main>
      </body>
    </html>
  );
}
