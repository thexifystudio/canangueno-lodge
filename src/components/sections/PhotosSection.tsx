import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import type { MediaId } from "@/config/media";
import { routes } from "@/lib/routes";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * "Las fotos que tenemos" — un adelanto de la galería en la portada.
 *
 * Una foto por categoría real (río, laguna, fauna, bosque, comunidad, lodge).
 * Todas llevan a /galeria. Mosaico multi-columna: se acomoda sin dejar huecos
 * y cada foto conserva su proporción.
 */
const PREVIEW: MediaId[] = [
  "gal-river-2",
  "gal-lagoon-1",
  "gal-fauna-1",
  "gal-forest-1",
  "gal-community-1",
  "gal-lodge-1",
];

export function PhotosSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg-warm">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={dict.photos.eyebrow}
            title={dict.photos.title}
            emphasis={dict.photos.titleEmphasis}
            lead={dict.photos.lead}
            className="md:max-w-[34rem]"
          />
          <Reveal className="shrink-0 md:pb-2">
            <Link
              href={routes.gallery(locale)}
              className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm text-ink transition-colors hover:border-ink"
            >
              {dict.photos.cta}
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <Reveal
          stagger={0.06}
          className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 md:gap-5"
        >
          {PREVIEW.map((id) => (
            <Link
              key={id}
              href={routes.gallery(locale)}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                <Media id={id} locale={locale} sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
