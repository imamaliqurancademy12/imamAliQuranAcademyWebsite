import type { Metadata } from "next";
import { HeroHeader } from "@/components/about/hero";
import { MissionVision } from "@/components/about/mission-vision";
import { StorySection } from "@/components/about/story";
import { WhyChooseUs } from "@/components/about/why-choose-us";

export const metadata: Metadata = {
  title: "About Us | Quran Tutor Online",
  description:
    "Learn about Imam Ali Quran Academy. Meet our teachers, read our story, and see how we help people learn Quran online.",
  keywords: ["quran tutor online", "female quran teacher", "learn quran online"],
  openGraph: {
    title: "About Imam Ali Quran Academy",
    description: "Meet our teachers and learn how we help students study Quran online.",
    url: "https://imamaliquranacademy.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <HeroHeader />
      <StorySection />
      <MissionVision />
      <WhyChooseUs />
    </div>
  );
}