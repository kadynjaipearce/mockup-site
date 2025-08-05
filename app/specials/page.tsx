"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/components/BookingProvider";
import {
  RiTimeLine,
  RiPhoneLine,
  RiArrowRightLine,
  RiStarLine,
  RiPercentLine,
  RiGiftLine,
  RiHeartLine,
} from "@remixicon/react";
import Link from "next/link";

const specialOffers = [
  {
    id: 1,
    title: "New Client Welcome Package",
    subtitle: "Perfect for first-time visitors",
    description:
      "Experience the full Bunbury Wellness treatment with our comprehensive welcome package. Includes consultation, 60-minute massage, and follow-up care plan.",
    originalPrice: 180,
    discountedPrice: 135,
    savings: 45,
    duration: "90 minutes",
    includes: [
      "Comprehensive consultation",
      "60-minute remedial massage",
      "Personalized care plan",
      "Follow-up recommendations",
    ],
    validUntil: "December 31, 2024",
    popular: true,
  },
  {
    id: 2,
    title: "Pregnancy Wellness Package",
    subtitle: "Gentle care for expectant mothers",
    description:
      "Three-session package designed specifically for pregnancy comfort and wellness. Safe, gentle techniques to support your pregnancy journey.",
    originalPrice: 405,
    discountedPrice: 320,
    savings: 85,
    duration: "3 x 60 minutes",
    includes: [
      "Three pregnancy massage sessions",
      "Pregnancy-safe techniques",
      "Comfort positioning support",
      "Post-session care guidance",
    ],
    validUntil: "Ongoing",
    popular: false,
  },
];

export default function SpecialsPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/front.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <RiGiftLine className="h-20 w-20 text-spa-accent" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Special Offers
          </h1>

          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Exclusive Packages for Your Wellness
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Take advantage of our exclusive packages designed to provide maximum
            value and lasting results for your wellness journey.
          </p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Current Special Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each package is carefully crafted to address specific wellness
              needs and provide exceptional value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white border-2 border-gray-200 hover:border-spa-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10 bg-spa-accent text-spa-secondary px-4 py-2 text-sm font-medium flex items-center gap-2">
                      <RiStarLine className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="bg-spa-secondary text-white p-8">
                  <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-spa-neutral/80">{offer.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {offer.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-spa-secondary">
                        ${offer.discountedPrice}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        ${offer.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                        <RiPercentLine className="h-3 w-3" />
                        Save ${offer.savings}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      <strong>Duration:</strong> {offer.duration}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-spa-secondary mb-4">
                      Package Includes:
                    </h4>
                    <div className="space-y-3">
                      {offer.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <RiHeartLine className="h-4 w-4 text-spa-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valid Until */}
                  <div className="mb-8 text-sm text-gray-500">
                    <strong>Valid until:</strong> {offer.validUntil}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <button
                      onClick={openModal}
                      className="btn-spa-accent inline-flex items-center gap-2 group"
                    >
                      <span>Book This Package</span>
                      <RiArrowRightLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Packages */}
          <div className="mt-20 text-center">
            <div className="bg-spa-neutral p-12">
              <h3 className="text-2xl font-light text-spa-secondary mb-8">
                Why Choose Our Packages?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-4">
                    <RiHeartLine className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-3">
                    Comprehensive Care
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Each package is designed to provide complete treatment and
                    lasting results for your specific needs.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-4">
                    <RiTimeLine className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-3">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Book sessions at your convenience with our flexible
                    appointment system and priority booking.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-4">
                    <RiPercentLine className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-3">
                    Great Value
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Save money while receiving premium care with our discounted
                    packages and exclusive offers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 mt-16">
            <h3 className="text-2xl font-light mb-4">
              Ready to Start Your Wellness Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your preferred package and experience the difference of
              professional care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-spa-accent inline-flex items-center gap-2 group"
              >
                <span>Book Your Package</span>
                <RiArrowRightLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
              </button>
              <Link
                href="mailto:info@bunburywellnessremedialmassage.com.au"
                className="btn-spa-service inline-flex items-center gap-2 group"
              >
                <span>Email to Discuss</span>
                <RiPhoneLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
