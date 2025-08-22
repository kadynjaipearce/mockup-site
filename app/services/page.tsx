"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  RiHeartLine,
  RiStarLine,
  RiCalendar2Line,
  RiLeafLine,
  RiTimeLine,
  RiMailLine,
  RiShieldCheckLine,
  RiSpeedLine,
  RiRefreshLine,
  RiUserHeartLine,
  RiMedalLine,
  RiCheckLine,
  RiHealthBookLine,
  RiMentalHealthLine,
  RiRestTimeLine,
  RiHandHeartLine,
  RiBodyScanLine,
} from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Remedial Massage",
    subtitle: "Therapeutic Treatment",
    description:
      "Targeted therapy to address specific muscle tension, injuries, and chronic pain conditions. Includes free 15 minutes assessment.",
    image: "/remedial.png",
    duration: "60-90 minutes",
    price: "From $125",
    features: [
      "Deep tissue techniques",
      "Injury rehabilitation",
      "Pain relief",
      "Posture correction",
      "Free 15-minute assessment",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Sports Massage",
    subtitle: "Performance Enhancement",
    description:
      "Specialized massage for athletes and active individuals to improve performance and recovery.",
    image: "/sports.png",
    duration: "60-90 minutes",
    price: "From $125",
    features: [
      "Pre/post event",
      "Injury prevention",
      "Performance optimization",
      "Recovery focus",
      "Free 15-minute assessment",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Pregnancy Massage",
    subtitle: "Gentle Care for Mums-to-Be",
    description:
      "Safe and comfortable massage therapy designed specifically for expectant mothers. Performed in side-lying position for optimal comfort and safety.",
    image: "/preg.png",
    duration: "60-90 minutes",
    price: "From $135",
    features: [
      "Pregnancy-safe techniques",
      "Side-lying position",
      "Stress relief",
      "Comfort focus",
      "Free 15-minute assessment",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "Relaxation Massage",
    subtitle: "Stress Relief & Wellness",
    description:
      "Gentle, flowing massage to promote relaxation, reduce stress, and improve overall wellbeing.",
    image: "/needling.png",
    duration: "60-90 minutes",
    price: "From $125",
    features: [
      "Stress reduction",
      "Relaxation techniques",
      "Wellness focus",
      "Gentle pressure",
      "Free 15-minute assessment",
    ],
    popular: false,
  },
];

const specials = [
  {
    id: 1,
    title: "Special Experience",
    subtitle: "In-Store Only Special",
    description:
      "Experience our signature wellness package designed to provide ultimate relaxation and rejuvenation for your mind and body.",
    image: "/specials1.png",
    price: "From $300",
    duration: "2 Hours",
    features: [
      "Full body massage",
      "Aromatherapy treatment",
      "Hot stone therapy",
      "Wellness consultation",
    ],
    popular: true,
    button: false,
  },
];

export default function ServicesPage() {
  const { openModal } = useBookingModal();

  // Function to get appropriate icon for each feature
  const getFeatureIcon = (feature: string) => {
    const featureLower = feature.toLowerCase();

    // Remedial Massage features
    if (featureLower.includes("deep tissue")) return RiBodyScanLine;
    if (featureLower.includes("injury rehabilitation"))
      return RiShieldCheckLine;
    if (featureLower.includes("pain relief")) return RiHandHeartLine;
    if (featureLower.includes("posture correction")) return RiUserHeartLine;

    // Sports Massage features
    if (featureLower.includes("pre/post event")) return RiSpeedLine;
    if (featureLower.includes("injury prevention")) return RiShieldCheckLine;
    if (featureLower.includes("performance optimization")) return RiMedalLine;
    if (featureLower.includes("recovery focus")) return RiRefreshLine;

    // Pregnancy Massage features
    if (featureLower.includes("pregnancy-safe")) return RiUserHeartLine;
    if (featureLower.includes("side-lying")) return RiRestTimeLine;
    if (featureLower.includes("stress relief")) return RiMentalHealthLine;
    if (featureLower.includes("comfort focus")) return RiHandHeartLine;

    // Relaxation Massage features
    if (featureLower.includes("stress reduction")) return RiMentalHealthLine;
    if (featureLower.includes("relaxation techniques")) return RiRestTimeLine;
    if (featureLower.includes("wellness focus")) return RiHealthBookLine;
    if (featureLower.includes("gentle pressure")) return RiHandHeartLine;

    // Assessment features
    if (featureLower.includes("assessment")) return RiCheckLine;

    // Default fallback
    return RiLeafLine;
  };
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
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

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="min-h-screen pt-20">
      <Header />

      {/* Hero Section */}

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/services.png')`,
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
            <RiLeafLine className="h-20 w-20 text-spa-accent" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            Our Services
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent"
          >
            Professional Massage Therapy
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Experience the healing power of professional massage therapy
            tailored to your needs
          </motion.p>
        </motion.div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-gradient-to-br from-spa-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl font-light text-spa-secondary mb-6"
            >
              Special Packages
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Experience our curated special packages designed to provide
              exceptional value and unforgettable experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {specials.map((special) => (
              <motion.div
                key={special.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-1/2 h-80 lg:h-auto">
                    <Image
                      src={special.image}
                      alt={special.title}
                      fill
                      className="object-cover"
                    />
                    {special.popular && (
                      <div className="absolute top-6 right-6 bg-spa-accent text-white px-6 py-3 text-lg font-bold flex items-center gap-2 shadow-xl">
                        <RiStarLine className="h-4 w-4" />
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2 p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-spa-secondary mb-3">
                          {special.title}
                        </h3>
                        <p className="text-xl text-spa-primary font-medium mb-2">
                          {special.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-spa-accent">
                          {special.price}
                        </div>
                        <div className="text-lg text-gray-500 font-medium">
                          {special.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {special.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="font-bold text-spa-secondary mb-4 text-xl">
                        What&apos;s Included:
                      </h4>
                      <ul className="space-y-3">
                        {special.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-gray-600 text-lg"
                          >
                            <RiHeartLine className="h-6 w-6 text-spa-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {special.button && (
                      <Link
                        href="/#contact"
                        className="btn-spa-accent inline-flex items-center gap-3 group w-full justify-center text-xl py-5 font-bold"
                      >
                        <span>Book This Special</span>
                        <RiCalendar2Line className="h-6 w-6 transition-colors duration-300 group-hover:text-spa-secondary z-10" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
            >
              Massage Services
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Professional massage therapy services designed to address your
              specific needs and promote overall wellness.
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform flex flex-col min-h-[600px]"
              >
                <div className="relative h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-spa-accent text-white px-4 py-2 text-sm font-medium flex items-center gap-1 shadow-lg">
                      <RiStarLine className="h-3 w-3" />
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-spa-secondary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-spa-primary font-medium mb-2">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-spa-accent">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <RiTimeLine className="h-4 w-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base flex-grow">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-spa-secondary mb-4 text-lg">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => {
                        const IconComponent = getFeatureIcon(feature);
                        return (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-600 text-sm"
                          >
                            <IconComponent className="h-5 w-5 text-spa-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/#contact"
                      className="btn-spa-accent inline-flex items-center gap-2 group w-full justify-center text-lg py-4"
                    >
                      <span>Book Now</span>
                      <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-spa-secondary z-10" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
            >
              Service Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Transparent pricing for all our massage therapy services. All
              sessions include a free 15-minute assessment.
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* New Clients */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-spa-secondary mb-6 text-center">
                New Clients
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-spa-primary mb-2">
                    Remedial Massage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>60 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $125
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>75 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $150
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $180
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-primary mb-2">
                    Pregnancy Massage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>60 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $135
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>75 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $160
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $190
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Existing Clients */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white  shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-spa-secondary mb-6 text-center">
                Existing Clients
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-spa-primary mb-2">
                    Remedial Massage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>60 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $125
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>75 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $150
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $180
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-primary mb-2">
                    Pregnancy Massage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>60 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $135
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>75 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $160
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 minutes</span>
                      <span className="font-semibold text-spa-accent">
                        $190
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-12"
          >
            <motion.div
              variants={cardVariants}
              className="bg-spa-primary/10 rounded-lg p-6 max-w-2xl mx-auto"
            >
              <motion.h4
                variants={fadeInUpVariants}
                className="font-semibold text-spa-secondary mb-3"
              >
                Important Notes
              </motion.h4>
              <motion.ul
                variants={sectionVariants}
                className="text-sm text-gray-700 space-y-2 text-left"
              >
                <motion.li variants={itemVariants}>
                  • All sessions include a free 15-minute assessment
                </motion.li>
                <motion.li variants={itemVariants}>
                  • Please allow additional time for your full appointment
                </motion.li>
                <motion.li variants={itemVariants}>
                  • If you are pregnant, please select Pregnancy Massage
                </motion.li>
                <motion.li variants={itemVariants}>
                  • For pregnancy before 12 weeks, consult your healthcare
                  professional first
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={cardVariants}
          className="max-w-6xl mx-auto text-center bg-spa-primary text-white p-12 mb-20"
        >
          <motion.h3
            variants={fadeInUpVariants}
            className="text-2xl font-light mb-4"
          >
            Ready to Experience the Difference?
          </motion.h3>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg mb-8 opacity-90"
          >
            Book your session with our experienced team and start your wellness
            journey today
          </motion.p>
          <motion.div
            variants={sectionVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              variants={itemVariants}
              onClick={openModal}
              className="btn-spa-accent inline-flex items-center gap-2 group"
            >
              <span>Book Your Session</span>
              <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
            </motion.button>
            <motion.div variants={itemVariants}>
              <Link
                href="mailto:info@bunburywellnessremedialmassage.com.au"
                className="btn-spa-service inline-flex items-center gap-2 group"
              >
                <span>Email to Discuss</span>
                <RiMailLine className="h-5 w-5 transition-colors duration-300 group-hover:text-spa-accent z-10" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
