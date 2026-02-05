import React from "react";
import MembershipHero from "../components/MembershipHero";
import BenefitsGrid from "../components/BenefitsGrid";
import MembershipCategories from "../components/MembershipCategories";

const Membership = () => {
  return (
    <div
      id="membership"
      className="flex pt-10 flex-col items-center w-full bg-white   text-[#111418]    font-display overflow-x-hidden"
    >
      <MembershipHero />
      <BenefitsGrid />
      <MembershipCategories />
    </div>
  );
};

export default Membership;
