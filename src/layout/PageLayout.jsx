import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from 'react-router-dom';


const PageLayout = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}
export default PageLayout;
