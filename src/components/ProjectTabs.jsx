import React from "react";

const ProjectTabs = () => {
  const tabs = [
    { name: "All Initiatives", active: true },
    { name: "Ongoing Projects", active: false },
    { name: "Completed Projects", active: false },
    { name: "Research & Publications", active: false },
  ];

  return (
    <section className="w-full border-b border-[#dce0e5]  ">
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <a
            key={index}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 px-2 min-w-max ${
              tab.active
                ? "border-b-text-main   text-text-main   "
                : "border-b-transparent text-text-secondary   hover:text-primary   transition-colors"
            }`}
            href="#"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              {tab.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectTabs;
