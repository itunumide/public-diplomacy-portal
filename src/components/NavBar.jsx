import React, { useState } from "react";
import NavLink from "./NavLink";
import Button from "./reuseables/Button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Membership", to: "/membership" },
    { label: "Certification", to: "/certification" },
    { label: "News", to: "/news" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-2xl"></span>
        </div>
        <h2 className="text-lg font-bold">CIPD Nigeria</h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink key={link.label} label={link.label} to={link.to} />
        ))}
        <Button className="h-10 px-5 text-sm">Member Login</Button>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 shadow-md flex flex-col items-center gap-4 py-4 z-40">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              label={link.label}
              to={link.to}
            />
          ))}
          <Button className="h-10 px-5 text-sm">Member Login</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
