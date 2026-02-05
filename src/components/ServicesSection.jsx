import React from "react";
import {
  MdGroups,
  MdArrowForward,
  MdBusinessCenter,
  MdPolicy,
} from "react-icons/md";

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background-light  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Group */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-main    sm:text-4xl mb-4">
            Advancing Public Diplomacy
          </h2>
          <p className="text-lg text-text-muted   leading-relaxed">
            We empower professionals and institutions through world-class
            membership, strategic consultancy, and evidence-based research
            tailored for the modern diplomatic landscape.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Membership */}
          <div className="group relative flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40       ">
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MdGroups className="!text-[32px]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-text-main   ">
              Membership Services
            </h3>
            <p className="mb-6 flex-grow text-base text-text-muted   leading-relaxed">
              Join a network of elite diplomats. Access exclusive resources,
              certification programs, and career development tools designed to
              elevate your professional standing.
            </p>
            <div className="mt-auto pt-4 border-t border-dashed border-border-light  ">
              <a
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                href="#"
              >
                Explore Membership
                <MdArrowForward className="ml-1 !text-lg" />
              </a>
            </div>
          </div>
          {/* Card 2: Consultancy */}
          <div className="group relative flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40       ">
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MdBusinessCenter className="!text-[32px]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-text-main   ">
              Strategic Consultancy
            </h3>
            <p className="mb-6 flex-grow text-base text-text-muted   leading-relaxed">
              Expert guidance for government bodies and organizations to enhance
              international relations, improve public image, and navigate
              complex diplomatic challenges.
            </p>
            <div className="mt-auto pt-4 border-t border-dashed border-border-light  ">
              <a
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                href="#"
              >
                View Solutions
                <MdArrowForward className="ml-1 !text-lg" />
              </a>
            </div>
          </div>
          {/* Card 3: Research */}
          <div className="group relative flex flex-col rounded-xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40       ">
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MdPolicy className="!text-[32px]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-text-main   ">
              Research & Policy Advisory
            </h3>
            <p className="mb-6 flex-grow text-base text-text-muted   leading-relaxed">
              Data-driven insights and authoritative policy papers that shape
              the future of diplomatic engagement and public policy in Nigeria
              and on the global stage.
            </p>
            <div className="mt-auto pt-4 border-t border-dashed border-border-light  ">
              <a
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                href="#"
              >
                Read Publications
                <MdArrowForward className="ml-1 !text-lg" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50">
            Learn More About Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
