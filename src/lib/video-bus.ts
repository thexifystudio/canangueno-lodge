/**
 * ────────────────────────────────────────────────────────────────────────────
 *  AVISO ENTRE LOS DOS VIDEOS DE LA PÁGINA
 * ────────────────────────────────────────────────────────────────────────────
 *  Hay dos reproductores: el del hero, que corre en silencio y en bucle de
 *  fondo, y el del lightbox, que se abre a pantalla completa con sonido.
 *
 *  Si el lightbox se abre mientras el del hero sigue corriendo, el visitante
 *  paga DOS streams de YouTube al mismo tiempo por ver uno. En una conexión
 *  de campo eso se nota. Así que el lightbox avisa cuando se abre y cuando se
 *  cierra, y el hero se pausa mientras tanto.
 *
 *  Un evento de `window` y no un contexto de React a propósito: los dos
 *  componentes no comparten árbol ni tienen por qué, y el contrato entero
 *  cabe en este archivo.
 */

const EVENT = "canangueno:lightbox";

/** Lo llama el lightbox al abrirse y al cerrarse. */
export function announceLightbox(open: boolean) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: open }));
}

/** Lo escucha el hero. Devuelve la función para dejar de escuchar. */
export function onLightbox(fn: (open: boolean) => void) {
  const handler = (e: Event) => fn((e as CustomEvent<boolean>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
