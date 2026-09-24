/**
 * ────────────────────────────────────────────────────────────────────────────
 *  ÍCONOS DE MARCA
 * ────────────────────────────────────────────────────────────────────────────
 *  lucide ya no trae logos de marcas, así que viven acá, dibujados a mano en
 *  la misma rejilla de 24 px y el mismo trazo que los íconos de lucide: al
 *  lado de una flecha o de un check se ven de la misma familia.
 *
 *  WhatsApp es la excepción: va relleno, porque el glifo oficial es lo que
 *  hace que el botón se reconozca antes de leer nada.
 */

/** El glifo de WhatsApp, no un ícono de chat genérico: es lo que hace que el
 *  botón se reconozca de un vistazo, antes de leer nada. */
export function WhatsAppGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.884.518 3.646 1.42 5.152L2 22l4.966-1.395A9.955 9.955 0 0 0 12.001 22c5.523 0 10.001-4.478 10.001-10S17.524 2 12.001 2zm0 18.2a8.17 8.17 0 0 1-4.166-1.14l-.299-.177-3.098.87.878-3.02-.194-.31A8.19 8.19 0 1 1 20.2 12a8.209 8.209 0 0 1-8.199 8.2z" />
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
}

type IconProps = { size?: number };

function Stroke({ size = 20, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(p: IconProps) {
  return (
    <Stroke {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </Stroke>
  );
}

export function FacebookIcon(p: IconProps) {
  return (
    <Stroke {...p}>
      <path d="M15.5 3.5h-2.3a3.7 3.7 0 0 0-3.7 3.7V10H7v3.4h2.5V20.5h3.4v-7.1h2.5l.6-3.4h-3.1V7.6c0-.6.4-.9.9-.9h1.7z" />
    </Stroke>
  );
}

/** El búho de Tripadvisor, reducido a lo que se lee a 20 px: los dos ojos,
 *  la frente y el pico. */
export function TripadvisorIcon(p: IconProps) {
  return (
    <Stroke {...p}>
      <path d="M3 9.2C5.6 7.4 8.7 6.5 12 6.5s6.4.9 9 2.7" />
      <circle cx="7" cy="13.5" r="3.6" />
      <circle cx="17" cy="13.5" r="3.6" />
      <circle cx="7" cy="13.5" r="1" fill="currentColor" />
      <circle cx="17" cy="13.5" r="1" fill="currentColor" />
      <path d="M10.4 16.4 12 18.6l1.6-2.2" />
    </Stroke>
  );
}
