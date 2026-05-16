import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Can kids learn Quran online effectively?",
    answer:
      "Yes. Kids can learn Quran online very well when they study one-to-one with a good teacher. It helps them learn at their own speed and get personal attention. Many studies show online Quran classes can be as good or even better than physical classes.",
  },
  {
    question: "What age is best to start Quran classes?",
    answer:
      "Children can start Quran learning from around 4–5 years old. The best time is when they can sit for 20–30 minutes and follow simple instructions. We adjust lessons based on each child’s age and ability.",
  },
  {
    question: "Do you offer female Quran teachers?",
    answer:
      "Yes. We have female Quran teachers available for girls and families who prefer a female tutor. Parents can choose this during the free trial.",
  },
  {
    question: "How long does it take to learn Quran online?",
    answer:
      "It depends on the student. Basic reading (Noorani Qaida) usually takes 3–6 months with regular classes. Tajweed and Hifz take longer depending on practice and consistency.",
  },
  {
    question: "Are online Quran classes safe for kids?",
    answer:
      "Yes. Classes are one-to-one and fully supervised. We make sure the environment is safe, respectful, and parents can track progress easily.",
  },
];

export const metadata: Metadata = {
  title: "Best Online Quran Classes for Kids in Canada and Australia (2026)",
  description:
    "Simple guide to find the best online Quran classes for kids. Compare Canada and Australia programs with one-to-one learning and flexible timings.",
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
      "Easy guide to online Quran classes for kids in Canada and Australia.",
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
      "Simple guide to find the best online Quran classes for kids in Canada and Australia.",
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

        {/* Hero Image */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-secondary/20 shadow-lg">
          <Image
            src="/images/home/hero.webp"
            alt="Kids learning Quran online with qualified tutors"
            width={1200}
            height={400}
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            unoptimized
          />
        </div>

        {/* Title */}
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

        {/* Intro */}
        <section className="mb-12">
          <p className="mb-4 leading-relaxed text-foreground/85">
            Choosing the right Quran class for your child is very important. This guide helps parents in Canada and Australia find safe and good online Quran classes.
          </p>

          <p className="mb-4 leading-relaxed text-foreground/85">
            Online Quran classes are becoming very popular because they are flexible and easy for kids. Here we explain what to look for in a good class. If you are starting from the basics, you can also read our <Link href="/blog/how-to-learn-quran-online-for-beginners" className="font-semibold text-secondary underline-offset-4 hover:underline">beginner guide to learn Quran online</Link>.
          </p>
        </section>

        {/* Why Online Classes */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Why Online Quran Classes Are Growing in 2026
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Easy Access</h3>
              <p className="text-sm text-foreground/80">
                No need to travel. Kids can learn from home easily.
              </p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Safe Learning</h3>
              <p className="text-sm text-foreground/80">
                Parents can see progress and learning happens in a safe home environment.
              </p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Best Teachers</h3>
              <p className="text-sm text-foreground/80">
                Students can learn from expert teachers anywhere in the world.
              </p>
            </div>

            <div className="rounded-xl border border-secondary/20 bg-white/70 p-6">
              <h3 className="mb-2 font-semibold text-primary">Flexible Timing</h3>
              <p className="text-sm text-foreground/80">
                Classes can be adjusted according to school and family time.
              </p>
            </div>
          </div>
        </section>

        {/* Best Way */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Best Way to Learn Quran Online for Kids
          </h2>

          <div className="rounded-2xl border border-secondary/20 bg-white/75 p-6 md:p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">One-to-One Classes</p>
                  <p className="text-sm text-foreground/75">
                    Each child gets personal attention from the teacher.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Step-by-Step Learning</p>
                  <p className="text-sm text-foreground/75">
                    Students follow a clear learning plan from basics to advanced levels.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">Skilled Teachers</p>
                  <p className="text-sm text-foreground/75">
                    Teachers help children learn Quran correctly and easily.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-secondary/20 bg-white/75 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-foreground/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-secondary/30 bg-[#FCD490]/30 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
            Start Your Child’s Quran Journey Today
          </h2>

          <p className="mb-6 text-foreground/85">
            Give your child the chance to learn Quran with a qualified and caring teacher.
          </p>

          <a
            href="https://wa.me/923211194725"
            className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Book Free Trial
          </a>
        </section>
      </article>
    </div>
  );
}