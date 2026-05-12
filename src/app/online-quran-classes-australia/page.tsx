import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, MonitorPlay } from "lucide-react";

const courseItems = [
  "Noorani Qaida",
  "Tajweed",
  "Hifz",
  "Basic Quran Reading",
];

const reasons = [
  "1-on-1 classes with individual recitation correction",
  "Male and female Quran tutors available",
  "Flexible class timings for school and work routines",
  "Clear Tajweed focus for correct pronunciation",
  "Easy teaching style for beginners and kids",
];

const faqItems = [
  {
    question: "Do you offer a free trial class in Australia?",
    answer:
      "Yes. You can book a free trial class to check our teaching style and choose the right teacher before joining.",
  },
  {
    question: "Can beginners and children join?",
    answer:
      "Yes. Our classes are for kids, beginners, and adults. We adjust speed and lessons for each student.",
  },
  {
    question: "Which Australian time zones do you support?",
    answer:
      "We support AEST, AEDT, ACST, and AWST with morning and evening class timings.",
  },
  {
    question: "Do you provide female Quran teachers?",
    answer:
      "Yes. Female teachers are available for sisters and families who prefer them.",
  },
];

const testimonials = [
  {
    name: "Parent in Sydney",
    quote:
      "My daughter now reads with confidence and enjoys her classes. The teacher is kind and always on time.",
  },
  {
    name: "Student in Melbourne",
    quote:
      "I joined for Tajweed and saw big improvement in my pronunciation within one month.",
  },
];

export const metadata: Metadata = {
  title: "Online Quran Classes in Australia for Kids and Adults",
  description:
    "Join online Quran classes in Australia with expert male and female tutors. Learn Noorani Qaida, Tajweed, Hifz, and basic Quran reading with flexible timings.",
  keywords: [
    "online quran classes in australia",
    "quran tutor australia",
    "online quran teacher australia",
    "quran classes for beginners australia",
    "learn quran online in australia",
  ],
  alternates: {
    canonical: "https://imamaliquranacademy.com/online-quran-classes-australia",
  },
  openGraph: {
    title: "Online Quran Classes in Australia for Kids and Adults",
    description:
      "Easy and flexible online Quran classes for Australian students with qualified teachers.",
    url: "https://imamaliquranacademy.com/online-quran-classes-australia",
    type: "website",
  },
};

export default function OnlineQuranClassesAustraliaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-background pt-30 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="rounded-3xl border border-secondary/20 bg-linear-to-br from-primary to-[#005a78] px-6 py-10 text-primary-foreground shadow-lg md:px-10 md:py-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FCD490]">
            Australia Landing Page
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Online Quran Classes in Australia for Kids and Adults
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Looking for online Quran classes in Australia? We connect you with trained teachers for one-on-one learning at home.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Our classes are for families, working people, and beginners. You can learn at your own pace with simple and short lessons.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            We teach students across Australia including Sydney, Melbourne, Brisbane, Perth, Adelaide, and Canberra with flexible timings.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-6 md:px-10">
        <div className="mb-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Why Choose Us</h2>
            <ul className="mt-6 grid gap-4">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 rounded-xl border border-secondary/20 bg-white/70 p-4 text-sm text-foreground/90"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden border border-secondary/20 shadow-lg">
            <Image
              src="/images/home/hero.webp"
              alt="Students learning Quran online in Australia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Courses We Offer in Australia
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courseItems.map((course) => (
            <div
              key={course}
              className="rounded-2xl border border-secondary/20 bg-accent/20 p-5 text-sm font-semibold text-primary"
            >
              {course}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
        <div className="rounded-2xl border border-secondary/20 bg-white/70 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Teaching Method
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-black/5 bg-background p-4">
              <MonitorPlay className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-primary">Live Classes</p>
              <p className="mt-2 text-sm text-foreground/75">
                Live online sessions with direct listening and correction.
              </p>
            </div>

            <div className="rounded-xl border border-black/5 bg-background p-4">
              <CheckCircle2 className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-primary">Personal Attention</p>
              <p className="mt-2 text-sm text-foreground/75">
                Each student gets personal feedback and support.
              </p>
            </div>

            <div className="rounded-xl border border-black/5 bg-background p-4">
              <CheckCircle2 className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-primary">Simple Learning Plan</p>
              <p className="mt-2 text-sm text-foreground/75">
                Step-by-step learning from basics to advanced level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Testimonials
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-secondary/20 bg-white/80 p-5"
            >
              <p className="text-sm text-foreground/85">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-xs font-bold text-secondary">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-3">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl border border-secondary/20 bg-white/75 p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-primary">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-foreground/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-10">
        <div className="rounded-3xl border border-secondary/30 bg-[#FCD490]/30 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Book Free Trial Class
          </h2>

          <p className="mt-3 text-sm text-foreground/80">
            Message us on WhatsApp to book your free trial class and choose a time that suits you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923211194725"
              className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Book Trial
            </a>

            <Link
              href="/enroll"
              className="inline-flex items-center rounded-full border px-6 py-3 text-xs font-bold text-primary"
            >
              Enroll
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}