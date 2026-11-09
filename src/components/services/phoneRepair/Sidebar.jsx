"use client";
import React from "react";
import Slider from "react-slick";
import { Smartphone, Tablet, Laptop, Gamepad, Watch, Code } from "lucide-react";

import Container from "@/components/common/Container";
import BatteryRepairTestimonialCard from "@/components/cardProviders/BatteryRepairTestimonialCard";

const reviews = [
  {
    name: "Michael S.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "David Miller",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "Robert Smith",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "Daniel Brown",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "William Taylor",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "Chris Anderson",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
  {
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150",
    review:
      "Absolutely fantastic service! My phone's screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
  },
];

export default function Sidebar() {
  const menuItems = [
    { name: "Phone Repair", icon: Smartphone, active: true },
    { name: "Tablet Repair", icon: Tablet, active: false },
    { name: "Laptop Repair", icon: Laptop, active: false },
    { name: "PS5 / Xbox", icon: Gamepad, active: false },
    { name: "Smartwatch", icon: Watch, active: false },
    { name: "Software Repair", icon: Code, active: false },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="pt-16 pb-24">
      <Container>
        <aside className="w-full lg:w-1/4 space-y-6">
          <nav className="space-y-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between p-10 rounded transition ${
                    item.active
                      ? "bg-slate-900 text-white font-medium"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm">
                    <Icon size={18} />
                    {item.name}
                  </span>
                  <span className="text-xs">→</span>
                </button>
              );
            })}
          </nav>

          <div className="w-full ">
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index}>
                  <BatteryRepairTestimonialCard
                    name={review.name}
                    image={review.image}
                    review={review.review}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </aside>
      </Container>
    </section>
  );
}
