import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./employee/screens/home/Home.jsx";
import Jobs from "./employee/screens/jobs/Jobs.jsx";
import Root from "./Root.jsx";
import Companies from "./employee/screens/companies/Companies.jsx";
import Hire from "./employee/screens/hire/Hire.jsx";
import Contact from "./employee/screens/contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Login from "./auth/Login.jsx";
import SignUp from "./auth/SignUp.jsx";
import JobDescription from "./employee/screens/jobdescription/JobDescription.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/find-jobs" element={<Jobs />} />
      <Route path="/job-details/:_id" element={<JobDescription />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
