import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Index from "./pages/home/Index";

const Root = () => {
  const location = useLocation();
  const shouldComponentRender =
    location.pathname !== "/signin" && location.pathname !== "/sign-up";
  return (
    <>
      {shouldComponentRender && <Navbar />}
      <Outlet />
      {shouldComponentRender && <Index />}
    </>
  );
};

export default Root;
