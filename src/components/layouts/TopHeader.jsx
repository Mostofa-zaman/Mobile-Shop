
import React from "react";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

const TopHeader = () => {
  return (
    <header className="w-full bg-[#2B2B2A] text-white py-3 shadow-md">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm font-normal">

        {/* Left Side: Locations & Operating Hours */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
          {/* Location 1 */}
          <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-colors">
            <HiOutlineLocationMarker className="text-base flex-shrink-0" />
            <span>Humble, TX</span>
          </div>

          {/* Location 2 */}
          <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer transition-colors">
            <HiOutlineLocationMarker className="text-base flex-shrink-0" />
            <span>Conroe, TX</span>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center gap-2">
            <HiOutlineClock className="text-base flex-shrink-0" />
            <span>Mon-Sat 9am-8pm, Sun 11am-6pm</span>
          </div>
        </div>

        {/* Right Side: CTA Button & Social Icons */}
        <div className="flex items-center gap-6">
          {/* Book a Repair Button */}
          <Button
            children="Book a Repair"
            bgColor="bg-[#FFD700]"
            textColor="text-black"
            hoverBgColor="hover:bg-[#e6c200]"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaFacebookF className="text-base" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <RiTwitterXFill className="text-base" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaInstagram className="text-base" />
            </a>
          </div>
        </div>

      </Container>
    </header>
  );
};

export default TopHeader;
