import { faqs, services, site } from "@/lib/site";

export function JsonLd() {
  const barberId = `${site.url}/#barbershop`;
  const websiteId = `${site.url}/#website`;
  const webpageId = `${site.url}/#webpage`;
  const faqId = `${site.url}/#faq`;
  const imageId = `${site.url}/#sign`;
  const imageUrl = `${site.url}${site.shopSignSrc}`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: site.language,
      publisher: { "@id": barberId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: site.language,
      isPartOf: { "@id": websiteId },
      about: { "@id": barberId },
      primaryImageOfPage: { "@id": imageId },
    },
    {
      "@type": "ImageObject",
      "@id": imageId,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: site.shopSignAlt,
    },
    {
      "@type": ["BarberShop", "LocalBusiness", "Organization"],
      "@id": barberId,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      image: { "@id": imageId },
      logo: imageUrl,
      description: site.description,
      telephone: site.telephoneSchema,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      hasMap: site.mapsSearchUrl,
      areaServed: {
        "@type": "City",
        name: "Frisco",
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      },
      currenciesAccepted: "USD",
      // priceRange omitted — pricing is not confirmed.
      // openingHoursSpecification omitted — hours are not confirmed.
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating,
        reviewCount: site.reviewCount,
        ratingCount: site.reviewCount,
        bestRating: 5,
        worstRating: 1,
        description: `${site.rating} stars from about ${site.reviewCount} Google reviews, as listed in the shop brief.`,
      },
      slogan: site.tagline,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Barber services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.copy,
            areaServed: "Frisco, TX",
            provider: { "@id": barberId },
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${site.url}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Visit",
          item: `${site.url}/#visit`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": faqId,
      url: `${site.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
      isPartOf: { "@id": webpageId },
      about: { "@id": barberId },
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
