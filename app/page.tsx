import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingPolicy from "@/components/BookingPolicy";
import Footer from "@/components/Footer";
import TestimonialsSchema from "@/components/TestimonialsSchema";
import FacebookSection from "@/components/FacebookSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage | Bunbury, WA",
  description:
    "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available. Book your therapeutic session with our skilled massage therapists.",
  keywords: [
    "remedial massage Bunbury",
    "sports massage Bunbury",
    "pregnancy massage Bunbury",
    "dry needling Bunbury",
    "female massage therapist Bunbury",
    "women massage therapist Bunbury",
    "massage therapist near me",
    "remedial massage therapy Bunbury WA",
    "prenatal massage Bunbury",
    "therapeutic massage Bunbury",
    "massage for pain relief Bunbury",
    "professional massage Bunbury",
    "massage appointment Bunbury",
    "best massage Bunbury",
    "massage clinic Bunbury",
  ],
  openGraph: {
    title:
      "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage",
    description:
      "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available.",
    url: "https://bunburywellness.com.au",
    siteName: "Bunbury Wellness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunbury Wellness - Professional Massage Therapy",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bunbury Wellness - Professional Remedial, Sports & Pregnancy Massage",
    description:
      "Expert remedial massage, sports massage, pregnancy massage, and dry needling therapy in Bunbury, WA. Female massage therapists available.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <TestimonialsSchema />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Specials />
      <FacebookSection />
      <BookingPolicy />
      <Footer />
    </div>
  );
};

export default Index;
