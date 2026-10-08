import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { facilities, lodgePage } from "@/content/lodge";
import { Media } from "@/components/ui/Media";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ClosingBand } from "@/components/expedition/ClosingBand";
import { LodgeMap } from "@/components/expedition/LodgeMap";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, {
    title: dict.meta.lodgeTitle,
    description: dict.meta.lodgeDescription,
    path: (l) => routes.lodge(l),
    image: "lodge-building",
  });
}

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  EL LODGE
 * ────────────────────────────────────────────────────────────────────────────
 *  Ordenada como se vive una estadía, con las fotos reales del cliente:
 *
 *      título + el edificio → habitaciones y baños → la mesa
 *      → entre salida y salida (hamacas, estiramientos, charla)
 *      → dónde vas a estar (el mapa)
 *      → opiniones → cierre
 *
 *  El texto vive en `content/lodge.ts` (`lodgePage`).
 */
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t9n = getDictionary(l).lodge;
  const { rooms, table, between } = lodgePage;
  const gear = facilities.find((f) => f.id === "equipo");

  return (
    <div className="exp-detail lodge-page">
      {/* ── Título + el edificio ─────────────────────────────────────── */}
      <section className="shell lodge-intro">
        <div className="lodge-intro-copy">
          <p className="lodge-eyebrow">{t9n.eyebrow}</p>
          <h1>{t9n.pageTitle}</h1>
          <p className="lodge-lead">{t9n.pageLead}</p>
          <dl className="lodge-facts">
            {lodgePage.facts.map((f) => (
              <div key={f.value}>
                <dt>{f.value}</dt>
                <dd>{pick(f.label, l)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lodge-intro-media">
          <Media
            id="lodge-building"
            locale={l}
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* ── Habitaciones y baños ─────────────────────────────────────── */}
      <section className="lodge-rooms">
        <div className="shell">
          <div className="exp-heading">
            <h2>{pick(rooms.title, l)}</h2>
            <p>{pick(rooms.body, l)}</p>
          </div>
          <div className="lodge-rooms-grid">
            {(
              [
                ["lodge-room-double", rooms.captions.double, "is-main"],
                ["lodge-room-twin", rooms.captions.twin, "is-twin"],
                ["lodge-bath-shower", rooms.captions.shower, ""],
                ["lodge-bath-sink", rooms.captions.sink, ""],
              ] as const
            ).map(([id, caption, cls]) => (
              <figure key={id} className={"lodge-shot " + cls}>
                <div>
                  <Media
                    id={id}
                    locale={l}
                    sizes={
                      cls === "is-main"
                        ? "(max-width: 900px) 100vw, 58vw"
                        : "(max-width: 900px) 50vw, 20vw"
                    }
                  />
                </div>
                <figcaption>{pick(caption, l)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── La mesa ──────────────────────────────────────────────────── */}
      <section className="shell section-y lodge-table">
        <div className="lodge-table-copy">
          <h2>{pick(table.title, l)}</h2>
          <p>{pick(table.body, l)}</p>
        </div>
        {(
          [
            ["lodge-meal", table.captions.meal],
            ["lodge-dinner", table.captions.dinner],
          ] as const
        ).map(([id, caption]) => (
          <figure key={id} className="lodge-shot lodge-tall">
            <div>
              <Media id={id} locale={l} sizes="(max-width: 900px) 50vw, 28vw" />
            </div>
            <figcaption>{pick(caption, l)}</figcaption>
          </figure>
        ))}
      </section>

      {/* ── Entre salida y salida ────────────────────────────────────── */}
      <section className="lodge-between">
        <div className="shell">
          <div className="exp-heading">
            <h2>{pick(between.title, l)}</h2>
            <p>{pick(between.body, l)}</p>
          </div>
          <div className="lodge-between-grid">
            {(
              [
                ["lodge-hammocks", between.captions.hammocks],
                ["lodge-stretch", between.captions.stretch],
                ["lodge-group", between.captions.group],
              ] as const
            ).map(([id, caption]) => (
              <figure key={id} className="lodge-shot lodge-tall">
                <div>
                  <Media
                    id={id}
                    locale={l}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <figcaption>{pick(caption, l)}</figcaption>
              </figure>
            ))}
          </div>
          {gear && (
            <p className="lodge-gear">
              <strong>{pick(lodgePage.gearTitle, l)}:</strong>{" "}
              {pick(gear.body, l)}
            </p>
          )}
        </div>
      </section>

      {/* ── Dónde vas a estar ─────────────────────────────────────────── */}
      <LodgeMap locale={l} />

      <ReviewsSection locale={l} />
      <ClosingBand locale={l} />
    </div>
  );
}
