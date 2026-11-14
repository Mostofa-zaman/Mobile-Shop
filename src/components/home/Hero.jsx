import Container from "../common/Container";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] bg-gray-400 text-white flex flex-col justify-between overflow-hidden">

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
      <Container className="relative z-10 flex flex-col items-center text-center pt-16 sm:pt-20 lg:pt-24">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-8">
          <span className="w-8 sm:w-12 h-[2px] bg-white/80 inline-block" />

          <span className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-white/90 uppercase">
            WELCOME TO ÜPHONE
          </span>
        </div>
      </Container>

      {/* Bottom Phone Lineup */}
      <div className="relative z-10 w-full flex justify-center items-end mt-auto pt-1 sm:pt-2 lg:pt-0 px-4 lg:px-0 overflow-hidden">
        <img
          src="/images/Heroimage.png"
          alt="Multiple Smartphones Lineup"
          className="w-full max-w-[350px] sm:max-w-sm lg:max-w-5xl object-contain object-bottom drop-shadow-2xl"
        />
      </div>

    </section>
  );
}