"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  RiCalendar2Line,
  RiTimeLine,
  RiShieldCheckLine,
  RiUserHeartLine,
  RiCheckLine,
  RiHealthBookLine,
  RiMentalHealthLine,
  RiRestTimeLine,
  RiHandHeartLine,
  RiBodyScanLine,
  RiRunLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "@remixicon/react";
import { GiMonsteraLeaf } from "react-icons/gi";
import { PiNeedleBold } from "react-icons/pi";
import { useBookingModal } from "@/components/BookingProvider";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { useState } from "react";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const services = [
  {
    id: 1,
    title: "Remedial Massage",
    subtitle: "Therapeutic Treatment",
    description:
      "Targeted consultation and treatment to relieve pain, reduce tightness, and improve function.",
    image: "/remedial.png",
    duration: "60-90 minutes",
    price: "From $125",
    features: [
      "Deep tissue techniques",
      "Injury rehabilitation",
      "Pain relief",
      "Posture correction",
      "Free 15-minute consultation",
    ],
    techniques: [
      {
        name: "Sports Massage",
        description:
          "Performance-focused soft tissue work used within remedial sessions.",
        icon: RiRunLine,
        details:
          "Enhance performance, speed up recovery, and prevent injuries with targeted remedial techniques tailored for active bodies. Perfect for runners and athletes wanting to stay strong, mobile, and pain-free.",
      },
      {
        name: "Dry Needling",
        description: "Trigger-point technique used within remedial sessions.",
        icon: PiNeedleBold,
        details:
          "A precise technique that releases tight muscles and trigger points, reduces pain, and restores movement. When combined with remedial massage, it offers fast, effective relief for sports injuries, tension, and everyday discomfort.",
        note: "Available with Tan only",
      },
    ],
    popular: true,
    bookable: true,
  },
  {
    id: 2,
    title: "Pregnancy Massage",
    subtitle: "Gentle Care for Mums-to-Be",
    description:
      "Safe and comfortable massage therapy designed specifically for expectant mothers. Performed in side-lying position for optimal comfort and safety.",
    image: "/preg3.png",
    duration: "60-90 minutes",
    price: "From $135",
    features: [
      "Pregnancy-safe techniques",
      "Side-lying position",
      "Stress relief",
      "Comfort focus",
      "Free 15-minute consultation",
    ],
    popular: false,
    bookable: true,
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

// FAQ data for schema
const faqData = [
  {
    question: "What is remedial massage therapy?",
    answer:
      "Remedial massage is a therapeutic treatment that targets specific muscle problems, injuries, and chronic pain. It uses various techniques to assess and treat soft tissue dysfunction, improve circulation, and restore normal function to muscles and joints.",
  },
  {
    question: "How long does a massage session take?",
    answer:
      "We offer 60, 75, and 90-minute massage sessions. The duration depends on your needs and the type of treatment required. New clients often benefit from longer sessions for a thorough assessment and treatment.",
  },
  {
    question: "Is pregnancy massage safe?",
    answer:
      "Yes, pregnancy massage is safe and beneficial when performed by a qualified therapist. We use specialized techniques and positioning to ensure comfort and safety for both mother and baby throughout all stages of pregnancy.",
  },
  {
    question: "What is dry needling and how does it work?",
    answer:
      "Dry needling is a technique that uses fine needles to target trigger points in muscles. It helps release muscle tension, reduce pain, and improve range of motion. It's particularly effective when combined with remedial massage therapy.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "We accept various health insurance plans and can provide receipts for reimbursement. Please check with your insurance provider about coverage for remedial massage therapy services.",
  },
  {
    question: "How often should I get a massage?",
    answer:
      "The frequency depends on your individual needs and goals. For chronic pain or injury recovery, weekly sessions may be beneficial initially. For general wellness and maintenance, monthly sessions are often sufficient.",
  },
];

export default function ServicesPage() {
  const { openModal } = useBookingModal();
  const [expandedTechnique, setExpandedTechnique] = useState<number | null>(
    null
  );
  const [selectedDurations, setSelectedDurations] = useState<{
    [key: number]: string;
  }>({
    1: "60 mins",
    2: "60 mins",
  });

  const [selectedClientTypes, setSelectedClientTypes] = useState<{
    [key: number]: string;
  }>({
    1: "new",
    2: "new",
  });

  // Toggle to show/hide specials section
  const showSpecials = false; // Set to true to show specials, false to hide

  const toggleTechnique = (index: number) => {
    setExpandedTechnique(expandedTechnique === index ? null : index);
  };

  const handleDurationChange = (serviceId: number, duration: string) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [serviceId]: duration,
    }));
  };

  const handleClientTypeChange = (serviceId: number, clientType: string) => {
    setSelectedClientTypes((prev) => ({
      ...prev,
      [serviceId]: clientType,
    }));
  };

  // URL mapping object for easy management
  const bookingUrls = {
    pregnancy: {
      "60": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1450037995120895234",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1454212903627400510",
      },
      "75": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1465251554322818628",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1465227153011385922",
      },
      "90": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1476758841742861697",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1454213289545311551",
      },
    },
    remedial: {
      "60": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1447792675414616001",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1454208307014149436",
      },
      "75": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1465251934351926853",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1465227896116225603",
      },
      "90": {
        new: "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1549866073770174299",
        existing:
          "https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?business_id=1674414840665352031&appointment_type_id=1454212351002682685",
      },
    },
  };

  // Map selected service, duration, and client type to specific Cliniko booking URLs
  const getClinikoUrl = (
    serviceTitle: string,
    duration: string,
    clientType: string
  ) => {
    const title = serviceTitle.toLowerCase();
    const dur = duration.toLowerCase().replace(" mins", "");
    const client = clientType.toLowerCase();

    if (title.includes("pregnancy")) {
      return bookingUrls.pregnancy[dur]?.[client];
    }

    if (title.includes("remedial")) {
      return bookingUrls.remedial[dur]?.[client];
    }

    // Fallback to default booking page in modal
    return undefined;
  };

  // Function to get appropriate icon for each feature
  const getFeatureIcon = (feature: string) => {
    const featureLower = feature.toLowerCase();

    // Remedial Massage features
    if (featureLower.includes("deep tissue")) return RiBodyScanLine;
    if (featureLower.includes("injury rehabilitation"))
      return RiShieldCheckLine;
    if (featureLower.includes("pain relief")) return RiHandHeartLine;
    if (featureLower.includes("posture correction")) return RiUserHeartLine;

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

    // Consultation features
    if (featureLower.includes("consultation")) return RiCheckLine;

    // Default fallback
    return GiMonsteraLeaf;
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
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://bunburywellness.com.au/" },
    { name: "Services", url: "https://bunburywellness.com.au/services" },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <style jsx>{`
        select option:hover {
          background-color: #4ade80 !important;
        }
        select option:checked {
          background-color: #092518 !important;
        }
      `}</style>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
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
          <motion.div variants={iconVariants} className="mb-6">
            <GiMonsteraLeaf className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 text-spa-accent mx-auto" />
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
            Professional Care
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Experience the difference of care, expertise, and a passion for
            healing in Bunbury&apos;s premier wellness destination
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
              Massage Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Professional therapeutic treatments tailored to your individual
              needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mx-auto"
          >
            {services.map((service) => (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Service Header */}
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {service.popular && (
                      <div className="absolute top-4 left-4 bg-spa-accent text-white px-3 py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-spa-secondary">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Techniques Section for Remedial Massage */}
                  {service.techniques && (
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-spa-secondary mb-3">
                        Techniques we may use
                      </h4>
                      <div className="space-y-3">
                        {service.techniques.map((technique, index) => {
                          const IconComponent = technique.icon;
                          const isExpanded = expandedTechnique === index;
                          return (
                            <motion.div
                              key={index}
                              className="bg-gray-50 rounded-lg overflow-hidden"
                              initial={false}
                            >
                              <button
                                onClick={() => toggleTechnique(index)}
                                className="w-full flex items-start gap-3 p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                              >
                                <IconComponent className="h-5 w-5 text-spa-primary mt-0.5 flex-shrink-0" />
                                <div className="flex-1 text-left">
                                  <div className="font-medium text-spa-secondary text-sm">
                                    {technique.name}
                                  </div>
                                  <div className="text-gray-600 text-sm">
                                    {technique.description}
                                  </div>
                                  {technique.note && (
                                    <div className="text-xs font-semibold text-spa-accent mt-1 bg-spa-accent/10 px-2 py-1 rounded inline-block">
                                      {technique.note}
                                    </div>
                                  )}
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {isExpanded ? (
                                    <RiArrowUpSLine className="h-4 w-4 text-spa-primary" />
                                  ) : (
                                    <RiArrowDownSLine className="h-4 w-4 text-spa-primary" />
                                  )}
                                </motion.div>
                              </button>
                              <motion.div
                                initial={false}
                                animate={{
                                  height: isExpanded ? "auto" : 0,
                                  opacity: isExpanded ? 1 : 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="px-3 pb-3">
                                  <div className="text-gray-700 text-sm leading-relaxed border-t border-gray-200 pt-3">
                                    {technique.details}
                                  </div>
                                </div>
                              </motion.div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Service Details */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <RiTimeLine className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="font-semibold text-spa-primary">
                      {service.price}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, index) => {
                        const IconComponent = getFeatureIcon(feature);
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-sm"
                          >
                            <IconComponent className="h-4 w-4 text-spa-primary flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Button */}
                  {service.bookable && (
                    <div className="space-y-3 mt-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-spa-secondary mb-1">
                            Duration
                          </label>
                          <select
                            value={selectedDurations[service.id]}
                            onChange={(e) =>
                              handleDurationChange(service.id, e.target.value)
                            }
                            className="w-full px-3 py-2 bg-[#092518] text-white border border-[#092518] focus:outline-none cursor-pointer hover:bg-spa-accent transition-colors duration-300 appearance-none text-sm"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1em 1em",
                              paddingRight: "2rem",
                            }}
                          >
                            <option value="60 mins">60 mins</option>
                            <option value="75 mins">75 mins</option>
                            <option value="90 mins">90 mins</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-spa-secondary mb-1">
                            Client Type
                          </label>
                          <select
                            value={selectedClientTypes[service.id]}
                            onChange={(e) =>
                              handleClientTypeChange(service.id, e.target.value)
                            }
                            className="w-full px-3 py-2 bg-[#092518] text-white border border-[#092518] focus:outline-none cursor-pointer hover:bg-spa-accent transition-colors duration-300 appearance-none text-sm"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1em 1em",
                              paddingRight: "2rem",
                            }}
                          >
                            <option value="new">New Client</option>
                            <option value="existing">Existing Client</option>
                          </select>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          openModal(
                            getClinikoUrl(
                              service.title,
                              selectedDurations[service.id],
                              selectedClientTypes[service.id]
                            )
                          )
                        }
                        className="btn-spa-accent inline-flex items-center gap-2 group w-full justify-center"
                      >
                        <span>Book</span>
                        <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specials Section */}
      {showSpecials && (
        <section className="py-20 bg-spa-neutral">
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
                Special Packages
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Exclusive wellness experiences designed for ultimate relaxation
                and rejuvenation
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid lg:grid-cols-1 gap-8"
            >
              {specials.map((special) => (
                <motion.div
                  key={special.id}
                  variants={cardVariants}
                  className="bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/2">
                      <div className="aspect-video lg:aspect-square relative overflow-hidden">
                        <Image
                          src={special.image}
                          alt={special.title}
                          fill
                          className="object-cover"
                        />
                        {special.popular && (
                          <div className="absolute top-4 left-4 bg-spa-accent text-white px-3 py-1 text-sm font-medium">
                            Most Popular
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8">
                      <h3 className="text-2xl font-semibold text-spa-secondary mb-2">
                        {special.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {special.description}
                      </p>

                      <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <RiTimeLine className="h-4 w-4" />
                          <span>{special.duration}</span>
                        </div>
                        <div className="font-semibold text-spa-primary">
                          {special.price}
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="grid grid-cols-1 gap-3">
                          {special.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 text-sm"
                            >
                              <RiCheckLine className="h-4 w-4 text-spa-primary flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {special.button !== false && (
                        <div className="text-center">
                          <button
                            onClick={() => openModal()}
                            className="btn-spa-accent inline-flex items-center gap-2 group w-full justify-center"
                          >
                            <span>Book Your Session</span>
                            <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <div className="mt-20">
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
