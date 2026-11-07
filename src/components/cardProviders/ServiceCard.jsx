import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";

const ServiceCard = ({ id, title, description, imageSrc, bgColor, slug }) => {
  return (
    <div
      className={`${bgColor} p-6 flex flex-col justify-between transition-all`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 relative">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded"
            />
          </div>

          <span className="text-gray-500 font-mono text-sm">{id}</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-400 text-xs leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Hover Expandable Read More Button */}
      <Link
        href={`/services/${slug || "screen-repair"}`}
        aria-label="Read more"
        className="group inline-flex items-center gap-2 w-10 hover:w-32 h-10 px-2.5 rounded-full border border-gray-600 bg-transparent text-white overflow-hidden transition-all duration-300 ease-in-out hover:border-white hover:text-white"
      >
        <span className="flex-shrink-0 flex items-center justify-center text-base">
          <HiPlus />
        </span>
        <span className="whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read more
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;