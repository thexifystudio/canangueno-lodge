import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  /** Segunda línea, en itálica del display. Es el gesto tipográfico del sitio. */
  emphasis?: string;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Sobre fondo oscuro. */
  onDeep?: boolean;
  className?: string;
  size?: "md" | "lg";
};

/**
 * Encabezado de sección. Un solo patrón para todo el sitio: etiqueta chica en
 * versalitas, título en display y una segunda línea en itálica.
 */
export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  lead,
  align = "left",
  onDeep = false,
  className,
  size = "md",
}: Props) {
  return (
    <Reveal
      stagger={0.09}
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-6 block",
            onDeep ? "text-on-deep-faint" : "text-ink-faint",
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          size === "lg" ? "text-[length:var(--text-3xl)]" : "text-[length:var(--text-2xl)]",
          onDeep ? "text-on-deep" : "text-ink",
          align === "center" ? "max-w-[22ch]" : "max-w-[20ch]",
        )}
      >
        {title}
        {emphasis && (
          <>
            {" "}
            <em className="font-display italic font-light">{emphasis}</em>
          </>
        )}
      </h2>

      {lead && (
        <p
          className={cn(
            "mt-7 max-w-[52ch] text-[length:var(--text-lg)] font-light leading-relaxed",
            onDeep ? "text-on-deep-soft" : "text-ink-soft",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
