import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";

import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { FaunaMarquee } from "@/components/sections/FaunaMarquee";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { StorySection } from "@/components/sections/StorySection";
import { LodgeSection } from "@/components/sections/LodgeSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingCta } from "@/components/sections/BookingCta";
import { LocationSection } from "@/components/sections/LocationSection";
import { ToursListJsonLd } from "@/components/seo/JsonLd";

/**
 * Portada.
 *
 * El orden de las secciones ES el argumento de venta:
 *   deseo → contexto → qué se hace → qué se compra → cómo se siente →
 *   dónde se duerme → prueba social → reservar → dónde queda.
 *
 * Para reordenar o quitar una sección, se mueve una línea de acá. Ninguna
 * sección depende de la anterior.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      {/* El ritmo alterna claro / arena / oscuro a propósito: si todas las
          secciones se ven igual, la página se lee como una plantilla. */}
      <Hero locale={l} dict={dict} />
      <Statement locale={l} dict={dict} />
      <FaunaMarquee locale={l} dict={dict} />
      <ExperienceSection locale={l} dict={dict} />
      <ToursSection locale={l} dict={dict} />
      <StorySection locale={l} dict={dict} />
      <LodgeSection locale={l} dict={dict} />
      <VideoSection locale={l} dict={dict} />
      <ReviewsSection locale={l} dict={dict} />
      <BookingCta locale={l} dict={dict} />
      <LocationSection locale={l} dict={dict} />
      <ToursListJsonLd locale={l} />
    </>
  );
}
