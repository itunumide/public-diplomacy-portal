import React from "react";

const CategoryChips = ({
  categories = [
    { name: "All", active: true },
    { name: "Research", active: false },
    { name: "Opinion", active: false },
    { name: "News", active: false },
    { name: "Publications", active: false },
  ],
}) => {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-colors cursor-pointer ${
            category.active
              ? "bg-primary hover:bg-primary/90"
              : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
          }`}
        >
          <span
            className={`text-sm font-medium leading-normal ${
              category.active
                ? "text-white"
                : "text-slate-900 dark:text-slate-200"
            }`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
