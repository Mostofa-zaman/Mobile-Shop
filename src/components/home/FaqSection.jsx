"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "What types of gadgets do you service?",
    answer:
      "We service smartphones, laptops, tablets, smartwatches, desktop computers, and other electronic devices.",
  },
  {
    question: "What brands do you repair?",
    answer:
      "We repair Apple, Samsung, Google, Dell, HP, Lenovo, Asus, and many other popular brands.",
  },
  {
    question: "Do you offer a warranty on your repairs?",
    answer:
      "Yes! We offer warranties on eligible repairs to ensure quality and customer satisfaction.",
  },
  {
    question: "How do I get my gadget repaired?",
    answer:
      "Contact us or visit our service center. Our experts will inspect your device and guide you through the repair process.",
  },
  {
    question: "Do I need to back up my data before repair?",
    answer:
      "Yes, we recommend backing up all your important files and personal data before repair.",
  },
  {
    question: "How long will the repair take?",
    answer:
      "Most repairs take between 24 and 48 hours, depending on the device and the complexity of the issue.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full overflow-hidden bg-[#19282a] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative min-h-[280px] w-full overflow-hidden rounded-br-[40px] sm:min-h-[380px] sm:rounded-br-[60px] lg:min-h-[650px] lg:rounded-br-[70px]">
          <Image
            src="/images/image_1.png"
            alt="Customer thinking about questions"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center brightness-110 contrast-105 saturate-125"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#17272a]/35 via-transparent to-white/10" />

          {/* Decorative Glow */}
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#d8e66c]/20 blur-[100px]" />

          {/* Scroll Text */}
          <div className="absolute bottom-10 left-8 hidden items-center gap-4 md:flex">
            <div className="h-20 w-[2px] bg-white/40">
              <div className="h-1/2 w-full bg-[#d8e66c]" />
            </div>
            <span className="rotate-180 text-xs font-bold tracking-[3px] text-white [writing-mode:vertical-rl]">
              SCROLL TO TOP
            </span>
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div className="flex w-full min-w-0 items-center">
          {/* max-w-xl ebong mr-auto add kora holo jate lal dag borabor thake */}
          <div className="w-full px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:pl-10 lg:pr-12 lg:py-14 xl:pl-12 xl:pr-16 2xl:pr-20">
            <div className="max-w-2xl mr-auto">

              {/* Small Title */}
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[1px] w-14 bg-white" />
                <span className="text-xs font-bold tracking-[3px] text-[#d8e66c]">
                  QUESTIONS
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-[44px]">
                Frequently asked questions
              </h2>

              {/* Questions */}
              <div className="w-full">
                {faqData.map((faq, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div key={index} className="border-b border-white/25">
                      {/* Question Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white transition-colors duration-300 hover:text-[#d8e66c] sm:gap-5 sm:text-base lg:text-[15px] xl:text-lg"
                      >
                        <span>{faq.question}</span>

                        <svg
                          className={`h-5 w-5 shrink-0 text-[#d8e66c] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="m6 9 6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Answer */}
                      <div
                        id={`faq-answer-${index}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 pr-4 text-sm leading-7 text-gray-300 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}