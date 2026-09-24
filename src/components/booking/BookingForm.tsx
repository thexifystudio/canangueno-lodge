"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/config/site";
import { localDateISO, validTravelDate } from "@/lib/travel-date";

/** Lo mínimo de cada tour que necesita el formulario, ya en su idioma. */
export type BookingTour = {
  id: string;
  days: number;
  nights: number;
  name: string;
  tagline: string;
};

type Field = "date" | "pax" | "name" | "contact";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Un teléfono con código de país: al menos 7 dígitos, con o sin espacios. */
const PHONE = /^\+?[\d\s().-]{7,}$/;

/**
 * El formulario llega del servidor ya con el tour, la fecha y los viajeros
 * que vienen en la URL (desde "Planifica tu viaje"), así se ve completo en
 * el HTML inicial. Sólo recibe los textos de su idioma, no los diccionarios
 * de los cuatro.
 *
 * La validación es propia (`noValidate`): los globos nativos del navegador
 * salen en el idioma del navegador, no en el de la página, y no dicen cómo
 * corregir el dato.
 */
export function BookingForm({
  locale: l,
  t9n,
  units,
  tours,
  initial,
}: {
  locale: Locale;
  t9n: Dictionary["booking"];
  units: { days: string; nights: string };
  tours: BookingTour[];
  initial: { tour: string; date: string; pax: string };
}) {
  const [tourId, setTourId] = useState(initial.tour);
  const [pax, setPax] = useState(initial.pax);
  const [today, setToday] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => setToday(localDateISO()), []);
  useEffect(() => {
    if (prepared) result.current?.focus();
  }, [prepared]);

  const tour = tours.find((t) => t.id === tourId) ?? tours[0];
  const count = Number(pax),
    validCount = Number.isInteger(count) && count >= 1 && count <= 40;

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const date = String(fd.get("date") ?? "");
    if (!validTravelDate(date)) e.date = t9n.errDate;
    else if (date < localDateISO()) e.date = t9n.errDatePast;
    if (!validCount) e.pax = t9n.errPax;
    if (String(fd.get("name") ?? "").trim().length < 2) e.name = t9n.errName;
    const contact = String(fd.get("contact") ?? "").trim();
    if (!EMAIL.test(contact) && !PHONE.test(contact))
      e.contact = t9n.errContact;
    return e;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const found = validate(fd);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
      return;
    }
    const date = String(fd.get("date"));
    const readable = new Intl.DateTimeFormat(l, {
      dateStyle: "long",
      timeZone: "UTC",
    }).format(new Date(date + "T12:00:00Z"));
    const notes = String(fd.get("notes") ?? "").trim();
    setPrepared(
      [
        t9n.msgIntro,
        `${tour.name} (${tour.days} ${units.days} / ${tour.nights} ${units.nights})`,
        t9n.msgDate + readable,
        t9n.msgTravelers + count,
        t9n.msgName + String(fd.get("name")).trim(),
        t9n.msgContact + String(fd.get("contact")).trim(),
        ...(notes ? [t9n.msgNotes + notes] : []),
        t9n.msgClosing,
      ].join("\n"),
    );
  }

  /** Props de accesibilidad de un campo según tenga error o no. */
  const a11y = (f: Field, hint?: string) => ({
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby":
      [errors[f] && `err-${f}`, hint].filter(Boolean).join(" ") || undefined,
  });
  const error = (f: Field) =>
    errors[f] && (
      <p id={`err-${f}`} className="exp-field-error">
        {errors[f]}
      </p>
    );

  return (
    <div className="exp-book-layout">
      <form
        ref={form}
        className="exp-book-form"
        noValidate
        onChange={(e) => {
          setPrepared("");
          const name = (e.target as unknown as HTMLInputElement).name as Field;
          if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
        }}
        onSubmit={onSubmit}
      >
        <fieldset>
          <legend>{t9n.formJourneyLegend}</legend>
          <div className="exp-book-fields">
            <label className="exp-field-full">
              {t9n.routeLabel}
              <select
                name="tour"
                value={tourId}
                onChange={(e) => setTourId(e.target.value)}
              >
                {tours.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.days} {units.days} / {t.nights} {units.nights}
                  </option>
                ))}
              </select>
            </label>
            <div>
              <label>
                {t9n.preferredDateLabel}
                <input
                  name="date"
                  type="date"
                  required
                  min={today || undefined}
                  defaultValue={initial.date}
                  {...a11y("date")}
                />
              </label>
              {error("date")}
            </div>
            <div>
              <label>
                {t9n.travelersLabel}
                <input
                  name="pax"
                  type="number"
                  inputMode="numeric"
                  required
                  min={1}
                  max={40}
                  step={1}
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  {...a11y("pax")}
                />
              </label>
              {error("pax")}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>{t9n.formAboutLegend}</legend>
          <div className="exp-book-fields">
            <div className="exp-field-full">
              <label>
                {t9n.yourNameLabel}
                <input
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  {...a11y("name")}
                />
              </label>
              {error("name")}
            </div>
            <div className="exp-field-full">
              <label>
                {t9n.contactLabel}
                <input
                  name="contact"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={120}
                  required
                  {...a11y("contact", "hint-contact")}
                />
              </label>
              <p id="hint-contact" className="exp-field-hint">
                {t9n.contactHint}
              </p>
              {error("contact")}
            </div>
            <label className="exp-field-full">
              {t9n.notesLabel}
              <textarea
                name="notes"
                rows={3}
                maxLength={800}
                placeholder={t9n.notesPlaceholder}
              />
            </label>
          </div>
        </fieldset>
        <p className="exp-small">{t9n.noChargeNote}</p>
        <button type="submit" className="exp-button">
          {t9n.prepareCta}
          <ArrowUpRight size={17} />
        </button>
        {prepared && (
          <div
            ref={result}
            tabIndex={-1}
            role="status"
            className="exp-enquiry-result"
          >
            <h2>{t9n.readyTitle}</h2>
            <p>{t9n.readyBody}</p>
            <pre>{prepared}</pre>
            <div className="exp-detail-actions">
              <a
                href={whatsappLink(prepared)}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-button"
              >
                <MessageCircle size={17} />
                {t9n.openWhatsapp}
              </a>
              <a
                className="exp-text-link"
                href={
                  "mailto:" +
                  site.contact.email +
                  "?subject=" +
                  encodeURIComponent(
                    `${t9n.emailSubject} · ${tour.days} ${units.days}`,
                  ) +
                  "&body=" +
                  encodeURIComponent(prepared)
                }
              >
                <Mail size={16} />
                {t9n.openEmail}
              </a>
            </div>
          </div>
        )}
      </form>
      <aside className="exp-book-summary">
        <p className="exp-small">{t9n.summaryEyebrow}</p>
        <h2>{tour.tagline}</h2>
        <p>
          {tour.days} {units.days} / {tour.nights} {units.nights}
        </p>
        <dl>
          <div>
            <dt>{t9n.travelersLabel}</dt>
            <dd>{validCount ? count : "—"}</dd>
          </div>
        </dl>
        <p className="exp-small">{t9n.subtotalNote}</p>
        <h3>{t9n.includedTitle}</h3>
        <p>{t9n.includedBody}</p>
        <h3>{t9n.extraTitle}</h3>
        <p>{t9n.extraBody}</p>
        <p className="exp-small exp-book-availability">{t9n.availabilityNote}</p>
      </aside>
    </div>
  );
}
