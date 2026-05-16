import React from "react";
import Link from "next/link";

type Currency = {
  label: string;
  value: string;
};

const convertFromUSD = (usd: number): Currency[] => {
  const cad = usd * 1.38;
  const eur = usd * 0.86;
  const gbp = usd * 0.75;
  const aud = usd * 1.4;

  return [
    { label: "USD", value: `$${usd}` },
    { label: "Canada", value: `CAD $${cad.toFixed(0)}` },
    { label: "AUD", value: `AUD $${aud.toFixed(0)}` },
    { label: "UK", value: `£${gbp.toFixed(0)}` },
    { label: "Europe", value: `€${eur.toFixed(0)}` },
  ];
};

const feeSections = [
  {
    heading: "Weekday Classes (Monday to Friday)",
    plans: [
      {
        title: "1 Day / Week",
        subtitle: "4 Days / Month",
        duration: "30 Minutes / Day",
        usd: 30,
        badge: "Basic",
        buttonLabel: "Select Plan",
      },
      {
        title: "2 Days / Week",
        subtitle: "8 Days / Month",
        duration: "30 Minutes / Day",
        usd: 35,
        badge: "Standard",
        buttonLabel: "Select Plan",
      },
      {
        title: "3 Days / Week",
        subtitle: "12 Days / Month",
        duration: "30 Minutes / Day",
        usd: 40,
        badge: "Popular",
        buttonLabel: "Select Plan",
      },
      {
        title: "4 Days / Week",
        subtitle: "16 Days / Month",
        duration: "30 Minutes / Day",
        usd: 45,
        badge: "Advanced",
        buttonLabel: "Select Plan",
      },
      {
        title: "5 Days / Week",
        subtitle: "20 Days / Month",
        duration: "30 Minutes / Day",
        usd: 55,
        badge: "Best Value",
        buttonLabel: "Select Plan",
      },
    ],
  },
  {
    heading: "Weekend Classes (Saturday and Sunday)",
    plans: [
      {
        title: "Saturday Only",
        subtitle: "4 Days / Month",
        duration: "45 Minutes / Day",
        usd: 35,
        badge: "Weekend",
        buttonLabel: "Select Plan",
      },
      {
        title: "Sunday Only",
        subtitle: "4 Days / Month",
        duration: "45 Minutes / Day",
        usd: 35,
        badge: "Weekend",
        buttonLabel: "Select Plan",
      },
      {
        title: "Saturday + Sunday",
        subtitle: "8 Days / Month",
        duration: "45 Minutes / Day",
        usd: 60,
        badge: "Working Professionals",
        buttonLabel: "Select Plan",
      },
    ],
  },
];

export function PricingGrid() {
  return (
    <section className="bg-[#fdfae9] py-20 px-5 md:py-28 md:px-10">
      <div className="mx-auto max-w-7xl space-y-20">
        {feeSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0B2C3D] sm:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F7A8A]">
                Pick the plan that fits your week. All prices are clear and easy to compare.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${
                sectionIndex === 0 ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-3 lg:grid-cols-3"
              }`}
            >
              {section.plans.map((plan, index) => {
                const currencies = convertFromUSD(plan.usd);

                return (
                  <article
                    key={index}
                    className="flex h-full min-h-120 flex-col overflow-hidden rounded-[2rem] border-2 border-[#B8965A] bg-white/95 shadow-[0_18px_40px_rgba(11,44,61,0.08)] transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex h-14 items-center justify-center rounded-t-[1.5rem] bg-[#f3ead8] text-center text-[#0B2C3D] font-semibold text-xl sm:text-2xl">
                      <h3 className="whitespace-nowrap px-4">{plan.title}</h3>
                    </div>

                    <div className="flex grow flex-col gap-6 p-8 pb-10">
                      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#0B2C3D]/80">
                        {plan.subtitle}
                      </p>

                      <div className="inline-flex items-center rounded-full border border-[#E0D6BC] bg-[#F8F3E8] px-4 py-2 text-sm font-semibold text-[#0B2C3D]">
                        {plan.duration}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-semibold text-[#B8965A]">
                            ${plan.usd}
                          </span>
                          <span className="pb-1 text-sm font-medium text-[#5F7A8A]">
                            / month
                          </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                          {currencies.map((currency, i) => (
                            <span
                              key={i}
                              className="inline-flex min-w-22.5 items-center justify-center rounded-full border border-[#E9E3D4] bg-[#F7F3EB] px-3 py-2 text-[11px] font-semibold text-[#0B2C3D]"
                            >
                              {currency.label}: {currency.value}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Link
                          href="/enroll"
                          className="flex h-12 items-center justify-center rounded-full bg-[#B48C4D] px-10 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#9b783f]"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}