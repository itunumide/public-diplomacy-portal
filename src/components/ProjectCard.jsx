import React from "react";
import { MdArrowForward } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 group">
      <div
        className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative shadow-sm"
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <div className="absolute top-3 left-3 bg-white/90   backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-text-main    uppercase tracking-wider shadow-sm">
          {project.category}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-text-main    text-lg font-bold leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
              project.status === "Ongoing"
                ? "bg-green-50   text-green-700   ring-green-600/20"
                : project.status === "Research"
                  ? "bg-blue-50   text-blue-700   ring-blue-700/10"
                  : "bg-gray-100   text-gray-600     ring-gray-500/10"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-text-secondary   text-sm font-normal leading-relaxed">
          {project.description}
        </p>
        <a
          className="text-primary text-sm font-bold mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
          href="#"
        >
          Read Overview <MdArrowForward className="text-[16px]" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
