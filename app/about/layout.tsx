import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bunbury Wellness - Expert Massage Therapists | Bunbury, WA",
  description:
    "Learn about Bunbury Wellness, our expert massage therapists Fuko & Tan, and our commitment to providing professional remedial, sports, and pregnancy massage in Bunbury, WA.",
  keywords: [
    "about Bunbury Wellness",
    "massage therapists Bunbury",
    "Bunbury Wellness team",
    "Fuko massage therapist Bunbury",
    "Tan massage therapist Bunbury",
    "professional massage Bunbury",
    "massage therapy experience Bunbury",
    "qualified massage therapists Bunbury",
    "massage clinic Bunbury",
    "wellness center Bunbury",
    "female massage therapists Bunbury",
    "massage therapist qualifications Bunbury",
    "massage therapy background Bunbury",
  ],
  openGraph: {
    title: "About Bunbury Wellness - Expert Massage Therapists",
    description:
      "Learn about our expert massage therapists and commitment to professional therapy in Bunbury, WA.",
    url: process.env.NEXT_PUBLIC_BASE_URL
      ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/about`
      : undefined,
    siteName: "Bunbury Wellness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - About Our Team",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bunbury Wellness - Expert Massage Therapists",
    description:
      "Learn about our expert massage therapists and commitment to professional therapy in Bunbury, WA.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
