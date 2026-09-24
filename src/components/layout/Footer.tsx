import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { site, whatsappLink } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TripadvisorIcon,
} from "@/components/ui/BrandIcons";

/* Cada enlace del pie mide 44 px de alto: en el teléfono son blancos de
   dedo, no de puntero. El espacio entre ellos lo da ese alto, no un `gap`. */
const LINK =
  "inline-flex min-h-11 items-center transition-colors hover:text-accent-text";

const SOCIAL = [
  { name: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { name: "Tripadvisor", href: site.social.tripadvisor, Icon: TripadvisorIcon },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const company = site.legal.companyName;

  /* Los tours no se listan uno por uno: "Tours" ya lleva a los tres. */
  const links: [string, string][] = [
    [routes.tours(locale), dict.nav.tours],
    [routes.cuyabeno(locale), dict.nav.cuyabeno],
    [routes.lodge(locale), dict.nav.lodge],
    [routes.gallery(locale), dict.nav.gallery],
    [routes.journey(locale), dict.nav.journey],
    [routes.about(locale), dict.about.navLabel],
    [routes.faq(locale), dict.nav.faq],
  ];

  return (
    <footer className="exp-footer bg-bg-warm text-ink">
      <div className="shell grid gap-8 py-12 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 md:py-14">
        <div>
          <Link
            href={routes.home(locale)}
            aria-label={site.name}
            className="exp-brand exp-brand-onlight"
          >
            <Logo />
          </Link>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-ink-soft">
            {dict.footer.tagline}
          </p>
        </div>

        {/* Una sola lista corrida en vez de columnas: el pie era más alto
            que la mitad de la pantalla. */}
        <nav aria-label={dict.footer.explore}>
          <ul className="flex flex-wrap gap-x-6 text-sm text-ink-soft md:justify-center">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className={LINK}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-ink-soft">
          <ul className="flex flex-wrap gap-x-6 md:flex-col md:items-end">
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
          {/* Las redes, con su nombre escrito: un ícono solo obliga a adivinar,
              y Tripadvisor no lo reconoce todo el mundo por el búho. */}
          <ul className="flex flex-wrap gap-x-5 md:justify-end">
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
      </div>

      {/* Lo legal va en la franja de abajo, en una línea: tiene que estar,
          pero nadie lo busca como un bloque propio. */}
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-ink-faint lg:flex-row lg:items-center lg:justify-between">
          <p>
            {/* La razón social ya termina en punto ("CIA. LTDA."): no se le
                agrega otro. */}
            © {year} {company}
            {company.endsWith(".") ? "" : "."} {dict.footer.rights}
          </p>
          <p>
            {dict.lodge.registryLabel}{" "}
            <span className="tabular-nums">{site.legal.forestryRegistry}</span>
            {" · "}
            {site.office.street}, {site.office.city}
          </p>
          <p>{dict.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
