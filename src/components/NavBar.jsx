import React, { useState } from "react";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
import NavLink from "./NavLink";

const Navbar = ({ showSearch = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-border-light bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-gray-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex size-8 items-center justify-center rounded bg-primary/10 text-primary">
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-extrabold leading-tight tracking-tight text-text-main dark:text-white">
              CIPD Nigeria
            </h2>
          </div>
          <nav className="hidden lg:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-8">
              <NavLink label="Home" href="/" />
              <NavLink label="About Us" href="/about" />
              <NavLink label="Services" href="/services" />
              <NavLink label="Membership" href="/membership" />
              <NavLink label="Events" href="/events" />
              <NavLink label="Articles" href="/articles" />
              <NavLink label="Projects" href="/projects" />
              <NavLink label="Contact" href="/contact" />
            </div>
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="p-2 text-text-main dark:text-white hover:bg-neutral-light dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <MdSearch />
            </button>
            {showSearchBar && (
              <div className="flex-1 max-w-sm mx-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-border-light rounded-lg bg-background-light dark:bg-background-dark text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}
            <div className="flex gap-3 ml-4">
              <button className="flex h-9 items-center justify-center rounded-lg border border-border-light px-4 text-sm font-bold text-text-main hover:bg-neutral-light dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 transition-colors">
                Login
              </button>
              <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm">
                Join Now
              </button>
            </div>
          </nav>
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden p-2 text-text-main dark:text-white"
            onClick={toggleMenu}
          >
            <MdMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2 text-text-main dark:text-white"
            onClick={toggleMenu}
          >
            <MdClose />
          </button>
          <div className="flex flex-col gap-8 items-center">
            <NavLink label="Home" href="/" onClick={toggleMenu} />
            <NavLink label="About Us" href="/about" onClick={toggleMenu} />
            <NavLink label="Services" href="/services" onClick={toggleMenu} />
            <NavLink
              label="Membership"
              href="/membership"
              onClick={toggleMenu}
            />
            <NavLink label="Articles" href="/articles" onClick={toggleMenu} />
            <NavLink label="Projects" href="/projects" onClick={toggleMenu} />
            <NavLink label="Contact" href="/contact" onClick={toggleMenu} />
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="p-2 text-text-main dark:text-white hover:bg-neutral-light dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <MdSearch />
            </button>
            {showSearchBar && (
              <input
                type="text"
                placeholder="Search..."
                className="w-full max-w-sm px-3 py-2 border border-border-light rounded-lg bg-background-light dark:bg-background-dark text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
            <div className="flex gap-3 mt-4">
              <button className="flex h-9 items-center justify-center rounded-lg border border-border-light px-4 text-sm font-bold text-text-main hover:bg-neutral-light dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 transition-colors">
                Login
              </button>
              <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
