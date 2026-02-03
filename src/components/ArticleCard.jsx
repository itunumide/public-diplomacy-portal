import React from "react";
import { MdPerson, MdSchedule, MdArrowOutward } from "react-icons/md";

const ArticleCard = ({ article }) => {
  return (
    <div className="group flex flex-col gap-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:border-primary/30">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
        <div
          className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${article.image}")` }}
        ></div>
        <div className="absolute top-3 right-3">
          <span className="bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-md">
            {article.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-slate-900 dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h4>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
          <div className="flex items-center gap-1">
            <MdPerson className="text-lg" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdSchedule className="text-lg" />
            <span>{article.date}</span>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2 mt-1">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-3">
          <button className="text-primary text-sm font-medium hover:bg-primary/5 px-3 py-1.5 -ml-3 rounded-lg transition-colors inline-flex items-center gap-1">
            Read More <MdArrowOutward className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
