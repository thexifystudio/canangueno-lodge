"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import {
  LOCALES,
  LOCALE_LABELS,
  pick,
  type Locale,
} from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { Logo } from "@/components/layout/Logo";

function FlagIcon({ locale }: { locale: Locale }) {
  return (
    /* Decorativa: al lado siempre va el nombre del idioma, o el control que
       la contiene ya tiene su etiqueta. Con nombre propio, el lector de
       pantalla decía "English English". */
    <svg className="exp-flag" viewBox="0 0 24 16" aria-hidden="true">
      {locale === "es" && (
        <>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </>
      )}
      {locale === "en" && (
        <>
          <rect width="24" height="16" fill="#fff" />
          {Array.from({ length: 7 }, (_, i) => (
            <rect key={i} y={i * (32 / 13)} width="24" height={16 / 13} fill="#B22234" />
          ))}
          <rect width="10.5" height="8.7" fill="#3C3B6E" />
          {[1.4, 3.2, 5, 6.8, 8.6].flatMap((x, column) =>
            [1.35, 3.25, 5.15, 7.05].map((y, row) => (
              <circle
                key={`${column}-${row}`}
                cx={x}
                cy={y}
                r="0.35"
                fill="#fff"
              />
            )),
          )}
        </>
      )}
      {locale === "de" && (
        <>
          <rect width="24" height="16" fill="#000" />
          <rect y="5.333" width="24" height="5.334" fill="#DD0000" />
          <rect y="10.667" width="24" height="5.333" fill="#FFCE00" />
        </>
      )}
      {locale === "fr" && (
        <>
          <rect width="24" height="16" fill="#fff" />
          <rect width="8" height="16" fill="#0055A4" />
          <rect x="16" width="8" height="16" fill="#EF4135" />
        </>
      )}
    </svg>
  );
}

export function Header({
  locale,
  nav,
  aboutLabel,
  tourSlugs,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  aboutLabel: string;
  /** Los slugs de cada tour en los cuatro idiomas, para traducir la URL. */
  tourSlugs: Record<Locale, string>[];
}) {
  const pathname = usePathname(),
    dialog = useRef<HTMLDialogElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const home = pathname === routes.home(locale),
    solid = !home || scrolled;
  const tour = tourSlugs.find((slug) =>
    Object.values(slug).includes(pathname.split("/").pop() || ""),
  );
  const translatedPath = (target: Locale) =>
    tour
      ? routes.tour(target, pick(tour, target))
      : "/" + [target, ...pathname.split("/").slice(2)].join("/");
  const ui = {
    es: {
      skip: "Saltar al contenido",
      main: "Principal",
      plan: "Planificar viaje",
      planMobile: "Planificar mi viaje",
      language: "Cambiar idioma",
    },
    en: {
      skip: "Skip to content",
      main: "Main",
      plan: "Plan your trip",
      planMobile: "Plan my trip",
      language: "Change language",
    },
    de: {
      skip: "Zum Inhalt springen",
      main: "Hauptnavigation",
      plan: "Reise planen",
      planMobile: "Meine Reise planen",
      language: "Sprache ändern",
    },
    fr: {
      skip: "Aller au contenu",
      main: "Navigation principale",
      plan: "Préparer le voyage",
      planMobile: "Préparer mon voyage",
      language: "Changer de langue",
    },
  }[locale];
  const links = [
    [routes.cuyabeno(locale), nav.cuyabeno],
    [routes.tours(locale), nav.tours],
    [routes.lodge(locale), nav.lodge],
    [routes.gallery(locale), nav.gallery],
    [routes.about(locale), aboutLabel],
    [routes.journey(locale), nav.journey],
  ];
  const language = useRef<HTMLDetailsElement>(null);
  /* El `<details>` de idiomas no se cierra solo con Esc ni con un clic
     afuera, como cualquier otro menú desplegable. */
  useEffect(() => {
    const el = language.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        el.open = false;
        el.querySelector("summary")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.open = false;
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    dialog.current?.close();
    document.body.style.overflow = "";
  }, [pathname]);
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  return (
    <>
      <a href="#main" className="exp-skip">
        {ui.skip}
      </a>
      <header className={"exp-nav " + (solid ? "is-solid" : "is-transparent")}>
        <div className="shell exp-nav-inner">
          <Link
            href={routes.home(locale)}
            className="exp-brand"
            aria-label="Canangueno Lodge"
          >
            <Logo />
          </Link>
          <nav
            className="exp-desktop-links"
            aria-label={ui.main}
          >
            {links.map(([href, label]) => (
              <Link
                href={href}
                key={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="exp-nav-actions">
            <details className="exp-language" ref={language}>
              <summary aria-label={ui.language} title={ui.language}>
                <FlagIcon locale={locale} />
                <ChevronDown size={14} aria-hidden="true" />
              </summary>
              <div className="exp-language-popover">
                {LOCALES.map((target) => (
                  <Link
                    key={target}
                    href={translatedPath(target)}
                    hrefLang={target}
                    lang={target}
                    aria-current={target === locale ? "page" : undefined}
                    aria-label={LOCALE_LABELS[target].aria}
                  >
                    <FlagIcon locale={target} />
                    <span>{LOCALE_LABELS[target].long}</span>
                    {target === locale && <Check size={15} aria-hidden="true" />}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              className="exp-button exp-nav-book"
              href={routes.book(locale)}
            >
              {ui.plan}
              <ArrowUpRight size={15} />
            </Link>
            <button
              className="exp-menu-button"
              aria-label={nav.openMenu}
              onClick={() => {
                dialog.current?.showModal();
                document.body.style.overflow = "hidden";
              }}
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="exp-menu"
        aria-label={nav.menu}
        onClose={() => {
          document.body.style.overflow = "";
        }}
      >
        <div className="shell">
          <div className="exp-menu-top">
            {/* El menú vive sobre `--c-bg-deep`, así que siempre el negativo. */}
            <span className="exp-brand exp-brand-ondark">
              <Logo />
            </span>
            <button onClick={close} aria-label={nav.close} autoFocus>
              <X size={25} />
            </button>
          </div>
          <nav>
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={close}>
                {label}
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </nav>
          <Link
            className="exp-button"
            href={routes.book(locale)}
            onClick={close}
          >
            {ui.planMobile}
          </Link>
          <div
            className="exp-menu-language"
            role="group"
            aria-label={ui.language}
          >
            {LOCALES.map((target) => (
              <Link
                key={target}
                href={translatedPath(target)}
                hrefLang={target}
                lang={target}
                onClick={close}
                aria-current={target === locale ? "page" : undefined}
              >
                <FlagIcon locale={target} />
                <span>{LOCALE_LABELS[target].long}</span>
                {target === locale && <Check size={15} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
