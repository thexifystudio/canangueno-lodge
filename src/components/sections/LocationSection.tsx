import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const MAP_QUERY = "Reserva de Producción de Fauna Cuyabeno, Sucumbíos, Ecuador";

export function LocationSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-bg">
      <div className="shell section-y">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal stagger={0.1} className="lg:col-span-4">
            <span className="eyebrow block text-ink-faint">{dict.location.eyebrow}</span>
            <h2 className="mt-6 text-[length:var(--text-2xl)] text-ink">
              {dict.location.title}{" "}
              <em className="font-light italic">{dict.location.titleEmphasis}</em>
            </h2>

            <dl className="mt-10 flex flex-col divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="eyebrow text-ink-faint">{dict.location.meetingTitle}</dt>
                <dd className="mt-2 text-ink">{site.location.meetingPoint}</dd>
                <dd className="mt-1 text-sm text-ink-soft">
                  {pick(
                    {
                      es: "Llegada antes de las 11:00. Desde ahí, tres horas en canoa.",
                      en: "Arrive before 11:00. From there, three hours by canoe.",
                    },
                    locale,
                  )}
                </dd>
              </div>
              <div className="py-5">
                <dt className="eyebrow text-ink-faint">{dict.location.officeTitle}</dt>
                <dd className="mt-2 text-ink">{site.office.street}</dd>
                <dd className="mt-1 text-sm text-ink-soft">
                  {site.office.city}, {site.office.country}
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <ButtonLink href={routes.journey(locale)} variant="quiet" size="md">
                {dict.nav.journey}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal clip className="relative aspect-[4/3] lg:col-span-8 lg:aspect-[16/10]">
            <iframe
              title={dict.location.mapLabel}
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=8&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-[1.05]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
