import "./style.css";
import Sidebar from "../components/Sidebar";
import JobCard2 from "../../components/JobCard2";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container-fluid border-bottom employer-dashboard">
      <div className="sidebar-container">
        {/* <Sidebar /> */}
        {screenWidth < 768 ? <Topbar /> : <Sidebar />}
      </div>
      <div className="pt-5 pe-lg-4 px-sm-3 employer-content">
        <div className="container pt-5">
          <p>{screenWidth}</p>
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
          <JobCard2 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
