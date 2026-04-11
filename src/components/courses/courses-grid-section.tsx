import { BookOpen, Star } from "lucide-react";
import Image from "next/image";

type Course = {
  title: string;
  category: string;
  level: string;
  description: string;
  rating: number;
};

const courses: Course[] = [
  {
    title: "Tajweed Mastery",
    category: "ARTICULATION",
    level: "Advanced",
    description: "Perfect the pronunciation of the Holy Quran through deep phonetics and traditional recitation methods.",
    rating: 5,
  },
  {
    title: "Quranic Translation",
    category: "LINGUISTICS",
    level: "Intermediate",
    description: "Uncover the profound meanings behind the sacred text through morphological analysis and context.",
    rating: 4,
  },
  {
    title: "Islamic History",
    category: "CIVILIZATION",
    level: "Foundation",
    description: "Journey through the golden ages of Islamic civilization, exploring philosophy, art, and leadership.",
    rating: 5,
  },
  {
    title: "Tafseer Studies",
    category: "EXEGESIS",
    level: "Advanced",
    description: "An in-depth exploration of the classical commentaries of the Quran, studying historical contexts.",
    rating: 4,
  },
  {
    title: "Qaida With Tajweed",
    category: "FOUNDATION",
    level: "Beginner",
    description: "Master Arabic phonetics and letter recognition to build a strong foundation.",
    rating: 5,
  },
  {
    title: "Basic Quran Reading",
    category: "LITERACY",
    level: "Beginner",
    description: "Develop fluency in reading the Holy Quran with correct pronunciation.",
    rating: 5,
  },
  {
    title: "Quran Memorization",
    category: "HIFZ",
    level: "Advanced",
    description: "A structured program for systematic Hifz with revision techniques.",
    rating: 5,
  },
  {
    title: "Islamic Fiqah",
    category: "JURISPRUDENCE",
    level: "Intermediate",
    description: "Understand the practical rulings of Islamic law regarding worship and daily life.",
    rating: 4,
  },
  {
    title: "Saheefa Sajjadia",
    category: "SPIRITUALITY",
    level: "Intermediate",
    description: "Explore the beautiful supplications and spiritual teachings of Imam Sajjad (as).",
    rating: 5,
  },
  {
    title: "Nehjul Balagha",
    category: "ELOQUENCE",
    level: "Advanced",
    description: "Deep dive into the sermons, letters, and wisdom of Imam Ali (as).",
    rating: 5,
  },
  {
    title: "Dua & Adhkar",
    category: "DAILY PRACTICE",
    level: "Beginner",
    description: "Learn essential daily prayers and morning/evening remembrances.",
    rating: 5,
  },
  {
    title: "Arabic Language",
    category: "LINGUISTICS",
    level: "Intermediate",
    description: "Understand the grammar and vocabulary needed to comprehend the Quran.",
    rating: 4,
  },
];

function CourseCard({ course }: { course: Course }) {
  const imageSrc = `/courses/${encodeURIComponent(course.title)}.jpg`;

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
        <div className="mt-8 pt-6 border-t border-[#775a22]/10">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${i < course.rating ? "fill-[#775a22] text-[#775a22]" : "text-[#775a22]/20"}`} 
              />
            ))}
          </div>
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