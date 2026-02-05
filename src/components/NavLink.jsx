import React from "react";

const NavLink = ({ label, href = "#", onClick }) => {
  const handleClick = (e) => {
    // Call the onClick handler if provided (for mobile menu)
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-sm font-medium hover:text-primary transition-colors text-text-main  "
    >
      {label}
    </a>
  );
};

export default NavLink;
