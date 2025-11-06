"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  RiUpload2Line,
  RiUserLine,
  RiMailLine,
  RiMailSendLine,
  RiFilePaper2Line,
} from "@remixicon/react";

const JoinTeamPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage(null);

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("message", formData.message);
      if (resumeFile) body.append("resume", resumeFile);

      const res = await fetch("/api/careers-email", {
        method: "POST",
        body,
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitStatus("error");
        setErrorMessage(
          json?.error || "Unable to submit your application. Please try again."
        );
        return;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setResumeFile(null);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <RiFilePaper2Line className="h-20 w-20 text-spa-accent mx-auto" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            We&apos;re always looking for talented therapists. Send us your
            resume and a brief introduction.
          </motion.p>
        </motion.div>
      </section>

      {/* Application Form */}
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
              Submit Your Application
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Complete the form and upload your CV/Resume. Our team will review
              your application and reach out if your profile aligns with our
              current opportunities.
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
                  We couldn&apos;t submit your application.
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
                <p className="font-medium">Thank you for applying!</p>
                <p className="text-sm">
                  We&apos;ll review your submission shortly.
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
                  htmlFor="message"
                  className="block text-sm font-medium text-spa-secondary mb-2"
                >
                  Introduction *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-spa-primary focus:outline-none focus:ring-2 focus:ring-spa-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about yourself, experience, and availability..."
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <label className="block text-sm font-medium text-spa-secondary mb-2">
                  CV/Resume (PDF or DOC, max 5MB)
                </label>
                <div className="flex items-center gap-4">
                  <label className="btn-spa-accent inline-flex items-center gap-2 cursor-pointer">
                    <RiUpload2Line className="h-5 w-5 z-10" />
                    <span>Upload File</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.rtf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-gray-600 text-sm truncate max-w-[60%]">
                    {resumeFile ? resumeFile.name : "No file selected"}
                  </span>
                </div>
              </motion.div>

              <motion.div variants={formVariants} className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-yellow-400 text-white hover:bg-yellow-500"
                      : "btn-spa-accent"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <RiMailSendLine className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinTeamPage;
