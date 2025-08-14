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
import { motion, AnimatePresence } from "framer-motion";

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

  const carouselVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="specials" className="w-full">
      {/* Specials Carousel */}
      <div className="relative w-full min-h-[66vh] flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          {specials.map(
            (special, i) =>
              i === current && (
                <motion.div
                  key={i}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Placeholder"
                    fill
                    className="object-cover object-center w-full h-full"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                  >
                    <motion.h3
                      variants={itemVariants}
                      className="text-white text-lg md:text-xl font-light mb-2 drop-shadow-lg"
                    >
                      {special.title}
                    </motion.h3>
                    <motion.h2
                      variants={itemVariants}
                      className="text-white text-3xl md:text-5xl font-light mb-8 drop-shadow-lg"
                    >
                      {special.subtitle}
                    </motion.h2>
                    <motion.div variants={itemVariants}>
                      <Link
                        href={special.link}
                        className="btn-spa-service text-base md:text-lg px-8 py-3 inline-flex items-center gap-2 group"
                      >
                        <span>{special.cta}</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
          aria-label="Previous special"
        >
          <RiArrowLeftSLine className="h-6 w-6 relative z-10" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
          aria-label="Next special"
        >
          <RiArrowRightSLine className="h-6 w-6 relative z-10" />
        </motion.button>
      </div>

      {/* Redesigned Date Night & Gift Vouchers Section */}
      <div className="bg-spa-neutral py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
            >
              Special Experiences & Gifts
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Unique moments and thoughtful gifts to make your wellness journey
              even more memorable.
            </motion.p>
          </motion.div>
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* Spa Date Night Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden shadow-lg flex flex-col h-96 md:h-[28rem] w-full md:w-[30rem] mx-auto"
            >
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
                  Specials #1
                </h2>
                <p className="text-white/90 mb-6 text-base font-light drop-shadow">
                  Treat that someone special
                </p>
                <Link
                  href="/services/remedial-massage"
                  className="btn-spa-accent px-6 py-3 w-fit inline-flex items-center gap-2 group text-base font-medium"
                >
                  <span>Read More</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-secondary" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
            {/* Gift Vouchers Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden shadow-lg flex flex-col h-96 md:h-[28rem] w-full md:w-[30rem] mx-auto"
            >
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
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RiGiftLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-secondary" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
