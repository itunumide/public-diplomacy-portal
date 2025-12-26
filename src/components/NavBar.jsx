import React from "react";
import NavLink from "./NavLink";
import Button from "./reuseables/Button";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 md:px-10">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-2xl">
           
          </span>
        </div>
        <h2 className="text-lg font-bold">CIPD Nigeria</h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        <NavLink label="Home" />
        <NavLink label="About Us" />
        <NavLink label="Membership" />
        <NavLink label="Certification" />
        <NavLink label="News" />
        <Button className="h-10 px-5 text-sm">Member Login</Button>
      </nav>

      {/* Mobile */}
      <button className="lg:hidden p-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Navbar;
