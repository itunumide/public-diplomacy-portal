import React from 'react'
import MissionGrid from '../components/MissionGrid';
import AboutHero from '../components/AboutHero';
import CallToAction from '../components/reuseables/CallToAction';


const About = () => {
  return (
    <>
     
      <main className="bg-white px-10 dark:bg-background-dark">
        <AboutHero />
        <MissionGrid />
        <CallToAction />
      </main>
      
    </>
  );
};

export default About;
