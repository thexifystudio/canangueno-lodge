import { Check, Minus } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import { included, notIncluded } from "@/content/tours";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  QUÉ INCLUYE Y QUÉ NO
 * ────────────────────────────────────────────────────────────────────────────
 *  Va en `/tours` y en la página de cada tour: quien está mirando un tour es
 *  quien necesita saberlo.
 *
 *  Dos tarjetas lado a lado, con el mismo peso: que alguien reserve sin saber
 *  que el bus de Quito va aparte es un problema el día de la llegada.
 */

const COPY: Record<Locale, { included: string; notIncluded: string }> = {
  es: { included: "El tour incluye", notIncluded: "No incluye" },
  en: { included: "The tour includes", notIncluded: "Not included" },
  de: { included: "Die Tour enthält", notIncluded: "Nicht enthalten" },
  fr: { included: "Le circuit comprend", notIncluded: "Non inclus" },
};

export function TourTerms({
  locale: l,
  id,
}: {
  locale: Locale;
  /** Ancla opcional, para enlazar directo a este bloque. */
  id?: string;
}) {
  const c = COPY[l];
  return (
    <section className="exp-terms" id={id}>
      <div className="shell exp-terms-cols">
        <div className="exp-terms-card is-in">
          <h2>{c.included}</h2>
          <ul>
            {pick(included, l).map((item) => (
              <li key={item}>
                <span aria-hidden>
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="exp-terms-card is-out">
          <h2>{c.notIncluded}</h2>
          <ul>
            {pick(notIncluded, l).map((item) => (
              <li key={item}>
                <span aria-hidden>
                  <Minus size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
