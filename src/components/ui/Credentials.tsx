import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  AVALES — Ministerio de Turismo, Ministerio del Ambiente y Tripadvisor
 * ────────────────────────────────────────────────────────────────────────────
 *  Los logos oficiales, en su color, siempre sobre fondo claro (los textos
 *  de los ministerios son gris oscuro y desaparecen sobre el verde profundo).
 *
 *  · `band`    → franja propia con el texto al lado (portada, reservar).
 *  · `compact` → sólo los logos, chicos (el pie de página).
 *
 *  Tripadvisor es un enlace a las reseñas del lodge.
 */

const COPY: Record<
  Locale,
  {
    title: string;
    body: string;
    tourism: string;
    environment: string;
    tripadvisor: string;
  }
> = {
  es: {
    title: "Operación autorizada",
    body: "Operadora de turismo autorizada por el Ministerio de Turismo y el Ministerio del Ambiente del Ecuador, para operar dentro de la Reserva Cuyabeno.",
    tourism: "Ministerio de Turismo del Ecuador",
    environment: "Ministerio del Ambiente del Ecuador",
    tripadvisor: "Opiniones de Canangueno Lodge en Tripadvisor",
  },
  en: {
    title: "Licensed operation",
    body: "A tour operator licensed by Ecuador’s Ministry of Tourism and Ministry of the Environment to operate inside the Cuyabeno Reserve.",
    tourism: "Ecuador Ministry of Tourism",
    environment: "Ecuador Ministry of the Environment",
    tripadvisor: "Canangueno Lodge reviews on Tripadvisor",
  },
  de: {
    title: "Lizenzierter Betrieb",
    body: "Ein vom Tourismus- und vom Umweltministerium Ecuadors zugelassener Reiseveranstalter für den Betrieb im Cuyabeno-Reservat.",
    tourism: "Tourismusministerium von Ecuador",
    environment: "Umweltministerium von Ecuador",
    tripadvisor: "Bewertungen der Canangueno Lodge auf Tripadvisor",
  },
  fr: {
    title: "Opérateur agréé",
    body: "Un tour-opérateur agréé par le ministère du Tourisme et le ministère de l’Environnement de l’Équateur pour opérer dans la réserve de Cuyabeno.",
    tourism: "Ministère du Tourisme de l’Équateur",
    environment: "Ministère de l’Environnement de l’Équateur",
    tripadvisor: "Avis sur le Canangueno Lodge sur Tripadvisor",
  },
};

function Logos({
  locale,
  size,
}: {
  locale: Locale;
  size: "sm" | "lg";
}) {
  const c = COPY[locale];
  const h = size === "lg" ? "h-20 sm:h-24" : "h-14";
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center",
        size === "lg" ? "gap-x-10 gap-y-5" : "gap-x-6 gap-y-4",
      )}
    >
      <li>
        <Image
          src="/marca/avales/ministerio-turismo.webp"
          alt={c.tourism}
          width={134}
          height={123}
          className={cn(h, "w-auto")}
        />
      </li>
      <li>
        <Image
          src="/marca/avales/ministerio-ambiente.webp"
          alt={c.environment}
          width={110}
          height={116}
          className={cn(h, "w-auto")}
        />
      </li>
      <li>
        <a
          href={site.social.tripadvisor}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.tripadvisor}
          className="block transition-transform hover:scale-105"
        >
          {/* El círculo de Tripadvisor llena su caja; los de los ministerios
              tienen texto debajo. Un poco más chico se ven del mismo peso. */}
          <Image
            src="/marca/avales/tripadvisor.webp"
            alt=""
            width={120}
            height={120}
            className={cn(size === "lg" ? "h-16 sm:h-20" : "h-12", "w-auto")}
          />
        </a>
      </li>
    </ul>
  );
}

export function Credentials({
  locale,
  variant = "band",
}: {
  locale: Locale;
  variant?: "band" | "compact";
}) {
  const c = COPY[locale];
  if (variant === "compact") {
    return (
      <div>
        <p className="eyebrow mb-2 text-ink-faint">{c.title}</p>
        <Logos locale={locale} size="sm" />
      </div>
    );
  }
  return (
    <section className="exp-credentials" aria-label={c.title}>
      <div className="shell exp-credentials-inner">
        <div>
          <p className="exp-credentials-eyebrow">{c.title}</p>
          <p className="exp-credentials-body">{c.body}</p>
        </div>
        <Logos locale={locale} size="lg" />
      </div>
    </section>
  );
}
