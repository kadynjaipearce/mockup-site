"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/components/BookingProvider";
import { RiLeafLine } from "@remixicon/react";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

export default function DryNeedlingPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/fuko.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Dry Needling
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Advanced therapy using fine needles to treat muscle pain and trigger
            points
          </p>
                      <button onClick={openModal} className="btn-spa-accent text-lg group">
              <span>Book Your Session</span>
              <RiArrowRightLine className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              What is Dry Needling?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dry needling is an advanced therapeutic technique that uses fine,
              sterile needles to target trigger points in muscles. This
              treatment helps release muscle tension, reduce pain, and improve
              function by stimulating the body&apos;s natural healing response.
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
                  <span>Releases muscle tension and trigger points</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Reduces chronic pain and muscle spasms</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Improves range of motion and flexibility</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Accelerates healing and recovery</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Enhances blood flow to affected areas</span>
                </li>
                <li className="flex items-start">
                  <RiLeafLine className="h-5 w-5 text-spa-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Provides long-lasting pain relief</span>
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
                    Assessment
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We&apos;ll assess your condition, identify trigger points, and
                    create a personalized treatment plan for your specific
                    needs.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Treatment
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fine needles are inserted into trigger points to release
                    tension and stimulate the body&apos;s natural healing response.
                  </p>
                </div>
                <div className="bg-spa-neutral p-6 rounded-lg">
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Aftercare
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We&apos;ll provide guidance on post-treatment care and recommend
                    follow-up sessions for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions Treated */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-spa-secondary mb-8 text-center">
              Conditions We Treat
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Back Pain
                </h4>
                <p className="text-gray-600 text-sm">
                  Chronic lower back pain, sciatica, and muscle tension
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Neck & Shoulder
                </h4>
                <p className="text-gray-600 text-sm">
                  Tension headaches, whiplash, and shoulder impingement
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Sports Injuries
                </h4>
                <p className="text-gray-600 text-sm">
                  Muscle strains, overuse injuries, and athletic pain
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Headaches
                </h4>
                <p className="text-gray-600 text-sm">
                  Tension headaches, migraines, and facial pain
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Joint Pain
                </h4>
                <p className="text-gray-600 text-sm">
                  Hip, knee, and joint-related muscle tension
                </p>
              </div>
              <div className="text-center p-6 bg-spa-neutral rounded-lg">
                <h4 className="font-semibold text-spa-secondary mb-2">
                  Chronic Pain
                </h4>
                <p className="text-gray-600 text-sm">
                  Fibromyalgia, myofascial pain, and persistent muscle pain
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
                  <li>• Certified in dry needling therapy</li>
                  <li>• Advanced training in trigger point therapy</li>
                  <li>• Experience with various pain conditions</li>
                  <li>• Female therapists available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-spa-secondary mb-4">
                  Safety Measures
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sterile, single-use needles only</li>
                  <li>• Proper infection control protocols</li>
                  <li>• Thorough assessment before treatment</li>
                  <li>• Monitoring during and after treatment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 rounded-lg">
            <h3 className="text-2xl font-light mb-4">
              Ready to Experience Advanced Pain Relief?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your dry needling session with our experienced female
              therapists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={openModal} className="btn-spa-accent">
                <span>Book Appointment</span>
              </button>
              <Link href="tel:+61897210000" className="btn-spa-service">
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
