import React from "react";
const Badge = () => (
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-1 backdrop-blur-sm">
    <span className="h-2 w-2 rounded-full bg-green-500" />
    <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
      Official Portal
    </span>
  </div>
);

export default Badge;
