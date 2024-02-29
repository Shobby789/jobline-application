import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import AllJobs from "./pages/AllJobs.jsx";
import Companies from "./pages/Companies.jsx";
import Contact from "./pages/Contact.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import JobDetails from "./pages/JobDetails.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/jobs/job-details" element={<JobDetails />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
