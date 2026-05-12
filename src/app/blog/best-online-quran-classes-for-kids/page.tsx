import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Can kids learn Quran online effectively?",
    answer:
      "Yes. Online Quran learning for kids is highly effective when taught 1-on-1 with a qualified tutor. Kids benefit from personalized pacing, visual feedback, and a distraction-free environment. Studies show that structured online Quran classes produce the same or better results compared to in-person classes.",
  },
  {
    question: "What age is best to start Quran classes?",
    answer:
      "Kids can start learning Quran from age 4-5 onwards. The best age is when a child can sit for 20-30 minutes and follow basic instructions. Our academy tailors lesson length and pace based on age and maturity level.",
  },
  {
    question: "Do you offer female Quran teachers?",
    answer:
      "Yes. We have female Quran tutors available for kids, especially girls, and families who prefer female instructors. Parents can request their preferred teacher gender during trial booking.",
  },
  {
    question: "How long does it take to learn Quran online?",
    answer:
      "Learning pace varies by student. Basic Quran reading (Noorani Qaida level) typically takes 3-6 months with consistent weekly classes. Tajweed and Hifz programs are longer-term, depending on student commitment and prior knowledge.",
  },
  {
    question: "Are online Quran classes safe for kids?",
    answer:
      "Yes. Our online classes are fully supervised, one-on-one sessions with qualified teachers. We prioritize a respectful, safe learning environment with transparent progress tracking for parents.",
  },
];

const benefits = [
  "Qualified and experienced Quran tutors",
  "Female teachers available for sisters and children",
  "Real-time progress tracking and parent updates",
  "Flexible scheduling for busy families",
  "Structured curriculum from Qaida to Hifz",
  "Kid-friendly teaching approach with short, focused sessions",
];

export const metadata: Metadata = {
  title: "Best Online Quran Classes for Kids in Canada and Australia (2026)",
  description:
    "Complete guide to finding the best online Quran classes for kids. Compare Canada and Australia programs with 1-on-1 tutoring, flexible schedules, and qualified teachers.",
  keywords: [
    "best online quran classes for kids",
    "quran classes for kids canada",
    "quran classes for kids australia",
    "online quran tutor kids",
    "learn quran online kids",
    "best quran academy for children",
  ],
  alternates: {
    canonical: "https://imamaliquranacademy.com/blog/best-online-quran-classes-for-kids",
  },
  openGraph: {
    title: "Best Online Quran Classes for Kids in Canada and Australia",
    description:
      "Expert guide to online Quran classes for kids with comparison of programs in Canada and Australia.",
    url: "https://imamaliquranacademy.com/blog/best-online-quran-classes-for-kids",
    type: "article",
  },
};

