"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import SectionTitle from "../common/SectionTitle";
import SectionHeading from "../common/SectionHeading";

export default function Experts() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden bg-[#19282B] py-12 text-white sm:py-16 lg:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

        {/* Left Content */}
        <div className="w-full">
          <SectionTitle title="OUR EXPERTS" />

          <div className="mb-5 mt-3 sm:mb-6">
            <SectionHeading
              title="Trust our experts for reliable gadget solutions"
              align="text-left"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
            />
          </div>

          <p className="mb-7 max-w-lg text-sm leading-[1.85] text-gray-300 sm:text-base">
            Our team of expert technicians is dedicated to providing
            the highest quality repairs for all your gadgets. With years
            of hands-on experience and advanced certifications, our
            professionals are skilled in diagnosing and fixing a wide
            range of issues, from simple repairs to complex problems.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#FFD700] px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-white sm:px-7 sm:text-base"
          >
            Book a Repair
          </a>
        </div>

        {/* Right Video Section */}
        <div className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden rounded-2xl bg-black sm:h-[350px] sm:rounded-[36px] md:h-[400px] lg:h-[380px] lg:rounded-bl-[50px] xl:h-[420px]">

            {isVideoOpen ? (
              /* YouTube Video */
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="Expert Gadget Repair Video"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Video Thumbnail */
              <>
                <Image
                  src="/images/EP1.png"
                  alt="Expert repairing a mobile phone"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                {/* Play Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play repair video"
                  className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#19282B] transition-all duration-300 hover:scale-110 hover:bg-[#FFD700] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-8 w-8 transition-colors duration-300 group-hover:fill-black sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}

          </div>
        </div>

      </Container>
    </section>
  );
}