
"use client";

import React, { useState } from "react";
import {
  HiChevronDown,
  HiMenu,
  HiX,
  HiDeviceMobile,
} from "react-icons/hi";
import NavDrawer from "./NavDrawer";
import Container from "../common/Container";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1C1D1D] text-white py-4 shadow-lg">
      <Container className="flex items-center justify-between">

        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <HiDeviceMobile className="text-3xl text-white stroke-1" />
          <span className="text-2xl font-bold tracking-tight text-white">
            ÜPhone
          </span>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-200">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
            <span>Services</span>
            <HiChevronDown className="text-base transition-transform group-hover:rotate-180" />

            <div className="absolute z-50 top-full left-0 mt-2 w-48 bg-[#2B2B2A] rounded-md shadow-xl py-2 hidden group-hover:block border border-gray-700">
              <a href="#service1" className="block px-4 py-2 hover:bg-gray-700 text-sm">
                Screen Repair
              </a>
              <a href="#service2" className="block px-4 py-2 hover:bg-gray-700 text-sm">
                Battery Replacement
              </a>
              <a href="#service3" className="block px-4 py-2 hover:bg-gray-700 text-sm">
                Charging Port Repair
              </a>
              <a href="#service4" className="block px-4 py-2 hover:bg-gray-700 text-sm">
                Water Damage Repair
              </a>
            </div>
          </div>

          <a href="#book-repair" className="hover:text-white transition-colors">
            Book a Repair
          </a>

          <a href="#blog" className="hover:text-white transition-colors">
            Blog
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
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
