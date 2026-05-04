import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users, Star } from "lucide-react"

const trustPoints = [
	{
		label: "Friendly teachers",
		description: "Our teachers help you learn with care and patience.",
		Icon: GraduationCap,
	},
	{
		label: "Kids and adults",
		description: "We teach children, adults, and new students.",
		Icon: Users,
	},
	{
		label: "Easy for beginners",
		description: "We start from the basics and move slowly.",
		Icon: BookOpen,
	},
]

export function HeroBanner() {
	return (
		<section className="relative min-h-[70vh] overflow-hidden px-5 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-32 md:min-h-[78vh] md:px-10 md:pb-28 md:pt-36">
			<div className="absolute inset-0 -z-20">
				<Image
					src="/images/home/hero.webp"
					alt="Library shelves and books"
					fill
					sizes="100vw"
					priority
					className="object-cover object-[72%_center] opacity-70 md:object-center"
				/>
			</div>

			<div className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/88 to-background/35 md:from-background md:via-background/90 md:to-background/30" />

			<div className="absolute inset-0 -z-10 bg-linear-to-t from-background/45 via-transparent to-transparent md:from-transparent" />

			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(196,160,97,0.26),transparent_56%)]" />

			<div className="mx-auto w-full max-w-7xl">
				<div className="mb-6 flex flex-wrap items-center gap-3">
					<div className="flex items-center gap-1 text-secondary">
						{Array.from({ length: 5 }).map((_, index) => (
							<Star key={index} className="h-4 w-4 fill-current" />
						))}
					</div>
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
						Trusted Quran Learning
					</p>
				</div>

				<h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.05] text-primary sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl">
					Online Quran
					<span className="ml-3 block italic text-secondary md:inline">Academy</span>
				</h1>

				<p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:mb-10 md:text-xl">
					Learn Quran online with friendly teachers. Our live classes are for
					kids, adults, and beginners. We help you read Quran step by step.
				</p>

				<div className="mb-8 grid gap-3 sm:grid-cols-3 md:mb-10">
					{trustPoints.map((point) => (
						<div
							key={point.label}
							className="rounded-2xl border border-secondary/15 bg-background/72 p-4 shadow-sm backdrop-blur-sm"
						>
							<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/12 text-secondary">
								<point.Icon className="h-5 w-5" />
							</div>
							<h2 className="mb-1 text-sm font-semibold text-primary">
								{point.label}
							</h2>
							<p className="text-xs leading-relaxed text-foreground/72">
								{point.description}
							</p>
						</div>
					))}
				</div>

				<div className="flex flex-wrap gap-3 pt-1 md:gap-4">
					<Link
						href="/courses"
						className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-secondary/60 bg-background/40 px-8 text-sm font-medium tracking-[0.12em] text-primary transition-all hover:border-secondary hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 sm:w-auto"
					>
						VIEW CLASSES
					</Link>

					<Link
						href="/enroll"
						className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C5A059] px-8 text-sm font-bold tracking-[0.12em] text-[#1A1A1A] shadow-sm transition-all hover:bg-[#d3b26b] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] focus-visible:outline-none focus-visible:ring-2 sm:w-auto"
					>
						ENROLL NOW
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>

					<Link
						href="/contact"
						className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-secondary/60 bg-background/40 px-8 text-sm font-medium tracking-[0.12em] text-primary transition-all hover:border-secondary hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 sm:w-auto"
					>
						CONTACT US
					</Link>
				</div>
			</div>
		</section>
	)
}
