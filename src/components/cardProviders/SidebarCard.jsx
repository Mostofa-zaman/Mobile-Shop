
import Image from 'next/image';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export default function SidebarCard() {
  return (
    <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-xl p-6 text-white shadow-xl sm:p-8 md:min-h-[500px] md:p-12 lg:p-16">

      {/* Background Image */}
      <Image
        src="/images/BR1.png"
        alt="Repair Background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute -z-20 object-cover object-center transition-transform duration-700 hover:scale-105"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/65" />

      {/* Main Content */}
      <div className="relative z-10 w-full text-center">

        <SectionTitle title="Gadget Specialist" />

        {/* Heading */}
        <h2 className="mx-auto mb-5 w-full max-w-[190px] text-2xl font-extrabold leading-tight text-white sm:max-w-[260px] sm:text-3xl md:max-w-[320px] md:text-4xl lg:w-[190px] lg:max-w-none">
          <span className="lg:block">Stop</span>
          <span className="lg:block">worry and</span>
          <span className="lg:block">send your</span>
          <span className="lg:block">gadget to</span>
          <span className="lg:block">us</span>
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mb-8 max-w-[500px] text-sm leading-relaxed text-zinc-200 sm:text-base">
          Let’s get your gadget working like new again—visit us today or contact us to schedule your repair!
        </p>

        {/* Call to Action Button */}
        <div>
          <Button children="Book a Repair" />
        </div>

      </div>
    </div>
  );
}
