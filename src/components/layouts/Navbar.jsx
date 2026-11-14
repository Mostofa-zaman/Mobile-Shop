"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiChevronDown,
  HiMenu,
  HiMinus,
  HiDeviceMobile,
} from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavDrawer from "./NavDrawer";
import Container from "../common/Container";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ডেস্কটপ ড্রয়ার স্ক্রল লজিক
  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleWheel = (e) => {
      const drawer = document.querySelector(".nav-drawer-content");
      if (!drawer) return;

      const { scrollTop, scrollHeight, clientHeight } = drawer;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        window.scrollBy(0, e.deltaY);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isDrawerOpen]);

  // স্ক্রল পজিশন ডিটেক্ট করার লজিক (স্ক্রল করলে ব্যাকগ্রাউন্ড সলিড ও শ্যাডো হবে)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // স্ক্রিন বড় হয়ে ডেস্কটপ ভিউতে গেলে মোবাইল মেনু অটো বন্ধ হবে
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0  left-0 w-full z-50 text-white transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#1e2628] shadow-lg py-3 lg:py-4"
          : "bg-[#1e2628] lg:bg-transparent py-4 lg:py-6  top-0 lg:top-10"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 min-w-0"
        >
          <HiDeviceMobile className="text-2xl sm:text-3xl shrink-0" />
          <span className="text-base xs:text-lg sm:text-xl xl:text-2xl font-bold tracking-tight truncate">
            JÜloonPhoneShop
          </span>
        </Link>

        {/* Center: Desktop Navigation Links (lg স্ক্রিন বা তার বেশি থেকে দেখাবে) */}
        <div className="hidden lg:flex items-center lg:gap-6 xl:gap-8 font-medium text-sm text-gray-200">
          <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap">
            <span>Services</span>
            <HiChevronDown className="text-base transition-transform duration-200 group-hover:rotate-180" />

            <div className="absolute z-50 top-full left-0 w-52 bg-[#2B2B2A] rounded-md shadow-xl py-2 border border-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out text-gray-200">
              <Link
                href="/services/screen-repair"
                className="block px-4 py-2.5 hover:bg-gray-700 hover:text-white text-sm transition-colors"
              >
                All Services
              </Link>
              <Link
                href="/services/single-repair"
                className="block px-4 py-2.5 hover:bg-gray-700 hover:text-white text-sm transition-colors"
              >
                Single Repair
              </Link>
              <Link
                href="/services/problems"
                className="block px-4 py-2.5 hover:bg-gray-700 hover:text-white text-sm transition-colors"
              >
                Problems We Repair
              </Link>
              <Link
                href="/service/water-damage-repair"
                className="block px-4 py-2.5 hover:bg-gray-700 hover:text-white text-sm transition-colors"
              >
                Why Choose Us
              </Link>
            </div>
          </div>

          <Link
            href="/book-repair"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Book a Repair
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors whitespace-nowrap">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors whitespace-nowrap">
            Contact
          </Link>
        </div>

        {/* Right Side: Toggle Buttons */}
        <div className="flex items-center shrink-0">
          {/* Mobile/Tablet Menu Button (lg এর নিচে দেখাবে) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 -mr-1.5 text-2xl sm:text-3xl text-white hover:text-gray-300 focus:outline-none transition-transform duration-200"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <HiMinus /> : <HiMenu />}
          </button>

          {/* Desktop Drawer Button (lg এবং তার ওপরে দেখাবে) */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="hidden lg:block p-1.5 -mr-1.5 text-2xl text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle Desktop Drawer"
          >
            <HiMenu />
          </button>
        </div>
      </Container>

      {/* Mobile & Tablet Dropdown Menu (lg এর নিচে কাজ করবে) */}
      <div
        className={`lg:hidden bg-[#1e2628] overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[85vh] opacity-100 border-t border-white/10 shadow-2xl overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <Container className="pt-2 pb-6 flex flex-col text-sm sm:text-base font-medium text-gray-200">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="py-3.5 border-b border-white/10 hover:text-white transition-colors"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full py-3.5 flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Services</span>
              <HiChevronDown
                className={`text-lg text-gray-400 transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 flex flex-col pl-4 space-y-2.5 text-sm text-gray-300 ${
                isMobileServicesOpen ? "max-h-56 pb-3.5 pt-1" : "max-h-0"
              }`}
            >
              <Link
                href="/services/screen-repair"
                onClick={closeMobileMenu}
                className="py-1 hover:text-white transition-colors"
              >
                All Services
              </Link>
              <Link
                href="/services/single-repair"
                onClick={closeMobileMenu}
                className="py-1 hover:text-white transition-colors"
              >
                Single Repair
              </Link>
              <Link
                href="/services/problems"
                onClick={closeMobileMenu}
                className="py-1 hover:text-white transition-colors"
              >
                Problems We Repair
              </Link>
              <Link
                href="/service/water-damage-repair"
                onClick={closeMobileMenu}
                className="py-1 hover:text-white transition-colors"
              >
                Why Choose Us
              </Link>
            </div>
          </div>

          <Link
            href="/book-repair"
            onClick={closeMobileMenu}
            className="py-3.5 border-b border-white/10 hover:text-white transition-colors"
          >
            Book a Repair
          </Link>

          <Link
            href="/blog"
            onClick={closeMobileMenu}
            className="py-3.5 border-b border-white/10 hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="py-3.5 border-b border-white/10 hover:text-white transition-colors"
          >
            Contact
          </Link>

          {/* মোবাইল ড্রপডাউনের ভেতরে Book a Repair বাটন এবং সোশ্যাল আইকন */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href="/book-repair"
              onClick={closeMobileMenu}
              className="w-full sm:w-auto sm:px-8 bg-[#facc15] text-black font-semibold text-center py-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Book a Repair
            </Link>

            <div className="flex items-center justify-center gap-6 py-1 text-gray-300 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Desktop Slide-over Drawer Menu */}
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </nav>
  );
};

export default Navbar;