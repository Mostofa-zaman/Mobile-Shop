
export default function RepairCard({
  title = "Screen Repair",
  description = "Replacing the display screen of an electronic device, such as a smartphone, tablet, laptop, or television.",
  time = "30 min",
  imageUrl = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  aosAnimation = "fade-up",
  aosDelay = 0,
  rounded = false,
}) {
  return (
    <div
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
     className={`group flex w-full max-w-md flex-col overflow-hidden bg-black shadow-2xl ${
  rounded ? "rounded-3xl" : "rounded-b-3xl"
}`}
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Estimated Time */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center rounded-xl border border-white/10 bg-black/60 px-6 py-2.5 shadow-lg backdrop-blur-md">
          <span className="text-xs font-medium tracking-wide text-gray-300">
            Estimated Time
          </span>

          <span className="text-lg font-bold text-white">{time}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`flex flex-grow flex-col justify-between bg-[#FFD700] p-8 text-black ${
        rounded ? "rounded-b-3xl" : "rounded-b-3xl"
      }`}>
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-tight">
            {title}
          </h3>

          <div className="mb-6 h-px w-full bg-black/20" />

          <p className="text-sm font-normal leading-relaxed text-black/90 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
