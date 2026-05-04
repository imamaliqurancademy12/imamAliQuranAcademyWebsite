import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Imam Ali Quran Academy",
  description:
    "Have a question? Contact Imam Ali Quran Academy by phone, email, or the contact form.",
  openGraph: {
    title: "Contact Us — Imam Ali Quran Academy",
    description: "Talk to our team about enrollment, classes, and schedules.",
    url: "https://imamaliquranacademy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#fdfae9]">
      <ContactHero />
      <ContactContent />
    </div>
  );
}
