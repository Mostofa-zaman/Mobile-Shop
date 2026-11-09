
"use client";

import Container from "@/components/common/Container";
import ReviewCard from "../cardProviders/ReviewCard";

// Customer Reviews Data
const reviews = [
  {
    id: 1,
    title: "Sree Jhulun Kumar Ray",
    description:
      "Absolutely fantastic service! My phone’s screen was cracked, and ÜPhone had it fixed in no time. The repair was flawless, and the customer service was top-notch. Highly recommend!",
    imageUrl: "/images/SreeJhulunKumarRay.png",
    rating: 5,
  },
  {
    id: 2,
    title: "Majharul Islam",
    description:
      "Excellent service! My battery was replaced quickly. Very professional staff and affordable pricing. Highly recommended!",
    imageUrl: "/images/MajharulIslam.png",
    rating: 5,
  },
  {
    id: 3,
    title: "Litan Mollah",
    description:
      "Amazing repair service. My phone screen looks brand new again. The team was friendly and very helpful.",
    imageUrl: "/images/LitanMollah.png",
    rating: 4,
  },
  {
    id: 4,
    title: "Liton ",
    description:
      "Fast and reliable service. They repaired my charging port perfectly. I will definitely visit again!",
    imageUrl: "/images/Liton.png",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="w-full overflow-x-hidden bg-[#1C2326] py-8 text-white sm:py-12">
      <Container>

        {/* Section Header */}
        <div className="py-8 sm:py-10 lg:py-12">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gray-400"></span>

            <span className="text-center text-sm font-bold tracking-widest text-gray-200">
              TESTIMONIALS
            </span>
          </div>

          <div className="text-center">
            <h2 className="mx-auto mb-6 max-w-xl text-3xl font-bold leading-tight sm:text-5xl">
              Our Happy Customers
            </h2>
          </div>

        </div>

        {/* Review Cards */}
        <div className="mt-6 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              description={review.description}
              imageUrl={review.imageUrl}
              rating={review.rating}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
