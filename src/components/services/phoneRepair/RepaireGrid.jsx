
import React from "react";

export default function RepaireGrid() {
  return (
    <section className="mt-10 flex w-full min-w-0 flex-wrap items-center">
      {/* Box 1: Yellow Text Card */}
      <div className="flex min-h-[220px] w-full flex-col justify-center bg-amber-400 p-6 sm:w-1/2 sm:p-8 lg:w-[280px]">
        <h3 className="mb-2 text-xl font-bold text-slate-900">
          Quality parts
        </h3>
        <p className="text-xs leading-relaxed text-slate-800">
          We use only quality parts for all our gadget repairs, ensuring your
          device gets the best quality and performance.
        </p>
      </div>

      {/* Box 2: Image Card */}
      <div className="h-[220px] w-full overflow-hidden sm:w-1/2 lg:w-[260px]">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
          alt="Circuit Board"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Box 3: Dark Text Card */}
      <div className="flex min-h-[220px] w-full flex-col justify-center bg-slate-800 p-6 text-white sm:w-1/2 sm:p-8 lg:ml-[280px] lg:w-[260px]">
        <h3 className="mb-2 text-xl font-bold">30 Days Warranty</h3>
        <p className="text-xs leading-relaxed text-gray-300">
          We back our work with a warranty, ensuring that your gadget repair
          is covered long after you leave our shop.
        </p>
      </div>

      {/* Box 4: Image Card */}
      <div className="h-[220px] w-full overflow-hidden sm:w-1/2 lg:w-[260px]">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
          alt="Technician"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
