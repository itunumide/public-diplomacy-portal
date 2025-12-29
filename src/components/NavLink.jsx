import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ label, to = "/" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "text-primary font-bold"
          : "text-slate-700 dark:text-slate-200 hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
