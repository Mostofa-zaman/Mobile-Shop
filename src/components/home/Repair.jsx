import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SectionHeading from "../common/SectionHeading";
import RepairCard from "../cardProviders/RepairCard";

const repairs = [
  {
    id: 1,
    title: "Screen Repair",
    description: "Replacing the display screen of an electronic device.",
    time: "30 min",
    imageUrl: "/images/screen-repair.jpg",
    aosAnimation: "fade-right",
    aosDelay: 0,
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Replacing damaged or weak batteries with new ones.",
    time: "20 min",
    imageUrl: "/images/battery-repair.jpg",
    aosAnimation: "fade-right",
    aosDelay: 150,
  },
  {
    id: 3,
    title: "Charging Port Repair",
    description: "Fixing charging port issues and connection problems.",
    time: "25 min",
    imageUrl: "/images/charging-port.jpg",
    aosAnimation: "fade-right",
    aosDelay: 300,
  },
  {
    id: 4,
    title: "Water Damage Repair",
    description: "Repairing devices affected by water or liquid damage.",
    time: "45 min",
    imageUrl: "/images/water-damage.jpg",
    aosAnimation: "fade-right",
    aosDelay: 450,
  },
  {
    id: 5,
    title: "Software Repair",
    description: "Fixing software errors, bugs, and system issues.",
    time: "30 min",
    imageUrl: "/images/software-repair.jpg",
    aosAnimation: "fade-left",
    aosDelay: 0,
  },
  {
    id: 6,
    title: "Camera Repair",
    description: "Repairing faulty cameras and camera-related issues.",
    time: "35 min",
    imageUrl: "/images/camera-repair.jpg",
    aosAnimation: "fade-left",
    aosDelay: 150,
  },
  {
    id: 7,
    title: "Speaker Repair",
    description: "Fixing speaker sound issues and audio problems.",
    time: "25 min",
    imageUrl: "/images/speaker-repair.jpg",
    aosAnimation: "fade-left",
    aosDelay: 300,
  },
  {
    id: 8,
    title: "Button Repair",
    description: "Repairing damaged or unresponsive device buttons.",
    time: "20 min",
    imageUrl: "/images/button-repair.jpg",
    aosAnimation: "fade-left",
    aosDelay: 450,
  },
];

export default function Repair() {
  return (
    <section className="w-full overflow-x-hidden bg-[#1C2326] py-16 text-white">
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
                Your one-stop solution for
                <br />
                all gadget repair needs
              </>
            }
            align="text-center"
            className="mb-4 mx-auto"
          />
        </div>

        {/* Repair Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
      </Container>
    </section>
  );
}
