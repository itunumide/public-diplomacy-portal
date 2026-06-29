import React from "react";

export default function StrategicConsultancySection() {
  const cards = [
    {
      icon: "account_balance",
      title: "Government Relations",
      desc: "Advising on statecraft and bilateral relations at all levels of government.",
    },
    {
      icon: "public",
      title: "International Branding",
      desc: "Crafting a resilient and positive public image for the nation on the global stage.",
    },
    {
      icon: "warning",
      title: "Crisis Diplomacy",
      desc: "Providing strategic communication frameworks during international tensions.",
    },
    {
      icon: "trending_up",
      title: "Strategic Foresight",
      desc: "Analyzing geopolitical shifts to advise on future policy directions.",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-20 bg-background-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-[#111418] text-3xl font-bold leading-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
              Strategic Consultancy
            </h2>

            <p className="text-[#637588] text-lg leading-relaxed">
              We provide high-level advisory services to government bodies and private organizations, focusing on
              international image management and global positioning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="p-5 rounded-xl bg-white border border-primary/10 shadow-sm"
                >
                  <span className="material-symbols-outlined text-primary mb-2">{c.icon}</span>
                  <h4 className="font-bold mb-1">{c.title}</h4>
                  <p className="text-xs text-[#637588] ">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-xl overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwtk8Nn3lnzEFT_wP8TVQu1vwL7bPo0QtwKmHS-ojkT9eSHPweycTDpjBYFS3YluHuio8nd0FekFFc0Y-Bm08F8By4DGRMHqOKuvlC2Nmm-67CsMF3cHJwTii6L0iEnKs9UiaAosB1qoLNcHApAKVyHFrqaiqvhI3O8oAGUV_zID4sUMNG2S9htomvTlj2XDSPeyDcMHeuHd0a36651tHMLLz1cYo6cnyMQTydoz1zSy8PZenwwPFoiqcyI20JniLf857E_kIg240j")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
