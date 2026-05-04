import type { Metadata } from "next";
import EnrollForm from "@/components/enroll/enroll-form";

export const metadata: Metadata = {
  title: "Enroll | Online Quran Classes UK and Canada",
  description:
    "Join online Quran classes UK and online Quran classes Canada. Register now and connect with a Quran tutor online within 24 hours.",
  keywords: [
    "online quran classes uk",
    "online quran classes canada",
    "quran tutor online",
  ],
  openGraph: {
    title: "Enroll for Online Quran Classes",
    description:
      "Register now for online Quran classes in the UK and Canada with a Quran tutor online.",
    url: "https://imamaliquranacademy.com/enroll",
  },
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative top strip */}
      <div className="h-1 w-full bg-linear-to-r from-secondary/30 via-secondary to-secondary/30" />
      <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-32 sm:px-6 md:px-10">
        <EnrollForm />
      </div>
    </div>
  );
}
