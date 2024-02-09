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
        <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
          {job_categories.map((c) => {
            return <JobCategoryCard jobcategory={c} key={c} />;
          })}
        </div>
        <div className="container py-5 d-flex flex-wrap justify-content-between align-items-center job-description-container">
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
      </section>
    </>
  );
};

export default Jobs;
