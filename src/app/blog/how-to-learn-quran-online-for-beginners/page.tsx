import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Can beginners learn Quran online from home?",
    answer:
      "Yes. Beginners can learn Quran online from home with a qualified teacher, a stable internet connection, and a simple learning plan. One-to-one classes are usually the easiest way to start.",
  },
  {
    question: "What should I learn first as a beginner?",
    answer:
      "Most beginners start with Arabic letters, correct pronunciation, and Noorani Qaida. After that, they learn short words, easy verses, tajweed rules, and Quran reading.",
  },
  {
    question: "How many classes do beginners need each week?",
    answer:
      "Two to five short classes each week are good for most beginners. Regular practice is more important than long classes, especially for kids and new learners.",
  },
  {
    question: "Do online Quran classes work for adults too?",
    answer:
      "Yes. Adults can learn very well online because the classes are flexible, private, and based on the student’s level. Many adults prefer online classes because they can study after work or family time.",
  },
  {
    question: "How do I stay motivated while learning?",
    answer:
      "Set small goals, practice daily, and learn with a supportive teacher. A regular schedule and progress tracking help students stay consistent.",
  },
];

const beginnerSteps = [
  {
    title: "Start with the basics",
    text:
      "Learn the Arabic alphabet, correct pronunciation, and simple reading rules before moving to longer verses.",
  },
  {
    title: "Choose a regular class routine",
    text:
      "Short and regular classes help beginners learn with confidence without feeling stressed.",
  },
  {
    title: "Practice between lessons",
    text:
      "A few minutes of daily practice helps beginners remember letters, words, and tajweed rules.",
  },
  {
    title: "Check progress every week",
    text:
      "A good teacher should fix mistakes early and adjust lessons according to the student’s progress.",
  },
];

const benefits = [
  "Private one-to-one classes for every student",
  "Flexible timings for kids, adults, and busy families",
  "Easy step-by-step lessons from Qaida to Quran reading",
  "Female teachers available on request",
  "Progress tracking and parent updates when needed",
  "Safe online learning from home with live teacher support",
];

export const metadata: Metadata = {
  title: "How to Learn Quran Online for Beginners | Step-by-Step Guide",
  description:
    "A simple beginner guide to learn Quran online from home. Discover the first steps, common mistakes, and how to choose the right online Quran teacher.",
  keywords: [
    "how to learn quran online for beginners",
    "learn quran online for beginners",
    "online quran classes for beginners",
    "quran learning online",
    "beginner quran lessons",
    "learn quran from home",
  ],
  alternates: {
    canonical: "https://imamaliquranacademy.com/blog/how-to-learn-quran-online-for-beginners",
  },
  openGraph: {
    title: "How to Learn Quran Online for Beginners",
    description:
      "Simple step-by-step guide for beginners who want to learn Quran online from home.",
    url: "https://imamaliquranacademy.com/blog/how-to-learn-quran-online-for-beginners",
    type: "article",
  },
};

