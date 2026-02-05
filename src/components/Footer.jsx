import React from "react";
import {
  MdSchool,
  MdWork,
  MdRssFeed,
  MdPublic,
  MdLocationOn,
  MdMail,
  MdCall,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-background-light   border-t border-slate-200  ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Mission Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                <MdSchool className="text-3xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900    leading-tight">
                  CIPD Nigeria
                </h2>
                <p className="text-xs font-medium text-primary uppercase tracking-wider">
                  Chartered Institute
                </p>
              </div>
            </div>
            <p className="text-slate-600   text-base leading-relaxed">
              Advancing the practice of public diplomacy through education,
              rigorous standards, and professional integrity across Nigeria and
              beyond.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-2">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white   text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors border border-slate-200  "
                href="#"
              >
                {/* LinkedIn (using symbol as placeholder for brand icons) */}
                <MdWork />
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white   text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors border border-slate-200  "
                href="#"
              >
                {/* Twitter/X */}
                <MdRssFeed />
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white   text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors border border-slate-200  "
                href="#"
              >
                {/* Facebook */}
                <MdPublic />
              </a>
            </div>
            {/* Trust Indicator (Optional) */}
            <div className="mt-4 pt-6 border-t border-slate-200  ">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Accredited by
              </p>
              <div className="flex gap-4 opacity-60 hover:opacity-100 transition-opacity">
                {/* Abstract logos/shapes for partners */}
                <div className="h-8 w-8 bg-slate-300   rounded-full"></div>
                <div className="h-8 w-8 bg-slate-300   rounded-full"></div>
                <div className="h-8 w-8 bg-slate-300   rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Navigation Links (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900    uppercase tracking-wider">
              Institute
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  About CIPD
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Governance
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Accredited Centers
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Verify Membership
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Navigation Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900    uppercase tracking-wider">
              Programmes
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Diploma Courses
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Executive Training
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  CPD & Workshops
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Annual Conference
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600   hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Student Resources
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter & Contact (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Newsletter */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-900    uppercase tracking-wider">
                Subscribe to Updates
              </h3>
              <p className="text-sm text-slate-600  ">
                Receive the latest news on public diplomacy events.
              </p>
              <form className="flex w-full items-stretch rounded-lg mt-1">
                <input
                  className="form-input flex-1 min-w-0 rounded-l-lg border border-r-0 border-slate-300   bg-white   text-slate-900    px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Email address"
                  required
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r-lg text-sm transition-colors flex items-center justify-center"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-primary text-[20px] mt-0.5" />
                <span className="text-sm text-slate-600  ">
                  CIPD Headquarters
                  <br />
                  14 Diplomacy Drive, Central Business District,
                  <br />
                  Abuja, Nigeria.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MdMail className="text-primary text-[20px]" />
                <a
                  className="text-sm text-slate-600   hover:text-primary transition-colors"
                  href="mailto:info@cipdnigeria.org"
                >
                  info@cipdnigeria.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MdCall className="text-primary text-[20px]" />
                <a
                  className="text-sm text-slate-600   hover:text-primary transition-colors"
                  href="tel:+2348001234567"
                >
                  +234 800 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200   flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500   text-center md:text-left">
            © 2024 Chartered Institute of Public Diplomacy, Nigeria. All Rights
            Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              className="text-sm text-slate-500 hover:text-primary   transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary   transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary   transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary   transition-colors"
              href="#"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
