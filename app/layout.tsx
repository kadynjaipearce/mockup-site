import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";

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
              "@type": "LocalBusiness",
              name: "Bunbury Wellness",
              description:
                "Professional remedial massage, sports massage, pregnancy massage, and dry needling therapy services in Bunbury, WA. Female massage therapists available for women who prefer female therapists.",
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
                        "Targeted therapy for pain relief and mobility improvement. Professional remedial massage therapy in Bunbury, WA.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sports Massage",
                      description:
                        "Specialized massage for athletes and sports injuries. Sports massage therapy in Bunbury, WA.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pregnancy Massage",
                      description:
                        "Safe and gentle massage therapy for expectant mothers. Prenatal massage therapy in Bunbury, WA.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dry Needling",
                      description:
                        "Advanced therapy using fine needles to treat muscle pain and tension. Dry needling therapy in Bunbury, WA.",
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
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
