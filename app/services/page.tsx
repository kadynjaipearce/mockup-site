"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/components/BookingProvider";
import Link from "next/link";
import {
  RiTimeLine,
  RiPhoneLine,
  RiArrowRightLine,
  RiStarLine,
  RiUserLine,
  RiHeartLine,
  RiAwardLine,
  RiShieldCheckLine,
} from "@remixicon/react";

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
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/back.jpg')`,
            filter: "blur(5px)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <RiShieldCheckLine className="h-20 w-20 text-spa-accent" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Our Services
          </h1>

          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Professional Care for Your Wellness
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            From pain relief to relaxation, we offer a range of specialized
            massage therapies tailored to your unique needs and wellness goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Our Treatment Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each service is designed to address specific needs and provide
              lasting relief and wellness benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-gray-200 hover:border-spa-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Service Header */}
                <div className="bg-spa-secondary text-white p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-spa-neutral/80">{service.subtitle}</p>
                    </div>
                    {service.popular && (
                      <div className="bg-spa-accent text-spa-secondary px-4 py-2 text-sm font-medium flex items-center gap-2">
                        <RiStarLine className="h-4 w-4" />
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <RiTimeLine className="h-5 w-5 text-spa-primary" />
                        <span className="text-gray-700">
                          <strong>Duration:</strong> {service.duration}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-spa-primary">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-spa-secondary mb-4">
                      What&apos;s Included:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <RiStarLine className="h-4 w-4 text-spa-primary" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-spa-secondary mb-4">
                      Benefits:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <RiHeartLine className="h-4 w-4 text-spa-accent" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    <button
                      onClick={openModal}
                      className="btn-spa-accent inline-flex items-center gap-2 group"
                    >
                      <span>Book This Service</span>
                      <RiArrowRightLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Why Choose Bunbury Wellness?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of professional care in a tranquil
              environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-6">
                <RiUserLine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-4">
                Qualified Therapists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of certified and experienced massage
                therapists dedicated to your health and wellness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-6">
                <RiHeartLine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-4">
                Personalized Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every session is tailored to your specific needs, ensuring the
                most effective treatment for your condition.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-6">
                <RiAwardLine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-4">
                Premium Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Relax in our tranquil environment with premium amenities and
                professional service from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-spa-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-spa-neutral/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and take the first step towards better
            health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="btn-spa-accent inline-flex items-center gap-2 group"
            >
              <span>Book Your Session</span>
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
      </section>

      <Footer />
    </div>
  );
}
