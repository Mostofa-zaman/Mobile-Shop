
"use client";

import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-gray-800 bg-[#1C1D1D] px-4 py-10 text-gray-300 sm:px-6 sm:py-12 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

        {/* Brand & Social Links */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-2">
          <div className="space-y-4">
            <div className="flex cursor-pointer items-center gap-2 text-white">
              <HiDevicePhoneMobile className="text-3xl" />
              <span className="text-lg font-bold tracking-tight sm:text-2xl">
                JÜloonPhoneShop
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              We’re passionate about keeping your gadgets in top shape.
              Our dedicated team of experienced technicians combines
              technical expertise with exceptional customer service to
              provide reliable repairs for all your electronic devices.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <RiTwitterXFill className="text-sm" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>

            {/* Scroll To Top */}
            <div className="flex items-center gap-3 border-l border-gray-700 pl-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="cursor-pointer text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
              >
                Scroll to top
              </button>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide text-white">
            Company
          </h3>

          <ul className="space-y-2.5 text-sm">
            <li><a href="#home" className="transition-colors hover:text-yellow-400">Home</a></li>
            <li><a href="#services" className="transition-colors hover:text-yellow-400">Our Services</a></li>
            <li><a href="#book-repair" className="transition-colors hover:text-yellow-400">Book a Repair</a></li>
            <li><a href="#blog" className="transition-colors hover:text-yellow-400">Blog</a></li>
            <li><a href="#contact" className="transition-colors hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-wide text-white">
            Our Services
          </h3>

          <ul className="space-y-2.5 text-sm">
            <li><a href="#phone-repair" className="transition-colors hover:text-yellow-400">Phone Repair</a></li>
            <li><a href="#tablet-repair" className="transition-colors hover:text-yellow-400">Tablet Repair</a></li>
            <li><a href="#laptop-repair" className="transition-colors hover:text-yellow-400">Computer & Laptop</a></li>
            <li><a href="#ps5-xbox" className="transition-colors hover:text-yellow-400">PS5 / Xbox</a></li>
            <li><a href="#smartwatch" className="transition-colors hover:text-yellow-400">Smartwatch Repair</a></li>
            <li><a href="#software" className="transition-colors hover:text-yellow-400">Software Repair</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-sm">

          {/* Business Hours */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-white">
              <HiOutlineClock className="text-lg" />
              <span>We're Open</span>
            </div>

            <p className="pl-6 text-xs text-gray-400">
              Mon-Sat 9am-8pm, Sun 11am-6pm
            </p>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-medium text-white">
              <HiOutlineLocationMarker className="text-lg" />
              <span>Locations</span>
            </div>

            <div className="space-y-0.5 pl-6 text-xs text-gray-400">
              <p className="text-gray-300">
                 Mirpur, Dhaka, Bangladesh.
              </p>
              <p>Phone:  088-413-60590</p>
            </div>

            <div className="space-y-0.5 pl-6 text-xs text-gray-400">
              <p className="text-gray-300">
                Mirpur, Dhaka, Bangladesh.
              </p>
              <p>Phone: 088-413-60590</p>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-white">
              <HiOutlineMail className="text-lg" />
              <span>Send a Message</span>
            </div>

            <div className="flex flex-col space-y-1 pl-6 text-xs text-gray-400">
              <a
                href="mailto:info@uphonerepair.com"
                className="transition-colors hover:text-white"
              >
                info@uphonerepair.com
              </a>

              <a
                href="mailto:humble@uphonerepair.com"
                className="transition-colors hover:text-white"
              >
                julun@uphonerepair.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
