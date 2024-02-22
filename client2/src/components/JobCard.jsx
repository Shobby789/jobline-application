import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const JobCard = () => {
  const id = "1234";
  return (
    <div className="card job-card text-center mb-4 mx-auto p-4 rounded-4 border shadow_hover">
      <div className="row">
        <div className="col-2">
          <PiInstagramLogoFill />
        </div>
        <div className="col-10 text-start">
          <Link
            to={`/jobs/job-details`}
            className="fs-6 text-decoration-none card-title fw-bold"
          >
            UX Designer
          </Link>
          <div className="d-flex gap-3 mb-2 mt-2">
            <div className="d-flex gap-1 ps-0">
              <CiLocationOn
                className="fs-6"
                style={{ position: "relative", top: "1px" }}
              />
              <p className="card-text text-secondary text-small">
                Karachi, Pakistan
              </p>
            </div>
            <div className="d-flex gap-1">
              <CiClock2
                className="fs-6"
                style={{ position: "relative", top: "1px" }}
              />
              <p className="card-text text-secondary text-small">
                11 hours ago
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 mb-2">
            <div className="d-flex gap-1 ps-0">
              <LiaMoneyBillWaveAltSolid
                className="fs-6"
                style={{ position: "relative", top: "1px" }}
              />
              <p className="card-text text-secondary text-small">$35K - $45K</p>
            </div>
          </div>
          <button className="job-type-btn rounded-5 text-small" disabled>
            Part Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

{
  /* <p className="text-secondary text-small align-self-end">Part Time</p>
      <div className="mb-2">
        
      
      </div>
      <h5 className="card-title fw-semibold">UX Designer</h5>
      <hr />
      <p className="card-text text-start mb-2 fw-semibold">Instagram</p>
      <div className="ps-0 text-start d-flex gap-1">
        <CiLocationOn
          className="fs-5"
          style={{ position: "relative", top: "1px" }}
        />
        <p className="card-text text-secondary text-medium">
          Karachi, Pakistan
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-3">
        <h6 className="fw-semibold align-self-center pt-1">$56,000</h6>
        <a
          href="/"
          className="btn-theme btn-sm text-small text-decoration-none rounded-5 py-1 px-3"
        >
          Apply Now
        </a>
      </div> */
}
