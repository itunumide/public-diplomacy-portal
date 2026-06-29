// EventsTrainingCalendarPage.jsx
import React, { useMemo, useState } from "react";
import "../Styles/Event.css";
import training from "../Event Component/pdf.pdf"


export default function EventsTrainingCalendarPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Sites");
  const [month, setMonth] = useState("All Months");

  const sectionAItems = useMemo(
    () => [
      {
        monthLabel: "March 2026",
        city: "Minna",
        topics: ["Strategic Planning", "Administrative Efficiency"],
        kind: "bullets",
      },
      {
        monthLabel: "April / May 2026",
        city: "Abuja",
        topics: ["Strategic Crisis Management Workshop"],
        kind: "bullets",
      },
      {
        monthLabel: "May 2026",
        city: "Abuja",
        topics: ["High Impact Leaders", "Power & Administration", "Conflict Resolution"],
        kind: "chips",
      },
      {
        monthLabel: "June 2026",
        city: "Uyo & Ekiti",
        topics: ["Communication Skills", "Psychology of Influence"],
        kind: "bullets",
      },
      {
        monthLabel: "August 2026 - Port Harcourt",
        city: "Port Harcourt",
        topics: ["Work Relations", "Innovation", "Soft Power", "Negotiation Mastery"],
        kind: "tagCloud",
      },
      {
        monthLabel: "Dec 2026 - Lagos",
        city: "Lagos",
        topics: ["Defusing Friction", "Personal Effectiveness"],
        kind: "iconList",
      },
    ],
    []
  );

  const filteredSectionA = useMemo(() => {
    const q = search.trim().toLowerCase();

    return sectionAItems.filter((item) => {
      const hitsSearch =
        !q ||
        item.monthLabel.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q));

      const hitsLocation =
        location === "All Sites" ||
        item.city.toLowerCase().includes(location.toLowerCase());

      const hitsMonth =
        month === "All Months" || item.monthLabel.toLowerCase().includes(month.toLowerCase());

      return hitsSearch && hitsLocation && hitsMonth;
    });
  }, [search, location, month, sectionAItems]);

  const onReset = () => {
    setSearch("");
    setLocation("All Sites");
    setMonth("All Months");
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg-light)", color: "var(--text-dark)" }}
    >
      <div className="font-display">
        <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 py-8 lg:py-12">
          <HeroHeader />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <FilterBar
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                month={month}
                setMonth={setMonth}
                onReset={onReset}
              />

              <SectionA
                items={filteredSectionA}
                showFlagship
              />

              <SectionB />

              <SectionC />

              <SectionD />

              <SectionE />
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-8">
              <SidebarHelp />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ----------------------------- SECTIONS ----------------------------- */

function HeroHeader() {
  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-xl bg-white p-8 lg:p-12 shadow-sm border border-[#e5e7eb]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span
              className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 uppercase tracking-wider"
              style={{ background: "rgba(25,127,230,0.10)", color: "var(--primary)" }}
            >
              Professional Development
            </span>

            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Events &amp; Training Calendar
            </h1>

            <p className="text-lg font-medium mb-6" style={{ color: "var(--primary)" }}>
              2026 Programmes | Professional Training | Consultancy | International Workshops
            </p>

            <p className="text-[#637588] leading-relaxed mb-8">
              The Chartered Institute of Public Diplomacy and Management (CIPDM) is a leading
              professional body committed to advancing the art and science of public diplomacy and
              corporate management. Through rigorous training, international workshops, and dedicated
              research, we empower professionals to navigate the complexities of modern governance and
              administration.
            </p>

            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 text-white font-bold rounded-lg transition-all shadow-md"
              style={{ background: "var(--primary)" }}
              onClick={() => {}}
            >
              <span className="material-symbols-outlined text-xl">download</span>
              <a href={training} download="Cipdm Calendar 2026">
                Download 2026 Training Calendar (PDF)
              </a>
            </button>
          </div>

          <div
            className="hidden lg:block w-72 h-72 rounded-xl bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChuNypgjk9LqzYttDb3nrkXqr3erq2XNwTzU-b-sTBwAU1AnqVD1cvNg4-0VvDYNWf_y3-2N9UiFXnOrgWjbHj7XuQpstNz6I6uSi1-8HJb7bvNH9_vs1_XBawrxhi_y42hAlcF5QOYKoFEMfVmMlvsRnIynLmuslF9NtAcC7xvE_ElxMLGzyj5Ddyuf5CZistNr7ZUcvJGL8EGVPTZ3VGIqVl41xxIMrwro1DTi4bALi-2qHHdyuJcyvPrWF4hwxi1rlZ7PAgl0_N')",
            }}
            aria-label="Corporate training workshop in professional setting"
          />
        </div>
      </div>
    </section>
  );
}

