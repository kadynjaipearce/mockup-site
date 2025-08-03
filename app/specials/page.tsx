"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/components/BookingProvider";
import { RiLeafLine } from "@remixicon/react";
import { Clock, MapPin, Phone, ArrowRight, Star, Percent } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const specialOffers = [
  {
    id: 1,
    title: "New Client Welcome Package",
    subtitle: "Perfect for first-time visitors",
    description:
      "Experience the full Bunbury Wellness treatment with our comprehensive welcome package. Includes consultation, 60-minute massage, and follow-up care plan.",
    originalPrice: 180,
    discountedPrice: 135,
    savings: 25,
    duration: "90 minutes",
    includes: [
      "Comprehensive consultation",
      "60-minute remedial massage",
      "Personalized care plan",
      "Follow-up recommendations",
    ],
    image: "/front.jpg",
    validUntil: "December 31, 2024",
    popular: false,
  },
  {
    id: 2,
    title: "Pregnancy Wellness Package",
    subtitle: "Gentle care for expectant mothers",
    description:
      "Three-session package designed specifically for pregnancy comfort and wellness. Safe, gentle techniques to support your pregnancy journey.",
    originalPrice: 405,
    discountedPrice: 320,
    savings: 21,
    duration: "3 x 60 minutes",
    includes: [
      "Three pregnancy massage sessions",
      "Pregnancy-safe techniques",
      "Comfort positioning support",
      "Post-session care guidance",
    ],
    image: "/preg.jpg",
    validUntil: "Ongoing",
    popular: true,
  },
  {
    id: 3,
    title: "Sports Recovery Package",
    subtitle: "For active individuals and athletes",
    description:
      "Targeted treatment for sports injuries, muscle recovery, and performance enhancement. Ideal for runners, gym-goers, and sports enthusiasts.",
    originalPrice: 240,
    discountedPrice: 190,
    savings: 21,
    duration: "2 x 75 minutes",
    includes: [
      "Two sports massage sessions",
      "Injury assessment",
      "Recovery techniques",
      "Performance optimization tips",
    ],
    image: "/back.jpg",
    validUntil: "January 15, 2025",
    popular: false,
  },
  {
    id: 4,
    title: "Chronic Pain Relief Package",
    subtitle: "Comprehensive pain management",
    description:
      "Extended treatment plan for chronic pain conditions. Combines remedial massage with dry needling for maximum relief and long-term results.",
    originalPrice: 360,
    discountedPrice: 280,
    savings: 22,
    duration: "3 x 60 minutes",
    includes: [
      "Three remedial massage sessions",
      "Dry needling treatment",
      "Pain assessment",
      "Home care exercises",
    ],
    image: "/fuko.jpg",
    validUntil: "February 28, 2025",
    popular: false,
  },
  {
    id: 5,
    title: "Couples Wellness Package",
    subtitle: "Share the wellness experience",
    description:
      "Perfect for couples wanting to experience wellness together. Side-by-side treatments in our private couples room with romantic ambiance.",
    originalPrice: 300,
    discountedPrice: 240,
    savings: 20,
    duration: "2 x 60 minutes",
    includes: [
      "Two couples massage sessions",
      "Private couples room",
      "Romantic ambiance",
      "Shared wellness consultation",
    ],
    image: "/front.jpg",
    validUntil: "Valentine's Day 2025",
    popular: true,
  },
  {
    id: 6,
    title: "Maintenance Membership",
    subtitle: "Ongoing wellness support",
    description:
      "Monthly membership for regular maintenance and prevention. Consistent care to keep you feeling your best and prevent future issues.",
    originalPrice: 150,
    discountedPrice: 120,
    savings: 20,
    duration: "Monthly 60 minutes",
    includes: [
      "Monthly 60-minute massage",
      "Priority booking",
      "Flexible scheduling",
      "Wellness check-ins",
    ],
    image: "/back.jpg",
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
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Special Offers
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Exclusive packages and limited-time deals to enhance your wellness
            journey
          </p>
          <button onClick={openModal} className="btn-spa-accent ml-8 inline">
            <span>Book Your Package</span>
          </button>
        </div>
      </section>

      {/* Special Offers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Current Special Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take advantage of our exclusive packages designed to provide
              maximum value and results. Each package is carefully crafted to
              address specific wellness needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10 bg-spa-accent text-spa-secondary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {offer.subtitle}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-spa-secondary">
                        ${offer.discountedPrice}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${offer.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                        <Percent className="h-3 w-3" />
                        Save ${offer.savings}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Duration: {offer.duration}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-spa-secondary mb-2 text-sm">
                      Package Includes:
                    </h4>
                    <ul className="space-y-1">
                      {offer.includes.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <RiLeafLine className="h-4 w-4 text-spa-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Valid Until */}
                  <div className="mb-4 text-xs text-gray-500">
                    Valid until: {offer.validUntil}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={openModal}
                    className="w-full btn-spa-accent text-sm"
                  >
                    <span>Book This Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-spa-neutral p-8 rounded-lg">
              <h3 className="text-2xl font-light text-spa-secondary mb-4">
                Why Choose Our Packages?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-spa-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <RiLeafLine className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Comprehensive Care
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Each package is designed to provide complete treatment and
                    lasting results
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-spa-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Book sessions at your convenience with our flexible
                    appointment system
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-spa-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Percent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-spa-secondary mb-2">
                    Great Value
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Save money while receiving premium care with our discounted
                    packages
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-spa-primary text-white p-12 rounded-lg mt-16">
            <h3 className="text-2xl font-light mb-4">
              Ready to Start Your Wellness Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your preferred package and experience the difference of
              professional care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={openModal} className="btn-spa-accent">
                <span>Book Your Package</span>
              </button>
              <Link href="tel:+61897210000" className="btn-spa-primary">
                <span>Call to Discuss</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
