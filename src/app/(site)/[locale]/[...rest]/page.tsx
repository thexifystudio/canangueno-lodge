import { notFound } from "next/navigation";

/**
 * Cualquier ruta que no existe dentro de un idioma (`/es/lo-que-sea`) cae
 * acá y dispara el 404 del idioma, con cabecera, pie y marca. Sin este
 * atrapa-todo, Next mostraba su 404 genérico: negro, en inglés y sin nada
 * del sitio.
 */
/* El layout cierra los parámetros a los cuatro idiomas; acá se reabren para
   que cualquier ruta dentro de un idioma llegue a `notFound()`. */
export const dynamicParams = true;

export default function CatchAll() {
  notFound();
}
