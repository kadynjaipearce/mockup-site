import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default:
      "Bunbury Wellness - Remedial Massage & Deep Tissue Therapy | Bunbury, WA",
    template: "%s | Bunbury Wellness",
  },
  description:
    "Professional remedial massage, deep tissue therapy, and relaxation massage in Bunbury, WA. Expert massage therapists for pain relief and wellness. Book your session today.",
  keywords: [
    "remedial massage Bunbury",
    "massage therapist near me",
    "deep tissue massage Bunbury WA",
    "Bunbury massage for pain relief",
    "remedial massage therapy",
    "myotherapy Bunbury",
    "relaxation massage Bunbury",
    "massage Bunbury WA",
    "therapeutic massage",
    "sports massage Bunbury",
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
      "Bunbury Wellness - Professional Remedial Massage & Deep Tissue Therapy",
    description:
      "Expert remedial massage, deep tissue therapy, and relaxation massage in Bunbury, WA. Book your therapeutic session with our skilled massage therapists.",
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
      "Bunbury Wellness - Professional Remedial Massage & Deep Tissue Therapy",
    description:
      "Expert remedial massage, deep tissue therapy, and relaxation massage in Bunbury, WA. Book your therapeutic session today.",
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
              "@type": "LocalBusiness",
              name: "Bunbury Wellness",
              description:
                "Professional remedial massage, deep tissue therapy, and relaxation massage services in Bunbury, WA.",
              url: "https://bunburywellness.com.au",
              telephone: "+61897210000",
              email: "hello@bunburywellness.com.au",
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
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "EFTPOS"],
              currenciesAccepted: "AUD",
              areaServed: {
                "@type": "City",
                name: "Bunbury",
              },
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
                name: "Massage Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Remedial Massage",
                      description:
                        "Targeted therapy for pain relief and mobility improvement",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Deep Tissue Massage",
                      description:
                        "Intensive therapy for chronic muscle tension and pain",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Relaxation Massage",
                      description:
                        "Gentle therapy for stress relief and relaxation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pregnancy Massage",
                      description:
                        "Safe and gentle massage therapy for expectant mothers",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/bunburywellness",
                "https://www.instagram.com/bunburywellness",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased bg-white text-gray-800 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
