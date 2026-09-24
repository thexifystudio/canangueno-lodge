"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { whatsappLink } from "@/config/site";
import { routes } from "@/lib/routes";
import { WhatsAppGlyph } from "@/components/ui/BrandIcons";

/** Lo mínimo de cada tour para saber en qué página se está. */
export type FabTour = {
  id: string;
  days: number;
  featured: boolean;
  slugs: string[];
};

export function WhatsAppFab({
  locale,
  label,
  tours,
}: {
  locale: Locale;
  /** "Escríbenos por WhatsApp", en el idioma de la página. */
  label: string;
  tours: FabTour[];
}) {
  const path = usePathname(),
    tour = tours.find((t) => t.slugs.includes(path.split("/").pop() || ""));

  /*
   * El botón y la barra del teléfono aparecen recién cuando el visitante
   * pasó la primera pantalla: arriba del todo sobran —el hero ya tiene su
   * llamada— y la barra tapaba el titular.
   */
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (path === routes.book(locale)) return null;
  const base = tour ?? tours.find((t) => t.featured) ?? tours[0];
  const messages: Record<Locale, string> = {
    es: `Hola, me interesa el tour de ${base.days} días en Canangueno Lodge. Quisiera consultar fechas y disponibilidad.`,
    en: `Hi, I am interested in the ${base.days}-day Canangueno Lodge tour. Could you help with dates and availability?`,
    de: `Hallo, ich interessiere mich für die ${base.days}-Tage-Tour in der Canangueno Lodge. Könnt ihr mir bei Terminen und Verfügbarkeit helfen?`,
    fr: `Bonjour, je m’intéresse au circuit de ${base.days} jours à Canangueno Lodge. Pourriez-vous m’aider avec les dates et les disponibilités ?`,
  };
  const cta: Record<Locale, string> = {
    es: "Planificar viaje",
    en: "Plan your trip",
    de: "Reise planen",
    fr: "Préparer le voyage",
  };
  const href = whatsappLink(messages[locale]);
  /* Mientras está oculto no se puede enfocar con el teclado ni lo anuncia un
     lector de pantalla: un control invisible que recibe el foco es una
     trampa. */
  const hidden = past ? {} : { tabIndex: -1, "aria-hidden": true as const };
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="exp-whatsapp"
        data-visible={past ? "true" : "false"}
        aria-label={label}
        {...hidden}
      >
        <WhatsAppGlyph />
        <span className="exp-whatsapp-label" aria-hidden>
          {label}
        </span>
      </a>
      <div
        className="exp-sticky"
        data-visible={past ? "true" : "false"}
        aria-hidden={past ? undefined : true}
        inert={!past}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="exp-sticky-whatsapp"
          aria-label={label}
        >
          <WhatsAppGlyph />
          <span aria-hidden>WhatsApp</span>
        </a>
        <Link
          className="exp-button"
          href={routes.book(locale) + "?tour=" + base.id}
        >
          {cta[locale]}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
}
