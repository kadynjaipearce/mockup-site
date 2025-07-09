import { Facebook, Instagram, Twitter } from "lucide-react";
import { RiLeafLine } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-spa-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <RiLeafLine className="h-10 w-10 text-spa-accent" />
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
                href="#"
                className="bg-white/10 hover:bg-spa-accent hover:text-spa-secondary p-3 rounded-sm transition-all duration-200 cursor-pointer"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-spa-accent hover:text-spa-secondary p-3 rounded-sm transition-all duration-200 cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-spa-accent hover:text-spa-secondary p-3 rounded-sm transition-all duration-200 cursor-pointer"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer">
                  Our Services
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer">
                  Current Specials
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer">
                  Testimonials
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-spa-accent transition-colors duration-200 cursor-pointer">
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium text-white mb-1">Address</div>
                <div className="text-sm">
                  123 Wellness Street
                  <br />
                  Bunbury, WA 6230
                </div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Phone</div>
                <a
                  href="tel:+61897210000"
                  className="text-sm hover:text-spa-accent transition-colors cursor-pointer"
                >
                  (08) 9721 0000
                </a>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <a
                  href="mailto:hello@bunburywellness.com.au"
                  className="text-sm hover:text-spa-accent transition-colors cursor-pointer"
                >
                  hello@bunburywellness.com.au
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Bunbury Wellness Remedial Massage. All rights reserved.
            <span className="block md:inline text-xs text-gray-500 mt-1 md:mt-0 md:ml-4">
              Developed by Aperia Solutions
            </span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-spa-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-spa-accent transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
