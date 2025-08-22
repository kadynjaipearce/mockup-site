"use client";

import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "REMEDIAL MASSAGE",
      description: "Targeted therapy for pain relief and mobility",
      image: "/placeholder.svg",
      link: "/services/remedial-massage",
    },
    {
      title: "SPORTS MASSAGE",
      description: "Performance enhancement and injury recovery",
      image: "/placeholder.svg",
      link: "/services/sports-massage",
    },
    {
      title: "PREGNANCY MASSAGE",
      description: "Gentle, safe, and nurturing for mums-to-be",
      image: "/placeholder.svg",
      link: "/services/pregnancy-massage",
    },
    {
      title: "DRY NEEDLING",
      description: "Advanced therapy for muscle pain and trigger points",
      image: "/placeholder.svg",
      link: "/services/dry-needling",
    },
  ];

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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our range of therapeutic and wellness treatments designed
            to restore, rejuvenate, and revitalize your body and mind.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative group card-hover bg-white rounded-sm shadow-md overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  style={{ borderRadius: 0 }}
                />
                <motion.div
                  className="absolute inset-0 bg-spa-secondary/60"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="btn-spa-service self-start inline-flex items-center gap-2 group cursor-pointer"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
