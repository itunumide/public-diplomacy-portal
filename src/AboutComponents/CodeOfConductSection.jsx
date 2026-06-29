import React from "react";
const conduct = [
  {
    icon: "gavel",
    title: "Legal Compliance",
    desc: "Strict adherence to national and international laws governing diplomatic engagements.",
  },
  {
    icon: "lock",
    title: "Confidentiality",
    desc: "Safeguarding sensitive information and respecting the privacy of state and organizational data.",
  },
  {
    icon: "handshake",
    title: "Accountability",
    desc: "Taking responsibility for professional actions and decisions at all levels of practice.",
  },
  {
    icon: "balance",
    title: "Impartiality",
    desc: "Providing objective and unbiased advisory services without prejudice or favor.",
  },
  {
    icon: "diversity_3",
    title: "Social Responsibility",
    desc: "Contributing positively to the welfare and development of the Nigerian society.",
  },
  {
    icon: "school",
    title: "Continuous Growth",
    desc: "Commitment to lifelong learning and professional skill enhancement.",
  },
];

export default function CodeOfConductSection() {
  return (
    <section className="border-t border-gray-200 bg-[var(--background-light)] px-6 py-20 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
        <div className="lg:w-1/3">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-[var(--primary)] uppercase">
            Professional Standards
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-[var(--text-dark)]">
            Code of Conduct
          </h3>
          <p className="mb-8 leading-relaxed text-gray-600 ">
            The Institute maintains strict adherence to professional ethics to ensure the integrity of public
            diplomacy as a profession in Nigeria and globally.
          </p>

          <div className="rounded-lg border-l-4 border-[var(--primary)] bg-[var(--primary)]/5 p-6">
            <p className="text-sm font-medium italic text-gray-700 ">
              “A diplomat is one who can tell you to go to hell in such a way that you actually look forward
              to the trip.”
            </p>
          </div>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:w-2/3">
          {conduct.map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="shrink-0 text-[var(--primary)]">
                <span className="material-symbols-outlined">{c.icon}</span>
              </div>
              <div>
                <h4 className="mb-2 font-bold">{c.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
