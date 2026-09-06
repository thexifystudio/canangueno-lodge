import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "light" | "quiet";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide " +
  "transition-[background-color,color,border-color,opacity] duration-300 " +
  "disabled:opacity-50 disabled:pointer-events-none rounded-[var(--radius)]";

const variants: Record<Variant, string> = {
  /** El único botón con relleno del sitio. Se usa poco, a propósito. */
  primary: "bg-accent text-accent-ink hover:bg-accent-soft",
  /** Sobre fondos claros. */
  outline: "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.03]",
  /** Sobre fondos oscuros (bloques `bg-bg-deep` y el hero). */
  light:
    "border border-on-deep/35 text-on-deep hover:border-on-deep hover:bg-on-deep/10 backdrop-blur-sm",
  /** Enlace de texto con subrayado fino. */
  quiet:
    "text-ink border-b border-ink/25 hover:border-ink pb-1 !rounded-none !px-0 !py-0",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2.5",
  md: "text-sm px-6 py-3.5",
  lg: "text-sm px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: CommonProps & { href: string; external?: boolean } & Omit<
    ComponentPropsWithoutRef<"a">,
    "href"
  >) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
