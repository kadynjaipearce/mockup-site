"use client";
import { RiFacebookFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FacebookSection() {
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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            variants={cardVariants}
            className="bg-spa-neutral border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center max-w-xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-4"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <RiFacebookFill className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold text-spa-secondary mb-3"
            >
              Stay Connected
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              Follow us on Facebook for general information, news, updates,
              holiday schedules, and changes to business hours.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="https://www.facebook.com/BunburyWellnessRemedialMassage"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spa-accent px-6 py-3 inline-flex items-center gap-2 group text-base font-medium"
              >
                <span>Follow on Facebook</span>
                <motion.div
                  className="z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiFacebookFill className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-secondary" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
