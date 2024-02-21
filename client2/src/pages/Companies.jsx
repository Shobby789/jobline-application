import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import CompanyCard from "../components/CompanyCard";

const Companies = () => {
  return (
    <>
      <div className="container-fluid bg-light px-0 py-5">
        <div className="container py-5 mb-2">
          <h2 className="fw-bold text-center">Companies</h2>
          <p className="text-secondary text-small text-center">
            Home / Companies
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 border-bottom">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
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
            <div className="col-lg-8 col-md-8 col-sm-12 pt-1">
              {/* company card */}
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
