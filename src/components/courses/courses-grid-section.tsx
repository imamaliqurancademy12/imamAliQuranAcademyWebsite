import { BookOpen, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Course = {
  title: string;
  category: string;
  level: string;
  description: string;
  rating: number;
  image: string;
  enrollCourse: string;
};

const courses: Course[] = [
  {
    title: "Online Quran Classes for Kids",
    category: "KIDS",
    level: "Beginner",
    description: "Fun and simple Quran classes for kids with patient teachers.",
    rating: 5,
    image: "/images/courses/tajweed.webp",
    enrollCourse: "foundation",
  },
  {
    title: "Online Quran Classes for Beginners",
    category: "BEGINNER",
    level: "Beginner",
    description: "Start from the basics and learn Quran reading step by step.",
    rating: 4,
    image: "/images/courses/translation.webp",
    enrollCourse: "foundation",
  },
  {
    title: "Learn Tajweed Online",
    category: "TAJWEED",
    level: "All Levels",
    description: "Learn Tajweed rules in a clear and easy way with live feedback.",
    rating: 5,
    image: "/images/courses/history.webp",
    enrollCourse: "tajweed",
  },
  {
    title: "Online Hifz Classes",
    category: "HIFZ",
    level: "All Levels",
    description: "Memorize Quran with daily plans, revision, and teacher support.",
    rating: 4,
    image: "/images/courses/tfseer.webp",
    enrollCourse: "immersive",
  },
  {
    title: "Qaida With Tajweed",
    category: "FOUNDATION",
    level: "Beginner",
    description: "Learn Arabic letters and sounds before full Quran reading.",
    rating: 5,
    image: "/images/courses/Qaida With Tajweed.jpg",
    enrollCourse: "foundation",
  },
  {
    title: "Basic Quran Reading",
    category: "LITERACY",
    level: "Beginner",
    description: "Improve your Quran reading with easy guided practice.",
    rating: 5,
    image: "/images/courses/Basic Quran Reading.jpg",
    enrollCourse: "steady",
  },
  {
    title: "Quran Memorization",
    category: "HIFZ",
    level: "Advanced",
    description: "Follow a clear Hifz plan with regular revision.",
    rating: 5,
    image: "/images/courses/Quran Memorization.webp",
    enrollCourse: "immersive",
  },
  {
    title: "Islamic Fiqah",
    category: "JURISPRUDENCE",
    level: "Intermediate",
    description: "Learn basic Islamic rulings for worship and daily life.",
    rating: 4,
    image: "/images/courses/Islamic Fiqah.jpeg",
    enrollCourse: "dedicated",
  },
  {
    title: "Saheefa Sajjadia",
    category: "SPIRITUALITY",
    level: "Intermediate",
    description: "Learn selected duas and their simple meanings.",
    rating: 5,
    image: "/images/courses/Saheefa Sajjadia.png",
    enrollCourse: "dedicated",
  },
  {
    title: "Nehjul Balagha",
    category: "ELOQUENCE",
    level: "Advanced",
    description: "Read important sayings and lessons from Imam Ali (as).",
    rating: 5,
    image: "/images/courses/Nehjul Balagha.webp",
    enrollCourse: "dedicated",
  },
  {
    title: "Dua & Adhkar",
    category: "DAILY PRACTICE",
    level: "Beginner",
    description: "Learn daily duas and simple adhkar for every day.",
    rating: 5,
    image: "/images/courses/Dua & Adhkar.png",
    enrollCourse: "foundation",
  },
  {
    title: "Arabic Language",
    category: "LINGUISTICS",
    level: "Intermediate",
    description: "Build Arabic words and grammar for better Quran understanding.",
    rating: 4,
    image: "/images/courses/Arabic Language.jpg",
    enrollCourse: "steady",
  },
];

function CourseCard({ course }: { course: Course }) {
  const imageSrc = course.image;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#775a22]/20 bg-[#fdfae9] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Image Section with Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
        <Image
          src={imageSrc}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-10 rounded bg-[#001d2e] px-3 py-1 text-[10px] font-bold tracking-widest text-[#fdfae9] uppercase">
          {course.level}
        </div>
      </div>

      {/* Content Section - Uses space-between for alignment */}
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#775a22]" />
            <span className="text-[10px] font-bold tracking-widest text-[#775a22]/70 uppercase">
              {course.category}
            </span>
          </div>

          <h3 className="mb-4 font-heading text-xl font-bold text-[#001d2e] line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm leading-relaxed text-[#001d2e]/70 line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Rating Section - Fixed to bottom */}
        <div className="mt-8 border-t border-[#775a22]/10 pt-6">
          <div className="mb-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${i < course.rating ? "fill-[#775a22] text-[#775a22]" : "text-[#775a22]/20"}`} 
              />
            ))}
          </div>
          <Link
            href={`/enroll?course=${course.enrollCourse}`}
            className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C5A059] px-5 text-xs font-bold tracking-[0.12em] text-[#1A1A1A] transition-all hover:bg-[#d3b26b]"
          >
            ENROLL FOR THIS COURSE
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CoursesGridSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
