import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Bunbury Wellness | Professional Massage Therapy",
  description:
    "Read our Terms of Service for Bunbury Wellness. Learn about our booking policies, cancellation terms, and service agreements for our professional massage therapy services.",
  keywords:
    "terms of service, booking policy, cancellation policy, massage therapy terms, Bunbury wellness",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
