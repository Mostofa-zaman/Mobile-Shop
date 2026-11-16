import React from "react";

const features = [
 
];

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Left Rounded Square Check Icon */}
              <div className="w-20 h-20 shrink-0 rounded-2xl border border-gray-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Right Title & Description */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}