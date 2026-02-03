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
    text: "To be the premier body for public diplomacy and administration in Africa.",
  },
  {
    title: "Our Mission",
    icon: "flag",
    text: "Training and certifying professionals for ethical public engagement.",
  },
  {
    title: "Core Values",
    icon: "diamond",
    text: "Integrity, professionalism, and patriotism guide our work.",
  },
];

const MissionGrid = () => {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#151c24] py-16 border-y">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10 grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-[#1a222a] p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
          >
            {React.createElement(iconMap[item.icon], {
              className: "text-primary text-3xl",
            })}
            <h3 className="text-xl font-bold mt-4 text-[#111418] dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-[#637588] dark:text-gray-400 mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionGrid;
