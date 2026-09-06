/**
 * ────────────────────────────────────────────────────────────────────────────
 *  ATRIBUCIÓN DE PRIMER CONTACTO
 * ────────────────────────────────────────────────────────────────────────────
 *  Guarda de dónde vino la persona la PRIMERA vez que entró al sitio y lo
 *  conserva hasta que envía el formulario. Sin esto no se puede saber qué
 *  canal trajo cada reserva, que es la base del acuerdo comercial.
 *
 *  Hoy vive en localStorage. Cuando exista la base de datos, el mismo objeto
 *  se guarda junto al lead y se cruza con el CRM.
 */

const KEY = "cnl_attribution";

export type Attribution = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landingPage?: string;
  firstSeenAt?: string;
};

/** Lee los parámetros de la URL actual. */
function readFromUrl(): Attribution {
  const p = new URLSearchParams(window.location.search);
  const get = (k: string) => p.get(k) || undefined;

  return {
    utmSource: get("utm_source"),
    utmMedium: get("utm_medium"),
    utmCampaign: get("utm_campaign"),
    utmTerm: get("utm_term"),
    utmContent: get("utm_content"),
    gclid: get("gclid"),
    fbclid: get("fbclid"),
    referrer: document.referrer || undefined,
    landingPage: window.location.pathname,
    firstSeenAt: new Date().toISOString(),
  };
}

/**
 * Guarda la atribución si es la primera visita. Si ya había una, NO la pisa:
 * lo que importa es el primer contacto, no el último.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(KEY)) return;
    window.localStorage.setItem(KEY, JSON.stringify(readFromUrl()));
  } catch {
    // Modo privado o cookies bloqueadas: seguimos sin atribución.
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
