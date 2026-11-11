import Breadcrumb from "../common/Breadcrumb";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SectionTitle from "../common/SectionTitle";

;

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[330px] bg-gray-600 text-white flex flex-col justify-between overflow-hidden">

      {/* Blurred Background Overlay */}
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-wrap filter  opacity-60 scale-105"
    style={{
      backgroundImage: `url('/images/BlogHeroImage.png')`,
    }}
  />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-24">
        <SectionTitle title="Our Blog" />
        <SectionHeading title="Stay Up to Date" />
      </Container>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Phone Repair" }]} />

    </section>
  );
}
