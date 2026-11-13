
import React from "react";

const categoryContent = {
  "Phone Repair": {
    image: "/images/RepairHeroimage.png",
    heading: "Quick, Reliable, and Affordable Phone Repairs",
    description:
      "Is your phone acting up? Don't worry, we've got you covered! At ÜPhone, we specialize in fast and reliable phone repair services for all major brands and models. Our team of experienced technicians is dedicated to getting your device back to perfect working condition in no time.",
  },

  "Tablet Repair": {
    image: "/images/tablet-repair.png",
    heading: "Professional Tablet Repair Services",
    description:
      "Having trouble with your tablet? Our experienced technicians provide reliable tablet repair services, including screen replacement, battery issues, charging problems, and more. We work to get your tablet back to perfect working condition.",
  },

  "Laptop Repair": {
    image: "/images/laptop-repair.png",
    heading: "Fast and Reliable Laptop Repair Services",
    description:
      "Is your laptop running slowly or having hardware issues? Our technicians provide professional laptop repair services, including screen replacement, battery repair, keyboard issues, and software troubleshooting.",
  },

  "PS5 / Xbox": {
    image: "/images/console-repair.png",
    heading: "Expert PS5 and Xbox Repair Services",
    description:
      "Having problems with your gaming console? We provide reliable PS5 and Xbox repair services, including HDMI port repair, overheating issues, power problems, and other hardware repairs.",
  },

  Smartwatch: {
    image: "/images/smartwatch-repair.png",
    heading: "Reliable Smartwatch Repair Services",
    description:
      "Keep your smartwatch working perfectly with our professional repair services. We handle screen damage, battery problems, charging issues, and other common smartwatch problems.",
  },

  "Software Repair": {
    image: "/images/software-repair.png",
    heading: "Professional Software Repair Services",
    description:
      "Experiencing software problems with your device? Our technicians can help with software troubleshooting, operating system issues, updates, and other software-related problems.",
  },
};

export default function PhoneRepairHeroSection({ selectedCategory }) {
  const content =
    categoryContent[selectedCategory] || categoryContent["Phone Repair"];

  return (
    <section className="w-full min-w-0 space-y-8">
      {/* Devices Banner */}
      <div className="relative h-[260px] w-full overflow-hidden rounded-xl bg-gray-200 sm:h-[350px] md:h-[420px] lg:h-[520px]">
        <img
          src={content.image}
          alt={selectedCategory}
          className="h-full w-full bg-white object-contain"
        />
      </div>

      {/* Heading and Intro */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
        {/* Heading */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-14 bg-gray-400" />
            <span className="text-xs font-semibold tracking-[0.15em] text-gray-600">
              CERTIFIED REPAIR
            </span>
          </div>

          <h1 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-[40px]">
            {content.heading}
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm leading-8 text-gray-600 sm:text-base lg:text-[18px]">
          {content.description}
        </p>
      </div>
    </section>
  );
}
