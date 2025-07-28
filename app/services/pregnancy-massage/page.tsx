import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RiLeafLine } from "@remixicon/react";
import { Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pregnancy Massage Bunbury - Safe Prenatal Therapy | Bunbury Wellness",
  description:
    "Safe and gentle pregnancy massage therapy in Bunbury, WA. Female massage therapists available. Professional prenatal massage for expectant mothers. Book your session today.",
  keywords: [
    "pregnancy massage Bunbury",
    "female pregnancy massage Bunbury",
    "women pregnancy massage Bunbury",
    "prenatal massage Bunbury",
    "massage for pregnant women Bunbury",
    "pregnancy massage therapy Bunbury",
    "prenatal massage therapy Bunbury",
    "pregnancy massage for stress relief Bunbury",
    "massage for pregnancy pain Bunbury",
    "prenatal massage near me",
    "pregnancy massage near me",
    "safe pregnancy massage Bunbury",
    "female massage therapist Bunbury",
  ],
  openGraph: {
    title: "Pregnancy Massage Bunbury - Safe Prenatal Therapy",
    description:
      "Safe and gentle pregnancy massage therapy in Bunbury, WA. Female massage therapists available. Professional prenatal massage for expectant mothers.",
  },
};

export default function PregnancyMassagePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/preg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Pregnancy Massage
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Safe and gentle prenatal massage therapy for expectant mothers
          </p>
          <Link href="/#contact" className="btn-spa-accent text-lg group">
            <span>Book Your Session</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              What is Pregnancy Massage?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pregnancy massage is specially designed for expectant mothers,
              providing safe and gentle therapy to address the unique physical
              and emotional needs during pregnancy. Our female therapists are
              trained in prenatal massage techniques.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light text-spa-secondary mb-6">
                Benefits
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Relieves pregnancy-related pain and discomfort</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Reduces stress and promotes emotional wellbeing</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Improves circulation and reduces swelling</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Helps with sleep quality and relaxation</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Supports posture and reduces back pain</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Prepares body for labor and delivery</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-spa-secondary mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Safe Positioning
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We use specialized pregnancy pillows and positioning to
                    ensure your comfort and safety throughout the session.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Gentle Techniques
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our therapists use gentle, pregnancy-safe techniques that
                    avoid pressure points and focus on relieving tension.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Personalized Care
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Each session is tailored to your specific needs and stage of
                    pregnancy, with adjustments made as your pregnancy
                    progresses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pregnancy Stages */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-spa-secondary mb-8 text-center">
              Massage by Pregnancy Stage
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  First Trimester
                </h4>
                <p className="text-gray-600 text-sm">
                  Gentle massage to reduce nausea, fatigue, and early pregnancy
                  symptoms
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Second Trimester
                </h4>
                <p className="text-gray-600 text-sm">
                  Focus on back pain, posture, and preparing for the growing
                  baby
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Third Trimester
                </h4>
                <p className="text-gray-600 text-sm">
                  Labor preparation, swelling reduction, and comfort for the
                  final weeks
                </p>
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div className="mb-16 bg-spa-neutral p-8 rounded-lg">
            <h3 className="text-2xl font-light text-spa-secondary mb-6 text-center">
              Safety & Qualifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-spa-secondary mb-4">
                  Our Qualifications
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Certified in prenatal massage therapy</li>
                  <li>• Trained in pregnancy-safe techniques</li>
                  <li>• Experience with all pregnancy stages</li>
                  <li>• Female therapists available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-spa-secondary mb-4">
                  Safety Measures
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoids pressure points that could trigger labor</li>
                  <li>• Uses pregnancy-safe positioning</li>
                  <li>• Adjusts pressure based on your comfort</li>
                  <li>• Monitors your comfort throughout session</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 rounded-lg">
            <h3 className="text-2xl font-light mb-4">
              Ready to Experience Pregnancy Relief?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your pregnancy massage session with our experienced female
              therapists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact" className="btn-spa-accent">
                <span>Book Appointment</span>
              </Link>
              <Link href="tel:+61897210000" className="btn-spa-primary">
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