export default function HowToLearnQuranOnlineForBeginnersPage() {
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
    headline: "How to Learn Quran Online for Beginners | Step-by-Step Guide",
    description:
      "A simple beginner guide to learn Quran online from home.",
    image: "/images/home/hero.webp",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
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
        <div className="mb-10 overflow-hidden rounded-3xl border border-secondary/20 shadow-lg">
          <Image
            src="/images/home/hero.webp"
            alt="Beginner learning Quran online from home with a qualified tutor"
            width={1200}
            height={400}
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            unoptimized
          />
        </div>

        <header className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Beginner Guide
          </p>

          <h1 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            How to Learn Quran Online for Beginners
          </h1>

          <p className="text-sm text-foreground/70">
            Published May 15, 2026 • 7 min read
          </p>
        </header>

        <section className="mb-12">
          <p className="mb-4 leading-relaxed text-foreground/85">
            Learning the Quran for the first time may feel difficult, but online classes make it easier and more flexible. Beginners can learn from home, study at their own speed, and get direct help from a teacher. If you want a full overview first, read our <Link href="/blog/best-online-quran-classes-for-kids" className="font-semibold text-secondary underline-offset-4 hover:underline">guide to the best online Quran classes</Link>.
          </p>

          <p className="mb-4 leading-relaxed text-foreground/85">
            This guide explains the first steps, what beginners should focus on, and how to build a strong learning routine. You can also explore our <Link href="/courses" className="font-semibold text-secondary underline-offset-4 hover:underline">Quran courses</Link> if you want a structured program, or check options for students in <Link href="/online-quran-classes-canada" className="font-semibold text-secondary underline-offset-4 hover:underline">Canada</Link> and <Link href="/online-quran-classes-australia" className="font-semibold text-secondary underline-offset-4 hover:underline">Australia</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Why Beginners Should Learn Quran Online
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Learn at Your Own Speed</h3>
              <p className="text-sm text-foreground/80">You can repeat lessons, ask questions, and move forward when you feel ready.</p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Comfortable Home Learning</h3>
              <p className="text-sm text-foreground/80">Beginners often feel more comfortable learning in a quiet and familiar place.</p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Personal Teacher Support</h3>
              <p className="text-sm text-foreground/80">A teacher can correct pronunciation mistakes and guide students step by step.</p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Flexible Scheduling</h3>
              <p className="text-sm text-foreground/80">Online classes make it easier to study Quran with school, work, and family routines.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Step-by-Step Way to Start
          </h2>

          <div className="space-y-4 rounded-2xl border border-secondary/20 bg-white/75 p-6 md:p-8">
            {beginnerSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-xl bg-background/70 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-sm font-bold text-secondary">{index + 1}</div>
                <div>
                  <p className="font-semibold text-primary">{step.title}</p>
                  <p className="mt-1 text-sm text-foreground/75">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            What a Good Beginner Program Should Include
          </h2>

          <div className="rounded-2xl border border-secondary/20 bg-white/75 p-6 md:p-8">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                  <p className="text-sm text-foreground/80">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Common Mistakes Beginners Should Avoid
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Trying to Learn Too Fast</h3>
              <p className="text-sm text-foreground/80">Many beginners try to read long verses before learning letters and sounds properly.</p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Skipping Daily Practice</h3>
              <p className="text-sm text-foreground/80">Short daily practice is better than one long class without revision.</p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Not Asking Questions</h3>
              <p className="text-sm text-foreground/80">Students improve faster when they ask questions and get mistakes corrected early.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="rounded-3xl border border-secondary/30 bg-[#FCD490]/30 p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Quick Tip</p>
            <h2 className="mb-3 text-2xl font-bold text-primary md:text-3xl">Start Small and Stay Consistent</h2>
            <p className="text-foreground/85">Beginners learn best when they take short classes, practice regularly, and study with a teacher who fixes mistakes early. This helps students build confidence and improve step by step.</p>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-secondary/20 bg-white/75 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Want a Structured Beginner Plan?</h2>

          <p className="mb-6 text-foreground/85">If you want guided lessons, flexible timings, and a friendly teacher, our Quran classes are designed to help beginners learn in the right way.</p>

          <p className="mb-6 text-sm text-foreground/75">
            If you came here after searching for children’s Quran classes, you can also read our <Link href="/blog/best-online-quran-classes-for-kids" className="font-semibold text-secondary underline-offset-4 hover:underline">blog on the best online Quran classes for kids</Link>.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/courses" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground">
              View Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <a href="https://wa.me/923211194725" className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Book Free Trial
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Related Resources</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/best-online-quran-classes-for-kids" className="rounded-2xl border border-secondary/20 bg-white/75 p-5 transition hover:border-secondary/40 hover:bg-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Blog</p>
              <p className="mt-2 font-semibold text-primary">Best Online Quran Classes for Kids</p>
              <p className="mt-2 text-sm text-foreground/75">A simple guide for parents looking for beginner-friendly Quran classes for kids.</p>
            </Link>

            <Link href="/courses" className="rounded-2xl border border-secondary/20 bg-white/75 p-5 transition hover:border-secondary/40 hover:bg-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Courses</p>
              <p className="mt-2 font-semibold text-primary">Browse Quran Courses</p>
              <p className="mt-2 text-sm text-foreground/75">Explore our Quran learning programs for kids and adults.</p>
            </Link>

            <Link href="/online-quran-classes-canada" className="rounded-2xl border border-secondary/20 bg-white/75 p-5 transition hover:border-secondary/40 hover:bg-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Canada</p>
              <p className="mt-2 font-semibold text-primary">Online Quran Classes in Canada</p>
              <p className="mt-2 text-sm text-foreground/75">Learn how our online Quran classes help students and families in Canada.</p>
            </Link>

            <Link href="/online-quran-classes-australia" className="rounded-2xl border border-secondary/20 bg-white/75 p-5 transition hover:border-secondary/40 hover:bg-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Australia</p>
              <p className="mt-2 font-semibold text-primary">Online Quran Classes in Australia</p>
              <p className="mt-2 text-sm text-foreground/75">See flexible Quran learning options for students in Australia.</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-secondary/20 bg-white/75 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-primary">{faq.question}</summary>
                <p className="mt-3 text-sm text-foreground/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-secondary/30 bg-[#FCD490]/30 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Start Learning Quran Online Today</h2>

          <p className="mb-6 text-foreground/85">Beginners do not need to know everything on the first day. With the right teacher and a simple routine, learning the Quran becomes easy, steady, and rewarding.</p>

          <a href="https://wa.me/923211194725" className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Book Free Trial
          </a>
        </section>
      </article>
    </div>
  );
}