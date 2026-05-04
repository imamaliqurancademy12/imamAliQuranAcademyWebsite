import Image from "next/image";

export function StorySection() {
  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:gap-20 md:px-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-['Noto_Serif'] text-3xl font-bold text-[#00334D] md:mb-8 md:text-4xl">
            Our Story <br />
            <i className="font-normal text-[#775a22]">Imam Ali Online Quran Academy</i>
          </h2>
          <p className="mb-0 text-base leading-relaxed text-[#00334D]/70 md:mb-0 md:text-lg">
            Imam Ali Online Quran Academy started with a simple goal: make Quran
            learning easy for people at home. We believe distance should not stop
            anyone from learning the Quran.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:mt-20 md:grid-cols-2">
  {/* First card: full width */}
  <div className="md:col-span-2 rounded-lg border border-[#4b3a7a] bg-[#2f2357] p-4 shadow-md sm:p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a3a85] text-[#e6deff] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6L2 12l10 6 10-6-10-6z" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#f2ecff]">Simple online learning</h3>
        <p className="text-sm text-[#ddd2ff]/90">
          We use live online classes and simple lessons so students can learn with
          ease and stay connected to Quran learning.
        </p>
      </div>
    </div>
  </div>

  {/* Second card: dark blue */}
  <div className="rounded-lg border border-[#1f5c50] bg-[#0f4a3d] p-4 text-[#a8f2dc] shadow-md sm:p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f6a5a] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#d9fff1]">How we teach</h3>
        <p className="text-sm text-[#cbf7e8]/90">
          We keep lessons calm, clear, and easy to follow.
        </p>
      </div>
    </div>
  </div>

  {/* Third card: light beige */}
  <div className="rounded-lg border border-[#d39a3b] bg-[#fff0d6] p-4 text-[#6a3e00] shadow-md sm:p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe2b8] shadow-sm">
        {/* Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-[#7a4700]">Students from many places</h3>
        <p className="text-sm text-[#855425]/90">
          People from different countries can join our Quran classes online.
        </p>
      </div>
    </div>
  </div>
</div>

          <p className="mt-6 text-sm leading-relaxed text-[#00334D]/65 md:text-base">
            Female Quran teacher support is available for sisters and children who
            feel more comfortable learning with a female tutor.
          </p>
        </div>

        <div className="relative pb-4 md:translate-x-10 md:pb-24 lg:translate-x-16">
          <div className="relative z-10 ml-auto w-full max-w-[320px] overflow-hidden rounded-lg border-8 border-[#fdfae9] shadow-2xl transition-transform duration-500 md:max-w-none md:w-[420px] md:rotate-2 md:hover:rotate-0">
            <Image
              src="/images/about/img.webp"
              alt="Student studying"
              width={420}
              height={240}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="z-20 mt-6 max-w-sm border-l-4 border-[#C4A061] bg-[#fdfae9] p-5 sm:p-8 shadow-xl md:absolute md:-bottom-10 md:-left-10 md:mt-0">
            <p className="mb-4 font-['Noto_Serif'] text-lg italic  text-secondary">
              &ldquo;Learning the Quran is a path of light for every home.&rdquo;
            </p>
            <span className="text-[10px] font-bold tracking-widest text-[#775a22] uppercase">— Our Belief</span>
          </div>
        </div>
      </div>
    </section>
  );
}