// MembershipPage.jsx
import React from "react";
import "../Styles/membership.css"

export default function MembershipPage() {
  return (
    <div className="font-display bg-background-light text-[#111418] antialiased">
      <HeroSection />
      <MembershipBenefits />
      <MembershipCategories />
      <UpgradeCriteria />
      <CTASection />
    </div>
  );
}



function HeroSection() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-overlay z-10" />
        <img
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJTFRHXJmwqi3AhQ6WvO6kpFGKjF8uUAvncTbpazEfdJZH0y9wfK4tVRhlYlpYPlkbvciE5RMdK6fOqWv3sm3u9kt-4AtD1JVPOAVlF5oHgzPxVdQ19aeVXU4v9GogpYZQN1-CXjyIo2nBSuClMLXwBrV8ewfIHgK0kLVq3ObQP4TRO3YkteXP8qIO_SZ5US_b7DspVn5XQ3VsMmnuW49ZZ4LJeDwqEtt509Vgcd1yzCi8cxIGSgKVY6qC81nnMNEdCxeU0BrXTo1c"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Chartered Status Excellence
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-background-dark leading-[1.1] mb-6 tracking-tight">
            Join an Elite Network of <span className="text-primary">Public Diplomats</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Elevate your professional credibility and unlock exclusive opportunities for growth
            within the global diplomatic community. The CIPD Nigeria provides the standard for
            chartered status in public diplomacy.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all">
              Become a Member
            </button>
            <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-50 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



function MembershipBenefits() {
  const benefits = [
    {
      icon: "verified",
      title: "Professional Recognition",
      desc: "Gain globally recognized credentials that signify your expertise and commitment to the highest standards of public diplomacy.",
    },
    {
      icon: "hub",
      title: "Global Networking",
      desc: "Connect with top-tier diplomats, policy makers, and international relations practitioners across our global chapter network.",
    },
    {
      icon: "school",
      title: "Continuous Learning",
      desc: "Access exclusive workshops, masterclasses, and professional certification programs to stay ahead of diplomatic trends.",
    },
    {
      icon: "policy",
      title: "Policy Influence",
      desc: "Contribute to high-level policy discussions and have your voice heard in the development of diplomatic best practices.",
    },
    {
      icon: "library_books",
      title: "Resource Access",
      desc: "Get premium access to the CIPD Journal, diplomatic archives, and exclusive research publications from the institute.",
    },
    {
      icon: "campaign",
      title: "Career Advancement",
      desc: "Unlock career mentoring, job boards, and specialized recruitment services tailored for diplomacy professionals.",
    },
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Membership Benefits"
          subtitle="Access a world of resources, recognition, and influential networks designed to accelerate your career in diplomacy and international relations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{b.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-3">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function MembershipCategories() {
  const categories = [
    {
      name: "Student",
      label: "Entry Level",
      quote: "For those currently studying IR or Diplomacy.",
      items: ["Registered undergraduate/postgraduate", "Passion for global affairs"],
      variant: "default",
    },
    {
      name: "Associate",
      label: "Early Career",
      quote: "Early-career professionals transitioning into diplomacy.",
      items: ["2+ years relevant experience", "Bachelor's Degree required"],
      variant: "default",
    },
    {
      name: "Graduate",
      label: "Mid Level",
      quote: "Professionals with solid diplomatic foundations.",
      items: ["3+ years relevant experience", "Advanced professional training"],
      variant: "default",
    },
    {
      name: "Senior",
      label: "Experienced",
      quote: "Established leaders in the field of diplomacy.",
      items: ["5+ years professional practice", "Leadership portfolio evidence"],
      variant: "featured",
    },
    {
      name: "Fellow",
      label: "Highest Honor",
      quote: "Exceptional contribution to global diplomacy.",
      items: ["10+ years distinguished service", "Nomination/Peer Review only"],
      variant: "fellow",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Membership Categories"
          subtitle="We offer five distinct tiers of membership, each tailored to your current professional standing and career aspirations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ name, label, quote, items, variant }) {
  const base =
    "flex flex-col rounded-xl overflow-hidden transition-colors border border-gray-200 hover:border-primary";
  const featured =
    "flex flex-col rounded-xl overflow-hidden shadow-lg shadow-primary/5 border-2 border-primary/20";
  const fellow =
    "flex flex-col rounded-xl overflow-hidden bg-amber-50/10 border-2 border-amber-400/30";

  const wrapClass = variant === "featured" ? featured : variant === "fellow" ? fellow : base;

  const headerClass =
    variant === "featured"
      ? "bg-primary p-6 border-b border-primary"
      : variant === "fellow"
      ? "bg-amber-400/10 p-6 border-b border-amber-400/20"
      : "bg-gray-50 p-6 border-b border-gray-100";

  const titleClass =
    variant === "featured"
      ? "text-lg font-bold text-white"
      : variant === "fellow"
      ? "text-lg font-bold text-amber-800"
      : "text-lg font-bold text-gray-800";

  const labelClass =
    variant === "featured"
      ? "text-xs font-semibold text-white/80 mt-1"
      : variant === "fellow"
      ? "text-xs font-semibold text-amber-700 mt-1"
      : "text-xs font-semibold text-primary mt-1";

  const icon =
    variant === "fellow" ? { name: "military_tech", cls: "text-amber-600" } : { name: "check_circle", cls: "text-primary" };

  return (
    <div className={wrapClass}>
      <div className={headerClass}>
        <h4 className={titleClass}>{name}</h4>
        <p className={labelClass}>{label}</p>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-sm text-gray-600 mb-4 italic">"{quote}"</p>
        <ul className="text-xs space-y-3 text-gray-500">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2">
              <span className={`material-symbols-outlined ${icon.cls} text-base`}>{icon.name}</span>
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



function UpgradeCriteria() {
  const rows = [
    {
      stage: "Associate to Graduate",
      dot: "bg-primary",
      experience: "3+ years in Associate grade",
      education: "CIPD Professional Certificate",
      contribution: "Active committee participation",
    },
    {
      stage: "Graduate to Senior",
      dot: "bg-primary",
      experience: "5+ years in Graduate grade",
      education: "Master's Degree or Equivalent",
      contribution: "Lead project coordination or authorship",
    },
    {
      stage: "Senior to Fellow",
      dot: "bg-amber-500",
      experience: "By special application/nomination",
      education: "Chartered Status with the Institute",
      contribution: "Distinguished service to the Institute",
    },
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-background-dark mb-4">Membership Upgrade Criteria</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-5 text-sm font-bold text-gray-700">Progression Stage</th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-700">Years of Experience</th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-700">
                    Educational Qualification
                  </th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-700">
                    Professional Contribution
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {rows.map((r) => (
                  <tr key={r.stage} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className={`size-2 rounded-full ${r.dot}`} />
                        <span className="font-semibold">{r.stage}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-600 font-medium">{r.experience}</td>
                    <td className="px-8 py-6 text-sm text-gray-600">{r.education}</td>
                    <td className="px-8 py-6 text-sm text-gray-600">{r.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-primary/5 text-center">
            <p className="text-sm text-gray-600 font-medium">
              All upgrades require a formal submission of a Professional Development Portfolio (PDP).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



function CTASection() {
  return (
    <section className="py-24 bg-background-dark text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-black mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl text-gray-400">
              Join over 5,000 public diplomacy professionals in Nigeria and across the globe. Start
              your journey toward chartered status today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <a href="/signup">
                Apply Online Now
              </a>
            </button>
            <button className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/5 transition-colors">
              Inquiry Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-background-dark mb-4">{title}</h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-6" />
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
