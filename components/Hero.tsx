"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Spa background"
        fill
        className="absolute inset-0 object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 flex flex-col items-center text-center gap-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 text-[#091e19] font-handwriting">
          Bunbury Wellness Remedial Massage
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-4 text-[#3f5855] font-handwriting">
          Breathe . Boost . Bond
        </p>
        <motion.a
          href="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawLQHwhleHRuA2FlbQIxMABicmlkETFGWm5COXpTZnBWTDRRWXd1AR6D56Gac76XjpZheWQiNuBZpE_oNC8mLe7YkRnPgbLjaQBGnio1rQsrAOouag_aem_wheIqeqYpLSoqQOOP_uNvg#service"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 bg-[#3f5855] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#091e19] hover:bg-[#091e19] rounded-lg"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.a>
      </motion.div>
    </section>
  );
}
