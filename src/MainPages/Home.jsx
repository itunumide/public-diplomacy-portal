import About from "../pages/About"
import Articles from "../pages/Articles"
import Contact from "../pages/Contact"
import EventsAndUpdates from "../pages/EventsAndUpdates"
import Hero from "../pages/Hero"
import Membership from "../pages/Membership"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import React from "react"
const Home = () => {
    return (
        <>
     <Hero />
      <About />
      <Services />
      <Membership />
      <EventsAndUpdates />
      <Articles />
      <Contact />
        </>
    )
}

export default Home