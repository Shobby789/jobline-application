import React from "react";
import Stats from "../components/Stats";
import { IoBagRemoveOutline } from "react-icons/io5";
import Notification from "../components/Notification";
import ApplicationCard from "../components/ApplicationCard";

const Dashboard = () => {
  return (
    <>
      <p className="text-secondary mb-1 text-medium">Ready to jump back in?</p>
      <Stats />
      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 ps-0 pe-3">
            <div className="bg-white p-4 w-100 rounded-3 box_shadow">
              <h6 className="fw-medium">Your Profile Views</h6>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 pe-0 ps-2">
            <div className="bg-white p-4 w-100 rounded-3 box_shadow d-flex flex-column justify-content-start align-items-start">
              <h6 className="fw-medium mb-4 ms-2 ps-1">Notifications</h6>
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white rounded-3 pt-5 px-lg-5 d-flex justify-content-between flex-wrap">
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </>
  );
};

export default Dashboard;
