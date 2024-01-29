import React from "react";
import "./FeaturedJobCard.css";
import logo from "../../assets/web-dev.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const FeaturedJobCard = () => {
  return (
    <div className="featured-job-card py-4 px-4 mb-5 rounded-4 d-flex flex-column align-items-start justify-content-between">
      <div className="department-title d-flex gap-2 mb-3 w-100">
        <div>
          <img src={logo} alt="" width={50} height={50} />
        </div>
        <div className="mt-2">
          <p className="mb-0">Finance</p>
          <p className="mt-1 mb-0">33 openings</p>
        </div>
      </div>
      <h5 className="fw-semibold mb-0">Financial Analyst</h5>
      <div className="position-title d-flex justify-content-between align-items-center mb-2 w-100">
        <p className="">Karachi, Pakistan</p>
        <p className="">Full Time</p>
      </div>
      <div className="company-title d-flex justify-content-between align-items-center w-100">
        <div>
          <p className="mb-1">Posted: 2 days ago</p>
          <p className="mb-0 fw-semibold fs-6">Microsoft</p>
        </div>
        <div>
          {/* <img src={logo} alt="" width={60} height={60} /> */}
          <button className="theme-button border-0">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
