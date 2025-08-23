"use client";

import {
  RiShieldCheckLine,
  RiUserLine,
  RiTimeLine,
  RiInformationLine,
  RiCalendar2Line,
  RiMailLine,
} from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

export default function BookingPolicy() {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <section className="py-24 bg-spa-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              variants={iconVariants}
              className="w-20 h-20 bg-spa-accent/20 flex items-center justify-center"
            >
              <RiShieldCheckLine className="h-10 w-10 text-spa-accent" />
            </motion.div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light text-spa-primary mb-4"
          >
            Booking Policies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know for a smooth, stress-free experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          {/* Booking Requirements */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white shadow-lg border-l-8 text-spa-secondary p-8 flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-2"
            >
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 bg-spa-primary/10 flex items-center justify-center"
              >
                <RiUserLine className="h-7 w-7 text-spa-secondary" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-spa-secondary">
                Booking
              </h3>
            </motion.div>
            <motion.ul
              variants={containerVariants}
              className="space-y-3 text-gray-700 text-base"
            >
              <motion.li variants={itemVariants}>
                <span className="font-medium text-spa-secondary">
                  Fuko&apos;s Sessions:
                </span>{" "}
                Female clients only
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-medium text-spa-secondary">
                  Identification:
                </span>{" "}
                Please use your legal name as shown on your ID
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Cancellation Policy */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white shadow-lg border-l-8 border-spa-accent p-8 flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-2"
            >
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 bg-spa-accent/10 flex items-center justify-center"
              >
                <RiTimeLine className="h-7 w-7 text-spa-accent" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-spa-accent">
                Cancellations
              </h3>
            </motion.div>
            <motion.ul
              variants={containerVariants}
              className="space-y-3 text-gray-700 text-base"
            >
              <motion.li variants={itemVariants}>
                <span className="font-medium text-spa-accent">
                  48-hour notice:
                </span>{" "}
                Required to avoid fees
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-medium text-spa-accent">
                  Late cancellations:
                </span>{" "}
                (under 2 hours) incur full session fee
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-medium text-spa-accent">No-shows:</span>{" "}
                Charged full session fee
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Special Notice */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white shadow-lg border-l-8 border-spa-primary p-8 flex flex-col gap-6 md:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-2"
            >
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 bg-spa-primary/10 flex items-center justify-center"
              >
                <RiInformationLine className="h-7 w-7 text-spa-primary" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-spa-primary">
                Special Considerations
              </h3>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-base"
            >
              We understand life happens! If you have a genuine emergency or
              exceptional situation, please contact us as soon as possible.
              We&apos;re here to help.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
}
