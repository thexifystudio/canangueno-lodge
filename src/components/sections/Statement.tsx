import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";

/**
 * El manifiesto. Tipografía grande, mucho aire, y una imagen de ancho
 * completo que entra con máscara. Es la sección que fija el tono.
 */
export function Statement({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y bg-bg">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-12">
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

      {/* Banda de imagen a sangre */}
      <Reveal clip className="relative mt-20 h-[42svh] min-h-[18rem] w-full md:mt-24 md:h-[62svh]">
        <Media id="home-statement" locale={locale} sizes="100vw" />
      </Reveal>

      <div className="shell">
        <Reveal
          stagger={0.12}
          className="mt-16 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {dict.statement.stats.map((s) => (
            <div key={s.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="font-display text-[length:var(--text-2xl)] leading-none text-ink tabular-nums">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-ink-faint">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
