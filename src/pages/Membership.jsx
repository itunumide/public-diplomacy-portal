// pages/membership/Membership.jsx
import React, { useState } from "react";
import Button from "../components/reuseables/Button"; // your reusable button
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaAward,
  FaUsers,
} from "react-icons/fa";

const Membership = () => {
  const [activeTab, setActiveTab] = useState("Associate");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Benefits
  const benefits = [
    {
      icon: <FaAward />,
      title: "Professional Recognition",
      description:
        "Earn the right to use prestigious post-nominal letters (ACIPD, FCIPD) after your name as a mark of excellence.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Development",
      description:
        "Access world-class training, webinars, and continuous professional development resources tailored for diplomats.",
    },
    {
      icon: <FaUsers />,
      title: "Exclusive Access",
      description:
        "Gain entry to high-level networking events, annual diplomatic summits, and policy forums.",
    },
  ];

  // Membership Details
  const studentDetails = [
    {
      icon: <FaGraduationCap />,
      label: "Eligibility",
      description: "Full-time students enrolled in an accredited university or HND program.",
    },
    {
      icon: <FaUserTie />,
      label: "Experience",
      description: "No professional experience required.",
    },
    {
      icon: <FaCheckCircle />,
      label: "Commitment",
      description: "Adherence to the CIPD Code of Conduct and participation in at least 5 hours of learning activities annually.",
    },
  ];

  const associateDetails = [
    {
      icon: <FaUserTie />,
      label: "Experience",
      description: "Minimum of 2 years in a relevant public sector, diplomatic, or communications role.",
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      description: "Bachelor's degree or HND equivalent from an accredited institution.",
    },
    {
      icon: <FaCheckCircle />,
      label: "Commitment",
      description: "Adherence to the CIPD Code of Conduct and commitment to 20 hours of annual Continuous Professional Development (CPD).",
    },
  ];

  const fellowDetails = [
    {
      icon: <FaUserTie />,
      label: "Experience",
      description: "Minimum of 10 years in senior-level public diplomacy or related leadership roles.",
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      description: "Bachelor's degree or higher, with recognized professional achievements.",
    },
    {
      icon: <FaCheckCircle />,
      label: "Commitment",
      description: "Adherence to the CIPD Code of Conduct and ongoing contribution to the profession through mentorship or publications.",
    },
  ];

  const tabContent = {
    Student: {
      title: "Student Membership",
      description:
        "Designed for full-time students studying public sector management, international relations, or related courses. Student members gain early exposure to the field and networking opportunities.",
      details: studentDetails,
    },
    Associate: {
      title: "Associate Membership (ACIPD)",
      description:
        "Designed for early to mid-career professionals actively engaged in public sector roles, international relations, or corporate diplomacy. Associate members are recognized practitioners committed to ethical standards.",
      details: associateDetails,
    },
    Fellow: {
      title: "Fellow Membership (FCIPD)",
      description:
        "Reserved for senior professionals with significant experience in public diplomacy or corporate diplomacy leadership. Fellows demonstrate a sustained commitment to advancing the profession and mentoring others.",
      details: fellowDetails,
    },
  };

  const activeContent = tabContent[activeTab];

  return (
    <div className="bg-white dark:bg-background-dark text-[#111418] dark:text-white font-display min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark px-6 py-4 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-primary text-xl">
              <FaUserTie />
            </div>
            <h2 className="text-lg font-bold">CIPD Nigeria</h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
  <Link to="/" className="flex items-center gap-1 hover:text-primary">
    Home
  </Link>
  <Link to="/about" className="flex items-center gap-1 hover:text-primary">
    About
  </Link>
  <Link to="/membership" className="flex items-center gap-1 text-primary font-bold">
    Membership
  </Link>
  <Link to="/training" className="flex items-center gap-1 hover:text-primary">
    Training
  </Link>
  <Link to="/events" className="flex items-center gap-1 hover:text-primary">
    Events
  </Link>
  <Link to="/contact" className="flex items-center gap-1 hover:text-primary">
    Contact
  </Link>
  <Button label="Login" className="h-10 px-5 bg-primary text-white hover:bg-blue-600" />
</nav>

          {/* Hamburger Button */}
          <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
     <div
  className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-background-dark 
  border-t border-[#dce0e5] dark:border-gray-700 z-50 
  flex flex-col gap-4 px-6 py-4 shadow-lg
  transform transition-transform duration-300 ease-in-out
  ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}
>
  <Link
    onClick={() => setMobileOpen(false)}
    to="/"
    className="flex items-center gap-1 hover:text-primary"
  >
    Home
  </Link>

  <Link
    onClick={() => setMobileOpen(false)}
    to="/about"
    className="flex items-center gap-1 hover:text-primary"
  >
    About
  </Link>

  <Link
    onClick={() => setMobileOpen(false)}
    to="/membership"
    className="flex items-center gap-1 text-primary font-bold"
  >
    Membership
  </Link>

  <Link
    onClick={() => setMobileOpen(false)}
    to="/training"
    className="flex items-center gap-1 hover:text-primary"
  >
    Training
  </Link>

  <Link
    onClick={() => setMobileOpen(false)}
    to="/events"
    className="flex items-center gap-1 hover:text-primary"
  >
    Events
  </Link>

  <Link
    onClick={() => setMobileOpen(false)}
    to="/contact"
    className="flex items-center gap-1 hover:text-primary"
  >
    Contact
  </Link>

  <Button label="Login" className="w-full h-11 mt-2" />
</div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Hero */}
        <section className="w-full max-w-[1200px] px-6 lg:px-20 py-12 lg:py-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 max-w-[800px]">
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
                <span className="w-8 h-[2px] bg-primary"></span> Membership
              </div>
              <h1 className="text-[#111418] dark:text-white tracking-tight text-4xl lg:text-5xl font-black leading-tight">
                Become a Chartered Public Diplomat
              </h1>
              <p className="text-[#637588] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-[720px]">
                Join a prestigious network of professionals dedicated to advancing the practice of public diplomacy in Nigeria and beyond. Gain recognition, access exclusive resources, and elevate your career.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary text-3xl">
                    {b.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{b.title}</h2>
                    <p className="text-[#637588] dark:text-gray-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Tabs */}
        <section className="w-full bg-[#f8fafc] dark:bg-gray-900/50 py-16">
          <div className="w-full max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111418] dark:text-white mb-4">
                Membership Categories
              </h2>
              <p className="text-[#637588] dark:text-gray-400">
                Select a membership tier to view eligibility requirements.
              </p>
            </div>

            {/* Tabs */}
            <div className="w-full mb-8 flex flex-wrap border-b border-[#dce0e5] dark:border-gray-700 gap-2 sm:gap-8 justify-center">
              {["Student", "Associate", "Fellow"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex flex-col items-center justify-center px-4 pb-3 pt-4 cursor-pointer font-bold text-sm ${
                    activeTab === tab ? "text-primary" : "text-[#637588] dark:text-gray-400"
                  }`}
                >
                  <span>{tab === "Associate" ? "Associate (ACIPD)" : tab === "Fellow" ? "Fellow (FCIPD)" : "Student Member"}</span>
                  <div
                    className={`h-[3px] w-full mt-3 rounded-t-full ${
                      activeTab === tab ? "bg-primary shadow-[0_0_10px_rgba(25,127,230,0.5)]" : "bg-transparent group-hover:bg-gray-300 transition-colors"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-[#dce0e5] dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-8 lg:p-10 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">{activeContent.title}</h3>
                <p className="text-[#637588] dark:text-gray-300 leading-relaxed">{activeContent.description}</p>

                {activeContent.details.map((d, idx) => (
                  <React.Fragment key={idx}>
                    <div className="col-span-1 md:col-span-2 border-t border-t-[#edf0f2] dark:border-t-gray-700"></div>
                    <div className="flex items-start gap-3">
                      <div className="text-primary text-xl mt-0.5">{d.icon}</div>
                      <p className="text-[#637588] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">{d.label}</p>
                    </div>
                    <div>
                      <p className="text-[#111418] dark:text-white text-base font-medium">{d.description}</p>
                    </div>
                  </React.Fragment>
                ))}

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 pt-4">
                  <Button label="Start Your Application" className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 bg-primary hover:bg-blue-600 text-white" icon="arrow_forward" />
                  <Button label="Download Brochure" className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-white dark:bg-transparent border border-[#dce0e5] dark:border-gray-600 text-[#111418] dark:text-white" icon="download" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark py-12 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#637588] dark:text-gray-500 text-sm">
            © 2024 Chartered Institute of Public Diplomacy, Nigeria. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#637588] dark:text-gray-500 text-sm hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-[#637588] dark:text-gray-500 text-sm hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Membership;
