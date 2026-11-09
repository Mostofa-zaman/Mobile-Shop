
import Image from "next/image";

export default function PostCard({
  image,
  title,
  description,
  date,
  category,
}) {
  return (
    <article className="group">
      {/* Image Section */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-[#f5f6f7] sm:h-[254px]">

        {/* Date */}
        <div className="absolute left-4 top-4 z-10 flex h-[88px] w-[76px] flex-col items-center justify-center bg-[#d1d3d4] text-white sm:left-[30px] sm:top-[30px] sm:h-[111px] sm:w-[96px]">
          <span className="text-4xl font-bold leading-none sm:text-[46px]">
            {date.day}
          </span>
          <span className="mt-1 text-lg font-semibold sm:text-xl">
            {date.month}
          </span>
        </div>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {/* Category */}
        <span className="absolute bottom-5 left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 truncate whitespace-nowrap text-xs font-medium text-[#526f7b]">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="mt-6 sm:mt-8">
        <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#c8eb70] sm:text-[23px] sm:leading-[1.6]">
          {title}
        </h3>

        <p className="mt-3 text-base leading-7 text-[#a5abad] sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </article>
  );
}
