"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = { id: string; q: string; a: string };

/**
 * Acordeón sobre `<details>` nativo: funciona sin JS, es accesible por
 * defecto y el navegador se encarga del foco. El estado de React sólo sirve
 * para cambiar el ícono — nunca controla la apertura, para no pelearse con
 * el propio elemento.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  return (
    <div className="flex flex-col border-t border-line">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <details
            key={item.id}
            onToggle={(e) => {
              const isNowOpen = e.currentTarget.open;
              setOpenIds((prev) => {
                const next = new Set(prev);
                if (isNowOpen) next.add(item.id);
                else next.delete(item.id);
                return next;
              });
            }}
            className="group border-b border-line"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span
                className={cn(
                  "font-display text-[1.3rem] leading-snug transition-colors",
                  isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink",
                )}
              >
                {item.q}
              </span>
              <span className="mt-1.5 shrink-0 text-ink-faint" aria-hidden>
                {isOpen ? (
                  <Minus size={17} strokeWidth={1.5} />
                ) : (
                  <Plus size={17} strokeWidth={1.5} />
                )}
              </span>
            </summary>
            <div className="max-w-[68ch] pb-7 text-sm leading-relaxed text-ink-soft">
              {item.a}
            </div>
          </details>
        );
      })}
    </div>
  );
}
