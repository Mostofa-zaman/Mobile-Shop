
    import React from "react";

    export default function PhoneRepairHeroSection() {
    return (
        <section className="w-full min-w-0 space-y-8">

        {/* Devices Banner */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-xl bg-gray-200 sm:h-[350px] md:h-[420px] lg:h-[520px]">
            <img
            src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1600&q=80"
            alt="Devices Banner"
            className="h-full w-full object-cover object-center"
            />
        </div>

        {/* Heading and Intro */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">

            {/* Heading */}
            <div>
            <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-14 bg-gray-400" />
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-600">
                CERTIFIED REPAIR
                </span>
            </div>

            <h1 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-[40px]">
                Quick, Reliable, and Affordable Phone Repairs
            </h1>
            </div>

            {/* Description */}
            <p className="text-sm leading-8 text-gray-600 sm:text-base lg:text-[18px]">
            Is your phone acting up? Don&apos;t worry, we&apos;ve got you covered!
            At ÜPhone, we specialize in fast and reliable phone repair services
            for all major brands and models. Our team of experienced technicians
            is dedicated to getting your device back to perfect working condition
            in no time.
            </p>

        </div>
        </section>
    );
    }
