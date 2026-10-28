export const COMPANY = {
  name: "White River Contractors Inc",
  phone: "(479) 409-4695",
  phoneHref: "tel:+14794094695",
  street: "1924 N Birch Ave",
  city: "Fayetteville",
  region: "AR",
  zip: "72703",
  mapQuery: "1924 N Birch Ave, Fayetteville, AR 72703",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&z=11&output=embed`;

export const SEO_DESCRIPTION =
  "White River Contractors Inc is a Veteran-Owned and Latino-Owned general contracting company serving Fayetteville and Northwest Arkansas. From remodeling and renovations to full-service contracting, we deliver quality workmanship and dependable service. Call today for a free estimate.";

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: COMPANY.name,
  telephone: "+1-479-409-4695",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.region,
    postalCode: COMPANY.zip,
    addressCountry: "US",
  },
  areaServed: ["Fayetteville, AR", "Springdale, AR", "Rogers, AR", "Bentonville, AR", "Northwest Arkansas"],
  description: SEO_DESCRIPTION,
};

export const SERVICE_AREAS = [
  "Fayetteville", "Springdale", "Rogers", "Bentonville", "Lowell", "Johnson",
  "Farmington", "Prairie Grove", "Elkins", "Siloam Springs", "Bella Vista", "Cave Springs",
];
