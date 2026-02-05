import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Services from "./pages/Services";
import EventsAndUpdates from "./pages/EventsAndUpdates";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageLayout from "./layout/PageLayout";

const HomePage = () => {
  return (
    <PageLayout showSearch={true} className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Membership />
      <EventsAndUpdates />
      <Articles />
      <Projects />
      <Contact />
    </PageLayout>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
