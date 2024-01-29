import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./containers/footer/Footer";

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
