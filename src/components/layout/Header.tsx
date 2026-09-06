"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

type Props = { locale: Locale; dict: Dictionary };

/**
 * Navegación "glass": transparente sobre el hero, y al hacer scroll se vuelve
 * sólida con desenfoque. En móvil abre a pantalla completa.
 */
export function Header({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar
  useEffect(() => setOpen(false), [pathname]);

  // Bloquear el scroll del fondo con el menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `${routes.home(locale)}#experiencia`, label: dict.nav.experience },
    { href: routes.tours(locale), label: dict.nav.tours },
    { href: routes.lodge(locale), label: dict.nav.lodge },
    { href: routes.gallery(locale), label: dict.nav.gallery },
    { href: routes.journey(locale), label: dict.nav.journey },
  ];

  /** Misma página, otro idioma. */
  const otherLocalePath = (target: Locale) => {
    const rest = pathname.split("/").slice(2).join("/");
    return `/${target}${rest ? `/${rest}` : ""}`;
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-line/60 bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
          {/* Marca */}
          <Link
            href={routes.home(locale)}
            className={cn(
              "font-display text-[1.35rem] leading-none tracking-[0.14em] transition-colors duration-500 md:text-[1.5rem]",
              scrolled ? "text-ink" : "text-on-deep",
            )}
          >
            CANANGUENO
          </Link>

          {/* Enlaces — escritorio */}
          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.82rem] font-medium tracking-wide transition-colors duration-300",
                  scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-on-deep-soft hover:text-on-deep",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Idioma */}
            <div
              className={cn(
                "hidden items-center gap-1.5 text-[0.72rem] font-medium tracking-[0.14em] sm:flex",
                scrolled ? "text-ink-faint" : "text-on-deep-faint",
              )}
            >
              {LOCALES.map((l, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link
                    href={otherLocalePath(l)}
                    hrefLang={l}
                    aria-current={l === locale ? "true" : undefined}
                    className={cn(
                      "transition-colors",
                      l === locale
                        ? scrolled
                          ? "text-ink"
                          : "text-on-deep"
                        : "hover:opacity-70",
                    )}
                  >
                    {LOCALE_LABELS[l].short}
                  </Link>
                </span>
              ))}
            </div>

            <Link
              href={routes.book(locale)}
              className={cn(
                "hidden rounded-[var(--radius)] px-5 py-2.5 text-[0.78rem] font-medium tracking-wide transition-colors duration-300 sm:inline-flex",
                scrolled
                  ? "bg-accent text-accent-ink hover:bg-accent-soft"
                  : "border border-on-deep/40 text-on-deep hover:bg-on-deep/10",
              )}
            >
              {dict.nav.book}
            </Link>

            {/* Hamburguesa */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={dict.nav.openMenu}
              className={cn(
                "-mr-1 p-2 transition-colors lg:hidden",
                scrolled ? "text-ink" : "text-on-deep",
              )}
            >
              <Menu size={22} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-bg-deep transition-opacity duration-400 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <span className="font-display text-[1.35rem] leading-none tracking-[0.14em] text-on-deep">
            CANANGUENO
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={dict.nav.close}
            className="-mr-1 p-2 text-on-deep"
          >
            <X size={22} strokeWidth={1.4} />
          </button>
        </div>

        <nav className="shell mt-10 flex flex-col gap-1">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              className="border-b border-line-deep/60 py-5 font-display text-[2rem] leading-none text-on-deep"
            >
              <span className="ordinal mr-4 align-middle text-[0.7rem] text-on-deep-faint">
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="shell mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href={routes.book(locale)}
            tabIndex={open ? 0 : -1}
            className="rounded-[var(--radius)] bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink"
          >
            {dict.nav.book}
          </Link>
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            tabIndex={open ? 0 : -1}
            className="text-sm text-on-deep-soft"
          >
            {site.contact.phone}
          </a>
          <div className="flex items-center gap-2 text-[0.72rem] tracking-[0.14em] text-on-deep-faint">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                <Link
                  href={otherLocalePath(l)}
                  hrefLang={l}
                  tabIndex={open ? 0 : -1}
                  className={l === locale ? "text-on-deep" : ""}
                >
                  {LOCALE_LABELS[l].short}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
