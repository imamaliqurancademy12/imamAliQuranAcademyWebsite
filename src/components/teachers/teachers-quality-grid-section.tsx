import {
  BadgeCheck,
  BookOpen,
  ChartLine,
  Languages,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type QualityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const qualityItems: QualityItem[] = [
  {
    title: "Verified Qualifications",
    description:
      "Each teacher is checked for real Quran study credentials.",
    icon: BadgeCheck,
  },
  {
    title: "Teaching Training",
    description:
      "Teachers are trained to teach clearly in online classes.",
    icon: BookOpen,
  },
  {
    title: "Arabic and English",
    description:
      "Teachers can explain lessons in a simple way for more students.",
    icon: Languages,
  },
  {
    title: "Good Character",
    description:
      "Teachers are respectful, kind, and good role models.",
    icon: ShieldCheck,
  },
  {
    title: "Online Teaching Skills",
    description:
      "Teachers know how to use online tools for smooth classes.",
    icon: MonitorSmartphone,
  },
  {
    title: "Regular Review",
    description:
      "We review teacher performance and student feedback often.",
    icon: ChartLine,
  },
];

export function TeachersQualityGridSection() {
  return (
    <section
      className="py-20 md:py-24"
      style={{
        backgroundColor: "color-mix(in srgb, var(--background) 88%, var(--accent) 12%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-0 text-center md:mb-0 md:text-left">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
            Why Families Trust Our Teachers
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-foreground/70 md:mx-0">
            Every teacher follows clear quality standards, from qualifications to
            teaching style and student support.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 md:mt-22 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {qualityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-xl p-6 sm:p-8 md:p-10 lg:p-11 transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--background) 96%, white 4%)",
                  boxShadow: "0 12px 28px color-mix(in srgb, var(--foreground) 8%, transparent)",
                }}
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--secondary) 24%, transparent)",
                  }}
                >
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-2 px-0 sm:px-4 font-heading text-lg sm:text-xl font-bold text-primary">{item.title}</h3>
                <p className="px-0 sm:px-4 mb-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
