
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Experts() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden bg-[#19282B] py-8 text-white sm:py-10 lg:py-8">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">

        {/* Left Content */}
        <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-7 lg:py-16 xl:px-16">

          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gray-400"></span>
            <span className="text-sm font-bold tracking-widest text-gray-200">
              OUR EXPERTS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Trust our experts for
            <br className="hidden sm:block" />
            reliable gadget solutions
          </h2>

          {/* Description */}
          <p className="mb-7 max-w-lg text-base leading-[1.85] text-gray-400">
            Our team of expert technicians is dedicated to providing
            the highest quality repairs for all your gadgets. With years
            of hands-on experience and advanced certifications, our
            professionals are skilled in diagnosing and fixing a wide
            range of issues, from simple repairs to complex problems.
          </p>

          {/* Button */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#FFD700] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-white hover:scale-105"
          >
            Book a Repair
          </a>
        </div>

        {/* Right Video Section */}
        <div className="relative px-0 pb-8 lg:py-0">

          <div className="relative h-[260px] w-full overflow-hidden rounded-bl-[36px] bg-black sm:h-[380px] sm:rounded-bl-[60px] lg:h-[440px]">

            {/* Thumbnail */}
            <Image
              src="/images/EP1.png"
              alt="Expert repairing a mobile phone"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Play Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Play repair video"
              className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#19282B] transition-all duration-300 hover:scale-110 hover:bg-[#FFD700] sm:h-28 sm:w-28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-8 w-8 transition-colors group-hover:fill-black sm:h-10 sm:w-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">

          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-6 top-6 text-4xl text-white hover:text-[#FFD700]"
            aria-label="Close video"
          >
            &times;
          </button>

          <div className="relative w-full max-w-4xl aspect-video overflow-hidden rounded-xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Expert Gadget Repair Video"
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
}
