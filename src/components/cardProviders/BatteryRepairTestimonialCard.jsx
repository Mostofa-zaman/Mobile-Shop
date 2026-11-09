import React from 'react';
import { Star } from 'lucide-react';

export default function BatteryRepairTestimonialCard() {
  return (
    <div className="max-w-xs bg-white p-6 rounded-2xl space-y-4 text-left">
      {/* Profile Image */}
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
        alt="Michael S. Customer"
        className="w-20 h-20 rounded-2xl object-cover"
      />

      {/* Name */}
      <h4 className="text-xl font-bold text-gray-800 tracking-tight">
        Michael S.Customer
      </h4>

      {/* Star Rating */}
      <div className="flex text-amber-400 gap-1">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-base leading-relaxed">
        "Absolutely fantastic service! My phone’s screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!"
      </p>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 pt-2">
        <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
        {[...Array(7)].map((_, index) => (
          <span
            key={index}
            className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block"
          ></span>
        ))}
      </div>
    </div>
  );
}
