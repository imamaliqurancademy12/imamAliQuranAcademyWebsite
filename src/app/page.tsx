import type { Metadata } from "next";
import { FeaturedCoursesSection } from "@/components/home/featured-courses-section";

export const metadata: Metadata = {
  title: "Online Quran Academy | Learn Quran Online",
  description:
    "Imam Ali Quran Academy teaches Quran online for kids, beginners, and adults. Join live classes with friendly teachers and learn step by step.",
  keywords: [
    "online quran academy",
    "learn quran online",
    "online quran classes for beginners",
    "online quran classes",
    "quran classes for kids",
    "quran classes for adults",
  ],
  openGraph: {
    title: "Online Quran Academy | Learn Quran Online",
    description:
      "Live Quran classes for kids, beginners, and adults with friendly teachers.",
    url: "https://imamaliquranacademy.com",
  },
};
import { HeroBanner } from "@/components/home/hero-banner";
import { TeachersPreviewSection } from "@/components/home/teachers-preview-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedCoursesSection />
      <TeachersPreviewSection />
      <WhyChooseUsSection />
    </>
  );
}