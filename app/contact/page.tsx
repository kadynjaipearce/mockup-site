"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import {
  RiMapPinLine,
  RiMailLine,
  RiTimeLine,
  RiMessage3Line,
  RiUserLine,
  RiMailSendLine,
} from "@remixicon/react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitStatus("error");
        setErrorMessage(
          json?.error || "Unable to send your message. Please try again."
        );
        return;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            backgroundImage: `url('/contact.png')`,
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
            <RiMessage3Line className="h-20 w-20 text-spa-accent" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            Contact Us
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent"
          >
            Get In Touch
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Ready to start your wellness journey? We&apos;re here to help you
            every step of the way.
          </motion.p>
        </motion.div>
      </section>

      {/* Message Form Section */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Send Us a Message
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Have a question or want to discuss your treatment? We&apos;d love
              to hear from you.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-8 shadow-sm border-2 border-gray-200"
          >
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-50 border-2 border-red-200 text-red-800"
              >
                <p className="font-medium">
                  We couldn&apos;t send your message.
                </p>
                {errorMessage ? (
                  <p className="text-sm">{errorMessage}</p>
                ) : null}
              </motion.div>
            )}

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 border-2 border-green-200 text-green-800"
              >
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            )}

            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                variants={formVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-spa-secondary mb-2"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <RiUserLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-spa-primary focus:outline-none focus:ring-2 focus:ring-spa-primary/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-spa-secondary mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <RiMailLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 focus:border-spa-primary focus:outline-none focus:ring-2 focus:ring-spa-primary/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={formVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-spa-secondary mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-spa-primary focus:outline-none focus:ring-2 focus:ring-spa-primary/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-spa-secondary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-spa-primary focus:outline-none focus:ring-2 focus:ring-spa-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your needs or ask any questions..."
                />
              </motion.div>

              <motion.div variants={formVariants} className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-spa-accent inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <RiMailSendLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
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
              Find Us in Bunbury
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Ready to experience the healing touch? Get in touch to schedule
              your appointment
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Google Maps Only, fills left space or full width on mobile */}
            <motion.div
              variants={cardVariants}
              className="bg-gray-50 p-0 flex items-center justify-center min-h-[500px] h-full w-full"
            >
              <iframe
                title="Bunbury WA Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5513.252290443255!2d115.63670669999999!3d-33.3188616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d956eebac8f%3A0x9640f4a39b9aa884!2sBunbury%20Wellness%20Remedial%20Massage!5e1!3m2!1sen!2sau!4v1755852555631!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "0.375rem",
                  minHeight: "500px",
                  minWidth: "100%",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            {/* Contact Information */}
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-spa-secondary mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We&apos;re here to help you on your wellness journey. Contact
                  us today to discuss your needs and book your personalized
                  treatment.
                </p>
              </motion.div>
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <RiMapPinLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-spa-secondary">
                      Visit Us
                    </div>
                    <div className="text-gray-600">
                      Unit 4 3 Victoria Street
                      <br />
                      Bunbury, WA 6230
                      <br />
                      Australia
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <RiMailLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-spa-secondary">
                      Email Us
                    </div>
                    <div className="text-gray-600">
                      <a
                        href="mailto:info@bunburywellnessremedialmassage.com.au"
                        className="hover:text-spa-primary transition-colors"
                      >
                        info@bunburywellnessremedialmassage.com.au
                      </a>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <RiTimeLine className="h-6 w-6 text-spa-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-spa-secondary">
                      Opening Hours
                    </div>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 10:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
