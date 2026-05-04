import React from "react";
import NextImage from "next/image";

type TeacherProfile = {
  name: string;
  qualification: string;
  experience: string;
  teachingStyle: string;
  bio: string;
  image: string;
};

const teachers: TeacherProfile[] = [
  {
    name: "Sheikh Ibrahim Al-Mansour",
    qualification: "Masters in Quranic Sciences",
    experience: "15+ years",
    teachingStyle: "Clear steps and regular recitation practice",
    bio: "He helps students improve Tajweed with simple lessons and weekly feedback.",
    image: "/images/home/teacher-ibrahim.webp",
  },
  {
    name: "Ustadha Fatima Zahra",
    qualification: "Ijazah in Qira'at",
    experience: "10+ years",
    teachingStyle: "Patient, supportive, and beginner friendly",
    bio: "A trusted female Quran teacher for sisters and children who want calm and focused classes.",
    image: "/images/home/teacher-fatima.webp",
  },
  {
    name: "Dr. Mansoor Ahmed",
    qualification: "PhD in Islamic History",
    experience: "12+ years",
    teachingStyle: "Easy explanations with real examples",
    bio: "He teaches Quran and Islamic studies in a way that is easy to follow for online students.",
    image: "/images/home/teacher-monsoor.webp",
  },
];

export function TeachersGrid() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold text-[#0B2C3D] sm:text-4xl">Teacher Profiles</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5F7A8A] md:text-base">
            Each profile shows qualification, experience, and teaching style so
            you can choose the right Quran tutor online.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.name}
              className="group flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Teacher Image Container */}
              <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden" style={{ borderRadius: "2.5rem" }}>
                <NextImage
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3D]/40 to-transparent" />
              </div>

              {/* Teacher Info */}
              <div className="flex flex-col items-center text-center">
                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B8965A]">
                  Quran Tutor Online
                </span>
                <h3 className="mb-2 text-2xl font-bold text-[#0B2C3D]">
                  {teacher.name}
                </h3>
                <p className="mb-4 text-sm font-semibold italic text-[#B8965A]">
                  {teacher.qualification}
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-[#f3ead8] px-3 py-1 text-xs font-semibold text-[#0B2C3D]">
                    Experience: {teacher.experience}
                  </span>
                  <span className="rounded-full bg-[#f3ead8] px-3 py-1 text-xs font-semibold text-[#0B2C3D]">
                    Style: {teacher.teachingStyle}
                  </span>
                </div>
                <div className="mb-4 h-px w-12 bg-[#B8965A]/30" />
                <p className="max-w-xs text-base leading-relaxed text-[#5F7A8A]">
                  {teacher.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
