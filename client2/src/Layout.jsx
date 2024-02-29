import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./common/Footer";

const Layout = () => {
  const location = useLocation();
  const shouldComponentRender =
    location.pathname !== "/sign-in" && location.pathname !== "/sign-up";
  return (
    <>
      {shouldComponentRender && <Navbar />}
      <Outlet />
      {shouldComponentRender && <Footer />}
    </>
  );
};

export default Layout;
