"use client";

import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "REMEDIAL MASSAGE",
      description: "Targeted therapy for pain relief and mobility",
      image: "/front.jpg",
      link: "/services/remedial-massage",
    },
    {
      title: "SPORTS MASSAGE",
      description: "Performance enhancement and injury recovery",
      image: "/back.jpg",
      link: "/services/sports-massage",
    },
    {
      title: "PREGNANCY MASSAGE",
      description: "Gentle, safe, and nurturing for mums-to-be",
      image: "/preg.jpg",
      link: "/services/pregnancy-massage",
    },
    {
      title: "DRY NEEDLING",
      description: "Advanced therapy for muscle pain and trigger points",
      image: "/fuko.jpg",
      link: "/services/dry-needling",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of therapeutic and wellness treatments designed
            to restore, rejuvenate, and revitalize your body and mind.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group card-hover bg-white rounded-sm shadow-md overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  style={{ borderRadius: 0 }}
                />
                <div className="absolute inset-0 bg-spa-secondary/60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="btn-spa-service self-start inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Learn More</span>
                    <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
