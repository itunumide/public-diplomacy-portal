import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/reuseables/Button";
import {
  FaUsers,
  FaBriefcase,
  FaFileAlt,
  FaGlobe,
  FaShareAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Services = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-border-light bg-background-light/95 backdrop-blur dark:bg-background-dark/95 dark:border-gray-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded bg-primary/10 text-primary">
              <svg className="size-5" viewBox="0 0 48 48" fill="currentColor">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
              </svg>
            </div>
            <span className="text-lg font-extrabold">CIPD Nigeria</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm hover:text-primary">Home</Link>
            <Link to="/about" className="text-sm hover:text-primary">About Us</Link>
            <Link to="/services" className="text-sm font-bold text-primary">Services</Link>
            <Link to="/membership" className="text-sm hover:text-primary">Membership</Link>
            <Link to="/resources" className="text-sm hover:text-primary">Resources</Link>
            <Link to="/contact" className="text-sm hover:text-primary">Contact</Link>

            <div className="ml-4 flex gap-3">
              <Button label="Login" className="h-9 px-4" />
              <Button label="Join Now" className="h-9 px-4 bg-primary text-white" />
            </div>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute top-16 left-0 w-full bg-background-light dark:bg-background-dark border-t border-border-light dark:border-gray-800 shadow-lg transform transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/services" className="font-bold text-primary">Services</Link>
            <Link to="/membership" onClick={() => setMobileOpen(false)}>Membership</Link>
            <Link to="/resources" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

            <Button label="Login" className="mt-3 h-11 w-full" />
            <Button label="Join Now" className="h-11 w-full bg-primary text-white" />
          </nav>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                Advancing Public Diplomacy
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400">
                We empower professionals and institutions through world-class
                membership, strategic consultancy, and evidence-based research
                tailored for the modern diplomatic landscape.
              </p>
            </div>

            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {/* Membership Card */}
              <div className="group flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition hover:shadow-lg dark:bg-gray-900 dark:border-gray-800">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <FaUsers className="text-3xl" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Membership Services</h3>
                <p className="flex-grow text-text-muted dark:text-gray-400">
                  Join a network of elite diplomats. Access exclusive resources,
                  certification programs, and career development tools designed
                  to elevate your professional standing.
                </p>
                <div className="mt-6 pt-4 border-t border-dashed dark:border-gray-700">
                  <Link to="/membership" className="text-sm font-bold text-primary">
                    Explore Membership →
                  </Link>
                </div>
              </div>

              {/* Consultancy Card */}
              <div className="group flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition hover:shadow-lg dark:bg-gray-900 dark:border-gray-800">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <FaBriefcase className="text-3xl" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Strategic Consultancy</h3>
                <p className="flex-grow text-text-muted dark:text-gray-400">
                  Expert guidance for government bodies and organizations to
                  enhance international relations, improve public image, and
                  navigate complex diplomatic challenges.
                </p>
                <div className="mt-6 pt-4 border-t border-dashed dark:border-gray-700">
                  <Link to="/consultancy" className="text-sm font-bold text-primary">
                    View Solutions →
                  </Link>
                </div>
              </div>

              {/* Research Card */}
              <div className="group flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition hover:shadow-lg dark:bg-gray-900 dark:border-gray-800">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <FaFileAlt className="text-3xl" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Research & Policy Advisory</h3>
                <p className="flex-grow text-text-muted dark:text-gray-400">
                  Data-driven insights and authoritative policy papers that shape
                  the future of diplomatic engagement and public policy in
                  Nigeria and on the global stage.
                </p>
                <div className="mt-6 pt-4 border-t border-dashed dark:border-gray-700">
                  <Link to="/research" className="text-sm font-bold text-primary">
                    Read Publications →
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex justify-center">
              <Button
                label="Learn More About Our Work"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border-light bg-neutral-light dark:bg-gray-900 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-muted">
            © 2024 Chartered Institute of Public Diplomacy, Nigeria.
          </p>
          <div className="flex gap-4 text-text-muted">
            <FaGlobe />
            <FaShareAlt />
            <FaEnvelope />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
