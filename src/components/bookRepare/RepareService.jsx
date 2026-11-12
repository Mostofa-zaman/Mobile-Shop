
import React from "react";
import Container from "../common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    id: 1,
    title: (
      <>
        Select your repair
        <br />
        & request a quote
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        Send your gadget
        <br />
        or visit our store
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        Our technicians
        <br />
        fix your gadget
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        We'll request
        <br />
        payment
      </>
    ),
  },
  {
    id: 5,
    title: <>Return to you</>,
  },
];

export default function RepairService() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-24"
      style={{ backgroundImage: "url('/images/repareBook.jpg')" }}
    >
      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/10"
      />

      <Container>
        <div className="relative z-10">

          {/* Section Heading */}
          <div className="mb-12 flex flex-col items-center text-center">
            <SectionTitle
              title="WHAT DO WE FIX"
              textColor="text-white"
              className="mb-4"
            />

            <SectionHeading
              title="Book a Repair"
              align="text-center"
              className="mx-auto"
            />
          </div>

          {/* Repair Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  relative flex flex-col items-center justify-center
                  border-white/40 px-5 py-10 text-center
                  lg:border-r
                  ${index === steps.length - 1 ? "lg:border-r-0" : ""}
                  ${index < steps.length - 1 ? "border-b lg:border-b-0" : ""}
                  motion-safe:animate-fade-in-up
                  motion-reduce:animate-none
                `}
                style={{
                  animationDelay: `${index * 350}ms`,
                }}
              >
                {/* Background Step Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-white/20 md:text-9xl"
                >
                  {step.id}
                </span>

                {/* Step Badge */}
                <span className="relative z-10 mb-10 rounded-md bg-[#FFD700] px-3 py-1 text-sm font-medium text-black">
                  STEP {step.id}
                </span>

                {/* Step Title */}
                <h3 className="relative z-10 text-lg font-semibold leading-relaxed text-white md:text-xl">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
