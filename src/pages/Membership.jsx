import React from "react";
import MembershipHero from "../components/MembershipHero";
import BenefitsGrid from "../components/BenefitsGrid";
import MembershipCategories from "../components/MembershipCategories";

const Membership = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
      <MembershipHero />
      <BenefitsGrid />
      <MembershipCategories />
    </div>
  );
};

export default Membership;
