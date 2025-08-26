"use client";

import Footer from "@/components/Footer";
import {
  RiHeartLine,
  RiShieldCheckLine,
  RiUserLine,
  RiAwardLine,
  RiWomenLine,
  RiFileList3Line,
  RiToolsLine,
  RiUserHeartLine,
  RiMapPinLine,
  RiTimeLine,
} from "@remixicon/react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

const teamMembers = [
  {
    name: "Fuko Kodama",
    role: "Senior Remedial Massage Therapist",
    experience: "8+ years",
    specialties: [
      "Pregnancy Massage",
      "Remedial Therapy",
      "Cupping",
      "Heated Tools",
    ],
    image: "/fuko.jpg",
    description:
      "Fuko holds a Diploma in Remedial Massage and has been practicing massage since 2016. She has always been passionate about helping her clients achieve the best results while ensuring they feel relaxed throughout the process. She integrates cupping and heated tools to support these goals.",
  },
  {
    name: "Tan Hsin-Wen",
    role: "Remedial Massage Therapist",
    experience: "10+ years",
    specialties: [
      "Dry Needling",
      "Joint Mobilisations",
      "Rehab-focused Massage",
      "Progressive Exercise",
    ],
    image: "/tan.png",
    description:
      "Tan is a qualified Remedial Massage Therapist with over 10 years of hands-on experience helping people relieve pain, recover from injury, and move better. Trained in dry needling, joint mobilisations, and rehab-focused massage, Tan has worked alongside physiotherapists since 2019. Each treatment is tailored to individual needs—combining effective hands-on therapy with simple, practical exercises to support long-term results.",
  },
];

const values = [
  {
    icon: RiHeartLine,
    title: "Compassionate Care",
    description:
      "We treat every client with genuine care and understanding, creating a safe space for healing and relaxation.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Professional Excellence",
    description:
      "Our therapists are fully qualified and continuously update their skills to provide the highest standard of care.",
  },
  {
    icon: RiUserLine,
    title: "Client-Centered",
    description:
      "Every treatment is personalised to your specific needs, ensuring you receive the most effective care possible.",
  },
  {
    icon: RiAwardLine,
    title: "Proven Results",
    description:
      "Our track record speaks for itself - thousands of satisfied clients who have experienced real relief and improvement.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Home Clinic Opened",
    description:
      "Began in July 2024 as a home clinic focused on personalised, evidence-based care.",
  },
  {
    year: "2025",
    title: "Clinic Expansion & Tan Joined",
    description:
      "In June 2025, Tan joined the team and the practice moved into a dedicated clinic space.",
  },
];

export default function AboutPage() {

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

  const milestoneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/about.png')`,
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
          <motion.div
            variants={iconVariants}
            className="flex justify-center mb-8"
          >
            <RiHeartLine className="h-20 w-20 text-spa-accent" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            About Us
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent"
          >
            Discover the Story Behind Bunbury Wellness
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Meet the team dedicated to your health and wellbeing
          </motion.p>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              The principles that guide everything we do and every client we
              serve
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-16 h-16 bg-spa-primary flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-spa-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Experienced, qualified therapists dedicated to your health and
              wellbeing
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-spa-neutral p-8"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-spa-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-spa-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.experience} experience
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-spa-secondary mb-2">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-spa-primary text-white px-3 py-1 text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Key milestones in our mission to provide exceptional massage
              therapy in Bunbury
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={milestoneVariants}
                  className="flex items-start gap-6 relative"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-spa-primary flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                    {/* Connecting line from this dot to the next */}
                    {index < milestones.length - 1 && (
                      <div
                        className="absolute left-8 top-16 w-0.5 bg-spa-primary/30"
                        style={{ height: "calc(100% + 2rem)" }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Why Choose Bunbury Wellness?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              What sets us apart in the Bunbury wellness community
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiWomenLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Female Therapists Available
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We understand that some clients prefer female therapists,
                    and we&apos;re proud to offer this option for your comfort
                    and peace of mind.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiFileList3Line className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Comprehensive Treatment Plans
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We don&apos;t just treat symptoms - we create personalised
                    care plans that address the root cause of your discomfort.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiToolsLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Advanced Techniques
                  </h3>
                  <p className="text-gray-600 text-sm">
                    From traditional remedial massage to advanced dry needling,
                    we offer a full range of therapeutic techniques.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiUserHeartLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Pregnancy-Safe Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our pregnancy massage specialists are trained in safe,
                    gentle techniques specifically designed for expectant
                    mothers.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiMapPinLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Convenient Location
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Located in the heart of Bunbury, we&apos;re easily
                    accessible for residents throughout the region.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-spa-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <RiTimeLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-secondary mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We offer flexible appointment times to fit your busy
                    schedule, including early morning and evening sessions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}
