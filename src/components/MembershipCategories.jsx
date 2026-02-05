import React, { useState } from "react";
import {
  MdWorkHistory,
  MdSchool,
  MdVerified,
  MdArrowForward,
  MdDownload,
} from "react-icons/md";

const MembershipCategories = () => {
  const [activeTab, setActiveTab] = useState("associate");

  const membershipData = {
    student: {
      title: "Student Membership",
      description:
        "Designed for undergraduate and postgraduate students pursuing studies in international relations, public administration, communications, or related fields. Student members gain early exposure to professional networks and resources.",
      requirements: [
        {
          icon: MdSchool,
          label: "Education",
          detail:
            "Currently enrolled in an accredited undergraduate or postgraduate program in a relevant field.",
        },
        {
          icon: MdVerified,
          label: "Verification",
          detail:
            "Valid student ID and proof of enrollment from your institution.",
        },
        {
          icon: MdWorkHistory,
          label: "Commitment",
          detail:
            "Interest in public diplomacy and commitment to professional development through CIPD resources and events.",
        },
      ],
    },
    associate: {
      title: "Associate Membership (ACIPD)",
      description:
        "Designed for early to mid-career professionals actively engaged in public sector roles, international relations, or corporate diplomacy. Associate members are recognized practitioners committed to ethical standards.",
      requirements: [
        {
          icon: MdWorkHistory,
          label: "Experience",
          detail:
            "Minimum of 2 years in a relevant public sector, diplomatic, or communications role.",
        },
        {
          icon: MdSchool,
          label: "Education",
          detail:
            "Bachelor's degree or HND equivalent from an accredited institution.",
        },
        {
          icon: MdVerified,
          label: "Commitment",
          detail:
            "Adherence to the CIPD Code of Conduct and commitment to 20 hours of annual Continuous Professional Development (CPD).",
        },
      ],
    },
    fellow: {
      title: "Fellow Membership (FCIPD)",
      description:
        "The highest tier of membership, reserved for senior professionals with extensive experience and demonstrated leadership in public diplomacy. Fellows are recognized as thought leaders and strategic advisors in the field.",
      requirements: [
        {
          icon: MdWorkHistory,
          label: "Experience",
          detail:
            "Minimum of 10 years of senior-level experience in public diplomacy, international relations, or related fields with proven leadership impact.",
        },
        {
          icon: MdSchool,
          label: "Education",
          detail:
            "Master's degree or equivalent professional qualification in a relevant field, or exceptional professional achievement.",
        },
        {
          icon: MdVerified,
          label: "Contribution",
          detail:
            "Demonstrated thought leadership through publications, speaking engagements, or significant contributions to the profession. Commitment to mentoring and advancing the field.",
        },
      ],
    },
  };

  const currentMembership = membershipData[activeTab];

  return (
    <div className="w-full bg-[#f8fafc]     /50 py-16">
      <div className="w-full max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#111418]    mb-4">
            Membership Categories
          </h2>
          <p className="text-[#637588]  ">
            Select a membership tier to view eligibility requirements.
          </p>
        </div>
        <div className="w-full mb-8">
          <div className="flex flex-wrap border-b border-[#dce0e5]   gap-2 sm:gap-8 justify-center">
            <button
              onClick={() => setActiveTab("student")}
              className={`group flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer ${
                activeTab === "student" ? "" : ""
              }`}
            >
              <span
                className={`text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${
                  activeTab === "student"
                    ? "text-primary"
                    : "text-[#637588] group-hover:text-[#111418]"
                }`}
              >
                Student Member
              </span>
              <div
                className={`h-[3px] w-full mt-3 rounded-t-full transition-colors ${
                  activeTab === "student"
                    ? "bg-primary shadow-[0_0_10px_rgba(25,127,230,0.5)]"
                    : "bg-transparent group-hover:bg-gray-300"
                }`}
              ></div>
            </button>
            <button
              onClick={() => setActiveTab("associate")}
              className={`group flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer ${
                activeTab === "associate" ? "" : ""
              }`}
            >
              <span
                className={`text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${
                  activeTab === "associate"
                    ? "text-primary"
                    : "text-[#637588] group-hover:text-[#111418]"
                }`}
              >
                Associate (ACIPD)
              </span>
              <div
                className={`h-[3px] w-full mt-3 rounded-t-full transition-colors ${
                  activeTab === "associate"
                    ? "bg-primary shadow-[0_0_10px_rgba(25,127,230,0.5)]"
                    : "bg-transparent group-hover:bg-gray-300"
                }`}
              ></div>
            </button>
            <button
              onClick={() => setActiveTab("fellow")}
              className={`group flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer ${
                activeTab === "fellow" ? "" : ""
              }`}
            >
              <span
                className={`text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${
                  activeTab === "fellow"
                    ? "text-primary"
                    : "text-[#637588] group-hover:text-[#111418]"
                }`}
              >
                Fellow (FCIPD)
              </span>
              <div
                className={`h-[3px] w-full mt-3 rounded-t-full transition-colors ${
                  activeTab === "fellow"
                    ? "bg-primary shadow-[0_0_10px_rgba(25,127,230,0.5)]"
                    : "bg-transparent group-hover:bg-gray-300"
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div className="bg-white   rounded-xl border border-[#dce0e5]   shadow-sm overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="flex flex-col gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#111418]    mb-2">
                  {currentMembership.title}
                </h3>
                <p className="text-[#637588]     leading-relaxed">
                  {currentMembership.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-y-6 md:gap-x-8">
              {currentMembership.requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2]  "></div>
                    <div className="flex items-start gap-3">
                      <IconComponent className="text-primary mt-0.5" />
                      <p className="text-[#637588]   text-sm font-bold uppercase tracking-wide">
                        {req.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#111418]    text-base font-medium">
                        {req.detail}
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
              <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2]  "></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 pt-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/20">
                <span>Start Your Application</span>
                <MdArrowForward className="text-[20px]" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-lg h-12 px-6 bg-white   border border-[#dce0e5]   text-[#111418]    hover:bg-gray-50   text-base font-bold leading-normal tracking-[0.015em] transition-colors">
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
