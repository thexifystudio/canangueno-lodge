/**
 * ────────────────────────────────────────────────────────────────────────────
 *  EL LOGO
 * ────────────────────────────────────────────────────────────────────────────
 *  El logo real del cliente: el tucán más "Canangueno Lodge · Cuyabeno".
 *
 *  Van las DOS versiones en el marcado y el CSS decide cuál se ve, según la
 *  barra esté sobre el hero (oscuro) o sobre el contenido (claro). Se hace así
 *  y no cambiando el `src` desde React porque la barra alterna al hacer
 *  scroll: cambiar el `src` provocaría un parpadeo cada vez. Son 30 KB cada
 *  una, se piden una sola vez y quedan en caché.
 *
 *  El negativo NO está dibujado a mano: lo genera `scripts/marca.mjs` desde el
 *  mismo original, recoloreando sólo los píxeles neutros. Si el cliente manda
 *  otro logo, se reemplaza el original y se vuelve a correr ese script.
 *
 *  `alt=""` a propósito: el enlace que lo envuelve ya lleva
 *  `aria-label="Canangueno Lodge"`, y repetirlo haría que un lector de
 *  pantalla anuncie el nombre dos veces.
 */
export function Logo() {
  return (
    <>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/marca/logo.webp"
        alt=""
        width={460}
        height={184}
        className="exp-logo exp-logo-dark"
        draggable={false}
      />
      <img
        src="/marca/logo-claro.webp"
        alt=""
        width={460}
        height={184}
        className="exp-logo exp-logo-light"
        draggable={false}
      />
      {/* eslint-enable @next/next/no-img-element */}
    </>
  );
}
