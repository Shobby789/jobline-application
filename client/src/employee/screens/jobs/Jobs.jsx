import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import JobCategoryCard from "../../components/job-category-card/JobCategoryCard";
import JobCard from "../../components/job-card/JobCard";
import { job_categories } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../../redux/reducer/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
              {job_categories.map((c) => {
                return <JobCategoryCard jobcategory={c} key={c.index} />;
              })}
            </div>
            <div className="col-lg-7 job-description-container">
              {data &&
                data.map((job) => {
                  return (
                    <JobCard
                      _id={job._id}
                      key={job._id}
                      title={job.jobtitle}
                      jobtype={job.jobtype}
                      salary={job.salary}
                      location={job.joblocation}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
