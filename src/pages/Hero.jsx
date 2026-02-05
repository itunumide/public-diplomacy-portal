import Badge from "../components/Badge";
import Button from "../components/reuseables/Button";
import TrustIndicators from "../components/TrustIndicators";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center px-4 py-12 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQotc5Os8EexPRFv-3OlvDX_x-tDCueuKifPopIsVONi1CyjQBHGEhH2dRKmBFg7ztFTVt4JogiH7wEihvqbdrpgpDnxcdVuTZOMadb7ae0t-e8dBHLhxWv3CKpQ8TJ5uBoK7eDQmzeDuO2dJ6ua_QkQ20iY5MeRCdhnNVoQnGbhTh9JOi3Ylcl6I1it5Hp-5Rb9ISeJThOnE1u0w62nFNYHO4VJItnMjxveLmarRrFAWbUEi7orZxpHGGwLSUgW-5T3iBWqTtzDG"
          className="h-full w-full object-cover opacity-40  "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-background-light    " />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <Badge />

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
          Advancing the Art of{" "}
          <span className="bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
            Public Diplomacy
          </span>{" "}
          & Governance
        </h1>

        <p className="text-lg md:text-xl text-slate-600  ">
          The Chartered Institute of Public Diplomacy, Nigeria is the premier
          body dedicated to professionalizing diplomatic practice and certifying
          excellence in public service.
        </p>

        <div className="flex flex-col mt-5 sm:flex-row justify-center gap-4">
          <Button className="h-12 px-6">Become a Member</Button>
          <Button variant="outline" className="h-12 px-6">
            Explore Services →
          </Button>
        </div>

        <TrustIndicators />
      </div>
    </section>
  );
};

export default Hero;
