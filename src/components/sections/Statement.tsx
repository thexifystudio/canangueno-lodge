import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";

/**
 * El manifiesto. Tipografía grande, mucho aire y una imagen de ancho completo
 * que entra con máscara. Fija el tono y no dice nada más — sin contadores ni
 * cifras.
 */
export function Statement({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-7" stagger={0.1}>
            <span className="eyebrow block text-ink-faint">{dict.statement.eyebrow}</span>
            <h2 className="mt-7 text-[length:var(--text-3xl)] text-ink">
              {dict.statement.title}
              <br />
              <em className="font-light italic text-accent">{dict.statement.titleEmphasis}</em>
            </h2>
          </Reveal>

          <Reveal className="md:col-span-5 md:pt-4" y={24}>
            <p className="max-w-[46ch] text-[length:var(--text-lg)] font-light leading-relaxed text-ink-soft">
              {dict.statement.body}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal
        clip
        className="relative mt-16 h-[46svh] min-h-[18rem] w-full overflow-hidden md:mt-20 md:h-[64svh]"
      >
        <Media id="home-statement" locale={locale} sizes="100vw" />
      </Reveal>
    </section>
  );
}
