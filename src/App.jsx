import React from "react";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Services from "./pages/Services";
import EventsAndUpdates from "./pages/EventsAndUpdates";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import SignUp from "./pages/SignUp";
import PageLayout from "./layout/PageLayout";
import AboutPage from "./AboutComponents/AboutPage";
import Home from "./MainPages/Home";
import MembershipPage from "./MembershipComponent/MembershipPage";
import ServicesPage from "./ServicesComponent/ServicesPage";
import EventsTrainingCalendarPage from "./Event Component/EventPage";



const App = () => {
 const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path="/" element={<PageLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/events" element={<EventsTrainingCalendarPage/>} />
      <Route path="/signUp" element={<SignUp />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Route>
    )
  )
  return (
    <RouterProvider   router={router}/>
  );
};

export default App;
