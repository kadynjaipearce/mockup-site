import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dry Needling Bunbury - Advanced Pain Relief Therapy | Bunbury Wellness",
  description:
    "Professional dry needling therapy in Bunbury, WA. Female massage therapists available. Advanced treatment for muscle pain, tension, and trigger points. Book your session.",
  keywords: [
    "dry needling Bunbury",
    "female dry needling Bunbury",
    "women dry needling Bunbury",
    "dry needling therapy Bunbury",
    "dry needling for pain relief Bunbury",
    "trigger point therapy Bunbury",
    "dry needling treatment Bunbury",
    "dry needling for muscle pain Bunbury",
    "dry needling for tension Bunbury",
    "dry needling near me",
    "dry needling therapy Bunbury WA",
    "advanced pain relief Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Dry Needling Bunbury - Advanced Pain Relief Therapy",
    description:
      "Professional dry needling therapy in Bunbury, WA. Female massage therapists available. Advanced treatment for muscle pain and trigger points.",
  },
};

export default function DryNeedlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
