import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { MediaId } from "@/config/media";
/** Text-first interior header. Photos belong beside the relevant content. */
export function PageHeader({
  title,
  emphasis,
  lead,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  emphasis?: string;
  lead?: string;
  mediaId: MediaId;
  children?: ReactNode;
}) {
  return (
    <section className="shell exp-page-intro">
      <h1>
        {title}
        {emphasis && <> {emphasis}</>}
      </h1>
      {lead && <p>{lead}</p>}
      {children}
    </section>
  );
}
