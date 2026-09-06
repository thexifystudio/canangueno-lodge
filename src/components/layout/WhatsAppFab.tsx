"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/i18n";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/cn";

const DEFAULT_MESSAGE: Record<Locale, string> = {
  es: "Hola, me interesa un tour a Cuyabeno. ¿Me pueden dar más información?",
  en: "Hi, I'm interested in a Cuyabeno tour. Could you send me more information?",
};

/**
 * CTA persistente de WhatsApp. Aparece recién después del hero para no tapar
 * la primera pantalla, y en móvil se ensancha para ser un objetivo táctil real.
 */
export function WhatsAppFab({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE[locale])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.common.whatsapp}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-bg-deep px-5 py-3.5",
        "text-sm font-medium text-on-deep shadow-[0_10px_30px_-10px_rgba(0,0,0,0.55)]",
        "transition-all duration-500 hover:bg-accent hover:text-accent-ink",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle size={18} strokeWidth={1.6} />
      <span className="hidden sm:inline">{dict.common.whatsappShort}</span>
    </a>
  );
}
