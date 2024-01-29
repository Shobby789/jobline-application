import React from "react";
import "./Recommended.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import JobCard from "../../components/job-card/JobCard";
import JobCategoryCard from "../../components/job-category-card/JobCategoryCard";

const Recommended = () => {
  return (
    <section className="recommended-wrapper container-fluid py-5">
      <div className="container py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h3 className="fw-semibold">Recommended Jobs</h3>
          <div>
            <button className="theme-button border-0">Latest Job</button>
            <button className="secondary-button border-0 ms-2">
              Premium Jobs
            </button>
          </div>
        </div>
        <div className="container">
          <p className="fs-6">Explore suggested job searches</p>
        </div>
      </div>
      <div className="container py-3">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="card pt-4 pb-3 px-4 border-0 mb-4">
                <h5 className="fw-semibold">Job Categories</h5>
              </div>
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />
              <JobCategoryCard />
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
