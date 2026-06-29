import React from "react";
import banner from "../asset/gal4.jpeg"

export default function HeroSection() {
  return (
    <section className="relative px-6 py-16 md:px-20 md:py-24 bg-background-light ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col gap-6 flex-1">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Advancing Global Relations
          </span>

          <h1 className="text-[#111418]  text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Our Professional <span className="text-primary">Services</span>
          </h1>

          <p className="text-[#637588] text-lg md:text-xl leading-relaxed max-w-xl">
            Empowering public diplomacy through expert research and strategic consultancy to bridge the gap between
            theory and practice for a global Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-all">
              Request a Consultation
            </button>
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-primary text-primary text-base font-bold tracking-wide hover:bg-primary/5 transition-all">
              Download Portfolio
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="relative w-full aspect-video md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage:
                `url(${banner})`
            }}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
