import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";

import { LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { fontVariables } from "@/lib/fonts";
import { theme } from "@/config/theme";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#102a20",
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

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.homeTitle,
      template: `%s · ${site.name}`,
    },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "es" ? "es_EC" : "en_US",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `/${locale}`,
    },
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
        <SmoothScroll />
        <Header locale={typedLocale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <WhatsAppFab locale={typedLocale} dict={dict} />
        <OrganizationJsonLd locale={typedLocale} />
      </body>
    </html>
  );
}
