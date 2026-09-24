import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";

import { LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { fontVariables } from "@/lib/fonts";
import { theme } from "@/config/theme";
import { site } from "@/config/site";
import { tours } from "@/content/tours";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* Sólo los cuatro idiomas existen como segmento: `/xx` no entra a este
   layout (que no sabría en qué idioma hablar) y lo atiende
   `app/global-not-found.tsx`. */
export const dynamicParams = false;

export const viewport: Viewport = {
  /* El verde del dosel (`--raw-canopy` de "selva viva"): la barra del
     navegador toma el color de la cabecera sobre el hero. */
  themeColor: "#10291c",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  const home = pageMetadata(locale, {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    path: (l) => routes.home(l),
  });

  return {
    ...home,
    metadataBase: new URL(site.url),
    /* La portada usa su título tal cual (ya lleva la marca); las demás
       páginas pasan por el `template`. */
    title: { default: dict.meta.homeTitle, template: `%s · ${site.name}` },
    openGraph: { ...home.openGraph, title: dict.meta.homeTitle },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      data-palette={theme.palette}
      className={fontVariables}
      style={{ ["--radius" as string]: theme.radius }}
      suppressHydrationWarning
    >
      <body>
        <Header
          locale={typedLocale}
          nav={dict.nav}
          aboutLabel={dict.about.navLabel}
          tourSlugs={tours.map((t) => t.slug)}
        />
        <main id="main">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <WhatsAppFab
          locale={typedLocale}
          label={dict.common.whatsapp}
          tours={tours.map((t) => ({
            id: t.id,
            days: t.days,
            featured: Boolean(t.featured),
            slugs: Object.values(t.slug),
          }))}
        />
        <OrganizationJsonLd locale={typedLocale} />
      </body>
    </html>
  );
}
