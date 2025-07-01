import Link from "next/link";
import { RiLeafLine } from "@remixicon/react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-0 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-gray-800 font-bold text-lg">
          <RiLeafLine size={24} className="text-emerald-600" />
          Bunbury Wellness
        </div>
        {/* Nav Links */}
        <nav className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-emerald-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-emerald-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/tos"
            className="underline underline-offset-2 hover:text-emerald-600 transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
        {/* Copyright */}
        <div className="text-gray-500 text-xs md:text-sm text-center md:text-right">
          &copy; {year} Bunbury Wellness Remedial Massage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
