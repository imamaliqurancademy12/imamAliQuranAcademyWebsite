import type { Metadata } from "next";
import { TeachersHeroSection } from "@/components/teachers/teachers-hero-section";
import { TeachersGrid } from "@/components/teachers/teachers-grid";
import { TeachersQualityGridSection } from "@/components/teachers/teachers-quality-grid-section";
import { TeachersSelectionJourneySection } from "@/components/teachers/teachers-selection-journey-section";

export const metadata: Metadata = {
  title: "Teachers | Quran Tutor Online and Female Quran Teacher",
  description:
    "Meet our Quran tutor online team, including a female Quran teacher. See teacher profiles, years of experience, and teaching style.",
  keywords: ["female quran teacher", "quran tutor online", "online quran teachers"],
  openGraph: {
    title: "Teacher Profiles | Imam Ali Quran Academy",
    description: "Meet our online Quran tutors and view their experience and teaching style.",
    url: "https://imamaliquranacademy.com/teachers",
  },
};

export default function TeachersPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <TeachersHeroSection />
      <TeachersGrid />
      <TeachersQualityGridSection />
      <TeachersSelectionJourneySection />
    </div>
  );
}
