import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/config/site";
import { tours } from "@/content/tours";
import { pick } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-deep text-on-deep">
      <div className="shell grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-10 md:py-24">
        <div>
          <p className="font-display text-[1.6rem] leading-none tracking-[0.12em]">CANANGUENO</p>
          <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-on-deep-soft">
            {dict.footer.tagline}
          </p>
        </div>

        <nav aria-label={dict.footer.explore}>
          <p className="eyebrow mb-5 text-on-deep-faint">{dict.footer.explore}</p>
          <ul className="flex flex-col gap-3 text-sm text-on-deep-soft">
            {tours.map((t) => (
              <li key={t.id}>
                <Link
                  href={routes.tour(locale, pick(t.slug, locale))}
                  className="transition-colors hover:text-on-deep"
                >
                  {pick(t.name, locale)}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.lodge(locale)} className="transition-colors hover:text-on-deep">
                {dict.nav.lodge}
              </Link>
            </li>
            <li>
              <Link href={routes.gallery(locale)} className="transition-colors hover:text-on-deep">
                {dict.nav.gallery}
              </Link>
            </li>
            <li>
              <Link href={routes.journey(locale)} className="transition-colors hover:text-on-deep">
                {dict.nav.journey}
              </Link>
            </li>
            <li>
              <Link href={routes.faq(locale)} className="transition-colors hover:text-on-deep">
                {dict.nav.faq}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-5 text-on-deep-faint">{dict.footer.contact}</p>
          <ul className="flex flex-col gap-3 text-sm text-on-deep-soft">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-on-deep"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-on-deep"
              >
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-on-deep"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-on-deep-faint">{dict.footer.legal}</p>
          <dl className="flex flex-col gap-4 text-sm text-on-deep-soft">
            <div>
              <dt className="text-xs text-on-deep-faint">{dict.lodge.companyLabel}</dt>
              <dd>{site.legal.companyName}</dd>
            </div>
            <div>
              <dt className="text-xs text-on-deep-faint">{dict.lodge.registryLabel}</dt>
              <dd className="tabular-nums">{site.legal.forestryRegistry}</dd>
            </div>
            <div>
              <dt className="text-xs text-on-deep-faint">{site.office.label}</dt>
              <dd>
                {site.office.street}
                <br />
                {site.office.city}, {site.office.country}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-line-deep/70">
        <div className="shell flex flex-col gap-3 py-7 text-xs text-on-deep-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legal.companyName}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
