import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { site, whatsappLink } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import { Credentials } from "@/components/ui/Credentials";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";

/* Cada enlace del pie mide 44 px de alto en el teléfono (blancos de dedo,
   no de puntero) y 36 px en escritorio. El espacio entre ellos lo da ese
   alto, no un `gap`. */
const LINK =
  "inline-flex min-h-11 items-center transition-colors hover:text-accent-text lg:min-h-9";

/* El título de cada columna. */
const TITLE = "eyebrow mb-2 text-ink-faint";

const SOCIAL = [
  { name: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const company = site.legal.companyName;

  /* Los tours no se listan uno por uno: "Tours" ya lleva a los tres. */
  const links: [string, string][] = [
    /* El mismo orden que la barra de arriba. */
    [routes.tours(locale), dict.nav.tours],
    [routes.lodge(locale), dict.nav.lodge],
    [routes.cuyabeno(locale), dict.nav.cuyabeno],
    [routes.journey(locale), dict.nav.journey],
    [routes.gallery(locale), dict.nav.gallery],
    [routes.faq(locale), dict.nav.faq],
  ];

  return (
    <footer className="exp-footer bg-bg-warm text-ink">
      {/*
       * Cuatro columnas, cada una con su título: la marca, adónde ir, cómo
       * escribir y quién avala la operación. En el teléfono se apilan y los
       * enlaces van a dos columnas.
       */}
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.2fr_1.1fr_1fr_1fr] lg:gap-12">
        <div>
          <Link
            href={routes.home(locale)}
            aria-label={site.name}
            className="exp-brand exp-brand-onlight"
          >
            <Logo />
          </Link>
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-ink-soft">
            {dict.footer.tagline}
          </p>
          {/* Las redes, con su nombre escrito: un ícono solo obliga a adivinar.
              Tripadvisor no va acá: su logo, en los avales, ya lleva a las
              reseñas. */}
          <ul className="mt-4 flex flex-wrap gap-x-5 text-sm text-ink-soft">
            {SOCIAL.map(({ href, name, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} gap-2`}
                >
                  <Icon />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={dict.footer.explore}>
          <p className={TITLE}>{dict.footer.explore}</p>
          <ul className="grid grid-cols-2 gap-x-6 text-sm text-ink-soft">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className={LINK}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={TITLE}>{dict.footer.contact}</p>
          <ul className="text-sm text-ink-soft">
            <li>
              <a
                href={whatsappLink(dict.faq.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                WhatsApp · {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className={LINK}>
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Los avales: los dos ministerios que autorizan la operación y
            Tripadvisor, que lleva a las reseñas (ver `ui/Credentials`). */}
        <Credentials locale={locale} variant="compact" />
      </div>

      {/* Lo legal va en la franja de abajo, en una línea: tiene que estar,
          pero nadie lo busca como un bloque propio. */}
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            {/* La razón social ya termina en punto ("CIA. LTDA."): no se le
                agrega otro. */}
            © {year} {company}
            {company.endsWith(".") ? "" : "."} {dict.footer.rights}
          </p>
          <p>{dict.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
