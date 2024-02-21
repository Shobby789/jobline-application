import React from "react";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  return (
    <>
      <div className="container-fluid bg-light px-0 py-5">
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
              <form className="form bg-light py-4 px-3 rounded-4 mb-4">
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
              <div className="bg-light py-4 px-3 rounded-4">
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
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
