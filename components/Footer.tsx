import { RiFacebookFill, RiMailLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-spa-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/Icon.png"
                alt="Bunbury Wellness Logo"
                width={60}
                height={60}
                className="h-15 w-15"
              />
              <div>
                <div className="font-semibold text-xl">Bunbury Wellness</div>
                <div className="text-sm opacity-80">Remedial Massage</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your premier destination for therapeutic and wellness massage
              treatments in Bunbury, WA. Experience the healing power of
              professional, caring touch.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BunburyWellnessRemedialMassage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-spa-accent hover:text-spa-secondary p-3 rounded-sm transition-all duration-200 cursor-pointer opacity-60 hover:opacity-100 transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <RiFacebookFill className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@bunburywellnessremedialmassage.com.au"
                className="bg-white/10 hover:bg-spa-accent hover:text-spa-secondary p-3 rounded-sm transition-all duration-200 cursor-pointer opacity-60 hover:opacity-100 transform hover:scale-110"
                aria-label="Email us"
              >
                <RiMailLine className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium text-white mb-1">Address</div>
                <div className="text-sm break-words">
                  Unit 4 3 Victoria Street
                  <br />
                  Bunbury, WA 6230
                </div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <a
                  href="mailto:info@bunburywellnessremedialmassage.com.au"
                  className="text-sm hover:text-spa-accent transition-colors cursor-pointer break-all"
                >
                  info@bunburywellnessremedialmassage.com.au
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 break-words">
            © 2025 Bunbury Wellness Remedial Massage. All rights reserved.
            <Link
              href="https://www.aperiasolutions.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline text-xs text-gray-500 mt-1 md:mt-0 md:ml-4 hover:text-spa-accent hover:underline transition-colors cursor-pointer"
            >
              Developed by Aperia Solutions
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-spa-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-spa-accent transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
