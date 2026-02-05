import React from "react";
import ProjectHero from "../components/ProjectHero";
import ProjectTabs from "../components/ProjectTabs";
import ProjectGrid from "../components/ProjectGrid";
import NewsletterCTA from "../components/NewsletterCTA";

const Projects = () => {
  return (
    <main id="projects" className="flex pt-10 flex-col items-center w-full flex-1">
      <div className="w-full max-w-[1280px] px-4 md:px-10 py-5 flex flex-col gap-10">
        <ProjectHero />
        <ProjectTabs />
        <ProjectGrid />
        <NewsletterCTA />
      </div>
    </main>
  );
};

export default Projects;
