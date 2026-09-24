import { Mail } from "lucide-react";
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
 *  como alternativa para quien no lo usa.
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
        <h2 id="closing-title">{c.closingTitle}</h2>
        <p>{c.closingBody}</p>
        <div className="exp-closing-actions">
          <a
            className="exp-button"
            href={whatsappLink(c.closingMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppGlyph size={20} />
            {c.closingWhatsapp}
          </a>
          {/* Dos botones del mismo tamaño: WhatsApp lleno (es por donde
              llegan las consultas) y el correo con borde, para quien no lo
              usa. La dirección queda escrita abajo, para copiarla. */}
          <a
            className="exp-button exp-button-ghost-light"
            href={`mailto:${site.contact.email}`}
          >
            <Mail size={18} aria-hidden />
            {c.closingEmail}
          </a>
        </div>
        <p className="exp-closing-mail">{site.contact.email}</p>
      </div>
    </section>
  );
}
