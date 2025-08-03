import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Bunbury Wellness | Professional Massage Therapy",
  description:
    "Explore our comprehensive range of massage therapy services including remedial massage, sports massage, pregnancy massage, and dry needling. Professional care tailored to your needs.",
  keywords:
    "massage therapy services, remedial massage, sports massage, pregnancy massage, dry needling, Bunbury wellness, professional massage",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
