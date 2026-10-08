"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { whatsappLink } from "@/config/site";
import { Media } from "@/components/ui/Media";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  404
 * ────────────────────────────────────────────────────────────────────────────
 *  Sobre una foto del bosque, con la cabecera y el pie de siempre: quien
 *  llega por un enlace roto sigue en el sitio. A la izquierda, qué pasó y
 *  cómo volver; a la derecha, las páginas a las que probablemente quería
 *  ir, y WhatsApp por si buscaba algo puntual.
 *
 *  Next.js no le pasa `params` a este archivo, así que el idioma se lee del
 *  primer segmento de la URL. Si no es uno de los cuatro (lo reescribe
 *  `middleware.ts`), cae a español.
 */

type Copy = {
  eyebrow: string;
  title: string;
  body: string;
  home: string;
  suggestions: string;
  links: {
    tours: string;
    lodge: string;
    cuyabeno: string;
    journey: string;
    gallery: string;
  };
  hints: {
    tours: string;
    lodge: string;
    cuyabeno: string;
    journey: string;
    gallery: string;
  };
  help: string;
  helpCta: string;
  helpMessage: string;
};

const T: Record<Locale, Copy> = {
  es: {
    eyebrow: "Error 404",
    title: "Esta página se perdió en la selva.",
    body: "El enlace está roto o la página ya no existe. No pasa nada: desde acá vuelves al camino.",
    home: "Volver al inicio",
    suggestions: "Quizás buscabas",
    links: {
      tours: "Tours",
      lodge: "El lodge",
      cuyabeno: "Cuyabeno",
      journey: "Cómo llegar",
      gallery: "Galería",
    },
    hints: {
      tours: "Recorridos de 3, 4 y 5 días",
      lodge: "Habitaciones, comida y vida en el lodge",
      cuyabeno: "La reserva, sus lagunas y sus animales",
      journey: "De Quito al Puente de Cuyabeno",
      gallery: "Fotos reales de los viajes",
    },
    help: "¿Buscabas algo en particular?",
    helpCta: "Escríbenos por WhatsApp",
    helpMessage:
      "Hola, estaba buscando algo en la web de Canangueno Lodge y no lo encontré.",
  },
  en: {
    eyebrow: "Error 404",
    title: "This page got lost in the jungle.",
    body: "The link is broken or the page no longer exists. No problem: you can find your way back from here.",
    home: "Back to home",
    suggestions: "Maybe you were looking for",
    links: {
      tours: "Tours",
      lodge: "The lodge",
      cuyabeno: "Cuyabeno",
      journey: "How to get here",
      gallery: "Gallery",
    },
    hints: {
      tours: "3, 4 and 5-day routes",
      lodge: "Rooms, food and life at the lodge",
      cuyabeno: "The reserve, its lagoons and wildlife",
      journey: "From Quito to the Cuyabeno Bridge",
      gallery: "Real photos from the trips",
    },
    help: "Looking for something specific?",
    helpCta: "Message us on WhatsApp",
    helpMessage:
      "Hi, I was looking for something on the Canangueno Lodge website and couldn’t find it.",
  },
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite hat sich im Dschungel verirrt.",
    body: "Der Link ist fehlerhaft oder die Seite existiert nicht mehr. Kein Problem: Von hier aus findest du zurück.",
    home: "Zur Startseite",
    suggestions: "Vielleicht suchst du",
    links: {
      tours: "Touren",
      lodge: "Die Lodge",
      cuyabeno: "Cuyabeno",
      journey: "Anreise",
      gallery: "Galerie",
    },
    hints: {
      tours: "Routen mit 3, 4 und 5 Tagen",
      lodge: "Zimmer, Essen und Leben in der Lodge",
      cuyabeno: "Das Reservat, seine Lagunen und Tiere",
      journey: "Von Quito zur Cuyabeno-Brücke",
      gallery: "Echte Fotos von den Reisen",
    },
    help: "Suchst du etwas Bestimmtes?",
    helpCta: "Schreib uns auf WhatsApp",
    helpMessage:
      "Hallo, ich habe auf der Website der Canangueno Lodge etwas gesucht und nicht gefunden.",
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page s’est perdue dans la forêt.",
    body: "Le lien est cassé ou la page n’existe plus. Pas de souci : d’ici, vous retrouvez votre chemin.",
    home: "Retour à l’accueil",
    suggestions: "Vous cherchiez peut-être",
    links: {
      tours: "Circuits",
      lodge: "Le lodge",
      cuyabeno: "Cuyabeno",
      journey: "Comment venir",
      gallery: "Galerie",
    },
    hints: {
      tours: "Itinéraires de 3, 4 et 5 jours",
      lodge: "Chambres, repas et vie au lodge",
      cuyabeno: "La réserve, ses lagunes et sa faune",
      journey: "De Quito au pont de Cuyabeno",
      gallery: "De vraies photos des voyages",
    },
    help: "Vous cherchez quelque chose de précis ?",
    helpCta: "Écrivez-nous sur WhatsApp",
    helpMessage:
      "Bonjour, je cherchais quelque chose sur le site du Canangueno Lodge et je ne l’ai pas trouvé.",
  },
};

export default function NotFound() {
  const segment = usePathname().split("/")[1];
  const locale: Locale = isLocale(segment) ? segment : "es";
  const t = T[locale];
  const pages = [
    [routes.tours(locale), "tours"],
    [routes.lodge(locale), "lodge"],
    [routes.cuyabeno(locale), "cuyabeno"],
    [routes.journey(locale), "journey"],
    [routes.gallery(locale), "gallery"],
  ] as const;

  return (
    <section className="exp-notfound">
      <div className="exp-notfound-media" aria-hidden>
        <Media
          id="exp-jungle"
          locale={locale}
          sizes="100vw"
          priority
          hideLabel
        />
      </div>
      <div className="exp-notfound-veil" aria-hidden />
      <div className="shell exp-notfound-inner">
        <div className="exp-notfound-copy">
          <p className="exp-notfound-eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="exp-notfound-body">{t.body}</p>
          <Link href={routes.home(locale)} className="exp-button">
            {t.home}
            <ArrowRight size={17} />
          </Link>
        </div>

        <nav className="exp-notfound-card" aria-label={t.suggestions}>
          <p className="exp-notfound-card-title">{t.suggestions}</p>
          <ul>
            {pages.map(([href, key]) => (
              <li key={key}>
                <Link href={href}>
                  <span>
                    <strong>{t.links[key]}</strong>
                    <small>{t.hints[key]}</small>
                  </span>
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <p className="exp-notfound-help">
            {t.help}{" "}
            <a
              href={whatsappLink(t.helpMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.helpCta}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </p>
        </nav>
      </div>
    </section>
  );
}
