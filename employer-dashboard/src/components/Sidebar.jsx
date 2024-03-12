import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log("DDDDDD");
  };
  return (
    <div className="app">
      <div className="sidebar d-flex flex-column align-items-start justify-content-start gap-3 pt-4 ps-5">
        <h4 className="fw-bold">Getjob</h4>
        <ul className="px-0">
          <li className="my-3 px-0 py-2">
            <Link
              to="/"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <HiOutlineHome className="fs-5" />
              Dashboard
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/company-profile"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <IoPersonOutline className="fs-5" />
              Company Profile
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/post-a-new-job"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <LuSendHorizonal className="fs-5" />
              Post A New Job
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/manage-jobs"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <IoBagCheckOutline className="fs-5" />
              Manage Jobs
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/all-applicants"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <CiViewList className="fs-5" />
              All Applications
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/find-talent"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <CiViewList className="fs-5" />
              Find Talent
            </Link>
          </li>
          <li className="my-3 px-0 py-2">
            <Link
              to="/settings"
              className="text-decoration-none text-medium fw-normal text-secondary d-flex align-items-center justify-content-start gap-2"
            >
              <CiSettings className="fs-5" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="content-navbar d-flex justify-content-between align-items-center py-3 px-4">
          <h5 className="mb-0 fw-semibold mt-1">Welcome</h5>
          <div className="position-relative">
            <div className="profile-icon p-0" onClick={toggleDropdown}>
              <IoPersonCircle className="h-100 w-100" />
            </div>
            {showDropdown ? (
              <div className="profile-dropdown z-4 ps-4 pe-lg-5 d-flex justify-content-start pt-2 rounded-3">
                <ul className="px-0">
                  <li className="py-1">
                    <Link
                      to="/profile"
                      className="text-decoration-none text-secondary text-medium"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/settings"
                      className="text-decoration-none text-secondary text-medium"
                    >
                      Settings
                    </Link>
                  </li>
                  <li className="py-1">
                    <a
                      href=""
                      className="text-decoration-none text-secondary text-medium"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="content px-4 pt-3 bg-light">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
