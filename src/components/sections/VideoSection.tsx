import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";
import { VideoLightbox } from "@/components/video/VideoLightbox";
import { Ambient } from "@/components/motion/Ambient";

/**
 * El momento cinematográfico: el video real del lodge a pantalla ancha.
 *
 * Rompe a propósito el patrón del resto del sitio — acá no hay etiqueta,
 * título, párrafo y grilla. Hay una imagen enorme, dos líneas y un botón.
 */
export function VideoSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-bg-deep">
      <div className="absolute inset-0 -z-10">
        <Media id="hero" locale={locale} hideLabel sizes="100vw" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_50%,rgba(8,18,13,0.45),rgba(8,18,13,0.86))]"
        />
        <Ambient variant="motes" />
      </div>

      <div className="shell relative w-full py-24">
        <Reveal stagger={0.1} className="flex flex-col items-center text-center">
          <span className="eyebrow text-on-deep-faint">{dict.video.eyebrow}</span>

          <h2 className="mt-7 max-w-[17ch] text-[length:var(--text-3xl)] text-on-deep">
            {dict.video.title}{" "}
            <em className="font-light italic">{dict.video.titleEmphasis}</em>
          </h2>

          <div className="mt-14">
            <VideoLightbox
              variant="circle"
              label={dict.video.play}
              closeLabel={dict.video.close}
            />
          </div>

          <p className="mt-14 text-sm text-on-deep-faint">{dict.video.lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
