"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { tours } from "@/content/tours";
import { routes } from "@/lib/routes";
import { whatsappLink } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";

const WA_MESSAGE: Record<Locale, string> = {
  es: "Hola, quisiera consultar disponibilidad para un tour a Cuyabeno.",
  en: "Hi, I'd like to check availability for a Cuyabeno tour.",
};

/**
 * "Planifica tu viaje" en la home: tres campos y listo. No envía nada acá —
 * lleva a /reservar con los datos ya cargados, así el formulario largo
 * aparece recién cuando la persona ya decidió.
 */
export function BookingCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const [tour, setTour] = useState(tours.find((t) => t.featured)?.id ?? tours[0].id);
  const [date, setDate] = useState("");
  const [pax, setPax] = useState(2);

  const go = () => {
    const params = new URLSearchParams({ tour, pax: String(pax) });
    if (date) params.set("date", date);
    router.push(`${routes.book(locale)}?${params.toString()}`);
  };

  const fieldClass =
    "w-full border-b border-on-deep/25 bg-transparent pb-3 pt-2 text-on-deep " +
    "outline-none transition-colors focus:border-on-deep placeholder:text-on-deep-faint " +
    "[color-scheme:dark]";

  return (
    <section className="relative overflow-hidden bg-bg-deep">
      <div className="absolute inset-0 opacity-30">
        <Media id="home-closing" locale={locale} hideLabel sizes="100vw" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,13,0.72),rgba(8,18,13,0.94))]"
      />

      <div className="shell relative section-y">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal stagger={0.1} className="lg:col-span-5">
            <span className="eyebrow block text-on-deep-faint">{dict.booking.eyebrow}</span>
            <h2 className="mt-6 text-[length:var(--text-3xl)] text-on-deep">
              {dict.booking.title}{" "}
              <em className="font-light italic text-accent-soft">{dict.booking.titleEmphasis}</em>
            </h2>
            <p className="mt-7 max-w-[42ch] text-[length:var(--text-lg)] font-light leading-relaxed text-on-deep-soft">
              {dict.booking.lead}
            </p>
          </Reveal>

          <Reveal y={26} className="lg:col-span-7 lg:pt-6">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="cta-tour"
                  className="eyebrow mb-3 block text-on-deep-faint"
                >
                  {dict.booking.tourLabel}
                </label>
                <select
                  id="cta-tour"
                  value={tour}
                  onChange={(e) => setTour(e.target.value)}
                  className={fieldClass}
                >
                  {tours.map((t) => (
                    <option key={t.id} value={t.id} className="bg-bg-deep">
                      {t.days} {dict.common.days} — USD {t.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="cta-date" className="eyebrow mb-3 block text-on-deep-faint">
                  {dict.booking.dateLabel}
                </label>
                <input
                  id="cta-date"
                  type="date"
                  value={date}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDate(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <span className="eyebrow mb-3 block text-on-deep-faint">
                  {dict.booking.travelersLabel}
                </span>
                <div className="flex items-center justify-between border-b border-on-deep/25 pb-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setPax((p) => Math.max(1, p - 1))}
                    aria-label="-1"
                    className="p-1.5 text-on-deep-soft transition-colors hover:text-on-deep"
                  >
                    <Minus size={16} strokeWidth={1.5} />
                  </button>
                  <span className="font-display text-[1.4rem] tabular-nums text-on-deep">
                    {pax}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPax((p) => Math.min(40, p + 1))}
                    aria-label="+1"
                    className="p-1.5 text-on-deep-soft transition-colors hover:text-on-deep"
                  >
                    <Plus size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={go}
                className="inline-flex items-center gap-3 rounded-[var(--radius)] bg-accent px-8 py-4 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft"
              >
                {dict.booking.submit}
                <ArrowRight size={16} strokeWidth={1.6} />
              </button>

              <a
                href={whatsappLink(WA_MESSAGE[locale])}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-on-deep/30 pb-1 text-sm text-on-deep-soft transition-colors hover:border-on-deep hover:text-on-deep"
              >
                {dict.booking.orWhatsapp}
              </a>
            </div>

            <p className="mt-8 text-xs text-on-deep-faint">
              {pick(
                {
                  es: "El precio no incluye el transporte Quito ↔ Puente de Cuyabeno.",
                  en: "The price does not include Quito ↔ Cuyabeno Bridge transport.",
                },
                locale,
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
