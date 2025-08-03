import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregnancy Massage Bunbury - Safe Prenatal Therapy | Bunbury Wellness",
  description:
    "Safe and gentle pregnancy massage therapy in Bunbury, WA. Female massage therapists available. Professional prenatal massage for expectant mothers. Book your session today.",
  keywords: [
    "pregnancy massage Bunbury",
    "prenatal massage Bunbury",
    "female pregnancy massage Bunbury",
    "women pregnancy massage Bunbury",
    "pregnancy massage therapy Bunbury",
    "prenatal massage therapy Bunbury",
    "massage for pregnant women Bunbury",
    "pregnancy massage for stress relief Bunbury",
    "prenatal massage near me",
    "pregnancy massage for back pain Bunbury",
    "pregnancy massage for pregnancy pain Bunbury",
    "safe pregnancy massage Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Pregnancy Massage Bunbury - Safe Prenatal Therapy",
    description:
      "Safe and gentle pregnancy massage therapy in Bunbury, WA. Female massage therapists available. Professional prenatal massage for expectant mothers.",
  },
};

export default function PregnancyMassageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
