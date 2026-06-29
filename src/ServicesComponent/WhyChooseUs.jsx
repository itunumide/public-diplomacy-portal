import React from "react";
export default function WhyChooseUsSection() {
  const items = [
    {
      icon: "verified_user",
      title: "Chartered Status",
      desc: "The only institution in Nigeria with legal standing in public diplomacy.",
    },
    {
      icon: "groups",
      title: "Expert Practitioners",
      desc: "A pool of seasoned diplomats and academics with global experience.",
    },
    {
      icon: "flag",
      title: "National Impact",
      desc: "Directly influencing Nigeria's foreign policy and global perception.",
    },
    {
      icon: "insights",
      title: "Evidence-Based",
      desc: "Methodologies rooted in rigorous data and verified outcomes.",
    },
  ];

  return (
    <section className="px-6 py-24 md:px-20 bg-white dark:bg-background-dark">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[#111418] font-bold mb-4">Why Choose the Institute</h2>
        <p className="text-[#637588] dark:text-white/60 text-lg max-w-2xl mx-auto">
          Our unparalleled status and commitment to excellence make us the preferred partner for diplomatic consultancy.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((x) => (
          <div
            key={x.title}
            className="p-8 rounded-2xl border border-primary/10 bg-background-light/30 dark:bg-white/5 hover:border-primary transition-colors flex flex-col items-center text-center"
          >
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl font-bold">{x.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-3">{x.title}</h3>
            <p className="text-sm text-[#637588]">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
