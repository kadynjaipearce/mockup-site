"use client";
import { useState } from "react";
import { RiCalendar2Line } from "@remixicon/react";
import Image from "next/image";
import { useBookingModal } from "@/components/BookingProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookingModal();
  const pathname = usePathname();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navigation = [
    { name: "About", href: "/about", isLink: true },
    { name: "Services", href: "/services", isLink: true },
    { name: "Gift Cards", href: "/gift-cards", isLink: true },
    { name: "Contact", href: "/contact", isLink: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Always use solid secondary background
  const headerBg = "bg-spa-secondary shadow-lg";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center py-6 transition-all duration-300`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* <RiLeafLine className="h-8 w-8" style={{ color: "#FFC857" }} /> */}
            <Image
              src="/Icon.png"
              alt="Bunbury Wellness Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <div className="text-white">
              <div className="font-semibold text-lg leading-tight">
                Bunbury Wellness
              </div>
              <div className="text-sm opacity-90">Remedial Massage</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navigation.map((item) =>
              item.isLink ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 cursor-pointer transform transition-transform hover:scale-110 hover:opacity-80 ${
                    pathname === item.href
                      ? "text-spa-accent italic"
                      : "text-white hover:text-spa-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-200 cursor-pointer transform transition-transform hover:scale-110 hover:opacity-80 ${
                    pathname === item.href
                      ? "text-spa-accent italic"
                      : "text-white hover:text-spa-accent"
                  }`}
                >
                  {item.name}
                </button>
              )
            )}
            <button
              onClick={openModal}
              className="btn-spa-accent ml-8 inline-flex items-center gap-2 group"
            >
              <span>Book Now</span>
              <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:text-spa-accent transition-colors duration-300 group cursor-pointer"
              aria-label="Toggle menu"
            >
              {/* Elegant Hamburger to X Animation */}
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                {/* Top Line */}
                <div
                  className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />

                {/* Middle Line */}
                <div
                  className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />

                {/* Bottom Line */}
                <div
                  className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>

              {/* Subtle background glow */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isMenuOpen
                    ? "bg-spa-accent/10 scale-100 "
                    : "bg-transparent scale-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-fadein">
            <div className="py-4 space-y-2">
              {navigation.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block w-full text-left px-4 py-2 transition-colors duration-200 cursor-pointer ${
                      pathname === item.href
                        ? "text-spa-accent italic bg-spa-primary/20"
                        : "text-white hover:text-spa-accent hover:bg-spa-primary/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-2 transition-colors duration-200 cursor-pointer ${
                      pathname === item.href
                        ? "text-spa-accent italic bg-spa-primary/20"
                        : "text-white hover:text-spa-accent hover:bg-spa-primary/20"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              )}
              <div className="px-4 pt-4">
                <button
                  onClick={openModal}
                  className="btn-spa-accent w-full justify-center inline-flex items-center gap-2 group"
                >
                  <span>Book Now</span>
                  <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
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
