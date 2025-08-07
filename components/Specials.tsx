"use client";
import Image from "next/image";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightLine,
  RiGiftLine,
} from "@remixicon/react";
import Link from "next/link";

const specials = [
  {
    image: "/front.jpg",
    title: "Relax and renew",
    subtitle: "Book in your body treatment today",
    cta: "Learn More",
    link: "/services/remedial-massage",
  },
  {
    image: "/back.jpg",
    title: "Deep Tissue Relief",
    subtitle: "Experience our signature back massage",
    cta: "Learn More",
    link: "/services/sports-massage",
  },
  {
    image: "/preg.jpg",
    title: "Pregnancy Massage",
    subtitle: "Gentle care for mums-to-be",
    cta: "Learn More",
    link: "/services/pregnancy-massage",
  },
  {
    image: "/fuko.jpg",
    title: "Remedial Therapy",
    subtitle: "Restore balance and wellness",
    cta: "Learn More",
    link: "/services/remedial-massage",
  },
];

export default function Specials() {
  const [current, setCurrent] = useState(0);
  const total = specials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section id="specials" className="w-full">
      {/* Specials Carousel */}
      <div className="relative w-full min-h-[66vh] flex items-center justify-center overflow-hidden bg-black">
        {specials.map((special, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src="/placeholder.svg"
              alt="Placeholder"
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
              <Link
                href={special.link}
                className="btn-spa-service text-base md:text-lg px-8 py-3 inline-flex items-center gap-2 group"
              >
                <span>{special.cta}</span>
                <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
              </Link>
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
      </div>

      {/* Redesigned Date Night & Gift Vouchers Section */}
      <div className="bg-spa-neutral py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Special Experiences & Gifts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unique moments and thoughtful gifts to make your wellness journey
              even more memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Spa Date Night Card */}
            <div className="relative overflow-hidden shadow-lg flex flex-col h-96 md:h-[28rem] w-full md:w-[30rem] mx-auto">
              <Image
                src="/placeholder.svg"
                alt="Placeholder"
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
                  Spa Date Night
                </h2>
                <Link
                  href="/services/remedial-massage"
                  className="btn-spa-accent px-6 py-3 w-fit inline-flex items-center gap-2 group text-base font-medium"
                >
                  <span>Read More</span>
                  <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-secondary" />
                </Link>
              </div>
            </div>
            {/* Gift Vouchers Card */}
            <div className="relative overflow-hidden shadow-lg flex flex-col h-96 md:h-[28rem] w-full md:w-[30rem] mx-auto">
              <Image
                src="/placeholder.svg"
                alt="Placeholder"
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
                  Gift Vouchers
                </h2>
                <p className="text-white/90 mb-6 text-base font-light drop-shadow">
                  Treat that someone special
                </p>
                <Link
                  href="/gift-cards"
                  className="btn-spa-accent px-6 py-3 w-fit inline-flex items-center gap-2 group text-base font-medium"
                >
                  <span>Purchase</span>
                  <RiGiftLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
