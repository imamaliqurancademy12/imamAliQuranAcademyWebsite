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
    title: "Online Shia Quran Classes for Kids",
    category: "KIDS",
    level: "Beginner",
    description: "Help your child learn Quran reading, pronunciation, and basic Islamic knowledge through engaging online lessons with patient teachers.",
    rating: 5,
    image: "/images/courses/tajweed.webp",
    enrollCourse: "foundation",
  },
  {
    title: "Online Shia Quran Classes for Beginners",
    category: "BEGINNER",
    level: "Beginner",
    description: "Start learning the Quran from the basics with step-by-step online lessons designed for new learners of any age.",
    rating: 4,
    image: "/images/courses/translation.webp",
    enrollCourse: "foundation",
  },
  {
    title: "Shia Quran Tajweed Classes Online",
    category: "TAJWEED",
    level: "All Levels",
    description: "Improve your Quran recitation by learning Tajweed rules, correct pronunciation, and proper letter articulation with live teacher guidance.",
    rating: 5,
    image: "/images/courses/history.webp",
    enrollCourse: "tajweed",
  },
  {
    title: "Online Shia Hifz Classes",
    category: "HIFZ",
    level: "All Levels",
    description: "Memorize the Quran through structured lessons, regular revision, and personalized guidance from an experienced Hifz teacher.",
    rating: 4,
    image: "/images/courses/tfseer.webp",
    enrollCourse: "immersive",
  },
  {
    title: "Shia Qaida with Tajweed",
    category: "FOUNDATION",
    level: "Beginner",
    description: "Learn Arabic letters, pronunciation, sounds, and basic Tajweed rules before progressing to full Quran reading.",
    rating: 5,
    image: "/images/courses/Qaida With Tajweed.jpg",
    enrollCourse: "foundation",
  },
  {
    title: "Basic Quran Reading for Beginners",
    category: "LITERACY",
    level: "Beginner",
    description: "Build confidence in Quran reading through guided practice, correct pronunciation, and step-by-step lessons.",
    rating: 5,
    image: "/images/courses/Basic Quran Reading.jpg",
    enrollCourse: "steady",
  },
  {
    title: "Online Quran Memorization & Hifz",
    category: "HIFZ",
    level: "ALL LEVELS",
    description: "Follow a structured memorization plan with regular revision and teacher support to build consistent Quran memorization.",
    rating: 5,
    image: "/images/courses/Quran Memorization.webp",
    enrollCourse: "immersive",
  },
  {
    title: "Shia Islamic Fiqh Classes",
    category: "JURISPRUDENCE",
    level: "Intermediate",
    description: "Learn Shia Islamic rulings and practical guidance for worship and daily life according to Ja'fari jurisprudence.",
    rating: 4,
    image: "/images/courses/Islamic Fiqah.jpeg",
    enrollCourse: "dedicated",
  },
  {
    title: "Saheefa Sajjadia",
    category: "SPIRITUALITY",
    level: "Intermediate",
    description: "Study selected supplications from Al-Sahifa al-Sajjadiyya, understand their meanings, and learn the spiritual teachings of Imam Zain al-Abidin (as).",
    rating: 5,
    image: "/images/courses/Saheefa Sajjadia.png",
    enrollCourse: "dedicated",
  },
  {
    title: "Nehjul Balagha",
    category: "ELOQUENCE",
    level: "Advanced",
    description: "Explore the sermons, letters, and sayings of Imam Ali (as) and discover their guidance on faith, character, leadership, and everyday life.",
    rating: 5,
    image: "/images/courses/Nehjul Balagha.webp",
    enrollCourse: "dedicated",
  },
  {
    title: "Dua & Adhkar",
    category: "DAILY PRACTICE",
    level: "Beginner",
    description: "Learn important daily duas and adhkar from Shia Islamic tradition, understand their meanings, and build a stronger daily connection with Allah.",
    rating: 5,
    image: "/images/courses/Dua & Adhkar.png",
    enrollCourse: "foundation",
  },
  {
    title: "Arabic Language for Quran Understanding",
    category: "LANGUAGE",
    level: "Intermediate",
    description: "Build essential Arabic vocabulary and grammar skills to better understand Quranic Arabic and the meanings of verses and Islamic texts.",
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
