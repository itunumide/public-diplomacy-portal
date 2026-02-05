import React from "react";
import MissionGrid from "../components/MissionGrid";
import AboutHero from "../components/AboutHero";
import CallToAction from "../components/reuseables/CallToAction";

const About = () => {
  return (
    <>
      <main id="about" className="bg-white px-10 pt-10  ">
        <AboutHero />
        <MissionGrid />
        <CallToAction />
      </main>
    </>
  );
};

export default About;
