import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SectionHeading from "../common/SectionHeading";
import RepairCard from "../cardProviders/RepairCard";
import AosInit from "../motion/Aoslint";

const repairs = [
  {
    id: 1,
    title: "Screen Repair",
    description: "Replacing the display screen of an electronic device.",
    time: "30 min",
    imageUrl: "/images/SR1.png",
    aosAnimation: "fade-right",
    aosDelay: 0,
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Over time, batteries can degrade, leading to decreased performance, reduced battery life, even complete failure.",
    time: "20 min",
    imageUrl: "/images/BR1.png",
    aosAnimation: "fade-right",
    aosDelay: 150,
  },
  {
    id: 3,
    title: "Water Damage Repair",
    description: "It can be particularly detrimental to electronic components, corrosion, short circuits, and other issues.",
    time: "25 min",
    imageUrl: "/images/WDR1.png",
    aosAnimation: "fade-right",
    aosDelay: 300,
  },
  {
    id: 4,
    title: "Data Recovery",
    description: "Retrieving or restoring inaccessible, lost, corrupted, or accidentally deleted data from storage.",
    time: "45 min",
    imageUrl: "/images/CPR1.png",
    aosAnimation: "fade-right",
    aosDelay: 450,
  },
  {
    id: 5,
    title: "Charging Port Repair",
    description: "Over time, charging ports can become damaged or wear out due to frequent use, which can lead to issues.",
    time: "1 hour",
    imageUrl: "/images/CR1.webp",
    aosAnimation: "fade-left",
    aosDelay: 0,
  },
  {
    id: 6,
    title: "Camera Repair",
    description: "Complex board-level repairs for logic boards and motherboards. Estimated 2-3 days.",
    time: "1-3 days",
    imageUrl: "/images/MR2.webp",
    aosAnimation: "fade-left",
    aosDelay: 150,
  },
  {
    id: 7,
    title: "Ps5 / X box Repair",
    description: "Expert repair and upgrades for PS5, Xbox, and other gaming consoles, including RAM upgrades and more.",
    time: "25 min",
    imageUrl: "/images/XBR1.png",
    aosAnimation: "fade-left",
    aosDelay: 300,
  },
  {
    id: 8,
    title: "Virus/Malware Removal",
    description: "Viruses, malware, and other types of malicious software can compromise the security and functionality of a system.",
    time: "450 min",
    imageUrl: "/images/VR1.png",
    aosAnimation: "fade-left",
    aosDelay: 450,
  },
];

export default function Repair() {
  return (
    <section className="w-full overflow-x-hidden bg-[#1C2326] py-12 text-white sm:py-16 lg:py-20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <SectionTitle
            title="Issues We Repair"
            textColor="text-white"
            className="mb-4"
          />

          <SectionHeading
            title={
              <>
                Your one-stop solution for{" "}
                <br className="hidden sm:inline" />
                all gadget repair needs
              </>
            }
            align="text-center"
            className="mb-4 mx-auto max-w-2xl text-2xl sm:text-3xl lg:text-4xl"
          />
        </div>

        {/* Repair Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {repairs.map((repair) => (
            <RepairCard
              key={repair.id}
              title={repair.title}
              description={repair.description}
              time={repair.time}
              imageUrl={repair.imageUrl}
              aosAnimation={repair.aosAnimation}
              aosDelay={repair.aosDelay}
            />
          ))}
        </div>

        <AosInit />
      </Container>
    </section>
  );
}