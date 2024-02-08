import React from "react";
import Navbar from "./employee/components/navbar/Navbar";
import Footer from "./employee/containers/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const shouldComponentRender =
    location.pathname !== "/signin" && location.pathname !== "/sign-up";
  return (
    <>
      {shouldComponentRender && <Navbar />}
      <Outlet />
      {shouldComponentRender && <Footer />}
    </>
  );
};

export default Root;
