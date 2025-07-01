"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiStarFill } from "@remixicon/react";

const testimonials = [
  {
    name: "Sophie L.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    quote:
      "Absolutely the best massage experience I've ever had. The space is beautiful and calming!",
  },
  {
    name: "James R.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "Professional, friendly, and truly effective. My back pain is gone! Highly recommend.",
  },
  {
    name: "Emily W.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "The pregnancy massage was so gentle and relaxing. I felt so cared for.",
  },
  {
    name: "Michael T.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    quote: "A premium experience from start to finish. The team is amazing!",
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    quote: "The atmosphere is so calming and the therapists are very skilled.",
  },
];

export default function TestimonialMarquee() {
  return (
    <div className="w-full overflow-x-hidden py-12 bg-gradient-to-r from-emerald-50 to-green-50">
      <motion.div
        className="flex gap-8"
        initial={{ x: 0 }}
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-xs bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-lg p-6 flex flex-col items-center mx-2"
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-emerald-300"
            />
            <div className="flex items-center gap-1 mb-3">
              {[...Array(t.rating)].map((_, starIndex) => (
                <RiStarFill
                  key={starIndex}
                  size={16}
                  className="text-yellow-400"
                />
              ))}
            </div>
            <p className="text-base italic text-gray-700 mb-2 text-center">
              "{t.quote}"
            </p>
            <span className="font-semibold text-emerald-700">{t.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
