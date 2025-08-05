"use client";
import Image from "next/image";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightLine,
} from "@remixicon/react";

const specials = [
  {
    image: "/front.jpg",
    title: "Relax and renew",
    subtitle: "Book in your body treatment today",
    cta: "Learn More",
  },
  {
    image: "/back.jpg",
    title: "Deep Tissue Relief",
    subtitle: "Experience our signature back massage",
    cta: "Learn More",
  },
  {
    image: "/preg.jpg",
    title: "Pregnancy Massage",
    subtitle: "Gentle care for mums-to-be",
    cta: "Learn More",
  },
  {
    image: "/fuko.jpg",
    title: "Remedial Therapy",
    subtitle: "Restore balance and wellness",
    cta: "Learn More",
  },
];

export default function Specials() {
  const [current, setCurrent] = useState(0);
  const total = specials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section
      id="specials"
      className="relative w-full min-h-[66vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Slides */}
      {specials.map((special, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={special.image}
            alt={special.title}
            fill
            className="object-cover object-center w-full h-full"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-white text-lg md:text-xl font-light mb-2 drop-shadow-lg">
              {special.title}
            </h3>
            <h2 className="text-white text-3xl md:text-5xl font-light mb-8 drop-shadow-lg">
              {special.subtitle}
            </h2>
            <button className="btn-spa-service text-base md:text-lg px-8 py-3 inline-flex items-center gap-2 group">
              <span>{special.cta}</span>
              <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
            </button>
          </div>
        </div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
        aria-label="Previous special"
      >
        <RiArrowLeftSLine className="h-6 w-6 relative z-10" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
        aria-label="Next special"
      >
        <RiArrowRightSLine className="h-6 w-6 relative z-10" />
      </button>
    </section>
  );
}
