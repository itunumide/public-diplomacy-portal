import React from "react";
const NavLink = ({ label, href = "#" }) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
  >
    {label}
  </a>
);

export default NavLink;
