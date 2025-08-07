import Link from "next/link";
import Image from "next/image";
import { RiHomeLine, RiPhoneLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <div className="min-h-screen h-screen w-full bg-spa-secondary flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo and Branding */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center" style={{ minWidth: 0 }}>
            <Image
              src="/Icon.png"
              alt="Bunbury Wellness Logo"
              width={48}
              height={48}
              className="h-12 w-12 flex-shrink-0"
            />
            <div className="ml-3 text-left">
              <div className="font-semibold text-xl leading-tight text-white">
                Bunbury Wellness
              </div>
              <div className="text-sm opacity-90 text-white">
                Remedial Massage
              </div>
            </div>
          </div>
        </div>

        {/* 404 Content */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-light italic font-serif text-spa-accent mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back to your wellness journey.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="btn-spa-service inline-flex items-center gap-2 group"
          >
            <span>Return Home</span>
            <RiHomeLine className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 z-10 relative" />
          </Link>
          <Link
            href="/contact"
            className="btn-spa-accent inline-flex items-center gap-2 group"
          >
            <span>Contact Us</span>
            <RiPhoneLine className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 z-10 relative" />
          </Link>
        </div>

        {/* Additional Navigation */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/70 mb-4">Or explore our services:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/#services"
              className="text-white/80 hover:text-spa-accent transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              href="/#about"
              className="text-white/80 hover:text-spa-accent transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/#specials"
              className="text-white/80 hover:text-spa-accent transition-colors duration-200"
            >
              Special Offers
            </Link>
            <Link
              href="/#testimonials"
              className="text-white/80 hover:text-spa-accent transition-colors duration-200"
            >
              Testimonials
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 opacity-30">
          <Image
            src="/Icon.png"
            alt="Decorative Wellness Icon"
            width={64}
            height={64}
            className="h-16 w-16 mx-auto filter brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
}
