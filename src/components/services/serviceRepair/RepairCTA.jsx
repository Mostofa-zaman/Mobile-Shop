import React from "react";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function RepairCTA() {
  return (
    <section className="w-full bg-[#FFD700] py-10 text-black">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HiCheckCircle className="text-2xl text-black flex-shrink-0" />
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
            Quick, reliable, and affordable gadget repairs
          </h3>
        </div>

        <Link href="/#book-repair">
          <Button
            children="Book a Repair"
            bgColor="bg-black"
            textColor="text-white"
            hoverBgColor="shadow-lg hover:bg-gray-800"
          />
        </Link>
      </Container>
    </section>
  );
}