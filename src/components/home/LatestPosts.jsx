
import PostCard from "../cardProviders/PostCard";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SectionTitle from "../common/SectionTitle";

const posts = [
  {
    id: 1,
    image: "/images/BH1.png",
    date: { day: "20", month: "Jun" },
    category: "Battery Health",
    title: "Common Smartphone Battery Issues and How to Fix Them",
    description:
      "Is your phone draining fast? Learn about common battery problems, how to optimize battery life, and when it's time for a replacement at ÜPhone.",
  },
  {
    id: 2,
    image: "/images/WD1.png",
    date: { day: "15", month: "Jun" },
    category: "Water Damage Repair",
    title: "Water Damage: Immediate Steps to Save Your Device",
    description:
      "Dropped your phone in water? Don't panic! Follow these immediate steps to increase the chances of saving your device before bringing it to our experts.",
  },
  {
    id: 3,
    image: "/images/SP1.png",
    date: { day: "10", month: "Jun" },
    category: "Screen Protection",
    title: "Why Screen Protection is Essential for Your Phone",
    description:
      "A cracked screen is the most common phone repair. Discover why investing in a high-quality screen protector can save you money and hassle in the long run.",
  },
  {
    id: 4,
    image: "/images/BLR1.png",
    date: { day: "05", month: "Jun" },
    category: "Professional Repair",
    title: "The Benefits of Professional Phone Repair vs. DIY",
    description:
      "Thinking of fixing your phone yourself? Read why professional repair services like ÜPhone offer safer, more reliable, and warranted solutions.",
  },
];

export default function LatestPosts() {
  return (
    <section className="bg-[#19292c] py-12 sm:py-16">
      <Container>

      {/* Section Heading */}
      <div className="mb-8 text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
         <SectionTitle title="LATEST POST" />
        </div>

       <SectionHeading title="Stay updated with us" />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            image={post.image}
            date={post.date}
            category={post.category}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
      </Container>
    </section>
  );
}
