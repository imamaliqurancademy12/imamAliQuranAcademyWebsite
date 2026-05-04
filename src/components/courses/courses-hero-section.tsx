import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CoursesHeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-5 py-14 sm:px-6 sm:py-16 md:min-h-[78vh] md:px-10 md:py-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/courses/hero.webp"
          alt="Sunlight in a scholarly library"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-[72%_center] opacity-70 md:object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-background/45 via-transparent to-transparent md:from-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

      <div className="mx-auto w-full max-w-7xl">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
          Quran Courses
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Online Quran Classes for
          <span className="block italic text-secondary">Kids and Beginners</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          Pick a class that fits your level. Learn Tajweed online, join online
          Hifz classes, and improve your Quran reading step by step.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/enroll"
            className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C5A059] px-8 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] sm:w-auto"
          >
            ENROLL NOW
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-secondary/60 bg-background/40 px-8 text-sm font-medium tracking-[0.12em] text-primary transition-all hover:border-secondary hover:bg-secondary/10 sm:w-auto"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
