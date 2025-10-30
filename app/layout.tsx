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
import PerformanceOptimization from "@/components/PerformanceOptimization";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: process.env.NEXT_PUBLIC_BASE_URL || undefined,
    siteName: "Bunbury Wellness",
    title:
      "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage",
    description:
      "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available. Book your therapeutic session with our skilled massage therapists.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
              url: process.env.NEXT_PUBLIC_BASE_URL || undefined,
              email: "info@bunburywellnessremedialmassage.com.au",
              logo: process.env.NEXT_PUBLIC_BASE_URL
                ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/logo.png`
                : undefined,
              image: process.env.NEXT_PUBLIC_BASE_URL
                ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/og-image.png`
                : undefined,
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
                {
                  "@type": "City",
                  name: "Bunbury East",
                },
                {
                  "@type": "City",
                  name: "Bunbury West",
                },
                {
                  "@type": "City",
                  name: "Glen Iris",
                },
                {
                  "@type": "City",
                  name: "Withers",
                },
                {
                  "@type": "City",
                  name: "Carey Park",
                },
                {
                  "@type": "City",
                  name: "College Grove",
                },
                {
                  "@type": "City",
                  name: "Usher",
                },
                {
                  "@type": "City",
                  name: "Pelican Point",
                },
                {
                  "@type": "City",
                  name: "Bunbury Port",
                },
                {
                  "@type": "City",
                  name: "South Bunbury",
                },
                {
                  "@type": "City",
                  name: "Busselton",
                },
                {
                  "@type": "City",
                  name: "Dunsborough",
                },
                {
                  "@type": "City",
                  name: "Margaret River",
                },
                {
                  "@type": "City",
                  name: "Donnybrook",
                },
                {
                  "@type": "City",
                  name: "Harvey",
                },
                {
                  "@type": "City",
                  name: "Collie",
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
                        serviceUrl: process.env.NEXT_PUBLIC_BASE_URL
                          ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/services`
                          : undefined,
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
                "remedial massage Bunbury, sports massage Bunbury, pregnancy massage Bunbury, dry needling Bunbury, female massage therapist Bunbury, massage near me Bunbury, best massage therapist Bunbury WA, qualified massage therapist Bunbury, registered massage therapist Bunbury, massage therapy clinic Bunbury, wellness center Bunbury, health and wellness Bunbury, physical therapy Bunbury, injury recovery massage Bunbury, chronic pain massage Bunbury, stress relief massage Bunbury, relaxation massage Bunbury, therapeutic touch Bunbury, manual therapy Bunbury, soft tissue therapy Bunbury, muscle tension relief Bunbury, posture correction massage Bunbury, workplace injury massage Bunbury, repetitive strain massage Bunbury, whiplash massage therapy Bunbury, headache massage therapy Bunbury, migraine relief massage Bunbury, fibromyalgia massage Bunbury, arthritis massage therapy Bunbury, sciatica massage therapy Bunbury, hip pain massage Bunbury, knee pain massage Bunbury, foot massage therapy Bunbury, hand massage therapy Bunbury, carpal tunnel massage Bunbury, tennis elbow massage Bunbury, golfer elbow massage Bunbury, rotator cuff massage Bunbury, frozen shoulder massage Bunbury, TMJ massage therapy Bunbury, jaw pain massage Bunbury, massage for sleep problems Bunbury, massage for anxiety Bunbury, massage for depression Bunbury, prenatal wellness Bunbury, postnatal massage Bunbury, new mother massage Bunbury, baby massage Bunbury, infant massage Bunbury, children massage therapy Bunbury, teen massage therapy Bunbury, senior massage therapy Bunbury, elderly massage therapy Bunbury, palliative care massage Bunbury, cancer support massage Bunbury, lymphedema massage Bunbury, diabetes massage therapy Bunbury, high blood pressure massage Bunbury, heart condition massage Bunbury, pregnancy complications massage Bunbury, high risk pregnancy massage Bunbury, multiple pregnancy massage Bunbury, breastfeeding support massage Bunbury, lactation massage Bunbury, postpartum recovery massage Bunbury, cesarean recovery massage Bunbury, episiotomy recovery massage Bunbury, pelvic floor massage Bunbury, abdominal massage therapy Bunbury, digestive massage therapy Bunbury, constipation massage Bunbury, IBS massage therapy Bunbury, menstrual pain massage Bunbury, endometriosis massage Bunbury, PCOS massage therapy Bunbury, menopause massage therapy Bunbury, hormonal imbalance massage Bunbury, thyroid massage therapy Bunbury, adrenal fatigue massage Bunbury, chronic fatigue massage Bunbury, ME/CFS massage therapy Bunbury, fibromyalgia massage therapy Bunbury, lupus massage therapy Bunbury, rheumatoid arthritis massage Bunbury, osteoarthritis massage Bunbury, osteoporosis massage therapy Bunbury, scoliosis massage therapy Bunbury, kyphosis massage therapy Bunbury, lordosis massage therapy Bunbury, flat feet massage Bunbury, high arches massage Bunbury, bunions massage therapy Bunbury, plantar fasciitis massage Bunbury, heel spurs massage Bunbury, Achilles tendon massage Bunbury, shin splints massage Bunbury, IT band massage therapy Bunbury, piriformis massage therapy Bunbury, psoas massage therapy Bunbury, quadriceps massage therapy Bunbury, hamstring massage therapy Bunbury, calf massage therapy Bunbury, glute massage therapy Bunbury, hip flexor massage Bunbury, adductor massage therapy Bunbury, abductor massage therapy Bunbury, tensor fascia latae massage Bunbury, sartorius massage therapy Bunbury, gracilis massage therapy Bunbury, pectineus massage therapy Bunbury, obturator massage therapy Bunbury, gemellus massage therapy Bunbury, quadratus femoris massage Bunbury, vastus lateralis massage Bunbury, vastus medialis massage Bunbury, vastus intermedius massage Bunbury, rectus femoris massage Bunbury, biceps femoris massage Bunbury, semitendinosus massage Bunbury, semimembranosus massage Bunbury, gastrocnemius massage Bunbury, soleus massage therapy Bunbury, tibialis anterior massage Bunbury, tibialis posterior massage Bunbury, peroneus longus massage Bunbury, peroneus brevis massage Bunbury, extensor digitorum longus massage Bunbury, extensor hallucis longus massage Bunbury, flexor digitorum longus massage Bunbury, flexor hallucis longus massage Bunbury, abductor hallucis massage Bunbury, flexor digitorum brevis massage Bunbury, abductor digiti minimi massage Bunbury, quadratus plantae massage Bunbury, lumbricals massage therapy Bunbury, interossei massage therapy Bunbury, adductor hallucis massage Bunbury, flexor hallucis brevis massage Bunbury, adductor digiti minimi massage Bunbury, opponens digiti minimi massage Bunbury, flexor digiti minimi brevis massage Bunbury, abductor pollicis brevis massage Bunbury, flexor pollicis brevis massage Bunbury, opponens pollicis massage Bunbury, adductor pollicis massage Bunbury, flexor pollicis longus massage Bunbury, extensor pollicis longus massage Bunbury, extensor pollicis brevis massage Bunbury, abductor pollicis longus massage Bunbury, extensor indicis massage Bunbury, extensor digitorum massage Bunbury, extensor digiti minimi massage Bunbury, extensor carpi ulnaris massage Bunbury, extensor carpi radialis longus massage Bunbury, extensor carpi radialis brevis massage Bunbury, supinator massage therapy Bunbury, brachioradialis massage Bunbury, extensor carpi radialis massage Bunbury, pronator teres massage Bunbury, flexor carpi radialis massage Bunbury, palmaris longus massage Bunbury, flexor carpi ulnaris massage Bunbury, flexor digitorum superficialis massage Bunbury, flexor digitorum profundus massage Bunbury, flexor pollicis longus massage Bunbury, pronator quadratus massage Bunbury, brachialis massage therapy Bunbury, biceps brachii massage Bunbury, triceps brachii massage Bunbury, anconeus massage therapy Bunbury, coracobrachialis massage Bunbury, deltoid massage therapy Bunbury, supraspinatus massage Bunbury, infraspinatus massage therapy Bunbury, teres minor massage Bunbury, teres major massage Bunbury, subscapularis massage Bunbury, serratus anterior massage Bunbury, pectoralis major massage Bunbury, pectoralis minor massage Bunbury, subclavius massage therapy Bunbury, sternocleidomastoid massage Bunbury, scalene massage therapy Bunbury, levator scapulae massage Bunbury, rhomboid major massage Bunbury, rhomboid minor massage Bunbury, trapezius massage therapy Bunbury, latissimus dorsi massage Bunbury, erector spinae massage Bunbury, multifidus massage therapy Bunbury, rotatores massage therapy Bunbury, interspinales massage Bunbury, intertransversarii massage Bunbury, longissimus massage therapy Bunbury, iliocostalis massage therapy Bunbury, spinalis massage therapy Bunbury, semispinalis massage therapy Bunbury, splenius capitis massage Bunbury, splenius cervicis massage Bunbury, longus capitis massage Bunbury, longus colli massage Bunbury, rectus capitis anterior massage Bunbury, rectus capitis lateralis massage Bunbury, obliquus capitis superior massage Bunbury, obliquus capitis inferior massage Bunbury, rectus capitis posterior major massage Bunbury, rectus capitis posterior minor massage Bunbury",
              serviceType: "Massage Therapy",
              medicalSpecialty: "Physical Therapy",
              hasMap:
                "https://maps.google.com/?q=Bunbury+Wellness+Remedial+Massage",
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
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${inter.variable} ${crimsonText.variable} antialiased bg-white text-gray-800 font-sans`}
      >
        <BookingProvider>
          <PerformanceOptimization />
          <Header />
          <PageTransition>{children}</PageTransition>
        </BookingProvider>
      </body>
    </html>
  );
}
