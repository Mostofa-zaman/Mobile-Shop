
import React from "react";

import {
  HiX,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

import {
  HiDevicePhoneMobile,
  HiDeviceTablet,
  HiComputerDesktop,
  HiCpuChip,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const NavDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-all duration-300">

      {/* Drawer Container */}
      <div className="w-full md:w-[480px] bg-[#1A1C1C] text-white h-full overflow-y-auto px-6 py-8 flex flex-col justify-between shadow-2xl border-l border-gray-800">

        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-800">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <HiDevicePhoneMobile className="text-3xl text-white" />

              <span className="text-2xl font-bold tracking-tight">
                ÜPhone
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <HiX className="text-2xl" />
            </button>
          </div>

          {/* Our Services */}
          <div className="py-6 border-b border-gray-800">

            <h3 className="text-lg font-semibold mb-6 text-gray-200">
              Our Services
            </h3>

            <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center">

              {/* Phone Repair */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiDevicePhoneMobile className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  Phone Repair
                </span>
              </div>

              {/* Tablet Repair */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiDeviceTablet className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  Tablet Repair
                </span>
              </div>

              {/* Laptop Repair */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiComputerDesktop className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  Laptop Repair
                </span>
              </div>

              {/* PS5 / Xbox */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiCpuChip className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  PS5 / Xbox
                </span>
              </div>

              {/* Smartwatch */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiOutlineClock className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  Smartwatch
                </span>
              </div>

              {/* Software Repair */}
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl border border-[#C5FF13]/40 flex items-center justify-center text-[#C5FF13] group-hover:bg-[#C5FF13]/10 transition-colors">
                  <HiOutlineWrenchScrewdriver className="text-2xl" />
                </div>

                <span className="text-xs font-medium text-gray-300">
                  Software Repair
                </span>
              </div>

            </div>
          </div>

          {/* Contact Us */}
          <div className="py-6 border-b border-gray-800 space-y-3 text-sm">

            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Contact Us
            </h3>

            <div className="flex items-center gap-3 text-gray-300">
              <HiOutlineClock className="text-lg text-gray-400 shrink-0" />
              <span>Mon-Sat 9am-8pm, Sun 11am-6pm</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <HiOutlineLocationMarker className="text-lg text-gray-400 shrink-0" />
              <span>Humble, TX</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <HiOutlineLocationMarker className="text-lg text-gray-400 shrink-0" />
              <span>Conroe, TX</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <HiOutlineMail className="text-lg text-gray-400 shrink-0" />

              <a
                href="mailto:info@uphonerepair.com"
                className="text-[#C5FF13] hover:underline"
              >
                info@uphonerepair.com
              </a>
            </div>

          </div>

          {/* About Us */}
          <div className="py-6 space-y-2">

            <h3 className="text-lg font-semibold text-gray-200">
              About Us
            </h3>

            <p className="text-xs text-gray-400 leading-relaxed">
              We’re passionate about keeping your gadgets in top shape.
              Our dedicated team of experienced technicians combines
              technical expertise with exceptional customer service to
              provide reliable repairs for all your electronic devices.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NavDrawer;
