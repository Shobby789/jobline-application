import React from "react";
import "./JobCategoryCard.css";
import { MdHealthAndSafety } from "react-icons/md";

const JobCategoryCard = () => {
  return (
    <div className="job-category-card pt-4 pb-3 px-4 border-0 mb-4 d-flex justify-content-between align-items-center">
      <div>
        <MdHealthAndSafety />
        <h6 className="fw-semibold text-decoration-none text-dark">
          Health and care
        </h6>
      </div>
      <div>
        <p>15 openings</p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
