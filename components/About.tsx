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
          Our Story
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
          Started in July 2024 as a home clinic, and in June 2025 we moved into
          a dedicated clinic in Bunbury, WA. Experience the difference of care,
          expertise, and a passion for healing that has transformed countless
          lives through the power of therapeutic touch.
        </motion.p>
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
