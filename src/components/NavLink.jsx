import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ label, href = "#", onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`text-sm font-medium hover:text-primary transition-colors ${
        isActive ? "text-primary" : "text-text-main dark:text-gray-200"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
