import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Caveat,
  Inter,
  Crimson_Text,
} from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Bunbury Wellness - Remedial Massage & Deep Tissue Therapy | Bunbury, WA",
    template: "%s | Bunbury Wellness",
  },
  description:
    "Professional remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available. Expert massage therapists for pain relief and wellness. Book your session today.",
  keywords: [
    "remedial massage Bunbury",
    "sports massage Bunbury",
    "pregnancy massage Bunbury",
    "dry needling Bunbury",
    "female massage therapist Bunbury",
    "women massage therapist Bunbury",
    "female remedial massage Bunbury",
    "women only massage Bunbury",
    "female pregnancy massage Bunbury",
    "massage therapist near me",
    "remedial massage therapy Bunbury WA",
    "prenatal massage Bunbury",
    "sports massage therapy Bunbury",
    "dry needling therapy Bunbury",
    "massage for pregnant women Bunbury",
    "therapeutic massage Bunbury",
    "pregnancy massage therapy Bunbury",
    "remedial massage for pain relief Bunbury",
    "massage Bunbury WA",
    "prenatal massage therapy Bunbury",
    "massage for back pain Bunbury",
    "pregnancy massage for stress relief Bunbury",
    "professional remedial massage Bunbury",
    "massage appointment Bunbury",
    "best remedial massage Bunbury",
    "pregnancy massage near me",
    "remedial massage therapist Bunbury",
    "massage for pregnancy pain Bunbury",
    "dry needling for pain relief Bunbury",
    "sports massage for athletes Bunbury",
    "dry needling therapy Bunbury WA",
    "massage for sports injuries Bunbury",
    "prenatal massage near me",
    "dry needling treatment Bunbury",
    "female sports massage Bunbury",
    "women remedial massage Bunbury",
    "female dry needling Bunbury",
  ],
  authors: [{ name: "Bunbury Wellness" }],
  creator: "Bunbury Wellness",
  publisher: "Bunbury Wellness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bunburywellness.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://bunburywellness.com.au",
    siteName: "Bunbury Wellness",
    title:
      "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage",
    description:
      "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available. Book your therapeutic session with our skilled massage therapists.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - Professional Massage Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage",
    description:
      "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available. Book your therapeutic session today.",
    images: ["/og-image.jpg"],
    creator: "@bunburywellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": [
                "LocalBusiness",
                "HealthAndBeautyBusiness",
                "MedicalBusiness",
              ],
              name: "Bunbury Wellness Remedial Massage",
              alternateName: "Bunbury Wellness",
              description:
                "Professional remedial massage, sports massage, pregnancy massage, and dry needling therapy services in Bunbury, WA. Female massage therapists available for women who prefer female therapists.",
              url: "https://bunburywellness.com.au",
              telephone: "+61897210000",
              email: "hello@bunburywellness.com.au",
              logo: "https://bunburywellness.com.au/logo.png",
              image: "https://bunburywellness.com.au/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Wellness Street",
                addressLocality: "Bunbury",
                addressRegion: "WA",
                postalCode: "6230",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.3271,
                longitude: 115.6414,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Thursday", "Friday"],
                  opens: "10:30",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "10:30",
                  closes: "14:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "12:30",
                  closes: "17:00",
                },
              ],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "EFTPOS"],
              currenciesAccepted: "AUD",
              areaServed: [
                {
                  "@type": "City",
                  name: "Bunbury",
                  containedInPlace: {
                    "@type": "State",
                    name: "Western Australia",
                  },
                },
                {
                  "@type": "City",
                  name: "Dalyellup",
                },
                {
                  "@type": "City",
                  name: "Eaton",
                },
                {
                  "@type": "City",
                  name: "Australind",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -33.3271,
                  longitude: 115.6414,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Massage Therapy Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Remedial Massage",
                      description:
                        "Targeted therapy for pain relief and mobility improvement. Professional remedial massage therapy in Bunbury, WA.",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "Bunbury Wellness Remedial Massage",
                      },
                      areaServed: "Bunbury, WA",
                      availableChannel: {
                        "@type": "ServiceChannel",
                        serviceUrl: "https://bunburywellness.com.au/services",
                      },
                    },
                    priceRange: "$80-$120",
                    availability: "InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sports Massage",
                      description:
                        "Specialized massage for athletes and sports injuries. Sports massage therapy in Bunbury, WA.",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "Bunbury Wellness Remedial Massage",
                      },
                      areaServed: "Bunbury, WA",
                    },
                    priceRange: "$80-$120",
                    availability: "InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pregnancy Massage",
                      description:
                        "Safe and gentle massage therapy for expectant mothers. Prenatal massage therapy in Bunbury, WA.",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "Bunbury Wellness Remedial Massage",
                      },
                      areaServed: "Bunbury, WA",
                    },
                    priceRange: "$80-$120",
                    availability: "InStock",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dry Needling",
                      description:
                        "Advanced therapy using fine needles to treat muscle pain and tension. Dry needling therapy in Bunbury, WA.",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "Bunbury Wellness Remedial Massage",
                      },
                      areaServed: "Bunbury, WA",
                    },
                    priceRange: "$80-$120",
                    availability: "InStock",
                  },
                ],
              },
              employee: {
                "@type": "Person",
                name: "Fuko Kodama",
                jobTitle: "Remedial Massage Therapist",
                description:
                  "Diploma qualified remedial massage therapist with 10+ years experience",
                worksFor: {
                  "@type": "LocalBusiness",
                  name: "Bunbury Wellness Remedial Massage",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah M.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Excellent remedial massage therapy. Fuko is professional and really knows how to target problem areas.",
                  datePublished: "2024-01-15",
                },
              ],
              sameAs: [
                "https://www.facebook.com/bunburywellness",
                "https://www.instagram.com/bunburywellness",
              ],
              keywords:
                "remedial massage Bunbury, sports massage Bunbury, pregnancy massage Bunbury, dry needling Bunbury, female massage therapist Bunbury",
              serviceType: "Massage Therapy",
              medicalSpecialty: "Physical Therapy",
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${inter.variable} ${crimsonText.variable} antialiased bg-white text-gray-800 font-sans`}
      >
        <BookingProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
        </BookingProvider>
      </body>
    </html>
  );
}
