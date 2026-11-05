import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SectionHeading from "../common/SectionHeading";
import RepairCard from "../cardProviders/RepairCard";

export default function Repair() {
  return (
    <section className="w-full bg-[#1C2326] py-16 text-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <SectionTitle
            title="Issues We Repair"
            textColor="text-white"
            className="mb-6"
          />

          <SectionHeading
            title={
              <>
                Your one-stop solution for
                <br />
                all gadget repair needs
              </>
            }
            align="text-center"
            className="mb-6 mx-auto"
          />
        </div>

        {/* Repair Cards */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              suppressHydrationWarning
            >
              <RepairCard />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}