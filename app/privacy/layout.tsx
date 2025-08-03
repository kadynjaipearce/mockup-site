import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Bunbury Wellness | Your Privacy Matters",
  description:
    "Learn about Bunbury Wellness privacy practices. We do not collect or store personal data on our website. Your privacy is our priority.",
  keywords:
    "privacy policy, data protection, no data collection, massage therapy privacy, Bunbury wellness",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
