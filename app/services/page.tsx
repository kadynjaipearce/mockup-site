"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: "💆‍♂️",
    title: "Remedial Massage",
    description: "Targeted therapy for pain relief and mobility.",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
    details: {
      duration: "60/90 min",
      benefits: ["Pain relief", "Improved mobility", "Injury recovery"],
      full: "Remedial massage is a targeted treatment for musculoskeletal pain and dysfunction, tailored to your needs.",
    },
  },
  {
    icon: "🌿",
    title: "Relaxation Massage",
    description: "Unwind and de-stress in a tranquil setting.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    details: {
      duration: "60 min",
      benefits: ["Stress reduction", "Deep relaxation", "Improved sleep"],
      full: "Relaxation massage soothes the body and mind, helping you let go of tension and restore balance.",
    },
  },
  {
    icon: "🤲",
    title: "Pregnancy Massage",
    description: "Gentle, safe, and nurturing for mums-to-be.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    details: {
      duration: "60 min",
      benefits: ["Reduced swelling", "Comfort", "Relaxation"],
      full: "Pregnancy massage is designed to support and nurture expectant mothers, providing comfort and relaxation.",
    },
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="flex flex-col gap-16 pb-16">
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.04 }}
              className="bg-emerald-600 rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm mb-2 text-center text-emerald-100">
                {service.description}
              </p>
              <span className="text-xs text-emerald-200">
                Click for details
              </span>
            </motion.div>
          ))}
        </div>
        {/* Service Details */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              key={services[openIndex].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="mt-8 max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Image
                  src={services[openIndex].image}
                  alt={services[openIndex].title}
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-2xl shadow-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {services[openIndex].title}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    {services[openIndex].details.full}
                  </p>
                  <div className="mb-2 text-gray-700">
                    <span className="font-semibold">Duration:</span>{" "}
                    {services[openIndex].details.duration}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="list-disc list-inside ml-2">
                      {services[openIndex].details.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="mt-4 px-4 py-2 rounded bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200"
                    onClick={() => setOpenIndex(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className="overflow-hidden rounded-2xl shadow-xl border border-gray-200"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={300}
                height={192}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
