
import Image from "next/image";

export default function ReviewCard({
  title,
  description,
  imageUrl,
  rating = 5,
}) {
  return (
    <div
      className="flex min-h-[320px] w-full max-w-[360px] flex-col rounded-[25px] bg-[#FFDF00] p-5 text-black sm:min-h-[350px] sm:p-6"
    >
      {/* Customer Image */}
      <div className="relative mb-5 h-20 w-20 shrink-0 overflow-hidden rounded-[15px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Customer Name */}
      <h3 className="mb-2 text-base font-medium">
        {title}
      </h3>

      {/* Star Rating */}
      <div className="mb-6 flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`text-xl leading-none ${
              index < rating
                ? "text-[#FFAD00]"
                : "text-[#B7A000]"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Customer Description */}
      <p className="text-base font-normal leading-[1.8] text-[#111111]">
        &ldquo;{description}&rdquo;
      </p>
    </div>
  );
}
