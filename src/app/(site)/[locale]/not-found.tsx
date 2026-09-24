"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";

/**
 * 404. Next.js no le pasa `params` a este archivo, así que el idioma se lee
 * del primer segmento de la URL (`usePathname`). Si no es uno de los cuatro
 * soportados —enlace roto, ruta inventada—, cae a español.
 */
const T: Record<Locale, { title: string; body: string; cta: string; tours: string }> = {
  es: {
    title: "Esta página se perdió en la selva.",
    body: "El enlace está roto o la página ya no existe. Desde acá puedes volver al camino.",
    cta: "Volver al inicio",
    tours: "Ver los tours",
  },
  en: {
    title: "This page got lost in the jungle.",
    body: "The link is broken or the page no longer exists. You can find your way back from here.",
    cta: "Back to home",
    tours: "See the tours",
  },
  de: {
    title: "Diese Seite hat sich im Dschungel verirrt.",
    body: "Der Link ist fehlerhaft oder die Seite existiert nicht mehr. Von hier aus findest du zurück.",
    cta: "Zurück zur Startseite",
    tours: "Touren ansehen",
  },
  fr: {
    title: "Cette page s’est perdue dans la forêt.",
    body: "Le lien est cassé ou la page n’existe plus. D’ici, vous pouvez retrouver votre chemin.",
    cta: "Retour à l’accueil",
    tours: "Voir les circuits",
  },
};

export default function NotFound() {
  const segment = usePathname().split("/")[1];
  const locale: Locale = isLocale(segment) ? segment : "es";
  const t = T[locale];

  return (
    <section className="exp-notfound">
      <div className="shell">
        <p className="exp-notfound-code" aria-hidden>
          404
        </p>
        <h1>{t.title}</h1>
        <p>{t.body}</p>
        <div className="exp-detail-actions">
          <Link href={routes.home(locale)} className="exp-button">
            {t.cta}
            <ArrowRight size={17} />
          </Link>
          <Link href={routes.tours(locale)} className="exp-text-link">
            {t.tours}
          </Link>
        </div>
      </div>
    </section>
  );
}
