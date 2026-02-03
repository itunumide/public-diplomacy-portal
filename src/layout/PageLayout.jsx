import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const PageLayout = ({ children, showSearch = false }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar showSearch={showSearch} />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
