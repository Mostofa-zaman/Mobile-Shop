"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiMenu, HiX, HiDeviceMobile } from "react-icons/hi";
import NavDrawer from "./NavDrawer";
import Container from "../common/Container";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute  w-full z-50 bg-transparent text-white py-4">
      <Container className="flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <HiDeviceMobile className="text-3xl" />
          <span className="text-2xl font-bold tracking-tight">JÜloonPhoneShop</span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-200">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
            <span>Services</span>
            <HiChevronDown className="text-base transition-transform group-hover:rotate-180" />

            <div className="absolute z-50 top-full left-0 mt-1.5 w-48 bg-[#2B2B2A] rounded-md shadow-xl py-2 border border-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out text-gray-200">
              <Link href="/services/screen-repair" className="block px-4 py-2 hover:bg-gray-700 text-sm">All Services</Link>
              <Link href="/services/battery-replacement" className="block px-4 py-2 hover:bg-gray-700 text-sm">Single Repair</Link>
              <Link href="/service/charging-port-repair" className="block px-4 py-2 hover:bg-gray-700 text-sm">Problems We Repair</Link>
              <Link href="/service/water-damage-repair" className="block px-4 py-2 hover:bg-gray-700 text-sm">Why Choose Us</Link>
            </div>
          </div>

          <Link href="/book-repair" className="hover:text-white transition-colors">Book a Repair</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Right Side: Hamburger Icon */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      </Container>

      {/* Slide-over Drawer Menu */}
      <NavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;