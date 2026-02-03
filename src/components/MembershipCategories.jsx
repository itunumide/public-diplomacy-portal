import React from "react";
import {
  MdWorkHistory,
  MdSchool,
  MdVerified,
  MdArrowForward,
  MdDownload,
} from "react-icons/md";
const MembershipCategories = () => {
  return (
    <div className="w-full bg-[#f8fafc] dark:bg-gray-900/50 py-16">
      <div className="w-full max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#111418] dark:text-white mb-4">
            Membership Categories
          </h2>
          <p className="text-[#637588] dark:text-gray-400">
            Select a membership tier to view eligibility requirements.
          </p>
        </div>
        <div className="w-full mb-8">
          <div className="flex flex-wrap border-b border-[#dce0e5] dark:border-gray-700 gap-2 sm:gap-8 justify-center">
            <a
              className="group flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer"
              href="#"
            >
              <span className="text-[#637588] group-hover:text-[#111418] dark:group-hover:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                Student Member
              </span>
              <div className="h-[3px] w-full bg-transparent mt-3 group-hover:bg-gray-300 transition-colors rounded-t-full"></div>
            </a>
            <a
              className="flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer"
              href="#"
            >
              <span className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">
                Associate (ACIPD)
              </span>
              <div className="h-[3px] w-full bg-primary mt-3 rounded-t-full shadow-[0_0_10px_rgba(25,127,230,0.5)]"></div>
            </a>
            <a
              className="group flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer"
              href="#"
            >
              <span className="text-[#637588] group-hover:text-[#111418] dark:group-hover:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                Fellow (FCIPD)
              </span>
              <div className="h-[3px] w-full bg-transparent mt-3 group-hover:bg-gray-300 transition-colors rounded-t-full"></div>
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-[#dce0e5] dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="flex flex-col gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">
                  Associate Membership (ACIPD)
                </h3>
                <p className="text-[#637588] dark:text-gray-300 leading-relaxed">
                  Designed for early to mid-career professionals actively
                  engaged in public sector roles, international relations, or
                  corporate diplomacy. Associate members are recognized
                  practitioners committed to ethical standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-y-6 md:gap-x-8">
              <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2] dark:border-t-gray-700"></div>
              <div className="flex items-start gap-3">
                <MdWorkHistory className="text-primary mt-0.5" />
                <p className="text-[#637588] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">
                  Experience
                </p>
              </div>
              <div>
                <p className="text-[#111418] dark:text-white text-base font-medium">
                  Minimum of 2 years in a relevant public sector, diplomatic, or
                  communications role.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2] dark:border-t-gray-700"></div>
              <div className="flex items-start gap-3">
                <MdSchool className="text-primary mt-0.5" />
                <p className="text-[#637588] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">
                  Education
                </p>
              </div>
              <div>
                <p className="text-[#111418] dark:text-white text-base font-medium">
                  Bachelor's degree or HND equivalent from an accredited
                  institution.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2] dark:border-t-gray-700"></div>
              <div className="flex items-start gap-3">
                <MdVerified className="text-primary mt-0.5" />
                <p className="text-[#637588] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">
                  Commitment
                </p>
              </div>
              <div>
                <p className="text-[#111418] dark:text-white text-base font-medium">
                  Adherence to the CIPD Code of Conduct and commitment to 20
                  hours of annual Continuous Professional Development (CPD).
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2] dark:border-t-gray-700"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 pt-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/20">
                <span>Start Your Application</span>
                <MdArrowForward className="text-[20px]" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-transparent border border-[#dce0e5] dark:border-gray-600 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                <MdDownload className="text-[20px] text-gray-500" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCategories;
