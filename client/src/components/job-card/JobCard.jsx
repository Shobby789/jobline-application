import React, { useState } from "react";
import "./JobCard.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const JobCard = () => {
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave(!save);
  };
  return (
    <div className="card job-card pt-3 pb-3 px-4 border-0 mb-4">
      <div className="d-flex justify-content-between pt-2 pb-0 mb-3">
        <p>Type: Internship</p>
        <p>Posted: 2 days ago</p>
        <div onClick={handleSave}>
          {save === true ? (
            <FaHeart className="heart-icon" />
          ) : (
            <IoIosHeartEmpty className="heart-icon" />
          )}
        </div>
      </div>
      <div>
        <h5 className="fw-semibold">Assistant manager</h5>
        <p>Euro 60K - 80K annual</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center gap-5 pt-3 pb-0">
          <p className="position-relative">
            <span className="me-2">
              <IoLocationOutline />
            </span>
            <span className="job-location">Karachi</span>
          </p>
          <p>
            <span className="me-2">
              <IoLocationOutline />
            </span>
            <span className="job-department">IT</span>
          </p>
        </div>
        <div>
          <button className="secondary-button border-0 job-card-btn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