function FilterBar({ search, setSearch, location, setLocation, month, setMonth, onReset }) {
  return (
    <section className="sticky top-6 z-40 mb-8 p-4 bg-white rounded-xl shadow-sm border border-[#e5e7eb] flex flex-wrap gap-4 items-end">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-[#637588] mb-2 uppercase">
          Search Topics
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#637588] text-lg">
            search
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#f6f7f8] border-none rounded-lg text-sm focus:ring-2"
            style={{ outline: "none" }}
            placeholder="e.g. Diplomacy, Strategy..."
            type="text"
          />
        </div>
      </div>

      <div className="w-full md:w-auto">
        <label className="block text-xs font-bold text-[#637588] mb-2 uppercase">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-32 py-2 bg-[#f6f7f8] border-none rounded-lg text-sm focus:ring-2"
        >
          <option>All Sites</option>
          <option>Abuja</option>
          <option>Lagos</option>
          <option>Kaduna</option>
          <option>Minna</option>
          <option>Uyo</option>
          <option>Ekiti</option>
          <option>Port Harcourt</option>
        </select>
      </div>

      <div className="w-full md:w-auto">
        <label className="block text-xs font-bold text-[#637588] mb-2 uppercase">Month</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full md:w-32 py-2 bg-[#f6f7f8] border-none rounded-lg text-sm focus:ring-2"
        >
          <option>All Months</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>August</option>
          <option>Dec</option>
          <option>November</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="px-4 py-2 border border-[#e5e7eb] rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
      >
        Reset
      </button>
    </section>
  );
}

function SectionA({ items, showFlagship = true }) {
  return (
    <section className="mb-12">
      <SectionTitle title="Section A - 2026 Professional Training Programmes" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core cards */}
        {items
          .filter((x) => !x.monthLabel.toLowerCase().includes("august") && !x.monthLabel.toLowerCase().includes("dec"))
          .slice(0, 4)
          .map((item) => (
            <TrainingCard key={`${item.monthLabel}-${item.city}`} item={item} />
          ))}

        {/* Flagship */}
        {showFlagship && <FlagshipCard />}

        {/* Additional months summary cards (match your HTML’s last two cards) */}
        {items
          .filter((x) => x.monthLabel.toLowerCase().includes("august") || x.monthLabel.toLowerCase().includes("dec"))
          .map((item) => (
            <TrainingCard key={`${item.monthLabel}-${item.city}`} item={item} />
          ))}
      </div>
    </section>
  );
}

function TrainingCard({ item }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>
            {item.monthLabel}
          </p>
          <h3 className="text-xl font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-base" style={{ color: "var(--primary)" }}>
              location_on
            </span>
            {item.city}
          </h3>
        </div>
      </div>

      {item.kind === "bullets" && (
        <ul className="space-y-3">
          {item.topics.map((t) => (
            <li key={t} className="flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
              {t}
            </li>
          ))}
        </ul>
      )}

      {item.kind === "chips" && (
        <ul className="space-y-2">
          {item.topics.map((t) => (
            <li key={t} className="text-sm font-medium p-2 bg-[#f6f7f8] rounded">
              {t}
            </li>
          ))}
        </ul>
      )}

      {item.kind === "tagCloud" && (
        <div className="flex flex-wrap gap-2">
          {item.topics.map((t) => (
            <span key={t} className="px-3 py-1 bg-[#f6f7f8] rounded-full text-xs font-bold">
              {t}
            </span>
          ))}
        </div>
      )}

      {item.kind === "iconList" && (
        <ul className="space-y-3">
          <li className="flex items-center gap-2 font-medium text-sm">
            <span className="material-symbols-outlined text-lg" style={{ color: "var(--primary)" }}>
              shield
            </span>
            {item.topics[0]}
          </li>
          <li className="flex items-center gap-2 font-medium text-sm">
            <span className="material-symbols-outlined text-lg" style={{ color: "var(--primary)" }}>
              bolt
            </span>
            {item.topics[1]}
          </li>
        </ul>
      )}
    </div>
  );
}

function FlagshipCard() {
  return (
    <div
      className="md:col-span-2 rounded-xl p-8 border-2 shadow-lg"
      style={{
        background: "rgba(25,127,230,0.06)",
        borderColor: "rgba(25,127,230,0.20)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div
          className="text-white p-4 rounded-xl flex flex-col items-center justify-center min-w-[100px]"
          style={{ background: "var(--primary)" }}
        >
          <span className="text-xs font-bold uppercase">Oct</span>
          <span className="text-2xl font-black">2026</span>
        </div>

        <div>
          <span
            className="font-black uppercase text-xs tracking-widest"
            style={{ color: "var(--primary)" }}
          >
            Flagship Event
          </span>
          <h3 className="text-2xl font-black mt-1 mb-2">National Annual Conference</h3>
          <p className="text-lg font-bold italic text-[#111418]/80">
            "Harnessing Our Diplomacy Heritage For Economic Development"
          </p>
          <p className="text-sm text-[#637588] mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span> Abuja, Nigeria
          </p>
        </div>

        <div className="ml-auto">
          <button
            type="button"
            className="px-6 py-3 text-white rounded-lg font-bold shadow-lg hover:scale-[1.02] transition-transform"
            style={{ background: "var(--primary)" }}
            onClick={() => {}}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionB() {
  return (
    <section className="mb-12">
      <SectionTitle title="Section B - International Executive Training" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InternationalCard
          country="United Kingdom"
          date="Nov 16-20, 2026"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCsUXGQkn1dHr1SEFCzwWAi9XWPeeFvCUTwgAbM3jKW0eBq3yqL-Asasf-asbqx-4hqTGa9BWo8Sf6kqqhrtspcpzWkj3rVKT2vwolmtZasYZcaSa4OBMXg7KBeIL-3G64wyLxpSmcOpwiBWp4Cou0i9hC1mViDqYs2Jo2E5bs35NTt05XgQekAV35wiPZMGZb3Ysp-8nR3RcOkHlpA0jDnakYaWP9Jk-ow79iE-hRwjVBNfgIHJrxsTKsicMKuHD-CVJDeFcVbnE6J"
          topics={[
            "Global Diplomatic Protocols",
            "Advanced Institutional Leadership",
            "International Trade Relations",
          ]}
          buttonText="Request Brochure"
        />

        <InternationalCard
          country="Kenya (Nairobi)"
          date="Aug 17-21, 2026"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGJlcWVT8p7J-wzgpecM5uVGsugSPd60Oo6FspY-0FNpVhElSo0hmnCTgLuJB3biVaDidnp6EVWC0fe8B7qYx1vHBMsUYA1BT7CEzxkUlmCZOq5PUI1teqeKj4dPWegCdJBLxXibWwy7ZG0pUvyJA1_QhyEjPUzxDNMTOZ7gFJD4x-ZtMGrnwT18dDhSY69H4agDMWtnRKv4I4GGmP_JJNt8jJV03DX4m8yYtYgFM5FTFn5XevOjEB10M66DCdPzQJl1zYZT_hhhSA"
          topics={[
            "Regional Security Cooperation",
            "Pan-African Leadership Summit",
            "Emerging Market Diplomacy",
          ]}
          buttonText="Request Brochure"
        />
      </div>

      <div className="mt-6 p-6 bg-white rounded-xl border border-dashed flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderColor: "rgba(25,127,230,0.30)" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="size-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(25,127,230,0.10)", color: "var(--primary)" }}
          >
            <span className="material-symbols-outlined text-2xl">groups</span>
          </div>
          <div>
            <h4 className="font-bold">Corporate Group Training</h4>
            <p className="text-sm text-[#637588]">
              Customized content for government agencies and private firms.
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs font-bold uppercase text-[#637588] mb-1">Call for Group Rates</p>
          <p className="text-xl font-black" style={{ color: "var(--primary)" }}>
            +234 803 123 4567
          </p>
        </div>
      </div>
    </section>
  );
}

function InternationalCard({ country, date, image, topics, buttonText }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900 text-white shadow-xl">
      <div
        className="h-40 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('${image}')` }}
        aria-label={country}
      />
      <div className="p-6 relative -mt-12">
        <div
          className="text-xs font-black px-4 py-1 rounded-full w-max mb-4"
          style={{ background: "var(--primary)" }}
        >
          {country}
        </div>

        <p className="text-xl font-bold mb-4">{date}</p>

        <ul className="space-y-2 mb-6">
          {topics.map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: "var(--primary)" }}>
                check_circle
              </span>
              {t}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => {}}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function SectionC() {
  const rows = [
    { title: "Ethics & Leadership in Public Service", month: "April 2026", location: "Consultancy HQ" },
    { title: "Effective Communication & Media Relations", month: "June 2026", location: "Abuja" },
    { title: "Global Networking Strategies", month: "August 2026", location: "Lagos" },
    { title: "Advanced Policy Analysis", month: "November 2026", location: "Kaduna" },
    { title: "Local Govt Admin & Grassroots Dev.", month: "Ongoing", location: "Abuja", highlight: true },
  ];

  return (
    <section className="mb-12">
      <SectionTitle title="Section C - Consultancy Training Schedule" />

      <div className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f6f7f8]">
              <th className="p-4 text-xs font-black uppercase text-[#637588] tracking-wider">
                Programme Title
              </th>
              <th className="p-4 text-xs font-black uppercase text-[#637588] tracking-wider">
                Month
              </th>
              <th className="p-4 text-xs font-black uppercase text-[#637588] tracking-wider">
                Location
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#e5e7eb]">
            {rows.map((r) => (
              <tr
                key={r.title}
                className={`hover:bg-[rgba(25,127,230,0.06)] transition-colors ${
                  r.highlight ? "bg-[rgba(25,127,230,0.06)]" : ""
                }`}
              >
                <td className="p-4 font-bold text-sm">{r.title}</td>
                <td className="p-4 text-sm font-medium">{r.month}</td>
                <td className={`p-4 text-sm ${r.highlight ? "font-bold" : ""}`}
                  style={r.highlight ? { color: "var(--primary)" } : undefined}
                >
                  {r.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SectionD() {
  return (
    <section className="mb-12">
      <SectionTitle title="Section D - Advanced Diploma" />

      <div
        className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden border"
        style={{ borderColor: "var(--primary)" }}
      >
        <div className="absolute top-0 right-0 p-4">
          <img
            alt="University Campus"
            className="size-20 rounded-full border-4 border-white shadow-lg object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIEZYJpX_gbb8IWKHSwrrvX5WScgDhakvX7UE87QmIlCxBlgPYa9W4PuaWktUiY9iDyeV5xbDuLFuUnDQU6u1qamo0ryUcjqQ4nJUhmq00f-2A-2zKb6w6mf9tTXijciPIV8m-JNkFg3uuN3KpvwmO-bM_AWAcy28Ip129oEmLztf_h9QAPvgJ1G6n92aXoHhZHAucVZ73nzhZg9G8qTKHvxkxCwGJFdlmqso5vHJHO6oUS7NEacO-vjn6fNiz-zthKo2mJ9KeKG6"
          />
        </div>

        <h3 className="text-2xl font-black mb-2">UNILAG Advanced Diploma Program</h3>

        <div className="flex flex-wrap gap-4 mb-6">
          <span
            className="flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", background: "rgba(25,127,230,0.10)" }}
          >
            <span className="material-symbols-outlined text-sm">schedule</span> 6 Months Duration
          </span>

          <span className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">payments</span> Competitve Fees
          </span>
        </div>

        <p className="font-bold text-sm uppercase text-[#637588] mb-4 tracking-widest">
          Curriculum Highlights
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <CurriculumItem icon="school" text="Advanced Public Relations Management" />
          <CurriculumItem icon="gavel" text="Legislative Oversight & Drafting" />
          <CurriculumItem icon="public" text="International Conflict & Resolution" />
          <CurriculumItem icon="analytics" text="Strategic Corporate Governance" />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="px-8 py-3 text-white font-bold rounded-lg shadow-md hover:scale-[1.02] transition-transform"
            style={{ background: "var(--primary)" }}
            onClick={() => {}}
          >
            Apply Now
          </button>

          <button
            type="button"
            className="px-8 py-3 border font-bold rounded-lg transition-all"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            onClick={() => {}}
          >
            Call Coordinator
          </button>
        </div>
      </div>
    </section>
  );
}

function CurriculumItem({ icon, text }) {
  return (
    <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-xl" style={{ color: "var(--primary)" }}>
        {icon}
      </span>
      <p className="text-sm font-medium text-[#111418]">{text}</p>
    </div>
  );
}

function SectionE() {
  const items = [
    { id: "01", title: "Workforce Efficiency & Talent Management" },
    { id: "02", title: "PR Management & Corporate Image Branding" },
    { id: "03", title: "Parliamentary Oversight & Governance Roles" },
  ];

  return (
    <section className="mb-12">
      <SectionTitle title="Section E - Specialized Courses" />

      <div className="space-y-2">
        {items.map((it) => (
          <AccordionItem key={it.id} id={it.id} title={it.title} />
        ))}

        <div className="p-4 text-center">
          <button
            type="button"
            className="text-sm font-bold hover:underline"
            style={{ color: "var(--primary)" }}
            onClick={() => {}}
          >
            + View 9 More Topics
          </button>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ id, title }) {
  return (
    <div className="border border-[#e5e7eb] rounded-xl bg-white overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        onClick={() => {}}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded flex items-center justify-center font-bold text-xs"
            style={{ background: "rgba(25,127,230,0.10)", color: "var(--primary)" }}
          >
            {id}
          </span>
          <span className="font-bold">{title}</span>
        </div>
        <span className="material-symbols-outlined text-[#637588]">expand_more</span>
      </button>
    </div>
  );
}

function SidebarHelp() {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm sticky top-10">
      <h3 className="text-xl font-bold mb-6">Need Help?</h3>

      <div className="space-y-6 mb-8">
        <div className="flex gap-4">
          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>
            call
          </span>
          <div>
            <p className="text-xs font-bold text-[#637588] uppercase mb-1">Phone</p>
            <p className="text-sm font-bold">+234 (0) 803 123 4567</p>
            <p className="text-sm font-bold">+234 (0) 701 987 6543</p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>
            mail
          </span>
          <div>
            <p className="text-xs font-bold text-[#637588] uppercase mb-1">Email</p>
            <p className="text-sm font-bold">info@cipdm.org</p>
            <p className="text-sm font-bold">registrar@cipdm.org</p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>
            language
          </span>
          <div>
            <p className="text-xs font-bold text-[#637588] uppercase mb-1">Website</p>
            <p className="text-sm font-bold">www.cipdm.org</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-4 text-white font-bold rounded-lg shadow-lg transition-all"
        style={{ background: "var(--primary)" }}
        onClick={() => {}}
      >
        Contact Us
      </button>

      <div className="mt-8 pt-8 border-t border-[#e5e7eb] text-center">
        <img
          alt="Seal of Quality"
          className="mx-auto size-24 grayscale opacity-50 mb-2 object-cover rounded-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgnRWXbOndmbfOSP3KzLq5ZGbYpTWogn1neAZZdOpAwCNGH_gGF_KWxcHQDo2c4FUa4b2h43WRE6XPSP72MUXW6dz8NY_iVh_qa2_nWT8Hl0gyOFIofvqNwnnpmFiCv98p1rXWxIvWLBRNYZ1BOLmUT10gyT2m6bHH5nE5qgCjU3thOz5MaYyffSZ89mAMQiqebWl5JYq-zFO8hYxnY2CL0WPa7KP_ecMg2c55IMr9iVIzXldwV5JNKWA9sRu1PHmk5o4TxoYDJlIO"
        />
        <p className="text-[10px] uppercase font-black text-[#637588] tracking-widest leading-tight">
          Accredited Professional Body of Nigeria
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-px flex-1" style={{ background: "rgba(25,127,230,0.20)" }} />
    </div>
  );
}
