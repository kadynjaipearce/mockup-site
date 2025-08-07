"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  RiHeartLine,
  RiArrowRightLine,
  RiStarLine,
  RiCalendar2Line,
  RiGiftLine,
  RiLeafLine,
  RiTimeLine,
  RiMailLine,
} from "@remixicon/react";

const services = [
  {
    id: 1,
    title: "Remedial Massage",
    subtitle: "Therapeutic Treatment",
    description:
      "Targeted therapy to address specific muscle tension, injuries, and chronic pain conditions.",
    image: "/placeholder.svg",
    duration: "60-90 minutes",
    price: "From $90",
    features: [
      "Deep tissue techniques",
      "Injury rehabilitation",
      "Pain relief",
      "Posture correction",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Sports Massage",
    subtitle: "Performance Enhancement",
    description:
      "Specialized massage for athletes and active individuals to improve performance and recovery.",
    image: "/placeholder.svg",
    duration: "60-90 minutes",
    price: "From $95",
    features: [
      "Pre/post event",
      "Injury prevention",
      "Performance optimization",
      "Recovery focus",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Pregnancy Massage",
    subtitle: "Gentle Care for Mums-to-Be",
    description:
      "Safe and comfortable massage therapy designed specifically for expectant mothers.",
    image: "/placeholder.svg",
    duration: "60-75 minutes",
    price: "From $85",
    features: [
      "Pregnancy-safe techniques",
      "Specialized positioning",
      "Stress relief",
      "Comfort focus",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "Relaxation Massage",
    subtitle: "Stress Relief & Wellness",
    description:
      "Gentle, flowing massage to promote relaxation, reduce stress, and improve overall wellbeing.",
    image: "/placeholder.svg",
    duration: "60-90 minutes",
    price: "From $80",
    features: [
      "Stress reduction",
      "Relaxation techniques",
      "Wellness focus",
      "Gentle pressure",
    ],
    popular: false,
  },
];

const specials = [
  {
    id: 1,
    title: "Specials 1",
    subtitle: "Premium Wellness Experience",
    description:
      "Experience our signature wellness package designed to provide ultimate relaxation and rejuvenation for your mind and body.",
    image: "/placeholder.svg",
    price: "From $150",
    duration: "2 Hours",
    features: [
      "Full body massage",
      "Aromatherapy treatment",
      "Hot stone therapy",
      "Wellness consultation",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Specials 2",
    subtitle: "Ultimate Relaxation Package",
    description:
      "A comprehensive relaxation experience combining multiple therapeutic techniques for complete mind-body wellness.",
    image: "/placeholder.svg",
    price: "From $180",
    duration: "2.5 Hours",
    features: [
      "Extended massage session",
      "Aromatherapy oils",
      "Hot stone therapy",
      "Post-treatment consultation",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
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
            <RiLeafLine className="h-20 w-20 text-spa-accent" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Our Services
          </h1>

          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Professional Massage Therapy
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Experience the healing power of professional massage therapy
            tailored to your needs
          </p>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Massage Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional massage therapy services designed to address your
              specific needs and promote overall wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-spa-accent text-white px-4 py-2 text-sm font-medium flex items-center gap-1 shadow-lg">
                      <RiStarLine className="h-3 w-3" />
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-spa-secondary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-spa-primary font-medium mb-2">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-spa-accent">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <RiTimeLine className="h-4 w-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-spa-secondary mb-4 text-lg">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <RiLeafLine className="h-5 w-5 text-spa-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="btn-spa-accent inline-flex items-center gap-2 group w-full justify-center text-lg py-4"
                  >
                    <span>Learn More</span>
                    <RiArrowRightLine className="h-5 w-5 transition-colors duration-300 group-hover:text-spa-secondary z-10" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-gradient-to-br from-spa-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-spa-secondary mb-6">
              Special Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience our curated special packages designed to provide
              exceptional value and unforgettable experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {specials.map((special) => (
              <div
                key={special.id}
                className="bg-white shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={special.image}
                    alt={special.title}
                    fill
                    className="object-cover"
                  />
                  {special.popular && (
                    <div className="absolute top-6 right-6 bg-spa-accent text-white px-6 py-3 text-lg font-bold flex items-center gap-2 shadow-xl">
                      <RiStarLine className="h-4 w-4" />
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-spa-secondary mb-3">
                        {special.title}
                      </h3>
                      <p className="text-xl text-spa-primary font-medium mb-2">
                        {special.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-spa-accent">
                        {special.price}
                      </div>
                      <div className="text-lg text-gray-500 font-medium">
                        {special.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {special.description}
                  </p>
                  <div className="mb-8">
                    <h4 className="font-bold text-spa-secondary mb-4 text-xl">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-3">
                      {special.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-600 text-lg"
                        >
                          <RiHeartLine className="h-6 w-6 text-spa-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/#contact"
                    className="btn-spa-accent inline-flex items-center gap-3 group w-full justify-center text-xl py-5 font-bold"
                  >
                    <span>Book This Special</span>
                    <RiCalendar2Line className="h-6 w-6 transition-colors duration-300 group-hover:text-spa-secondary z-10" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto text-center bg-spa-primary text-white p-12 mb-20">
        <h3 className="text-2xl font-light mb-4">
          Ready to Experience the Difference?
        </h3>
        <p className="text-lg mb-8 opacity-90">
          Book your session with our experienced team and start your wellness
          journey today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#contact"
            className="btn-spa-accent inline-flex items-center gap-2 group"
          >
            <span>Book Your Session</span>
            <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
          </Link>
          <Link
            href="mailto:info@bunburywellnessremedialmassage.com.au"
            className="btn-spa-service inline-flex items-center gap-2 group"
          >
            <span>Email to Discuss</span>
            <RiMailLine className="h-5 w-5 transition-colors duration-300 group-hover:text-spa-accent z-10" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
