import React from "react";
import "./FeaturedJobs.css";
import FeaturedJobCard from "../../components/featured-job-card/FeaturedJobCard";

const FeaturedJobs = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container px-0 py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h3 className="fw-semibold">Featured Job Offers</h3>
          <div>
            <button className="theme-button border-0">All Job Offers</button>
          </div>
        </div>
        <div className="container">
          <p className="secondary-heading fs-6">
            Know your worth and find the job that qualify your life
          </p>
        </div>
      </div>
      <div className="container px-0 d-flex justify-content-between align-items-center flex-wrap py-3">
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
        <FeaturedJobCard />
      </div>
    </section>
  );
};

export default FeaturedJobs;
