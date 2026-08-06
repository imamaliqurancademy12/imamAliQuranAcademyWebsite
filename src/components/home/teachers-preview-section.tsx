import Image from "next/image";

const teachers = [
	{
		name: "Qualified Male Quran Teacher",
		role: "Quran & Tajweed Instructor",
		quote: "Learn Quran reading, Tajweed, Nazra, memorization (Hifz), and daily Islamic teachings through personalized one-on-one online classes designed for students of every age and level..",
		image: "/images/home/teacher-ibrahim.webp",
	},
	{
		name: "Certified Shia Quran Teacher",
		role: "Advanced Tajweed Teacherr",
		quote: "Improve your Quran recitation with proper Makharij, Tajweed rules, and practical guidance. Our lessons help students recite the Holy Quran confidently and correctly.",
		image: "/images/home/teacher-monsoor.webp",
	},
	{
		name: "Qualified Female Quran Teacher",
		role: "Ladies & Kids Quran Teacherr",
		quote: "Female students and children can learn in a comfortable and respectful environment with experienced female Quran teachers offering live online classes and flexible schedules.",
		image: "/images/home/teacher-fatima.webp",
	},
];

<div className="mt-12 text-center max-w-4xl mx-auto">
  <p className="text-lg leading-8 text-foreground/80">
    At Imam Ali Quran Academy, our dedicated online Quran teachers are committed to helping students of all ages learn Quran with Tajweed, Hifz, Islamic Studies, Duas, and daily prayers through live one-on-one classes. Whether you are a beginner or an advanced learner, our personalized teaching approach makes learning simple, effective, and enjoyable.
  </p>
</div>

export function TeachersPreviewSection() {
	return (
		<section className="bg-accent/12 py-20 md:py-24">
			<div className="mx-auto w-full max-w-7xl px-6 md:px-10">
				<div className="mb-12 text-center md:mb-16">
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
						QUALIFIED SHIA QURAN TEACHERS
					</p>
					<h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
						Meet Our Certified Shia Quran Teachers
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-base">
						At Imam Ali Quran Academy, our qualified male and female Shia Quran teachers provide one-on-one online classes for children, adults, and beginners. Learn Quran Reading, Noorani Qaida, Tajweed, Hifz, Islamic Studies, Duas, and Nahjul Balagha with patient tutors dedicated to authentic teachings of Ahlul Bayt (AS). We proudly teach students in the USA, UK, Canada, Australia, and worldwide.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					{teachers.map((teacher) => (
						<article key={teacher.name} className="group flex flex-col  items-center">
							<div className="relative mb-7 w-full aspect-4/5 overflow-hidden border border-secondary/25 bg-background">
								<Image
									src={teacher.image}
									alt={teacher.name}
									fill
									className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
								/>
								<div className="pointer-events-none absolute inset-2 border border-secondary/35 transition duration-300 group-hover:inset-1" />
							</div>

							<h3 className="mb-1 text-center text-2xl font-semibold text-primary">
								{teacher.name}
							</h3>
							<p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-secondary">
								{teacher.role}
							</p>
							<p className="max-w-sm text-center text-sm leading-relaxed text-foreground/75">
								{teacher.quote}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
