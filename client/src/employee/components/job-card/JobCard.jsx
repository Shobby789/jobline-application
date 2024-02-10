import React, { useState } from "react";
import "./JobCard.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobCard = ({
  _id,
  title,
  description,
  salary,
  jobtype,
  location,
  category,
  author,
}) => {
  const [save, setSave] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    setSave(!save);
  };
  return (
    <div className="card job-card pt-3 pb-3 px-4 border-0 mb-4" id={_id}>
      <div className="d-flex justify-content-start gap-3 pt-2 pb-0 mb-3">
        <p>Type: {jobtype}</p>
        <p>Posted: 2 days ago</p>
        {/* <div onClick={handleSave} className="ms-auto">
          {save === true ? (
            <FaHeart className="heart-icon" />
          ) : (
            <IoIosHeartEmpty className="heart-icon" />
          )}
        </div> */}
      </div>
      <div>
        <h5 className="fw-semibold">{title}</h5>
        <p>PKR {salary}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center gap-5 pt-3 pb-0">
          <p className="position-relative">
            <span className="me-2">
              <IoLocationOutline />
            </span>
            <span className="job-location">{location}</span>
          </p>
          <p>
            <span className="me-2">
              <IoLocationOutline />
            </span>
            <span className="job-department">Information Technology</span>
          </p>
        </div>
        <div>
          <button
            className="secondary-button border-0 job-card-btn"
            onClick={() => navigate(`/job-details/${_id}`)}
          >
            Job Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
