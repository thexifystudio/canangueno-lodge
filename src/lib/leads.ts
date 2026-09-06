import { z } from "zod";
import { tours } from "@/content/tours";

/** Esquema compartido por el formulario (cliente) y la API (servidor). */
export const leadSchema = z.object({
  tourId: z.enum(tours.map((t) => t.id) as [string, ...string[]]),
  date: z.string().min(1).max(20),
  travelers: z.coerce.number().int().min(1).max(40),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(5).max(40),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  locale: z.enum(["es", "en"]),
  attribution: z
    .object({
      utmSource: z.string().max(120).optional(),
      utmMedium: z.string().max(120).optional(),
      utmCampaign: z.string().max(160).optional(),
      utmTerm: z.string().max(160).optional(),
      utmContent: z.string().max(160).optional(),
      gclid: z.string().max(200).optional(),
      fbclid: z.string().max(200).optional(),
      referrer: z.string().max(400).optional(),
      landingPage: z.string().max(200).optional(),
      firstSeenAt: z.string().max(40).optional(),
    })
    .optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

/**
 * Identificador legible que se le da a la persona y que viaja en el mensaje
 * de WhatsApp. Es lo que permite casar la conversación con el lead sin
 * depender de que alguien lo anote a mano.
 */
export function buildReference(date = new Date()): string {
  const stamp = date.toISOString().slice(2, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `CNL-${stamp}-${rand}`;
}
