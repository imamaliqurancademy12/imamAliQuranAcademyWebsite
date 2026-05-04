import Image from "next/image";

const teachers = [
	{
		name: "Dr. Ibrahim Al-Azhar",
		role: "Quran Teacher",
		quote: "I help students learn Quran with care and clear steps.",
		image: "/images/home/teacher-ibrahim.webp",
	},
	{
		name: "Sheikh Mansoor Ali",
		role: "Tajweed Teacher",
		quote: "I teach Tajweed in a simple way so students can recite well.",
		image: "/images/home/teacher-monsoor.webp",
	},
	{
		name: "Ustadha Fatima Zahra",
		role: "Hifz Teacher",
		quote: "I support students who want to remember the Quran.",
		image: "/images/home/teacher-fatima.webp",
	},
];

export function TeachersPreviewSection() {
	return (
		<section className="bg-accent/12 py-20 md:py-24">
			<div className="mx-auto w-full max-w-7xl px-6 md:px-10">
				<div className="mb-12 text-center md:mb-16">
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
						Our Teachers
					</p>
					<h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
						Meet Our Quran Teachers
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 md:text-base">
						Our teachers help kids, adults, and beginners learn in a simple and
						friendly way.
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
