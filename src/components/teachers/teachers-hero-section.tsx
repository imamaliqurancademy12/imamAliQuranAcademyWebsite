import NextImage from "next/image";
import Link from "next/link";
import { BookOpenText } from "lucide-react";

export function TeachersHeroSection() {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:min-h-[65vh] md:px-10 md:pb-24 md:pt-40">
      <div className="absolute inset-0 -z-20">
        <NextImage
          src="/images/teachers/hero.png"
          alt="Sunlight in a scholarly library with islamic arches"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-[72%_center] opacity-70 md:object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-background/45 via-transparent to-transparent md:from-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
          Our Teaching Team
        </span>

        <h1 className="max-w-4xl text-left text-4xl font-bold leading-[1.02] text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          OUR <span className="italic text-secondary">TEACHERS</span>
        </h1>

        <p className="mt-7 max-w-2xl text-left text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          Meet our Quran tutor online team, including a female Quran teacher.
          Learn about each teacher's profile, experience, and teaching style.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-secondary/60 bg-background/40 px-8 text-sm font-medium tracking-[0.12em] text-primary transition-all hover:border-secondary hover:bg-secondary/10 sm:w-auto"
          >
            VIEW COURSES
          </Link>
          <Link
            href="/enroll"
            className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C5A059] px-8 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] sm:w-auto"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-5">
        <BookOpenText className="h-28 w-28 sm:h-40 sm:w-40 md:h-72 md:w-72" style={{ color: "var(--foreground)" }} />
      </div>
    </section>
  );
}
