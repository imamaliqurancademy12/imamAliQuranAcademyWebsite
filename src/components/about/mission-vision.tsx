import React from "react";

export function MissionVision() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Our Mission */}
          <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl md:text-5xl">
                Our <span className="italic text-[#B8965A]">Mission</span>
            </h2>
            <div className="h-1 w-16 rounded-full bg-[#B8965A]/40" />
            <p className="text-lg leading-loose text-[#5F7A8A] md:text-xl">
                To make authentic Quran and Shia Islamic education simple, accessible, and meaningful for students everywhere, while helping learners develop a strong connection with the Holy Quran and the teachings of the Ahlul Bayt (AS).
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-right-12 duration-1000 ease-out delay-200">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0B2C3D] sm:text-4xl md:text-5xl">
                Our <span className="italic text-[#B8965A]">Vision</span>
            </h2>
            <div className="h-1 w-16 rounded-full bg-[#B8965A]/40" />
            <p className="text-lg leading-loose text-[#5F7A8A] md:text-xl">
                To help Shia Muslim students around the world learn the Quran with confidence, strengthen their Islamic knowledge, and grow in faith, character, and understanding through the guidance of the Quran and Ahlul Bayt (AS).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
