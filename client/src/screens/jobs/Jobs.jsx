import React from "react";
import Header from "../../common/header/Header";
import JobCategoryCard from "../../components/job-category-card/JobCategoryCard";
import JobCard from "../../components/job-card/JobCard";

const Jobs = () => {
  return (
    <>
      <Header text={"Find Your Dream Jobs"} showSearchBox={true} height={80} />
      <section className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 jobs-container">
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
            <div className="col-lg-7 job-description-container">
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
