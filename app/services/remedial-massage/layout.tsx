import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Remedial Massage Bunbury - Professional Pain Relief Therapy | Bunbury Wellness",
  description:
    "Expert remedial massage therapy in Bunbury, WA. Female massage therapists available. Professional treatment for chronic pain, muscle tension, and injury recovery. Book your session today.",
  keywords: [
    "remedial massage Bunbury",
    "female remedial massage Bunbury",
    "women remedial massage Bunbury",
    "remedial massage therapy Bunbury WA",
    "remedial massage for pain relief Bunbury",
    "professional remedial massage Bunbury",
    "best remedial massage Bunbury",
    "remedial massage therapist Bunbury",
    "massage for back pain Bunbury",
    "massage for neck pain Bunbury",
    "therapeutic massage Bunbury",
    "massage for chronic pain Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Remedial Massage Bunbury - Professional Pain Relief Therapy",
    description:
      "Expert remedial massage therapy in Bunbury, WA. Female massage therapists available. Professional treatment for chronic pain, muscle tension, and injury recovery.",
  },
};

export default function RemedialMassageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
