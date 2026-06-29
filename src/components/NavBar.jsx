import React, { useState } from "react";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import logo from "../asset/LOGO.png"
import banner from "../asset/gal4.jpeg"


const Navbar = ({ showSearch = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-border-light bg-background-light/95 backdrop-blur-sm  /95  ">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a className="flex w-[180px] h-[70px] items-center justify-center rounded bg-primary/10 " href="/">
            <img src={logo} alt="" className=""/>

            </a>
            {/* <a className="text-lg font-extrabold leading-tight tracking-tight text-text-main" href="/">
              CIPDM
            </a> */}
          </div>
          <nav className="hidden lg:flex flex-1 justify-end gap-5 items-center">
            <div className="flex items-center gap-8">
              <NavLink label="Home" href="/" />
              <NavLink label="About Us" href="/about" />
              <NavLink label="Services" href="/services" />
              <NavLink label="Membership" href="/membership" />
              <NavLink label="Events" href="/events" />
              <NavLink label="Contact" href="#contact" />
            </div>
            {!showSearchBar && (
              <button
                onClick={() => setShowSearchBar(true)}
                className="p-2 text-text-main    hover:bg-neutral-light   rounded-lg transition-colors"
              >
                <MdSearch />
              </button>
            )}
            {showSearchBar && (
              <div className="flex-1 max-w-sm mx-4 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 pr-10 border border-border-light rounded-lg bg-background-light   text-text-main    focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => setShowSearchBar(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-text-main    hover:bg-neutral-light   rounded transition-colors"
                >
                  <MdClose />
                </button>
              </div>
            )}
            <div className="flex gap-3 ">
              {/* <Link
                to="/login"
                className="flex h-9 items-center justify-center rounded-lg border border-border-light px-4 text-sm font-bold text-text-main hover:bg-neutral-light        transition-colors"
              >
                Login
              </Link> */}
              <Link
                to="/signup"
                className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm"
              >
                Join Now
              </Link>
            </div>
          </nav>
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden p-2 text-text-main   "
            onClick={toggleMenu}
          >
            <MdMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background-light   flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-2 text-text-main   "
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
            <NavLink label="Events" href="/events" onClick={toggleMenu} />
            <NavLink label="Contact" href="#contact" onClick={toggleMenu} />
            {/* {!showSearchBar && (
              <button
                onClick={() => setShowSearchBar(true)}
                className="p-2 text-text-main    hover:bg-neutral-light   rounded-lg transition-colors"
              >
                <MdSearch />
              </button>
            )}
            {showSearchBar && (
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 pr-10 border border-border-light rounded-lg bg-background-light   text-text-main    focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => setShowSearchBar(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-text-main    hover:bg-neutral-light   rounded transition-colors"
                >
                  <MdClose />
                </button>
              </div>
            )} */}
            <div className="flex gap-3 mt-4">
              {/* <Link
                to="/login"
                onClick={toggleMenu}
                className="flex h-9 items-center justify-center rounded-lg border border-border-light px-4 text-sm font-bold text-text-main hover:bg-neutral-light        transition-colors"
              >
                Login
              </Link> */}
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
