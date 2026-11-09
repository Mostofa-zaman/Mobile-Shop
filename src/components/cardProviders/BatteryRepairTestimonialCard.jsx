
import React from "react";
import { Star } from "lucide-react";

export default function BatteryRepairTestimonialCard({
  name,
  image,
  review,
}) {
  return (
   <div className="w-full bg-white py-6 pr-6 pl-0 rounded-2xl space-y-4 text-left">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-2xl object-cover"
      />

      <h4 className="text-xl font-bold text-gray-800 tracking-tight">
        {name}
      </h4>

      <div className="flex text-amber-400 gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="currentColor"
            stroke="none"
          />
        ))}
      </div>

      <p className="text-gray-600 text-base leading-relaxed">
        "{review}"
      </p>
    </div>
  );
}
