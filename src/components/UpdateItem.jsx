import React from "react";
import { MdChevronRight, MdEvent } from "react-icons/md";

const iconMap = {
  event: MdEvent,
  // add more as needed
};

const UpdateItem = ({ update }) => {
  return (
    <div className="flex flex-col gap-3 bg-white   p-4 rounded-xl border border-slate-100   shadow-sm relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-1 h-full ${update.isOfficial ? "bg-primary" : "bg-slate-300  "}`}
      ></div>
      <div className="flex gap-4 items-start">
        <div
          className={`flex items-center justify-center rounded-lg shrink-0 h-10 w-10 ${update.iconBg}`}
        >
          {React.createElement(iconMap[update.icon] || MdEvent)}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded ${update.badgeClass}`}
            >
              {update.type}
            </span>
            <span className="text-slate-400 text-xs">• {update.date}</span>
          </div>
          <h5 className="text-slate-900    text-base font-bold leading-snug">
            {update.title}
          </h5>
          <p className="text-slate-600   text-sm leading-normal mt-1">
            {update.description}
          </p>
        </div>
      </div>
      <div className="mt-2 pl-14">
        <button className="text-slate-900    text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
          {update.buttonText} <MdChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default UpdateItem;
