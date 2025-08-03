import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers & Packages - Bunbury Wellness",
  description:
    "Exclusive massage packages and special offers in Bunbury, WA. Limited time deals on remedial massage, pregnancy massage, and wellness packages.",
  keywords: [
    "massage specials Bunbury",
    "massage packages Bunbury",
    "massage deals Bunbury",
    "wellness packages Bunbury",
    "massage offers Bunbury",
    "remedial massage specials Bunbury",
    "pregnancy massage deals Bunbury",
    "massage discounts Bunbury",
  ],
  openGraph: {
    title: "Special Offers & Packages - Bunbury Wellness",
    description:
      "Exclusive massage packages and special offers in Bunbury, WA. Limited time deals on remedial massage, pregnancy massage, and wellness packages.",
  },
};

export default function SpecialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
