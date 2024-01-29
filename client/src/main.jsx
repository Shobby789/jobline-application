import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import Jobs from "./screens/jobs/Jobs.jsx";
import Root from "./Root.jsx";
import Companies from "./screens/companies/Companies.jsx";
import Hire from "./screens/hire/Hire.jsx";
import Contact from "./screens/contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Login from "./screens/auth/Login.jsx";
import SignUp from "./screens/auth/SignUp.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/find-jobs" element={<Jobs />} />
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
