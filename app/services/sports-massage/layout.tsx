import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sports Massage Bunbury - Athletic Therapy & Injury Recovery | Bunbury Wellness",
  description:
    "Professional sports massage therapy in Bunbury, WA. Female massage therapists available. Specialized treatment for athletes, sports injuries, and performance enhancement. Book your session.",
  keywords: [
    "sports massage Bunbury",
    "female sports massage Bunbury",
    "women sports massage Bunbury",
    "sports massage therapy Bunbury",
    "sports massage for athletes Bunbury",
    "massage for sports injuries Bunbury",
    "athletic massage Bunbury",
    "massage for runners Bunbury",
    "massage for football players Bunbury",
    "sports injury massage Bunbury",
    "performance massage Bunbury",
    "athletic therapy Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Sports Massage Bunbury - Athletic Therapy & Injury Recovery",
    description:
      "Professional sports massage therapy in Bunbury, WA. Female massage therapists available. Specialized treatment for athletes and sports injuries.",
  },
};

export default function SportsMassageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
