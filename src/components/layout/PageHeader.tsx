import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { MediaId } from "@/config/media";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Encabezado de las páginas interiores. Más bajo que el hero de la portada
 * (que es el único a pantalla completa), con la misma lógica: imagen al
 * fondo, velo, texto abajo a la izquierda.
 */
export function PageHeader({
  locale,
  eyebrow,
  title,
  emphasis,
  lead,
  mediaId,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  emphasis?: string;
  lead?: string;
  mediaId: MediaId;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[64svh] flex-col justify-end overflow-hidden bg-bg-deep pt-32">
      <div className="absolute inset-0">
        <Media id={mediaId} locale={locale} priority hideLabel sizes="100vw" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,13,0.62)_0%,rgba(8,18,13,0.3)_40%,rgba(8,18,13,0.88)_100%)]"
        />
      </div>

      <div className="shell relative pb-16 md:pb-20">
        <Reveal stagger={0.09}>
          <span className="eyebrow block text-on-deep-soft">{eyebrow}</span>
          <h1 className="mt-6 max-w-[20ch] text-[length:var(--text-3xl)] text-on-deep">
            {title}
            {emphasis && (
              <>
                {" "}
                <em className="font-light italic">{emphasis}</em>
              </>
            )}
          </h1>
          {lead && (
            <p className="mt-7 max-w-[54ch] text-[length:var(--text-lg)] font-light leading-relaxed text-on-deep-soft">
              {lead}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
