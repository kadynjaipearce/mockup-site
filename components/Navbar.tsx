"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine, RiLeafLine } from "@remixicon/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm text-gray-800 shadow-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <RiLeafLine size={28} className="text-[#091e19]" />
          <span className="hidden sm:inline text-[#091e19] font-handwriting text-2xl">
            Bunbury Wellness
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={"/"}
              className="relative px-2 py-1 transition-colors hover:text-[#091e19]"
            >
              <span>{link.label}</span>
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#091e19] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.a
            href="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawLQHwhleHRuA2FlbQIxMABicmlkETFGWm5COXpTZnBWTDRRWXd1AR6D56Gac76XjpZheWQiNuBZpE_oNC8mLe7YkRnPgbLjaQBGnio1rQsrAOouag_aem_wheIqeqYpLSoqQOOP_uNvg#service"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#091e19] to-[#3f5855] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#091e19]"
          aria-label="Open menu"
        >
          {mobileOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 flex flex-col p-8 gap-6 md:hidden border-l border-gray-100"
          >
            <div className="flex items-center gap-2 mb-8">
              <RiLeafLine size={28} className="text-[#091e19]" />
              <span className="font-bold text-2xl text-[#091e19] font-handwriting">
                Bunbury Wellness
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg py-2 px-2 rounded transition-colors ${
                  pathname === link.href
                    ? "bg-[#091e19] text-white"
                    : "hover:bg-gray-50 text-gray-800"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawLQHwhleHRuA2FlbQIxMABicmlkETFGWm5COXpTZnBWTDRRWXd1AR6D56Gac76XjpZheWQiNuBZpE_oNC8mLe7YkRnPgbLjaQBGnio1rQsrAOouag_aem_wheIqeqYpLSoqQOOP_uNvg#service"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#091e19] to-[#3f5855] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
