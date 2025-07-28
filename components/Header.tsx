"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { RiLeafLine } from "@remixicon/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Specials", href: "#specials" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Always use solid secondary background if menu is open, else use scroll logic
  const headerBg =
    isMenuOpen || scrolled ? "bg-spa-secondary shadow-lg" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center py-6 transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <RiLeafLine className="h-8 w-8" style={{ color: "#FFC857" }} />
            <div className="text-white">
              <div className="font-semibold text-lg leading-tight">
                Bunbury Wellness
              </div>
              <div className="text-sm opacity-90">Remedial Massage</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-medium transition-colors duration-200 text-white hover:text-spa-accent cursor-pointer transform transition-transform hover:scale-110 hover:opacity-80"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-spa-accent ml-8"
            >
              <span>Book Now</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-spa-accent"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-fadein">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-white hover:text-spa-accent hover:bg-spa-primary/20 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="btn-spa-accent w-full justify-center"
                >
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
