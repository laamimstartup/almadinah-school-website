import type { Metadata } from "next";

export const BASE_URL = "https://almadinah-school-website.vercel.app";
export const SCHOOL_NAME = "Al-Madinah School Queens";
export const SCHOOL_PHONE = "(718) 657-7791";
export const SCHOOL_EMAIL = "info@almadinahqueens.com";
export const SCHOOL_ADDRESS = "153-27 89th Ave, Jamaica, NY 11432";
export const SCHOOL_CITY = "Jamaica, Queens, New York";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${SCHOOL_NAME}`;
  const url = `${BASE_URL}${path}`;
  const defaultKeywords = [
    "Islamic school Queens NY",
    "Al-Madinah School",
    "Muslim school New York",
    "Islamic education Queens",
    "NYS approved Islamic school",
    "Arabic school Queens",
    "Quran school New York",
    "Islamic private school Jamaica Queens",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SCHOOL_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SCHOOL_NAME,
  url: BASE_URL,
  telephone: SCHOOL_PHONE,
  email: SCHOOL_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "153-27 89th Ave",
    addressLocality: "Jamaica",
    addressRegion: "NY",
    postalCode: "11432",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7019,
    longitude: -73.7937,
  },
  description:
    "Al-Madinah School Queens — NYS approved Islamic school offering Pre-K through Grade 9. Combining Islamic values with academic excellence and leadership development.",
  foundingDate: "2000",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 30 },
  areaServed: [
    "Queens, New York",
    "Jamaica, NY",
    "Hollis, NY",
    "St. Albans, NY",
    "Springfield Gardens, NY",
    "Rosedale, NY",
    "Brooklyn, NY",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "New York State Department of Education Approval",
  },
  educationalCredentialAwarded: "NYS Approved K-9 Diploma",
  teaches: [
    "New York State Core Curriculum",
    "Quran and Islamic Studies",
    "Arabic Language",
    "STEM and Coding",
    "Leadership Development",
  ],
  sameAs: [
    "https://almadinahqueens.com",
    "https://kids-code-gift-seven.vercel.app",
  ],
};
