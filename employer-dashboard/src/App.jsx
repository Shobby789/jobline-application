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
        path: "my-jobs",
        element: <MyJobs />,
      },
      {
        path: "applications",
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
