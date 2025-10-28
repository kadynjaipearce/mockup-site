"use client";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="about" className="py-20 bg-spa-neutral">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-light text-spa-secondary mb-8"
        >
          Our Journey
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="font-serif text-xl md:text-2xl italic text-spa-accent mb-6"
        >
          Feel better, move better, live better – Naturally.
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Every step of our journey has been guided by a simple goal — to help
          people feel better, move better, and live better through genuine,
          caring massage therapy in Bunbury.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="space-y-8 mb-12 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-left">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-spa-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">2024</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-spa-secondary mb-2">
                  Our Home Clinic Began
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In July 2024, we opened our doors as a small home-based
                  clinic, built on a passion for providing personalised and
                  evidence-based care to our local community.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-left">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-spa-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">2025</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-spa-secondary mb-2">
                  Growing Together
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By June 2025, our little dream had grown — Tan joined the
                  team, and we moved into our very own clinic space. This
                  expansion allowed us to welcome more clients and continue
                  offering the same warm, supportive care in a more comfortable
                  setting.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-light text-spa-primary mb-2"
            >
              10+
            </motion.div>
            <div className="text-gray-600">Years Experience</div>
          </motion.div>
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-light text-spa-primary mb-2"
            >
              500+
            </motion.div>
            <div className="text-gray-600">Happy Clients</div>
          </motion.div>
          <motion.div
            variants={statsVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              variants={numberVariants}
              className="text-3xl font-light text-spa-primary mb-2"
            >
              100%
            </motion.div>
            <div className="text-gray-600">Dedicated Care</div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="btn-spa-primary inline-flex items-center gap-2 group"
          >
            <span>Learn More</span>
            <motion.div
              className="z-10"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <RiArrowRightLine className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
