import React from "react";

export default function RepaireGrid() {
  return (
    <section className="mx-auto mt-10 w-full max-w-[900px] px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Box 1: Yellow Text Card (Row 1, Col 1) */}
        <div className="flex min-h-[220px] flex-col justify-center bg-[#FFD700] p-6 sm:p-8 lg:h-[220px] lg:w-[300px]">
          <h3 className="mb-2 text-xl font-bold text-slate-900">
            Quality parts
          </h3>
          <p className="text-xs leading-relaxed text-slate-800">
            We use only quality parts for all our gadget repairs, ensuring your
            device gets the best quality and performance.
          </p>
        </div>

        {/* Box 2: Image Card (Row 1, Col 2) */}
        <div className="h-[220px] w-full overflow-hidden lg:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
            alt="Circuit Board"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Empty Spacer for LG screens to push Box 3 to the 2nd row, 2nd column */}
        <div className="hidden lg:block" />

        {/* Empty Spacer for LG screens */}
        <div className="hidden lg:block" />

        {/* Box 3: Dark Text Card (Row 2, Col 2) */}
        <div className="flex min-h-[220px] flex-col justify-center bg-slate-800 p-6 text-white sm:p-8 lg:h-[220px] lg:w-[300px]">
          <h3 className="mb-2 text-xl font-bold">30 Days Warranty</h3>
          <p className="text-xs leading-relaxed text-gray-300">
            We back our work with a warranty, ensuring that your gadget repair
            is covered long after you leave our shop.
          </p>
        </div>

        {/* Box 4: Image Card (Row 2, Col 3) */}
        <div className="h-[220px] w-full overflow-hidden lg:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
            alt="Technician"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}