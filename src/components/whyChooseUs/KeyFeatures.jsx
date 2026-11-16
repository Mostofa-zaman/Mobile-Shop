import React from "react";

const features = [
  {
    title: "Expert Technicians",
    description:
      "Our repair team consists of highly skilled and certified technicians with extensive experience in diagnosing and fixing a wide range of devices.",
  },
  {
    title: "Quick Turnaround",
    description:
      "We understand the importance of your device, and we strive to provide fast and efficient service, aiming for quick turnaround times to minimize your downtime.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Our pricing is transparent and competitive. You'll receive a clear and detailed estimate before we begin any repairs, and there are no hidden fees.",
  },
  {
    title: "Quality Parts",
    description:
      "We use only high-quality, genuine parts for repairs, ensuring the longevity and optimal performance of your device after the service.",
  },
  {
    title: "Wide Range of Repairs",
    description:
      "From cracked screens and battery replacements to complex motherboard issues, we offer a comprehensive range of repair services for various devices.",
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "Your satisfaction is our priority. We stand behind our work and offer a customer satisfaction guarantee to ensure you're happy with the results.",
  },
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
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}