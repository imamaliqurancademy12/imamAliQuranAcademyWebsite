import type { Metadata } from "next";
import { FeesHeroSection } from "@/components/fees/fees-hero-section";
import { PricingGrid } from "@/components/fees/pricing-grid";

export const metadata: Metadata = {
  title: "Fees | Simple Monthly Quran Class Plans",
  description:
    "See simple monthly fee plans for Quran classes. Choose a schedule that fits your week and enroll online.",
  openGraph: {
    title: "Quran Class Fees and Plans",
    description: "Check monthly plans and choose the class schedule that works for you.",
    url: "https://imamaliquranacademy.com/fees",
  },
};

export default function FeesPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <FeesHeroSection />
      <PricingGrid />
    </div>
  );
}