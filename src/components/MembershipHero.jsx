import React from "react";
const MembershipHero = () => {
  return (
    <div className="w-full max-w-[1200px] px-6 lg:px-20 py-12 lg:py-16">
      <div className="flex flex-col gap-6 max-w-[800px]">
        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
          <span className="w-8 h-[2px] bg-primary"></span> Membership
        </div>
        <h1 className="text-[#111418]    tracking-tight text-4xl lg:text-5xl font-black leading-tight">
          Become a Chartered Public Diplomat
        </h1>
        <p className="text-[#637588]     text-lg font-normal leading-relaxed max-w-[720px]">
          Join a prestigious network of professionals dedicated to advancing the
          practice of public diplomacy in Nigeria and beyond. Gain recognition,
          access exclusive resources, and elevate your career.
        </p>
      </div>
    </div>
  );
};

export default MembershipHero;