export default function BestQuranClassesForKidsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Online Quran Classes for Kids in Canada and Australia (2026)",
    description:
      "Complete guide to finding the best online Quran classes for kids in Canada and Australia.",
    image: "/images/home/hero.webp",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: {
      "@type": "Organization",
      name: "Imam Ali Quran Academy",
    },
  };

  return (
    <div className="bg-background pt-30 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto w-full max-w-4xl px-6 md:px-10">
        {/* Hero Section */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-secondary/20 shadow-lg">
          <Image
            src="/images/home/hero.webp"
            alt="Kids learning Quran online with qualified tutors in best Quran academy"
            width={1200}
            height={400}
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>

        {/* Title & Metadata */}
        <header className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Complete Guide
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Best Online Quran Classes for Kids in Canada and Australia (2026)
          </h1>
          <p className="text-sm text-foreground/70">
            Published May 12, 2026 • 8 min read
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 leading-relaxed text-foreground/85">
            Choosing the right Quran class for your child matters. This guide helps parents in Canada and Australia pick safe, effective online classes.
          </p>
          <p className="mb-4 leading-relaxed text-foreground/85">
            Online Quran classes are popular because they are flexible and work well for children. We explain what to look for and how our programs help.
          </p>
        </section>

        {/* Why Online Quran Classes Are Growing */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Why Online Quran Classes Are Growing in 2026
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Convenience</h3>
              <p className="text-sm text-foreground/80">
                No travel time. Classes happen from home on a schedule that fits your family.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Safety</h3>
              <p className="text-sm text-foreground/80">
                Learn in a secure home environment with direct parent visibility.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Access to Experts</h3>
              <p className="text-sm text-foreground/80">
                Connect with qualified Quran tutors globally, not just locally.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Flexibility</h3>
              <p className="text-sm text-foreground/80">
                Adapt class times to school schedules, time zones, and family routines.
              </p>
            </div>
          </div>
        </section>

        {/* Best Way to Learn Quran Online for Kids */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Best Way to Learn Quran Online for Kids
          </h2>
          <div className="rounded-2xl border border-secondary/20 bg-white/75 p-6 md:p-8">
            <p className="mb-6 leading-relaxed text-foreground/85">
              The most effective approach to online Quran learning for kids combines three key elements:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">1-on-1 Classes</p>
                  <p className="text-sm text-foreground/75">
                    One teacher per student allows personalized pacing and real-time correction of recitation.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Structured Syllabus</p>
                  <p className="text-sm text-foreground/75">
                    A clear learning path from Noorani Qaida through Tajweed and Hifz keeps progress measurable.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Qualified, Experienced Tutors</p>
                  <p className="text-sm text-foreground/75">
                    Teachers trained in teaching methodology plus Islamic knowledge ensure effective instruction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Canada & Australia Families Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Why Canada & Australia Families Prefer Online Quran Learning
          </h2>
          <div className="mb-8 rounded-2xl border border-secondary/20 bg-white/75 p-6 md:p-8">
            <p className="mb-6 leading-relaxed text-foreground/85">
              Families in Canada and Australia face unique challenges when seeking quality Quran education. Limited access to local qualified tutors, demanding school and work schedules, and geographic spread mean parents often struggle to find consistent, reliable Quran classes.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Online classes solve this by offering flexible scheduling across different time zones (Canadian ET, CT, MT, PT and Australian AEST, ACST, AWST), access to experienced tutors regardless of location, and the ability to pause or adjust classes around exams, holidays, and family events.
            </p>
          </div>
        </section>

        {/* What Makes a Good Quran Academy */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            What Makes a Good Quran Academy for Kids
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-secondary/20 bg-white/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-foreground/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How Our Academy Helps Students */}
        <section className="mb-12 rounded-2xl border border-secondary/20 bg-linear-to-br from-primary/5 to-secondary/5 p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            How Imam Ali Quran Academy Helps Students
          </h2>
          <p className="mb-6 leading-relaxed text-foreground/85">
            We understand what families need because we have been teaching Quran online since 2023. Our academy serves students across Canada and Australia with dedicated, location-specific programs designed around local needs and schedules.
          </p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-4 font-semibold text-primary">
                <Link href="/online-quran-classes-canada" className="hover:text-secondary">
                  Online Quran Classes in Canada
                </Link>
              </h3>
              <p className="mb-4 text-sm text-foreground/80">
                Programs tailored for Canadian families with flexible scheduling across all Canadian time zones (ET, CT, MT, PT). We help kids develop strong Quran reading skills with Tajweed focus and consistent one-on-one guidance.
              </p>
              <Link
                href="/online-quran-classes-canada"
                className="inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:underline"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-4 font-semibold text-primary">
                <Link href="/online-quran-classes-australia" className="hover:text-secondary">
                  Online Quran Classes in Australia
                </Link>
              </h3>
              <p className="mb-4 text-sm text-foreground/80">
                Australian families get dedicated support with class times matching AEST, ACST, and AWST zones. We serve students from Sydney, Melbourne, Brisbane, Perth, and beyond with the same expert instruction and care.
              </p>
              <Link
                href="/online-quran-classes-australia"
                className="inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:underline"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <p className="leading-relaxed text-foreground/85">
            Both programs include weekly progress updates for parents, flexible scheduling, access to male and female tutors, and a free trial class so you can evaluate fit before committing.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-secondary/20 bg-white/75 p-4"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="rounded-3xl border border-secondary/30 bg-[#FCD490]/30 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
            Start Your Child Quran Journey Today
          </h2>
          <p className="mb-6 leading-relaxed text-foreground/85">
            The best time to start is now. Give your child access to clear, caring Quran lessons with a qualified tutor.
          </p>
          <p className="mb-6 text-sm font-semibold text-primary">
            Book a free trial within 24 hours to try a lesson and meet a tutor.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/923211194725?text=Assalamualaikum%2C%20I%20want%20to%20book%20a%20free%20trial%20Quran%20class%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Book Free Trial Class
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.13em] text-primary transition-colors hover:bg-primary/5"
            >
              View All Courses
            </Link>
          </div>

          <p className="mt-6 text-xs text-foreground/70">
            Available for families in Canada, Australia, and worldwide. English and Urdu instruction. 1-on-1 live Zoom classes. Progress tracking included.
          </p>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-secondary/20 pt-8">
          <h3 className="mb-4 font-semibold text-primary">Related Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/online-quran-classes-canada" className="text-sm text-secondary hover:underline">
                → Online Quran Classes in Canada
              </Link>
            </li>
            <li>
              <Link href="/online-quran-classes-australia" className="text-sm text-secondary hover:underline">
                → Online Quran Classes in Australia
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-sm text-secondary hover:underline">
                → All Quran Courses & Programs
              </Link>
            </li>
            <li>
              <Link href="/fees" className="text-sm text-secondary hover:underline">
                → Pricing & Fee Plans
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
