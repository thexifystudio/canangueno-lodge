import type { Locale } from "@/lib/i18n";
import { es, type Dictionary } from "./es";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";

const dictionaries: Record<Locale, Dictionary> = { es, en, de, fr };

/** Diccionario de textos de interfaz del idioma pedido. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
