"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
} from "@remixicon/react";

function MapEmbed() {
  return (
    <div className="w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center border border-gray-200">
      <iframe
        title="Bunbury Wellness Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.527282019839!2d115.6371!3d-33.3271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e3b1e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sBunbury%20WA!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="font-semibold text-gray-700">
        Name
        <input
          type="text"
          name="name"
          required
          className="mt-1 px-4 py-3 rounded bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 w-full"
        />
      </label>
      <label className="font-semibold text-gray-700">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-1 px-4 py-3 rounded bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 w-full"
        />
      </label>
      <label className="font-semibold text-gray-700">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 px-4 py-3 rounded bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 w-full"
        />
      </label>
      <button
        type="submit"
        className="mt-2 px-6 py-3 rounded bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 w-full"
      >
        Send Message
      </button>
      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-emerald-600 text-center mt-2"
        >
          Thank you! We'll be in touch soon.
        </motion.p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-[80vh] flex flex-col gap-16 py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white px-4 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800"
      >
        Contact Us
      </motion.h1>
      <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Info + Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-8 border border-gray-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <RiMapPinLine size={24} className="text-emerald-600" />
              <span className="text-gray-700">
                123 Wellness Ave, Bunbury WA 6230
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RiPhoneLine size={24} className="text-emerald-600" />
              <a
                href="tel:+61123456789"
                className="hover:underline text-gray-700 hover:text-emerald-600 transition-colors"
              >
                (61) 1234 5678
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine size={24} className="text-emerald-600" />
              <a
                href="mailto:info@bunburywellness.com"
                className="hover:underline text-gray-700 hover:text-emerald-600 transition-colors"
              >
                info@bunburywellness.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiTimeLine size={24} className="text-emerald-600" />
              <span className="text-gray-700">
                Mon–Fri: 9am–6pm
                <br />
                Sat: 9am–2pm
              </span>
            </div>
          </div>
          <MapEmbed />
        </motion.div>
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-800">
            Send a Message
          </h2>
          <ContactForm />
        </motion.div>
      </section>
    </main>
  );
}
