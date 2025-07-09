"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiLeafLine, RiCalendar2Line } from "@remixicon/react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Bunbury Wellness
          <br />
          <span className="font-normal">Remedial Massage</span>
        </h1>

        <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
          Breathe . Boost . Bond
        </div>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Experience the difference of care, expertise, and a passion for
          healing in Bunbury's premier wellness destination
        </p>

        <a
          href="#book"
          className="btn-spa-accent inline-flex items-center gap-2 group"
        >
          <span>Book Your Session</span>
          <RiCalendar2Line className="transition-colors duration-300 text-inherit group-hover:text-[#092518] z-10" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
