"use client";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import TestimonialMarquee from "../components/TestimonialMarquee";
import Link from "next/link";
import Image from "next/image";

const specials = [
  {
    title: "Winter Wellness Special",
    desc: "15% off all Remedial Massages this month. Stay warm and healthy!",
    tag: "Monthly Special",
    image: "/front.jpg",
  },
  {
    title: "Midweek Relaxation",
    desc: "Book a Relaxation Massage on Wednesdays and get a free aromatherapy upgrade.",
    tag: "Weekly Special",
    image: "/back.jpg",
  },
  {
    title: "Mum-to-Be Mondays",
    desc: "Pregnancy Massage 10% off every Monday for expectant mums.",
    tag: "Weekly Special",
    image: "/preg.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-28 md:gap-36 bg-white min-h-screen">
      <Hero />
      {/* About Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Image
            src="/fuko.jpg"
            alt="About preview"
            width={800}
            height={640}
            className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-xl border border-gray-200"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-8 bg-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-800">
            Our Story
          </h2>
          <p className="text-base md:text-lg mb-2 text-gray-600">
            From a humble home studio to a premium wellness destination in
            Bunbury, WA. Experience the difference of care, expertise, and a
            passion for healing.
          </p>
          <Link
            href="/about"
            className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700 font-semibold w-fit"
          >
            Learn more →
          </Link>
        </motion.div>
      </motion.section>
      {/* Services Preview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {/* Placeholder ServiceCards */}
          {[
            {
              img: "/front.jpg",
              title: "Remedial Massage",
              desc: "Targeted therapy for pain relief and mobility.",
            },
            {
              img: "/back.jpg",
              title: "Relaxation Massage",
              desc: "Unwind and de-stress in a tranquil setting.",
            },
            {
              img: "/preg.jpg",
              title: "Pregnancy Massage",
              desc: "Gentle, safe, and nurturing for mums-to-be.",
            },
          ].map((svc, i) => (
            <motion.div
              key={svc.title}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className="bg-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-center min-w-0"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-800 text-center">
                {svc.title}
              </h3>
              <p className="text-sm md:text-base mb-2 text-gray-600 text-center">
                {svc.desc}
              </p>
              <Link
                href="/services"
                className="text-emerald-600 underline underline-offset-2 hover:text-emerald-700 font-semibold"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Testimonials Marquee - now full width, with background, and between Services and Specials */}
      <section className="w-full bg-gradient-to-r from-emerald-50 to-green-50 py-16 md:py-24 flex items-center justify-center border-y border-gray-200">
        <div className="w-full max-w-[1920px]">
          <TestimonialMarquee />
        </div>
      </section>
      {/* Specials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 py-14 rounded-2xl bg-gray-50 shadow-2xl border border-gray-200 flex flex-col gap-12 items-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold mb-4 text-center text-gray-800"
        >
          Weekly & Monthly Specials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full">
          {specials.map((sp, i) => (
            <motion.div
              key={sp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-w-0"
            >
              <div className="h-48 relative">
                <Image
                  src={sp.image}
                  alt={sp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center">
                <span className="text-xs uppercase tracking-wider text-emerald-700 mb-2 bg-emerald-100 px-3 py-1 rounded-full">
                  {sp.tag}
                </span>
                <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">
                  {sp.title}
                </h3>
                <p className="text-sm md:text-base mb-2 text-gray-600">
                  {sp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-24 flex flex-col items-center justify-center px-4 md:px-0"
      >
        <div className="absolute inset-0 bg-gray-50 blur-xl rounded-2xl z-0 border border-gray-200" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-2 text-center text-gray-800">
            Start your healing journey today.
          </h2>
          <motion.a
            href="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawLQHwhleHRuA2FlbQIxMABicmlkETFGWm5COXpTZnBWTDRRWXd1AR6D56Gac76XjpZheWQiNuBZpE_oNC8mLe7YkRnPgbLjaQBGnio1rQsrAOouag_aem_wheIqeqYpLSoqQOOP_uNvg#service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}
