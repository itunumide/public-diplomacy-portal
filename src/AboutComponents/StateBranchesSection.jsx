import React from "react";
const branches = [
  {
    icon: "location_on",
    title: "Lagos State Branch",
    tagline: "The Commercial Hub",
    address: "169, Ikorodu Road, (1st Floor) Awoyokun B/Stop, Between Palmgroove & Onipanu B/Stop, Lagos State.",
    phone: "08030731170",
    email: "lagos@cipdnigeria.org",
  },
  {
    icon: "account_balance",
    title: "FCT Abuja Branch",
    tagline: "The Administrative Hub",
    address: "Suit 101, National Council of Women Society Building (NCWS) by FCDA Area 11, Garki, Abuja",
    phone: "08023592726, 08185719565",
    email: "fct@cipdnigeria.org",
  },
  {
    icon: "waves",
    title: "Rivers State Branch",
    tagline: "The Regional Energy Hub",
    address: "1st Floor, No 30, Trans-Woji Road, Woji P.H",
    phone: "07030603899, 08030731170",
    email: "rivers@cipdnigeria.org",
  },
];

export default function StateBranchesSection() {
  return (
    <section className="bg-white px-6 py-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-[var(--primary)] uppercase">
            Regional Presence
          </h2>
          <h3 className="text-3xl font-bold text-[var(--text-dark)]">
            State Branches
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 ">
            Connecting professionals across Nigeria through our strategically located regional hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {branches.map((b) => (
            <div
              key={b.title}
              className="group overflow-hidden rounded-xl bg-[var(--background-light)] shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-3 bg-[var(--primary)]" />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--primary)]">{b.icon}</span>
                  <h4 className="text-xl font-bold">{b.title}</h4>
                </div>

                <p className="mb-6 text-sm italic text-gray-600 dark:text-gray-400">{b.tagline}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-gray-400">
                      map
                    </span>
                    <p className="text-sm">{b.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-gray-400">
                      call
                    </span>
                    <p className="text-sm">{b.phone}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-gray-400">
                      mail
                    </span>
                    <p className="text-sm">{b.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
