import React from "react";
import { MdBadge, MdSchool, MdGroups } from "react-icons/md";
const BenefitsGrid = () => {
  return (
    <div className="w-full max-w-[1200px] px-6 lg:px-20 pb-12 lg:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
            <MdBadge className="text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
              Professional Recognition
            </h2>
            <p className="text-[#637588] dark:text-gray-400 text-sm leading-relaxed">
              Earn the right to use prestigious post-nominal letters (ACIPD,
              FCIPD) after your name as a mark of excellence.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
            <MdSchool className="text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
              Continuous Development
            </h2>
            <p className="text-[#637588] dark:text-gray-400 text-sm leading-relaxed">
              Access world-class training, webinars, and continuous professional
              development resources tailored for diplomats.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
            <MdGroups className="text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
              Exclusive Access
            </h2>
            <p className="text-[#637588] dark:text-gray-400 text-sm leading-relaxed">
              Gain entry to high-level networking events, annual diplomatic
              summits, and policy forums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
