"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { tours, tourById } from "@/content/tours";
import { whatsappLink } from "@/config/site";
import { captureAttribution, getAttribution } from "@/lib/attribution";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

export function BookingForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const params = useSearchParams();

  const [tourId, setTourId] = useState(
    () => params.get("tour") ?? tours.find((t) => t.featured)?.id ?? tours[0].id,
  );
  const [date, setDate] = useState(() => params.get("date") ?? "");
  const [travelers, setTravelers] = useState(() => Number(params.get("pax")) || 2);
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | null>(null);

  // Se guarda el origen apenas se monta, antes de que la persona navegue.
  useEffect(() => captureAttribution(), []);

  const tour = tourById(tourId) ?? tours[0];
  const total = tour.price * travelers;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      tourId,
      date,
      travelers,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      country: String(form.get("country") ?? ""),
      message: String(form.get("message") ?? ""),
      locale,
      attribution: getAttribution(),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; reference?: string };
      if (!res.ok || !data.ok) throw new Error("failed");
      setReference(data.reference ?? null);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const label = "eyebrow mb-3 block text-ink-faint";
  const field =
    "w-full border-b border-line bg-transparent pb-3 pt-2 text-ink outline-none " +
    "transition-colors focus:border-ink placeholder:text-ink-faint/70";

  /* ── Confirmación ── */
  if (status === "sent") {
    const waMessage =
      locale === "es"
        ? `Hola, acabo de enviar una consulta${reference ? ` (referencia ${reference})` : ""} para el ${pick(tour.name, locale)}.`
        : `Hi, I've just sent an enquiry${reference ? ` (reference ${reference})` : ""} about the ${pick(tour.name, locale)}.`;

    return (
      <div className="border-t border-ink/20 pt-10">
        <span className="inline-flex h-11 w-11 items-center justify-center border border-accent text-accent">
          <Check size={20} strokeWidth={1.5} />
        </span>
        <h2 className="mt-7 font-display text-[length:var(--text-2xl)] text-ink">
          {dict.booking.successTitle}
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">{dict.booking.successBody}</p>

        {reference && (
          <p className="mt-8 border-y border-line py-5 text-sm text-ink-soft">
            {locale === "es" ? "Tu referencia" : "Your reference"}:{" "}
            <span className="font-medium tabular-nums text-ink">{reference}</span>
          </p>
        )}

        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-[var(--radius)] bg-accent px-7 py-4 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft"
        >
          {dict.common.whatsapp}
          <ArrowRight size={16} strokeWidth={1.6} />
        </a>
      </div>
    );
  }

  /* ── Formulario ── */
  return (
    <form onSubmit={onSubmit} className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
      <div className="flex flex-col gap-11 lg:col-span-7">
        {/* Tour */}
        <fieldset>
          <legend className={label}>{dict.booking.tourLabel}</legend>
          <div className="flex flex-col">
            {tours.map((t) => (
              <label
                key={t.id}
                className={cn(
                  "flex cursor-pointer items-baseline justify-between gap-5 border-b border-line py-5 transition-colors",
                  tourId === t.id ? "border-ink/40" : "hover:border-ink/25",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <input
                    type="radio"
                    name="tour"
                    value={t.id}
                    checked={tourId === t.id}
                    onChange={() => setTourId(t.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "mt-1 h-2.5 w-2.5 shrink-0 rounded-full border transition-colors",
                      tourId === t.id ? "border-accent bg-accent" : "border-ink/35",
                    )}
                  />
                  <span>
                    <span
                      className={cn(
                        "block font-display text-[1.35rem] leading-tight transition-colors",
                        tourId === t.id ? "text-ink" : "text-ink-soft",
                      )}
                    >
                      {pick(t.tagline, locale)}
                    </span>
                    <span className="mt-1 block text-xs text-ink-faint">
                      {t.days} {dict.common.days} / {t.nights} {dict.common.nights}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 font-display text-[1.3rem] text-ink tabular-nums">
                  USD {t.price}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Fecha y viajeros */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className={label}>
              {dict.booking.dateLabel}
            </label>
            <input
              id="date"
              type="date"
              required
              value={date}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setDate(e.target.value)}
              className={field}
            />
          </div>

          <div>
            <span className={label}>{dict.booking.travelersLabel}</span>
            <div className="flex items-center justify-between border-b border-line pb-2.5 pt-1">
              <button
                type="button"
                onClick={() => setTravelers((p) => Math.max(1, p - 1))}
                aria-label="-1"
                className="p-1.5 text-ink-soft transition-colors hover:text-ink"
              >
                <Minus size={16} strokeWidth={1.5} />
              </button>
              <span className="font-display text-[1.4rem] tabular-nums text-ink">
                {travelers}
              </span>
              <button
                type="button"
                onClick={() => setTravelers((p) => Math.min(40, p + 1))}
                aria-label="+1"
                className="p-1.5 text-ink-soft transition-colors hover:text-ink"
              >
                <Plus size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Datos */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>
              {dict.booking.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder={dict.booking.namePlaceholder}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              {dict.booking.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={dict.booking.emailPlaceholder}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="phone" className={label}>
              {dict.booking.phoneLabel}
            </label>
            <input
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder={dict.booking.phonePlaceholder}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="country" className={label}>
              {dict.booking.countryLabel}
            </label>
            <input
              id="country"
              name="country"
              autoComplete="country-name"
              placeholder={dict.booking.countryPlaceholder}
              className={field}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={label}>
            {dict.booking.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder={dict.booking.messagePlaceholder}
            className={cn(field, "resize-none")}
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-3 rounded-[var(--radius)] bg-accent px-8 py-4 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-soft disabled:opacity-50"
          >
            {status === "sending" ? dict.booking.submitting : dict.booking.submit}
            <ArrowRight size={16} strokeWidth={1.6} />
          </button>

          <a
            href={whatsappLink(
              locale === "es"
                ? "Hola, quisiera consultar disponibilidad para un tour a Cuyabeno."
                : "Hi, I'd like to check availability for a Cuyabeno tour.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-ink/25 pb-1 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            {dict.booking.orWhatsapp}
          </a>
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-accent">
            <strong className="font-medium">{dict.booking.errorTitle}.</strong>{" "}
            {dict.booking.errorBody}
          </p>
        )}
      </div>

      {/* Resumen */}
      <aside className="lg:col-span-5">
        <div className="border-t border-ink/20 pt-7 lg:sticky lg:top-32">
          <h2 className="eyebrow mb-7 text-ink-faint">{dict.booking.summaryTitle}</h2>

          <dl className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-5 border-b border-line pb-4">
              <dt className="text-sm text-ink-faint">{dict.booking.tourLabel}</dt>
              <dd className="text-right text-sm text-ink">{pick(tour.tagline, locale)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-5 border-b border-line pb-4">
              <dt className="text-sm text-ink-faint">{dict.tours.tableDuration}</dt>
              <dd className="text-sm text-ink tabular-nums">
                {tour.days} {dict.common.days} / {tour.nights} {dict.common.nights}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-5 border-b border-line pb-4">
              <dt className="text-sm text-ink-faint">{dict.booking.dateLabel}</dt>
              <dd className="text-sm text-ink tabular-nums">{date || "—"}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-5 border-b border-line pb-4">
              <dt className="text-sm text-ink-faint">{dict.booking.travelersLabel}</dt>
              <dd className="text-sm text-ink tabular-nums">{travelers}</dd>
            </div>
          </dl>

          <div className="mt-8 flex items-baseline justify-between gap-5">
            <span className="eyebrow text-ink-faint">{dict.booking.estimatedTotal}</span>
            <span className="font-display text-[2rem] leading-none text-ink tabular-nums">
              USD {total}
            </span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-ink-faint">
            {dict.booking.estimatedNote}
          </p>
        </div>
      </aside>
    </form>
  );
}
