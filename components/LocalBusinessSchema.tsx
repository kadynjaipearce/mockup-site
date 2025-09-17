"use client";

interface LocalBusinessSchemaProps {
  businessName: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: Array<{
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  areaServed: string[];
  sameAs: string[];
}

export default function LocalBusinessSchema({
  businessName,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  paymentAccepted,
  currenciesAccepted,
  areaServed,
  sameAs,
}: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
    name: businessName,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...geo,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    priceRange,
    paymentAccepted,
    currenciesAccepted,
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs,
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(businessName)}`,
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    wheelchairAccessible: true,
    parkingAvailable: true,
    wifiAvailable: true,
    acceptsReservations: true,
    hasOnlineBooking: true,
    hasOnlinePayment: true,
    hasWebsite: true,
    hasSocialMedia: true,
    hasTestimonial: true,
    hasReview: true,
    hasRating: true,
    hasCertification: true,
    hasLicense: true,
    hasInsurance: true,
    hasRefundPolicy: true,
    hasCancellationPolicy: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
