import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";

const CompanyCard = () => {
  return (
    <div className="row border rounded-4 px-3 py-4 position-relative mb-4 shadow_hover">
      <div className="col-lg-1 col-md-2 col-sm-3 px-0">
        <PiInstagramLogoFill className="company-logo company-profile-logo" />
      </div>
      <div className="col-lg-11 col-md-10 col-sm-9 px-3">
        <h5 className="fw-semibold mb-3">Upwork</h5>
        <div className="d-flex gap-3">
          <div className="d-flex gap-1 ps-0">
            <CiLocationOn
              className="fs-6"
              style={{ position: "relative", top: "1px" }}
            />
            <p className="card-text text-secondary text-small">
              Karachi, Pakistan
            </p>
          </div>
          <div className="d-flex gap-1 ps-0">
            <IoBagOutline
              className="fs-6"
              style={{ position: "relative", top: "1px" }}
            />
            <p className="card-text text-secondary text-small">
              Software Development
            </p>
          </div>
        </div>
        <span className="open-positions mt-3 rounded-5 text-small">
          Open jobs - 15
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
