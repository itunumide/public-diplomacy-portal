import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 border-b border-slate-200   pb-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-primary"></div>
        <h2 className="text-slate-900    text-3xl font-bold leading-tight tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-slate-500   text-base pl-4.5">{description}</p>
    </div>
  );
};

export default SectionHeader;
