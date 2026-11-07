import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SectionTitle from "../common/SectionTitle";

export default function OurServiceHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[300px] bg-black text-white flex flex-col justify-between overflow-hidden">
      {/* Blurred Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-wrap filter blur-md opacity-40 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-24">
       <SectionTitle title="What Do We Fix" />
       <SectionHeading title="Our Services"/>
      </Container>
    </section>
  );
}
