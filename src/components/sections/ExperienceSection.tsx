import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { experiences } from "@/content/experiences";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Las cuatro experiencias: selva, río, vida salvaje y comunidad. Son
 * categorías paralelas, no una secuencia — por eso no van numeradas.
 */
export function ExperienceSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="experiencia" className="section-y bg-bg-warm scroll-mt-24">
      <div className="shell">
        <SectionHeading
          eyebrow={dict.experience.eyebrow}
          title={dict.experience.title}
          emphasis={dict.experience.titleEmphasis}
          size="lg"
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} y={38} delay={i * 0.06}>
              <article>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Media
                    id={exp.mediaId}
                    locale={locale}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="mt-6 text-[length:var(--text-xl)] text-ink">
                  {pick(exp.title, locale)}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {pick(exp.body, locale)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {pick(exp.detail, locale).map((d) => (
                    <li key={d} className="text-xs text-ink-faint">
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
