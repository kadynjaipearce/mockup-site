"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/components/BookingProvider";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  Heart,
  Target,
  Baby,
} from "lucide-react";

export default function ServicesPage() {
  const { openModal } = useBookingModal();

  const services = [
    {
      id: "remedial-massage",
      title: "Remedial Massage",
      subtitle: "Professional Pain Relief Therapy",
      description:
        "Targeted therapeutic massage designed to address specific muscle tension, injuries, and chronic pain conditions. Our remedial massage focuses on deep tissue work to release muscle knots and restore proper function.",
      duration: "60-90 minutes",
      price: "$85-120",
      features: [
        "Deep tissue therapy",
        "Injury rehabilitation",
        "Pain management",
        "Muscle tension relief",
        "Posture correction",
        "Stress reduction",
      ],
      benefits: [
        "Relieves chronic pain",
        "Improves flexibility",
        "Reduces muscle tension",
        "Enhances circulation",
        "Promotes healing",
        "Restores mobility",
      ],
      icon: Target,
      image: "/images/remedial-massage.jpg",
      popular: true,
    },
    {
      id: "sports-massage",
      title: "Sports Massage",
      subtitle: "Performance Enhancement & Recovery",
      description:
        "Specialized massage therapy for athletes and active individuals. Sports massage helps improve performance, prevent injuries, and accelerate recovery from training and competition.",
      duration: "45-75 minutes",
      price: "$75-100",
      features: [
        "Pre-event preparation",
        "Post-event recovery",
        "Injury prevention",
        "Performance enhancement",
        "Muscle flexibility",
        "Range of motion improvement",
      ],
      benefits: [
        "Enhances athletic performance",
        "Reduces injury risk",
        "Accelerates recovery",
        "Improves flexibility",
        "Increases endurance",
        "Optimizes muscle function",
      ],
      icon: Users,
      image: "/images/sports-massage.jpg",
    },
    {
      id: "pregnancy-massage",
      title: "Pregnancy Massage",
      subtitle: "Gentle Care for Expectant Mothers",
      description:
        "Specialized massage therapy designed specifically for pregnant women. Our pregnancy massage provides relief from common pregnancy discomforts while ensuring the safety and comfort of both mother and baby.",
      duration: "60-75 minutes",
      price: "$90-110",
      features: [
        "Safe pregnancy techniques",
        "Hormone balance support",
        "Stress and anxiety relief",
        "Back and hip pain relief",
        "Swelling reduction",
        "Improved sleep quality",
      ],
      benefits: [
        "Reduces pregnancy discomfort",
        "Improves sleep quality",
        "Reduces stress and anxiety",
        "Enhances circulation",
        "Supports hormone balance",
        "Prepares body for labor",
      ],
      icon: Baby,
      image: "/images/pregnancy-massage.jpg",
    },
    {
      id: "dry-needling",
      title: "Dry Needling",
      subtitle: "Advanced Pain Relief Treatment",
      description:
        "A modern therapeutic technique that uses fine needles to target trigger points in muscles. Dry needling helps release muscle tension, reduce pain, and improve range of motion.",
      duration: "30-45 minutes",
      price: "$70-85",
      features: [
        "Trigger point therapy",
        "Muscle tension release",
        "Pain reduction",
        "Improved range of motion",
        "Enhanced muscle function",
        "Quick recovery time",
      ],
      benefits: [
        "Rapid pain relief",
        "Improved muscle function",
        "Enhanced flexibility",
        "Reduced muscle tension",
        "Better range of motion",
        "Accelerated healing",
      ],
      icon: Target,
      image: "/images/dry-needling.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-spa-primary text-white py-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Our Services
            </h1>
            <p className="text-xl text-spa-neutral/90 max-w-2xl mx-auto">
              Professional massage therapy services tailored to your needs. From
              pain relief to relaxation, we're here to support your wellness
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="bg-spa-secondary text-white p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className="h-8 w-8 text-spa-accent" />
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {service.title}
                          </h3>
                          <p className="text-spa-neutral/80">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="bg-spa-accent text-spa-secondary px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Service Details */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-spa-primary" />
                          <span className="text-gray-700">
                            <strong>Duration:</strong> {service.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-spa-primary">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-spa-secondary mb-3">
                        What's Included:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-spa-primary" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-spa-secondary mb-3">
                        Benefits:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <Star className="h-4 w-4 text-spa-accent" />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={openModal}
                        className="btn-spa-primary flex-1 flex items-center justify-center space-x-2"
                      >
                        <span>Book This Service</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <Link
                        href={`/services/${service.id}`}
                        className="btn-spa-accent flex-1 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-spa-neutral py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-8">
              Why Choose Bunbury Wellness?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-spa-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                  Qualified Therapists
                </h3>
                <p className="text-gray-700">
                  Our team consists of certified and experienced massage
                  therapists dedicated to your health and wellness.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-spa-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                  Personalized Care
                </h3>
                <p className="text-gray-700">
                  Every session is tailored to your specific needs, ensuring the
                  most effective treatment for your condition.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-spa-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                  Premium Experience
                </h3>
                <p className="text-gray-700">
                  Relax in our tranquil environment with premium amenities and
                  professional service from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-spa-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-spa-neutral/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards better
              health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-spa-accent text-lg px-8 py-4"
              >
                <span>Book Your Session</span>
              </button>
              <a
                href="tel:+61897912345"
                className="btn-spa-service text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call to Discuss</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
