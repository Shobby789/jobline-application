import React from "react";

const JobCategoryCard = ({ id, title, icon, seats }) => {
  return (
    <div
      className="card job-category-card mx-auto pt-3 d-flex justify-content-center align-items-center shadow_hover"
      id={id}
    >
      {/* <img src="" className="card-img-top" alt="..." /> */}
      <div className="card-body text-center d-flex flex-column justify-content-center align-items-center pt-0">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-secondary text-small">{seats} Jobs</p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
