import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Hero from "./pages/Hero";
import Membership from "./pages/Membership";
import Services from "./pages/Services";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Normal pages with default navbar */}
        <Route
          path="/"
          element={
            <PageLayout>
              <Hero />
            </PageLayout>
          }
        />
        {/* Membership page with custom navbar */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
};

export default App;
