"use client";

import { RiMessage3Line } from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";
import { motion } from "framer-motion";

const CTA = () => {
  const { openModal } = useBookingModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={cardVariants}
        className="max-w-6xl mx-auto text-center bg-spa-primary text-white p-12 mb-20"
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-light mb-4">
          Ready to Experience the Difference?
        </motion.h3>
        <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
          Book your session with our experienced team and start your wellness
          journey today
        </motion.p>
        <motion.button
          variants={itemVariants}
          onClick={openModal}
          className="btn-spa-accent inline-flex items-center gap-2 group"
          aria-label="Chat on Messenger"
        >
          <RiMessage3Line
            className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10"
            aria-hidden="true"
          />
          <span>Chat on Messenger</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CTA;


