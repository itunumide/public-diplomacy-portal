import React from "react";

const ProjectHero = () => {
  return (
    <section className="@container w-full mt-4">
      <div className="flex flex-col gap-8 py-6 @[864px]:flex-row items-center">
        <div className="w-full @[864px]:w-1/2 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-4 text-left">
            <span className="text-primary font-bold tracking-wider text-xs uppercase">
              Strategic Vision
            </span>
            <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Advancing Diplomacy Through Strategic Action
            </h1>
            <h2 className="text-text-secondary dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-xl">
              Exploring the ongoing collaborations, policy frameworks, and
              educational initiatives established by the CIPD across Nigeria and
              the West African region.
            </h2>
          </div>
          <div className="flex gap-4 pt-2">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-sm">
              <span className="truncate">View Annual Report</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="truncate">Partner With Us</span>
            </button>
          </div>
        </div>
        <div className="w-full @[864px]:w-1/2">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden group"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRn5oQmVfCv33rVVsaOr2wsQ4pkw1slKVeXMlMSbN--ISeTvENrfJ45qiHxgXUCetRJYcCBCGQcLEV15vuZlzsbhV46u2CkgnVPTcAX7tg6bEI1gEz9BX0wtKhrKz4njpge_1L09NHdm2-WwwbGie4ZxpBL4Rism4y872Juz723SwHBIW_pW3vHb_hf0RUSG_jVDqzNQ7F5vBgIzYbKtEwP91UfO0XMS4cC3keD8hO_uF52whh6EO-qciBG48B8R8FfX8DDGXLYoKJ")',
            }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
          </div>
          <p className="mt-3 text-xs text-text-secondary dark:text-gray-500 text-right italic">
            CIPD Annual Summit, Abuja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
