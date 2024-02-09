import React, { useEffect } from "react";
import "./Recommended.css";
import JobCard from "../../components/job-card/JobCard";
import JobCategoryCard from "../../components/job-category-card/JobCategoryCard";
import { job_categories } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../../redux/reducer/jobSlice";

const Recommended = () => {
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
    <section className="recommended-wrapper container-fluid py-5">
      <div className="container py-3">
        <div className="container px-0 d-flex justify-content-between align-items-center">
          <h3 className="fw-semibold">Recommended Jobs</h3>
          <div className="">
            <button className="theme-button border-0">Latest Job</button>
            <button className="secondary-button border-0 ms-2">
              Premium Jobs
            </button>
          </div>
        </div>
        <div className="container px-0">
          <p className="fs-6">Explore suggested job searches</p>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
        {job_categories.map((c) => {
          return <JobCategoryCard jobcategory={c} key={c} />;
        })}
      </div>
      <div className="container pb-4 d-flex flex-wrap justify-content-between align-items-center">
        {data &&
          data.map(
            ({
              _id,
              author,
              description,
              jobcategory,
              joblocation,
              jobtitle,
              jobtype,
              salary,
            }) => {
              return (
                <JobCard
                  key={_id}
                  _id={_id}
                  title={jobtitle}
                  jobtype={jobtype}
                  salary={salary}
                  location={joblocation}
                />
              );
            }
          )}
      </div>
      {/* <div className="container py-3">
        <div className="container px-0">
          <div className="container p-0">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="card pt-4 pb-3 px-4 border-0 mb-4">
                <h5 className="fw-semibold">Job Categories</h5>
              </div>
              {job_categories &&
                job_categories.map((c) => {
                  return <JobCategoryCard jobcategory={c} key={c.index} />;
                })}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Recommended;
