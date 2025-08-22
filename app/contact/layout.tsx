import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bunbury Wellness - Book Your Massage Session | Bunbury, WA",
  description:
    "Contact Bunbury Wellness to book your remedial, sports, or pregnancy massage session in Bunbury, WA. Call, email, or book online today. Located in Bunbury, Western Australia.",
  keywords: [
    "contact Bunbury Wellness",
    "book massage Bunbury",
    "massage appointment Bunbury",
    "massage booking Bunbury",
    "call massage therapist Bunbury",
    "massage clinic contact Bunbury",
    "book remedial massage Bunbury",
    "book pregnancy massage Bunbury",
    "massage therapist contact Bunbury",
    "massage clinic phone Bunbury",
    "massage clinic email Bunbury",
    "massage clinic address Bunbury",
    "massage clinic location Bunbury",
    "massage clinic hours Bunbury",
  ],
  openGraph: {
    title: "Contact Bunbury Wellness - Book Your Massage Session",
    description:
      "Contact us to book your remedial, sports, or pregnancy massage session in Bunbury, WA.",
    url: "https://bunburywellness.com.au/contact",
    siteName: "Bunbury Wellness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - Contact Us",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bunbury Wellness - Book Your Massage Session",
    description:
      "Contact us to book your remedial, sports, or pregnancy massage session in Bunbury, WA.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
