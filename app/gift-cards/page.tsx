"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RiGiftLine, RiTimeLine, RiShieldCheckLine } from "@remixicon/react";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

export default function GiftCardsPage() {
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

  if (!process.env.NEXT_PUBLIC_GIFTUP_URL) {
    throw new Error("GIFTUP_URL is not set");
  }

  const giftUpUrl = process.env.NEXT_PUBLIC_GIFTUP_URL;

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
            backgroundImage: `url('/giftcard.png')`,
            filter: "blur(2px)",
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
            <RiGiftLine className="h-20 w-20 text-spa-accent" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            Gift Cards
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent"
          >
            Give the Gift of Wellness
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Share the experience of premium massage therapy with your loved ones
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}

      {/* Gift Card Selection */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-light text-spa-secondary mb-4"
            >
              Gift Cards
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Give the gift of wellness and relaxation. Perfect for birthdays,
              anniversaries, or just because.
            </motion.p>
          </motion.div>

          {/* Gift Card Benefits */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={cardVariants} className="text-center p-6">
              <div className="w-16 h-16 bg-spa-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiGiftLine className="h-8 w-8 text-spa-accent" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                Perfect Gift
              </h3>
              <p className="text-gray-600">
                Ideal for any occasion - birthdays, anniversaries, or just to
                show someone you care
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="text-center p-6">
              <div className="w-16 h-16 bg-spa-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiTimeLine className="h-8 w-8 text-spa-accent" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                Valid for 3 Years
              </h3>
              <p className="text-gray-600">
                Gift cards are valid for 3 years from date of purchase, giving
                your loved ones flexibility
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="text-center p-6">
              <div className="w-16 h-16 bg-spa-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiShieldCheckLine className="h-8 w-8 text-spa-accent" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                Secure & Easy
              </h3>
              <p className="text-gray-600">
                Safe, secure payment processing with instant digital delivery
              </p>
            </motion.div>
          </motion.div>

          {/* GiftUp Integration */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-spa-primary to-spa-accent p-6 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">
                Purchase Your Gift Card
              </h3>
              <p className="text-white/90">
                Choose your amount and complete your purchase securely
              </p>
            </div>

            <div className="relative">
              {/* Loading State */}
              <div
                className="absolute inset-0 bg-white flex items-center justify-center z-10"
                id="giftup-loading"
              >
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-spa-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading gift card options...</p>
                </div>
              </div>

              {/* GiftUp iframe */}
              <iframe
                src={giftUpUrl}
                className="w-full h-[800px] border-0"
                title="Gift Card Purchase"
                onLoad={() => {
                  const loadingElement =
                    document.getElementById("giftup-loading");
                  if (loadingElement) {
                    loadingElement.style.display = "none";
                  }
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=" text-center"
          >
            <div className="bg-white p-8 ">
              <h4 className="text-xl font-semibold text-spa-secondary mb-4">
                How It Works
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <div className="w-8 h-8 bg-spa-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 font-semibold">
                    1
                  </div>
                  <p>Choose your gift card amount and complete purchase</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-spa-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 font-semibold">
                    2
                  </div>
                  <p>Receive your digital gift card instantly via email</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-spa-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 font-semibold">
                    3
                  </div>
                  <p>Recipient can book their massage session anytime</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-2xl md:text-3xl font-light text-spa-secondary mb-4"
            >
              Gift Card Terms
            </motion.h2>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={cardVariants} className="space-y-4">
              <h3 className="font-semibold text-spa-secondary mb-3">
                How It Works
              </h3>
              <motion.ul
                variants={sectionVariants}
                className="space-y-2 text-gray-600"
              >
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>Delivered by email with a unique code.</span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>
                    Book your treatment, then bring the code to your
                    appointment.
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>
                    We reduce your appointment price by the gift card amount.
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-4">
              <h3 className="font-semibold text-spa-secondary mb-3">
                Important Notes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Non-refundable and non-transferable</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Cannot be combined with other promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Subject to our booking and cancellation policies</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}
