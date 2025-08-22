import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Massage Services Bunbury - Remedial, Sports & Pregnancy Massage | Bunbury Wellness",
  description:
    "Professional massage services in Bunbury, WA. Remedial massage, sports massage, pregnancy massage, and dry needling therapy. Female massage therapists available. Book your session today.",
  keywords: [
    "massage services Bunbury",
    "remedial massage Bunbury",
    "sports massage Bunbury",
    "pregnancy massage Bunbury",
    "dry needling Bunbury",
    "massage therapy services Bunbury",
    "female massage therapist Bunbury",
    "massage therapist services Bunbury",
    "therapeutic massage Bunbury",
    "prenatal massage Bunbury",
    "sports massage therapy Bunbury",
    "remedial massage therapy Bunbury",
    "massage for pain relief Bunbury",
    "massage for athletes Bunbury",
    "pregnancy massage therapy Bunbury",
    "massage appointment Bunbury",
    "book massage Bunbury",
    "massage clinic services Bunbury",
  ],
  openGraph: {
    title: "Massage Services Bunbury - Remedial, Sports & Pregnancy Massage",
    description:
      "Professional massage services in Bunbury, WA. Remedial massage, sports massage, pregnancy massage, and dry needling therapy. Female massage therapists available.",
    url: "https://bunburywellness.com.au/services",
    siteName: "Bunbury Wellness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - Massage Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Services Bunbury - Remedial, Sports & Pregnancy Massage",
    description:
      "Professional massage services in Bunbury, WA. Remedial massage, sports massage, pregnancy massage, and dry needling therapy.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
