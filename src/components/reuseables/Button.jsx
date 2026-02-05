import React from "react";
const Button = ({ children, variant = "primary", className = "" }) => {
  const base =
    "flex items-center justify-center rounded-lg font-bold transition-all tracking-[0.015em]";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5",
    outline:
      "bg-white   border border-slate-200   text-slate-700    hover:border-primary/50 hover:bg-slate-50  ",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
