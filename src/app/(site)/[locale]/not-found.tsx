import Link from "next/link";

/**
 * 404. No recibe `params`, así que muestra las dos salidas de idioma en vez
 * de adivinar en cuál está la persona.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-bg-deep pt-32 text-on-deep">
      <div className="shell py-20">
        <p className="eyebrow text-on-deep-faint">404</p>
        <h1 className="mt-6 max-w-[16ch] text-[length:var(--text-3xl)]">
          Esta página se perdió en la selva.
          <br />
          <em className="font-light italic">This page got lost in the jungle.</em>
        </h1>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/es"
            className="rounded-[var(--radius)] bg-accent px-7 py-4 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft"
          >
            Volver al inicio
          </Link>
          <Link
            href="/en"
            className="rounded-[var(--radius)] border border-on-deep/35 px-7 py-4 text-sm font-medium text-on-deep transition-colors hover:bg-on-deep/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
