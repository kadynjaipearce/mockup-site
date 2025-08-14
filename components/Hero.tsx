"use client";
import { RiCalendar2Line } from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";
import { motion } from "framer-motion";

const Hero = () => {
  const { openModal } = useBookingModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/back.jpg')`,
          filter: "blur(5px)",
        }}
      />

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
        >
          Bunbury Wellness
          <br />
          <span className="font-normal">Remedial Massage</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent"
        >
          Breathe . Boost . Bond
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          Experience the difference of care, expertise, and a passion for
          healing in Bunbury&apos;s premier wellness destination
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          className="btn-spa-accent inline-flex items-center gap-2 group"
        >
          <span>Book Your Session</span>
          <RiCalendar2Line className="transition-colors duration-300 text-inherit group-hover:text-[#092518] z-10" />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
