import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log("DDDDDD");
  };
  return (
    <div className="container-fluid index-page">
      <div className="sidebar">
        <div className="border-end d-flex flex-column align-items-center justify-content-start gap-3 pt-4 sidebar">
          <h4 className="fw-bold">Getjob</h4>
          <ul className="ps-3">
            <li className="my-3 px-0 py-2">
              <Link
                to="/"
                className="text-decoration-none text-medium fw-medium text-secondary"
              >
                Dashboard
              </Link>
            </li>
            <li className="my-3 px-0 py-2">
              <Link
                to="/my-jobs"
                className="text-decoration-none text-medium fw-medium text-secondary"
              >
                My Jobs
              </Link>
            </li>
            <li className="my-3 px-0 py-2">
              <Link
                to="/applications"
                className="text-decoration-none text-medium fw-medium text-secondary"
              >
                Applications
              </Link>
            </li>
            <li className="my-3 px-0 py-2">
              <Link
                to="/find-talent"
                className="text-decoration-none text-medium fw-medium text-secondary"
              >
                Find Talent
              </Link>
            </li>
            <li className="my-3 px-0 py-2">
              <Link
                to="/settings"
                className="text-decoration-none text-medium fw-medium text-secondary"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-0 content">
        <div className="d-flex justify-content-between align-items-center pt-3 pb-2 px-4 z-1 border-bottom content-navbar">
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
        <div className="children py-2 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
