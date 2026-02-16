import React from "react";
export default function CallToActionSection() {
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="max-w-6xl mx-auto rounded-3xl bg-primary p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-64 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 size-96 bg-white/10 rounded-full" />

        <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Scale Your Global Impact</h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
          Partner with Nigeria&apos;s foremost authority in public diplomacy. Let our experts guide your international
          strategic vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <button className="w-full sm:w-auto min-w-[200px] h-14 rounded-xl bg-white text-primary font-bold text-lg hover:bg-background-light transition-all shadow-lg shadow-black/20">
            Request a Consultation
          </button>
          <button className="w-full sm:w-auto min-w-[200px] h-14 rounded-xl border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-all">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
