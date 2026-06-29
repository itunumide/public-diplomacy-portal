import React from "react";
const HERO_BG =
  "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAO47uBumnToWXWxYxZVAEboWr5DeWb-moCWsQa80t3PTFbFs4mpq0Fz3OGkXXC6N2xRcI7zRG7WBkiq-OXA29h7xWyxRu7JiXrzzPu8icVWjQ1hYW8HQJIcwGIbt2hT8zwhjdDm7ZtjZROs8nyKrmTxqf9GWAgihLxUH8Tp2-qNtVMfxRD-4kdQRlynScOjhDqvgUFUHCBeApOW39el1Kvs3SFpphFcxXmSo1znM5vvpGLsz1yfz8iNveZ_XsYhy-RueIIaIgR-nBJ')";

export default function HeroSection() {
  return (
    <section className="bg-white px-6 py-12  lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative flex min-h-[450px] flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-8 text-center shadow-2xl"
          style={{ backgroundImage: HERO_BG }}
        >
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-[var(--primary)]/20 px-4 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur-md uppercase">
              Founded on Excellence
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white lg:text-6xl">
              About the Institute
            </h1>
            <p className="text-lg leading-relaxed text-white/90 lg:text-xl">
              To promote excellence in public diplomacy through professional training and ethical standards,
              fostering international cooperation and national growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
