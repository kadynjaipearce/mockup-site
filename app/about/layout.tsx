import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bunbury Wellness | Our Story & Team",
  description:
    "Learn about Bunbury Wellness, our experienced team of massage therapists, and our journey from a home studio to a premium wellness destination in Bunbury, WA.",
  keywords: [
    "about Bunbury Wellness",
    "Bunbury massage therapists",
    "Fuko Kodama massage",
    "Tan Hsin-Wen massage",
    "massage therapy team Bunbury",
    "remedial massage therapists Bunbury",
    "pregnancy massage specialists Bunbury",
    "massage clinic Bunbury",
  ],
  openGraph: {
    title: "About Us - Bunbury Wellness | Our Story & Team",
    description:
      "Learn about Bunbury Wellness, our experienced team of massage therapists, and our journey from a home studio to a premium wellness destination in Bunbury, WA.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
