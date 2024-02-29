import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "../assets/hero.webp";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

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
            <div className="search-container input-group border py-1 px-1 rounded-5 mb-5">
              <input
                type="text"
                className="form-control border-0 rounded-5 text-medium py-2 ps-3"
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
            <div className="container px-0 d-flex justify-content-start align-items-center">
              <div className="d-flex justify-content-start" style={{width:"160px"}}>
                <img src={user1} alt="" className="regular-users-img img1" />
                <img src={user2} alt="" className="regular-users-img img2" />
                <img src={user3} alt="" className="regular-users-img img3" />
                <img src={user4} alt="" className="regular-users-img img4" />
              </div>
              <h6 className="fw-bold text-secondary ps-1 pt-3 text-medium">
                45K+ Regular Users.
              </h6>
            </div>
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
