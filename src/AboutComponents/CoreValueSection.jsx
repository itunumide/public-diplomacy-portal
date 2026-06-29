import React from "react";
const values = [
  {
    icon: "verified_user",
    title: "Integrity",
    desc: "Upholding the highest moral and ethical standards in all professional dealings.",
  },
  {
    icon: "work_history",
    title: "Professionalism",
    desc: "Demonstrating skill, competence, and reliability in public service.",
  },
  {
    icon: "flag",
    title: "Patriotism",
    desc: "Committing to the advancement and positive image of the Nigerian nation.",
  },
  {
    icon: "stars",
    title: "Excellence",
    desc: "Striving for the highest quality in training and diplomatic practice.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-[var(--primary)] uppercase">
            Our Foundation
          </h2>
          <h3 className="text-3xl font-bold text-[var(--text-dark)] ">Core Values</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-[var(--background-light)] p-8 text-center "
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h4 className="mb-2 text-lg font-bold">{v.title}</h4>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
