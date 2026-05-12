import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses | Online Quran Classes for Kids and Beginners",
  description:
    "Join online Quran classes for kids and beginners. Learn Tajweed online, join online Hifz classes, and study Quran step by step.",
  keywords: [
    "online quran classes for kids",
    "online quran classes for beginners",
    "learn tajweed online",
    "online hifz classes",
    "quran tutor online",
  ],
  openGraph: {
    title: "Online Quran Classes for Kids and Beginners",
    description:
      "Learn Tajweed online and join online Hifz classes with friendly live teachers.",
    url: "https://imamaliquranacademy.com/courses",
  },
};
import { CoursesHeroSection } from "@/components/courses/courses-hero-section";
import { SearchSection } from "@/components/courses/search-section";
import { CoursesGridSection } from "@/components/courses/courses-grid-section";
import { CoursesSpotlightSection } from "@/components/courses/courses-spotlight-section";


export  default function Courses() {
  return (
    <div className="pt-25">
        <CoursesHeroSection />
        <SearchSection />
        <CoursesGridSection />
        <CoursesSpotlightSection />
        <section className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10">
          <div className="rounded-2xl border border-secondary/20 bg-white/70 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Popular Regional Pages
            </p>
            <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
              Looking for classes by region?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-foreground/75">
              Visit our dedicated country pages with focused details for local families, class timings, and trial booking.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/online-quran-classes-canada"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Online Quran Classes in Canada
              </Link>
              <Link
                href="/online-quran-classes-australia"
                className="inline-flex rounded-full border border-primary/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/5"
              >
                Online Quran Classes in Australia
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10">
          <div className="rounded-2xl border border-secondary/20 bg-white/70 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Resources & Guides
            </p>
            <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
              Learn Best Practices for Quran Learning
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-foreground/75">
              Read our comprehensive guide on finding the best online Quran classes for kids, with expert insights and parent tips.
            </p>
            <Link
              href="/blog/best-online-quran-classes-for-kids"
              className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read: Best Online Quran Classes for Kids
            </Link>
          </div>
        </section>
    </div>
  );
}