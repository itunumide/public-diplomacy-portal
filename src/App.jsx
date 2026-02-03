import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Services from "./pages/Services";
import EventsAndUpdates from "./pages/EventsAndUpdates";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageLayout from "./layout/PageLayout";

const App = () => {
  const location = useLocation();
  const showSearch = ["/articles", "/events", "/projects"].includes(
    location.pathname,
  );

  return (
    <PageLayout showSearch={showSearch}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<EventsAndUpdates />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
