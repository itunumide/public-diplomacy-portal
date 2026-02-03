import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB54R21FGaN8L6FP_Pp1keNtpUJOQFiacH7dUClScgnCbm5vhyVdmHw99BotFkiolzs_YjA4KJYPaDeYyEOYsq9Voedlx_nKDtubLQnRUAGhEbsp0yvlBkJaRNqwoT2ylulxA4jvVK6a-bGdxFRi1p0wFoqhHG6h5DkfFREyAIksT73iz4uvqa1uDn-ZZtEq8sNBmDlGhuK1jxEsvVyYWoR5i46_5IiQK6_59RgVA6wdLMXW2tI8noizFwiUg-0VrA8vC9Paahv19bJ",
      category: "Education",
      title: "National Diplomatic Summit 2024",
      status: "Ongoing",
      description:
        "An initiative focusing on training new public servants in modern protocol, negotiation strategies, and international etiquette.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzdQPGzRhmM0k9j99oMjdkz-hbek885ngnOt73LC8iu20GWaasxHQK6tNjfIb9gnrzGOgVoP2Jcs9MkpJewTzE5c99Km9UtzFEaa9whgb-C5Oh8qWzZa3FYQ_mUumWi0FRhSxfQBEsk0OA40ytMR3iycHdNcWIFCom8Oq4qBik-for4LuZcZ4PTWj1qaHiPWKRCq770dvYX_-HAnYR18Kz72CXem1IeMWpMQUD3Is5zUt-sLgBxxd73XZFGGBmtXSpJKoPPy5KeEmz",
      category: "Partnership",
      title: "Cross-Border Educational Exchange",
      status: "Ongoing",
      description:
        "A strategic partnership with neighboring West African universities to facilitate student exchange programs focusing on public policy.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA2FaxnoiCGqMbGiu19mYKMzyDob9xU36_FFDWpcCeBLid-qg6nhfT9uLL4KKFz394D-bzE_MdshrPL6GbhUMiJg3ZdCZgBTpxJDAZ0ddmVySPh0Ed-uasSzm2pfOOPga1W67qmPIYyq4Zftl1gfGPJ5CNsWUrgrDvsy_erY-jo-mus7UEZ9UUAh2FUvTIiW0orYTdRWg_bWE5kfY0AejCteYs-KvzcmC5UFPaa6jbmfLeaW79FEe9v9_x74pnFuVt_h56IWgAhSi3d",
      category: "Policy Research",
      title: "Digital Diplomacy Framework",
      status: "Research",
      description:
        "A comprehensive research paper and policy recommendation project for digital governance in the public sector.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnGhwVsFdfzZ5Eau3Kc-ys2EudnbqoflsJdrlX8OnHDizla5ZQ1Xna4hC2YlXjApB2WK-_FjQuQTYPqv8NcjQTNj3rhLw4Mh1AxP9SYeH5eYMrcG10-Dv-ShVi76VWtLZz_glo0XKaE9-Cqb3-KQeRFhi6gjc_k9ujNh4plMKeb9xqVEZrLwFg8bEaEeRIuULj1BRCtnUkAviDwyAcpH4k-yO2snSg9KJXNRglC-vxF_rrQa-MXq5uMrD0Iekaz8EwmYs-oRe-O2jW",
      category: "Policy Review",
      title: "Public Service Policy Review",
      status: "Completed",
      description:
        "Reviewing the 2023 public service protocols for efficiency, resulting in a 15% increase in administrative throughput.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBtP9tG_B9PBJnw7dcPQd5FM2gwle3KAmwQrYsfPGvI9kJ6kmCkowLJJSLzWucTQI3Zdl9oSrH5ZfK-xamN1Xw8UK18myBcSIVTy5h2VcwhiI1a0Q4yooysIsg3fC9rywQz4tQt8A5cFzBYWzZDz_QdiJ7FSAwQMVXuToLSqiqjbamyvEQDg45iq581s8taux1lbBoJecJJnh9CfUkSLS3sfVJC02AOAg76_FQOHgIH2cKDnC9VuiZ9GK_1eL1W9SmvlOhndyUkEa7v",
      category: "Events",
      title: "Regional Peacekeeping Forum",
      status: "Completed",
      description:
        "A forum discussing regional stability and peacekeeping efforts, hosted in partnership with ECOWAS representatives.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZw11QEtfDmqKTNG6d-FR8tteKu3zb-v_wrGkQ5_XrJP5D5-n6j_F6Ig4bGawj2wQVac6P7eLmdBnecNYemTxpl-6f-HkjHzrtz_AQBWwG0f7NDB2gSYfC-p3N6fj_gB-Ds97jD4_26gLjClLpAUmWR4EBu0n1vUj22aDnBzwy2fpS7LsjARwf04SIs-rp4dM45xBVnmNiVCmB2Y_Cl7gbSofDPspJluj7VLULlwhfoeV2Q6eUnFcFcfO8hRUd2QqinB4xwhCv1_p",
      category: "Training",
      title: "Diplomatic Corps Training",
      status: "Ongoing",
      description:
        "Intensive training program for the newly inducted diplomatic corps members, covering protocol, history, and foreign relations.",
    },
  ];

  return (
    <section className="w-full pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#f0f2f4] dark:bg-gray-800 text-text-main dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span className="truncate">Load More Initiatives</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectGrid;
