import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./common/Footer";

const Layout = () => {
  const location = useLocation();
  const shouldComponentRender =
    location.pathname !== "/sign-in" && location.pathname !== "/sign-up";
  const hideFooter = location.pathname.startsWith("/user-profile/");
  return (
    <>
      {shouldComponentRender && <Navbar />}
      <Outlet />
      {shouldComponentRender && <Footer />}
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

export default Layout;
