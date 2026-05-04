import type { Metadata } from "next";

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
    <div className="pt-[100px]">
        <CoursesHeroSection />
        <SearchSection />
        <CoursesGridSection />
        <CoursesSpotlightSection />
    </div>
  );
}