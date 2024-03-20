import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="container pt-4 pb-3 ps-5 position-relative">
      <h5 className="fw-bold mb-4 ps-2">Getjob</h5>
      <ul
        className="px-0 list-style-none w-100 ps-2"
        style={{ listStyle: "none" }}
      >
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
      <div className="logout-button ps-2 d-flex align-items-center justify-content-start gap-2s">
        <IoLogOutOutline className="fs-5 text-danger" />
        <button className="text-danger border-0 px-0 fw-medium">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
