import React from "react";
import { MdVisibility, MdFlag, MdDiamond } from "react-icons/md";

const iconMap = {
  visibility: MdVisibility,
  flag: MdFlag,
  diamond: MdDiamond,
};

const items = [
  {
    title: "Our Vision",
    icon: "visibility",
    text: "To create a positive work environment, work relations, and practices through robust diplomacy and practical, positive policies and actions.",
  },
  {
    title: "Our Mission",
    icon: "flag",
    text: "o professionalize public diplomacy and management with a view to training corporate leaders and managers who create sustainable prosperity worldwide.",
  },
  {
    title: "Core Values",
    icon: "diamond",
    text: "uphold the highest standards of integrity and ethics in all our relationships, both inside and outside the organization.",
  },
];

const MissionGrid = () => {
  return (
    <div className="bg-[#f8f9fa]   py-16 border-y">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white   p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
          >
            {React.createElement(iconMap[item.icon], {
              className: "text-primary text-3xl",
            })}
            <h3 className="text-xl font-bold mt-4 text-[#111418]   ">
              {item.title}
            </h3>
            <p className="text-sm text-[#637588]   mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionGrid;
