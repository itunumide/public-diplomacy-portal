import React from "react";

export default function ResearchServicesSection() {
  return (
    <section className="px-6 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-[#111418]  text-3xl font-bold leading-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">menu_book</span>
              Research &amp; Policy Services
            </h2>

            <p className="text-[#637588] text-lg leading-relaxed">
              Our academic and policy-driven research serves as the cornerstone for informed decision-making in Nigerian
              international relations.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111418] ">Academic Publications</h4>
                  <p className="text-sm text-[#637588] dark:text-white/60">
                    Rigorous journals and papers documenting diplomatic trends and foreign policy evolution.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111418]">Policy-Driven Insights</h4>
                  <p className="text-sm text-[#637588] dark:text-white/60">
                    High-impact policy briefs and whitepapers designed for state actors and global organizations.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111418] ">Data-Driven Diplomacy</h4>
                  <p className="text-sm text-[#637588] ">
                    Leveraging statistical analysis to predict international outcome and sentiment.
                  </p>
                </div>
              </li>
            </ul>

            <button className="mt-4 flex w-fit cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
              Access Research Library
            </button>
          </div>

          <div className="w-full md:w-[45%]">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg shadow-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5LOC7YBsNdn9c9bi_uWdOd62IzEJaVXGGwWFZBYsv5Xn_ftnAs6CUAFGVQjH4WD0Fm3my6SJgHJXourThQ3LMFPWc_5kF8T06Mlx1bF0SIQe6m6XB7lHRK743g989f2vWSBKlqQmxzplI_GuglquGZnVBa2O6WV7N4pOxGvRahRnEjaq3okCaOUstgHgArhv8AAwRRJ9aKw5Ek13BGB4RIW1RQ7Q8qXBxO3EOLq1RHIPNiDDCliXvu90ndUsE5F6eY61c6IxDgxEY")',
                }}
              />
              <div className="flex flex-col gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg shadow-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIp_pcLFWxamVbR7DDHz_faktQ96aSEroFQSk1rKZ2d5KUFH7_prfBbzD5ZVIriYNfsDu0szCS09fKIIMPtSTRB7zDJ-zXOfRaMjVBqqgAP01UZScubzQZPFpEKC-s7R3pdjbRTPeu6KvOugH10rY_nkvQJNnvd4SRij6PBWQgSIuHsFNftw9_QXBgeXprUt4r8Z4H2NsIbhimhNKNZGgsjw8XgwOdXs8vsc7QZujVARdpw5bbloBo6uBfTCEh55TIPzsVzamw81v0")',
                  }}
                />
                <div className="bg-primary aspect-square rounded-lg flex flex-col items-center justify-center p-6 text-white text-center">
                  <span className="text-4xl font-black">500+</span>
                  <p className="text-xs font-medium uppercase tracking-widest mt-2">Policy Papers Published</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
