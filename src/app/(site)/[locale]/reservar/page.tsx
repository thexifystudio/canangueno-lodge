import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { tours } from "@/content/tours";
import { validTravelDate } from "@/lib/travel-date";
import { Credentials } from "@/components/ui/Credentials";
import { BookingForm } from "@/components/booking/BookingForm";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    ...pageMetadata(locale, {
      title: dict.booking.metaTitle,
      description: dict.meta.bookDescription,
      path: (l) => routes.book(l),
    }),
    robots: { index: false, follow: true },
  };
}
/* Lee `?tour=…&date=…&pax=…` en el servidor: la página no puede ser estática,
   o el formulario saldría siempre con los valores por defecto. */
export const dynamic = "force-dynamic";

type Search = Record<string, string | string[] | undefined>;
const one = (v: Search[string]) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Search>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const q = await searchParams;
  const dict = getDictionary(l);
  const t9n = dict.booking;
  /* Lo que llega de "Planifica tu viaje", saneado: un dato raro en la URL
     cae al valor por defecto en vez de romper el formulario. */
  const pax = Number(one(q.pax));
  const initial = {
    tour: tours.some((t) => t.id === one(q.tour)) ? one(q.tour) : "4-dias",
    date: validTravelDate(one(q.date)) ? one(q.date) : "",
    pax: Number.isInteger(pax) && pax >= 1 && pax <= 40 ? String(pax) : "2",
  };
  return (
    <div className="exp-detail">
      <section className="shell exp-page-intro">
        <h1>{t9n.pageTitle}</h1>
        <p>{t9n.pageLead}</p>
      </section>
      <section className="shell" style={{ paddingBottom: "var(--section-y)" }}>
        <BookingForm
          locale={l}
          t9n={t9n}
          units={{ days: dict.common.days, nights: dict.common.nights }}
          tours={tours.map((t) => ({
            id: t.id,
            days: t.days,
            nights: t.nights,
            name: pick(t.name, l),
            tagline: pick(t.tagline, l),
          }))}
          initial={initial}
        />
      </section>
      <Credentials locale={l} />
      <section className="exp-inclusions">
        <div className="shell exp-heading" style={{ marginBottom: 0 }}>
          <h2>{t9n.beforeTitle}</h2>
          <p>{t9n.beforeBody}</p>
        </div>
      </section>
    </div>
  );
}
