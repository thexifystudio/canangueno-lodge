import { ArrowUpRight, Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/config/site";
import { expeditionCopy } from "@/content/expedition-copy";
import { Media } from "@/components/ui/Media";
import { WhatsAppGlyph } from "@/components/ui/BrandIcons";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  EL CIERRE — el atardecer en la Laguna Grande
 * ────────────────────────────────────────────────────────────────────────────
 *  La portada abre con la llegada por el río y cierra con el atardecer del
 *  primer día: la página se lee como el viaje mismo, y este bloque es el
 *  único que vuelve al verde profundo del hero.
 *
 *  Reemplaza al formulario de fecha y viajeros. Fechas y tarifas las maneja
 *  el lodge en privado, así que el cierre no pide datos: invita a escribir.
 *  WhatsApp primero (es por donde de verdad llegan las consultas), el correo
 *  como alternativa para quien no lo usa. El texto a la izquierda y, a la
 *  derecha, una tarjeta con los dos canales y sus datos escritos.
 */
export function ClosingBand({ locale }: { locale: Locale }) {
  const c = expeditionCopy(locale);
  return (
    <section className="exp-closing" aria-labelledby="closing-title">
      <div className="exp-closing-media" aria-hidden>
        <Media id="home-closing" locale={locale} sizes="100vw" />
      </div>
      <div className="exp-closing-veil" aria-hidden />
      <div className="shell exp-closing-content">
        <div className="exp-closing-copy">
          <p className="exp-closing-eyebrow">{c.closingEyebrow}</p>
          <h2 id="closing-title">{c.closingTitle}</h2>
          <p>{c.closingBody}</p>
        </div>
        {/*
         * La tarjeta de contacto: los dos canales con su dato escrito (el
         * número y la dirección, no sólo un botón), para que se puedan copiar
         * o anotar. Toda la fila es el enlace. El correo abre con el asunto
         * ya puesto, así la consulta no llega como "(sin asunto)".
         */}
        <ul className="exp-closing-card">
          <li>
            <a
              href={whatsappLink(c.closingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="is-whatsapp"
            >
              <span className="exp-closing-icon" aria-hidden>
                <WhatsAppGlyph size={22} />
              </span>
              <span className="exp-closing-row">
                <strong>{c.closingWhatsapp}</strong>
                <span>{site.contact.phone}</span>
                <small>{c.closingWhatsappHint}</small>
              </span>
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.contact.email}?subject=${encodeURIComponent(c.closingSubject)}`}
            >
              <span className="exp-closing-icon" aria-hidden>
                <Mail size={20} />
              </span>
              <span className="exp-closing-row">
                <strong>{c.closingEmail}</strong>
                <span>{site.contact.email}</span>
                <small>{c.closingEmailHint}</small>
              </span>
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
