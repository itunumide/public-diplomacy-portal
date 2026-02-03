import React from "react";
import { MdAssuredWorkload, MdGavel, MdPolicy } from "react-icons/md";
const TrustIndicators = () => {
  const items = [
    { icon: "assured_workload", text: "Federal Ministry\nof Education" },
    { icon: "gavel", text: "Federal Ministry\nof Justice" },
    { icon: "policy", text: "Federal Gov.\nof Nigeria" },
  ];

  const iconMap = {
    assured_workload: MdAssuredWorkload,
    gavel: MdGavel,
    policy: MdPolicy,
  };

  return (
    <div className="mt-12 border-t border-slate-200/60 dark:border-slate-800/60 pt-8 text-center">
      <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Accredited & Recognized By
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {React.createElement(iconMap[item.icon], {
              className: "text-3xl text-slate-400",
            })}
            <span className="text-xs font-bold whitespace-pre-line text-slate-600 dark:text-slate-400">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
