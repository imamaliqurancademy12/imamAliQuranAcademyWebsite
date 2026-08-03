import NextImage from "next/image";

export function HeroHeader() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-5 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-36 md:min-h-[85vh] md:px-10 md:pb-28 md:pt-48">
      {/* Background Library Archway */}
      <div className="absolute inset-0 -z-20">
        <NextImage
          src="/images/home/hero.webp"
          alt="Islamic library archway"
          fill
          priority
          className="h-full w-full object-cover object-[72%_center] opacity-70 md:object-center grayscale-[0.2]"
        />
      </div>

      {/* Synchronized Gradient System */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#fdfae9]/95 via-[#fdfae9]/88 to-[#fdfae9]/35 md:from-[#fdfae9] md:via-[#fdfae9]/90 md:to-[#fdfae9]/30" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#fdfae9]/45 via-transparent to-transparent md:from-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(184,150,90,0.26),transparent_56%)]" />

      {/* Content Area */}
      <div className="mx-auto w-full max-w-7xl animate-in fade-in slide-in-from-left-12 duration-1000 ease-out">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-[#B8965A]">
          About Our Academy
        </span>

    		<h1 className="max-w-4xl text-4xl font-bold leading-[0.98] text-[#0B2C3D] sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          ABOUT <span className="italic text-[#B8965A]">US</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#0B2C3D]/80 sm:text-lg md:text-xl">
  <strong>Imam Ali Quran Academy</strong> is a trusted online <strong>Shia Quran Academy</strong> dedicated to providing authentic Quran education for students across the USA, UK, Canada, Australia, and around the world. Our qualified male and female tutors offer one-on-one <strong>online Quran classes</strong>, <strong>Quran with Tajweed</strong>, <strong>Nazra Quran</strong>, <strong>Hifz Quran</strong>, <strong>Islamic Studies</strong>, and the teachings of the <strong>Ahlul Bayt (AS)</strong>. Whether you are a child, beginner, or adult, our flexible online classes help you learn the Holy Quran with confidence, strengthen your Islamic knowledge, and build a lifelong connection with Allah through personalized and engaging lessons.
</p>
      </div>
    </section>
  );
}
