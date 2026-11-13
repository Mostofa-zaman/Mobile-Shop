
"use client";

import React from "react";
import Slider from "react-slick";
import {
  Smartphone,
  Tablet,
  Laptop,
  Gamepad,
  Watch,
  Code,
} from "lucide-react";

import BatteryRepairTestimonialCard from "@/components/cardProviders/BatteryRepairTestimonialCard";
import SidebarCard from "@/components/cardProviders/SidebarCard";

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

export default function Sidebar({ selectedCategory, onCategoryChange }) {
 const menuItems = [
  { name: "Phone Repair", icon: Smartphone },
  { name: "Tablet Repair", icon: Tablet },
  { name: "Laptop Repair", icon: Laptop },
  { name: "PS5 / Xbox", icon: Gamepad },
  { name: "Smartwatch", icon: Watch },
  { name: "Software Repair", icon: Code },
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
    <section className="w-full">
      <aside className="w-full space-y-6">

        {/* Repair Menu */}
        <nav className="space-y-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
             
<button
  key={index}
  onClick={() => onCategoryChange(item.name)}
  className={`flex min-h-[76px] w-full items-center justify-between rounded-md px-4 py-5 transition sm:min-h-[88px] sm:px-5 ${
    selectedCategory === item.name
      ? "bg-[#19292c] text-white"
      : "bg-[#d9e1e1] text-[#19292c] hover:bg-gray-300"
  }`}
>
  <span className="flex min-w-0 items-center gap-3 text-base font-medium sm:text-lg lg:text-xl">
    <Icon size={34} strokeWidth={1.5} className="shrink-0" />
    <span>{item.name}</span>
  </span>

  <span className="ml-2 shrink-0 text-xl">→</span>
</button>

            );
          })}
        </nav>

        {/* Testimonial Slider */}
        <div className="w-full pb-8">
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

        {/* Sidebar Card */}
        <div className="w-full">
          <SidebarCard />
        </div>

      </aside>
    </section>
  );
}
