import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { tours } from "@/content/tours";
import { routes } from "@/lib/routes";
import { TourCard } from "@/components/tours/TourCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function ToursSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg">
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={dict.tours.eyebrow}
            title={dict.tours.title}
            lead={dict.tours.lead}
            size="lg"
            className="md:max-w-[38rem]"
          />
          <Reveal className="shrink-0 md:pb-2">
            <ButtonLink href={routes.tours(locale)} variant="quiet" size="md">
              {dict.common.viewAllTours}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-3">
          {tours.map((tour, i) => (
            <Reveal key={tour.id} y={40} delay={i * 0.08}>
              <TourCard tour={tour} locale={locale} dict={dict} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
