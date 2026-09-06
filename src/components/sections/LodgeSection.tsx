import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { about, facilities } from "@/content/lodge";
import { routes } from "@/lib/routes";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Presentación del lodge en la home. Composición asimétrica: imagen grande a
 * la izquierda desbordando la columna, texto a la derecha.
 */
export function LodgeSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg">
      <div className="shell">
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal clip className="relative aspect-[4/3] lg:col-span-7 lg:aspect-[5/4]">
            <Media
              id="lodge-exterior"
              locale={locale}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal stagger={0.1}>
              <span className="eyebrow block text-ink-faint">{dict.lodge.eyebrow}</span>
              <h2 className="mt-6 text-[length:var(--text-2xl)] text-ink">
                {dict.lodge.title}{" "}
                <em className="font-light italic text-accent">{dict.lodge.titleEmphasis}</em>
              </h2>
              <p className="mt-7 text-[length:var(--text-lg)] font-light leading-relaxed text-ink-soft">
                {pick(about.intro, locale)}
              </p>
            </Reveal>

            <Reveal stagger={0.08} className="mt-10 flex flex-col divide-y divide-line border-y border-line">
              {facilities.map((f) => (
                <div key={f.id} className="py-5">
                  <h3 className="text-base font-medium text-ink">{pick(f.title, locale)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {pick(f.body, locale)}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-10">
              <ButtonLink href={routes.lodge(locale)} variant="outline" size="md">
                {dict.nav.lodge}
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
