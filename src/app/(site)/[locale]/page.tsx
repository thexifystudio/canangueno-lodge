import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { ExpeditionHome } from "@/components/expedition/ExpeditionHome";
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ExpeditionHome locale={locale} />;
}
