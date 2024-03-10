import React from "react";
import JobCard from "../components/JobCard";
import { JobData } from "../utils/data";

const AllJobs = () => {
  return (
    <>
      <div className="container-fluid secondary-bg px-0 py-5">
        <div className="container py-5 mb-2">
          <h2 className="fw-bold text-center">Find Jobs</h2>
          <p className="text-secondary text-small text-center">Home / Jobs</p>
        </div>
      </div>
      <div className="container-fluid border-bottom py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              {/* job filter/search form */}
              <form className="form secondary-bg py-4 px-3 rounded-4 mb-4">
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label text-medium">
                    Search by keyword
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 text-medium"
                    placeholder="Job title"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label text-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 text-medium"
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form label mb-2 text-medium">
                    Category
                  </label>
                  <select className="form-select py-2 text-medium">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </form>
              <div className="secondary-bg py-4 px-3 rounded-4">
                <h6 className="fw-semibold">Recruiting?</h6>
                <p
                  className="text-small text-secondary"
                  style={{ fontWeight: "500" }}
                >
                  Advertise your jobs to millions of monthly users and search
                  15.8 million CVs in our database.
                </p>
                <a
                  href="/hire"
                  className="btn btn-dark btn-sm px-3 rounded-5 text-small py-1"
                >
                  Start Recruiting
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-wrap justify-content-start gap-4 px-3 pt-1">
              {JobData.map(
                ({
                  id,
                  job_title,
                  min_salary,
                  max_salary,
                  job_location,
                  date_posted,
                  company_logo_url,
                  job_type,
                }) => {
                  return (
                    <JobCard
                      key={id}
                      id={id}
                      title={job_title}
                      date_posted={date_posted}
                      min_salary={min_salary}
                      max_salary={max_salary}
                      c_logo={company_logo_url}
                      location={job_location}
                      job_type={job_type}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
