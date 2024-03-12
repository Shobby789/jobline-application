import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyJobs from "./pages/MyJobs";
import Applications from "./pages/Applications";
import FindTalent from "./pages/FindTalent";
import Settings from "./pages/Settings";
import CompanyProfile from "./pages/CompanyProfile";
import PostANewJob from "./pages/PostANewJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "post-a-new-job",
        element: <PostANewJob />,
      },
      {
        path: "manage-jobs",
        element: <MyJobs />,
      },
      {
        path: "all-applicants",
        element: <Applications />,
      },
      {
        path: "find-talent",
        element: <FindTalent />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
