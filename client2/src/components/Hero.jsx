import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "../assets/hero.webp";

const Hero = () => {
  return (
    <main className="container-fluid hero">
      <div className="container">
        <div className="row">
          {/* hero text */}
          <div className="col-lg-7 col-md-7 col-sm-12 hero-text-section">
            <h1 className="fw-bold mb-3">
              Find your dream job <br />& make your goal.
            </h1>
            <p className="text-secondary mb-4">
              We are best global job finder agency and millions of <br />
              people used and trusted our platform.
            </p>
            <div className="search-container input-group border py-1 px-2 rounded-5 mb-5">
              <input
                type="text"
                className="form-control border-0 rounded-5 text-medium"
                placeholder="Search by keyword or job"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="btn btn-dark border-0 rounded-5"
                id="basic-addon2"
              >
                <IoSearchOutline />
              </span>
            </div>
            <h6 className="fw-bold text-secondary ps-1 text-medium">
              45K+ Regular Users.
            </h6>
          </div>
          {/* hero image */}
          <div className="col-lg-5 col-md-5 col-sm-12 pt-0 pe-0 text-end">
            <img src={Image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
