import Link from "next/link";
import { RiLeafLine } from "@remixicon/react";
import { RiHomeLine, RiPhoneLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-spa-neutral flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo and Branding */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3">
            <RiLeafLine className="h-12 w-12 text-spa-primary" />
            <div className="text-spa-primary">
              <div className="font-semibold text-2xl leading-tight">
                Bunbury Wellness
              </div>
              <div className="text-sm opacity-90">Remedial Massage</div>
            </div>
          </div>
        </div>

        {/* 404 Content */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-light text-spa-secondary mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Let's get
            you back to your wellness journey.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="btn-spa-primary inline-flex items-center gap-2 group"
          >
            <RiHomeLine className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/#contact"
            className="btn-spa-accent inline-flex items-center gap-2 group"
          >
            <RiPhoneLine className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Additional Navigation */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 mb-4">Or explore our services:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/#services"
              className="text-spa-primary hover:text-spa-accent transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              href="/#about"
              className="text-spa-primary hover:text-spa-accent transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/#specials"
              className="text-spa-primary hover:text-spa-accent transition-colors duration-200"
            >
              Special Offers
            </Link>
            <Link
              href="/#testimonials"
              className="text-spa-primary hover:text-spa-accent transition-colors duration-200"
            >
              Testimonials
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 opacity-20">
          <RiLeafLine className="h-16 w-16 text-spa-primary mx-auto" />
        </div>
      </div>
    </div>
  );
}
