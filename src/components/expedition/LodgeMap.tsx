import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pick, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/config/site";
import { lodgePage } from "@/content/lodge";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  DÓNDE VAS A ESTAR — el mapa del lodge
 * ────────────────────────────────────────────────────────────────────────────
 *  Google Maps en vista satélite: se ve el río y la selva alrededor del
 *  lodge. (Se probó OpenStreetMap, que no deja cookies, pero en esa parte de
 *  la reserva casi no tiene nada dibujado y el mapa salía en blanco.) No pide
 *  clave y se carga recién cuando el bloque entra en pantalla.
 *
 *  El punto sale de `site.location` (la ficha del lodge en Google Maps).
 */
export function LodgeMap({
  locale: l,
  showJourneyLink = true,
}: {
  locale: Locale;
  /** `false` en la propia página de cómo llegar (el enlace sería a sí misma). */
  showJourneyLink?: boolean;
}) {
  const { lat, lng } = site.location;
  const t = lodgePage.map;
  /* Zoom 13: se ve el río serpenteando junto al punto del lodge. */
  const src = `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=13&hl=${l}&output=embed`;

  return (
    <section className="shell section-y lodge-map">
      <div className="lodge-map-copy">
        <h2>{pick(t.title, l)}</h2>
        <p>{pick(t.body, l)}</p>
        <dl>
          {t.facts.map((f) => (
            <div key={f.label.es}>
              <dt>{pick(f.label, l)}</dt>
              <dd>{pick(f.value, l)}</dd>
            </div>
          ))}
        </dl>
        <div className="lodge-map-actions">
          <a
            href={site.location.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-button"
          >
            {pick(t.openMaps, l)}
            <ArrowUpRight size={17} />
          </a>
          {showJourneyLink && (
            <Link href={routes.journey(l)} className="exp-text-link">
              {pick(t.howTo, l)}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
      <div className="lodge-map-frame">
        <iframe
          src={src}
          title={pick(t.frameTitle, l)}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
