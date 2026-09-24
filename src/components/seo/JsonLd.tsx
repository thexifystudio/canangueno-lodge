import { site } from "@/config/site";
import { pick, type Locale } from "@/lib/i18n";
import { tours, type Tour } from "@/content/tours";
import { faqGroups } from "@/content/faqs";
import { getDictionary } from "@/i18n";

function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y estático: no hay entrada de usuario acá.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Identidad del negocio. Va una vez, en el layout. */
export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "@id": `${site.url}/#lodge`,
        name: site.name,
        legalName: site.legal.companyName,
        description: dict.meta.homeDescription,
        url: `${site.url}/${locale}`,
        /* Google usa este logo en los resultados enriquecidos y en el panel de
           conocimiento. Es el mismo archivo que sirve la barra de navegación. */
        logo: `${site.url}/marca/logo.webp`,
        telephone: site.contact.phone,
        email: site.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressRegion: site.location.region,
          addressCountry: "EC",
        },
        containedInPlace: {
          "@type": "TouristAttraction",
          name: "Reserva de Producción de Fauna Cuyabeno",
        },
        sameAs: [
          site.social.instagram,
          site.social.facebook,
          site.social.tripadvisor,
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private bathroom",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "All meals included",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Bilingual guides",
            value: true,
          },
        ],
      }}
    />
  );
}

/** Un tour concreto, sin precio: la tarifa se cotiza por WhatsApp o correo. */
export function TourJsonLd({ tour, locale }: { tour: Tour; locale: Locale }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: pick(tour.name, locale),
        description: pick(tour.summary, locale),
        url: `${site.url}/${locale}/tours/${pick(tour.slug, locale)}`,
        touristType: pick(tour.bestFor, locale),
        itinerary: {
          "@type": "ItemList",
          numberOfItems: tour.itinerary.length,
          itemListElement: tour.itinerary.map((d) => ({
            "@type": "ListItem",
            position: d.n,
            item: { "@type": "TouristAttraction", name: pick(d.title, locale) },
          })),
        },
        provider: { "@id": `${site.url}/#lodge` },
      }}
    />
  );
}

/** Índice de tours. */
export function ToursListJsonLd({ locale }: { locale: Locale }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: tours.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: pick(t.name, locale),
          url: `${site.url}/${locale}/tours/${pick(t.slug, locale)}`,
        })),
      }}
    />
  );
}

/** Preguntas frecuentes — se arma desde el mismo contenido que se muestra. */
export function FaqJsonLd({ locale }: { locale: Locale }) {
  const items = faqGroups.flatMap((g) => g.items);

  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: pick(item.q, locale),
          acceptedAnswer: { "@type": "Answer", text: pick(item.a, locale) },
        })),
      }}
    />
  );
}
