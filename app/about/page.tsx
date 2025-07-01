"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const philosophy = [
  {
    icon: "🌱",
    title: "Wellness",
    text: "Holistic care for body and mind, tailored to your needs.",
  },
  {
    icon: "⚖️",
    title: "Balance",
    text: "Restoring harmony and movement for a better you.",
  },
  {
    icon: "🤝",
    title: "Bond",
    text: "Building trust and connection through every session.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
];

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
          alt="Our Story Banner"
          fill
          className="absolute inset-0 object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/95 z-10" />
        <h1 className="relative z-20 text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          Our Story
        </h1>
      </section>
      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700"
        >
          Founded in Bunbury, WA, Bunbury Wellness Remedial Massage began as a
          home studio with a vision: to bring premium, restorative care to our
          community. Our founder, Jane Doe, transformed her passion for healing
          into a thriving clinic, now serving clients in a beautiful, tranquil
          space.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          We believe in the power of touch, the importance of connection, and
          the value of a holistic approach. Our journey from home to clinic is a
          testament to our commitment to your wellness.
        </motion.p>
      </section>
      {/* Philosophy Grid */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Our Philosophy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className="bg-emerald-600 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-4"
            >
              <span className="text-4xl mb-2">{item.icon}</span>
              <h3 className="font-semibold text-xl mb-1 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-emerald-100">{item.text}</p>
            </motion.div>
          ))}
        </div>
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
