import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Bunbury Wellness Remedial Massage - Book Your Massage Session | Bunbury, WA",
  description:
    "Contact Bunbury Wellness Remedial Massage to book your remedial, sports, or pregnancy massage session in Bunbury, WA. Call, email, or book online today. Located in Bunbury, Western Australia.",
  keywords: [
    "contact Bunbury Wellness Remedial Massage",
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
    title: "Contact Us",
    description:
      "Contact us to book your remedial, sports, or pregnancy massage session in Bunbury, WA.",
    url: process.env.NEXT_PUBLIC_BASE_URL
      ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/contact`
      : undefined,
    siteName: "Bunbury Wellness Remedial Massage",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness Remedial Massage - Contact Us",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bunbury Wellness Remedial Massage - Book Your Session",
    description:
      "Contact us to book your remedial, sports, or pregnancy massage session in Bunbury, WA.",
    images: ["/og-image.png"],
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
