import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoLightbox } from "@/components/video/VideoLightbox";

/**
 * "El video" — su propia sección, tranquila y editorial.
 *
 * La miniatura es un fotograma real del video del lodge; el iframe de YouTube
 * se carga recién al hacer clic (ver VideoLightbox). Sin partículas ni
 * vignette dramática — la foto se sostiene sola.
 */
export function VideoSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg-deep text-on-deep">
      <div className="shell">
        <SectionHeading
          onDeep
          eyebrow={dict.video.eyebrow}
          title={dict.video.title}
          emphasis={dict.video.titleEmphasis}
          lead={dict.video.lead}
          className="max-w-[46rem]"
        />

        <Reveal
          clip
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-bg-deep md:mt-16"
        >
          <Media id="hero" locale={locale} hideLabel sizes="100vw" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,13,0.12),rgba(8,18,13,0.44))]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <VideoLightbox
              variant="cover"
              label={dict.video.play}
              closeLabel={dict.video.close}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
