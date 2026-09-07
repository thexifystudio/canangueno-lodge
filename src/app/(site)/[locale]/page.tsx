import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";

import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { FaunaMarquee } from "@/components/sections/FaunaMarquee";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { PhotosSection } from "@/components/sections/PhotosSection";
import { LodgeSection } from "@/components/sections/LodgeSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingCta } from "@/components/sections/BookingCta";
import { LocationSection } from "@/components/sections/LocationSection";
import { ToursListJsonLd } from "@/components/seo/JsonLd";

/**
 * Portada.
 *
 * Cada sección tiene un solo trabajo: presentar la reserva, mostrar la
 * experiencia, ver los tours, ver el video, ver las fotos, conocer el lodge,
 * leer opiniones, reservar, ubicarse. El fondo alterna claro / arena / oscuro
 * a propósito: si todo se ve igual, la página se lee como plantilla.
 *
 * Para reordenar o quitar una sección se mueve una línea de acá. Ninguna
 * depende de la anterior.
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
      <Hero locale={l} dict={dict} />
      <Statement locale={l} dict={dict} />
      <FaunaMarquee locale={l} dict={dict} />
      <ExperienceSection locale={l} dict={dict} />
      <ToursSection locale={l} dict={dict} />
      <VideoSection locale={l} dict={dict} />
      <PhotosSection locale={l} dict={dict} />
      <LodgeSection locale={l} dict={dict} />
      <ReviewsSection locale={l} dict={dict} />
      <BookingCta locale={l} dict={dict} />
      <LocationSection locale={l} dict={dict} />
      <ToursListJsonLd locale={l} />
    </>
  );
}
