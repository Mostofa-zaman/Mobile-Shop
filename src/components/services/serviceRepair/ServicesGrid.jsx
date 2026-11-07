import ServiceCard from "@/components/cardProviders/ServiceCard";
import Container from "@/components/common/Container";
import React from "react";

const servicesData = [
  {
    id: "01",
    title: "Screen Repair",
    description:
      "Replacing the display screen of an electronic device, such as a smartphone, tablet, laptop, or television.",
    imageSrc: "/images/ourimage1.png",
  },
  {
    id: "02",
    title: "Battery Replacement",
    description:
      "Over time, batteries can degrade, leading to decreased performance, reduced battery life, or complete failure.",
    imageSrc: "/images/battery.jpg",
  },
  {
    id: "03",
    title: "Water Damage Repair",
    description:
      "Repairing water-damaged devices by fixing corrosion, short circuits, and other internal component issues.",
    imageSrc: "/images/water-damage.jpg",
  },
  {
    id: "04",
    title: "Data Recovery",
    description:
      "Retrieving or restoring inaccessible, lost, corrupted, or accidentally deleted data from storage.",
    imageSrc: "/images/data-recovery.jpg",
  },
  {
    id: "05",
    title: "Charging Port Repair",
    description:
      "Fixing damaged or loose charging ports to restore proper charging and connectivity.",
    imageSrc: "/images/charging-port.jpg",
  },
  {
    id: "06",
    title: "Camera Repair",
    description:
      "Repairing faulty front and rear cameras to restore clear photos, videos, and camera functionality.",
    imageSrc: "/images/camera-repair.jpg",
  },
  {
    id: "07",
    title: "Speaker Repair",
    description:
      "Fixing speaker and microphone issues to restore clear audio during calls, music, and video playback.",
    imageSrc: "/images/speaker-repair.jpg",
  },
  {
    id: "08",
    title: "Software Troubleshooting",
    description:
      "Resolving software errors, system crashes, slow performance, and other operating system issues.",
    imageSrc: "/images/software-repair.jpg",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#211e1e]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;