import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards Bunbury - Massage Gift Vouchers | Bunbury Wellness",
  description:
    "Purchase massage gift cards in Bunbury, WA. Perfect gifts for remedial, sports, and pregnancy massage. Available in various amounts. Give the gift of wellness today.",
  keywords: [
    "gift cards Bunbury",
    "massage gift cards Bunbury",
    "massage vouchers Bunbury",
    "gift massage Bunbury",
    "massage gift certificate Bunbury",
    "pregnancy massage gift Bunbury",
    "remedial massage voucher Bunbury",
    "massage gift Bunbury",
    "wellness gift Bunbury",
    "massage gift card Bunbury WA",
    "massage voucher Bunbury",
    "gift certificate massage Bunbury",
    "massage present Bunbury",
  ],
  openGraph: {
    title: "Gift Cards Bunbury - Massage Gift Vouchers",
    description:
      "Purchase massage gift cards in Bunbury, WA. Perfect gifts for all massage services.",
    url: process.env.NEXT_PUBLIC_BASE_URL
      ? `${String(process.env.NEXT_PUBLIC_BASE_URL).replace(/\/$/, "")}/gift-cards`
      : undefined,
    siteName: "Bunbury Wellness",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - Gift Cards",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Cards Bunbury - Massage Gift Vouchers",
    description:
      "Purchase massage gift cards in Bunbury, WA. Perfect gifts for all massage services.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/gift-cards",
  },
};

export default function GiftCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
