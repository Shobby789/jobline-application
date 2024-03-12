import React from "react";

const CompanyProfile = () => {
  return (
    <div>
      <p className="text-secondary">Company Profile</p>
      <div className="container px-lg-5 bg-white rounded-4 border py-5 mb-4">
        <div className="container px-0 mb-4">
          <h5 className="fw-medium">Profile</h5>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Company Name
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="Contour Software"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Email Address
            </label>
            <input
              type="email"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="contour@gmail.com"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Phone
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="012 345 6789"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Website
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="contour.com"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Since
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="2009"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Company Size
            </label>
            <select
              className="form-select p-3 rounded-2 bg-light text-medium fw-normal"
              aria-label="Large select example"
            >
              <option selected>5 - 25</option>
              <option value="1">25 -50</option>
              <option value="2">50 - 100</option>
              <option value="3">100 - 200</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              About Company
            </label>
            <textarea
              className="form-control p-3 rounded-2 bg-light text-medium"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Write about your company"
            ></textarea>
          </div>
        </div>
        <div className="div pt-2">
          <button className="btn btn-dark px-5 py-2 fw-normal text-medium">
            Save
          </button>
        </div>
      </div>
      <div className="container px-lg-5 bg-white rounded-4 border py-5 mb-4">
        <div className="container px-0 mb-4">
          <h5 className="fw-medium">Social Network</h5>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Facebook
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="www.facebook.com/contour"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Twitter
            </label>
            <input
              type="email"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="www.twitter.com/contour"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              LinkedIn
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="www.linkedin.com/contour"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Official Website
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="contour.com"
            />
          </div>
        </div>
        <div className="div pt-2">
          <button className="btn btn-dark px-5 py-2 fw-normal text-medium">
            Save
          </button>
        </div>
      </div>
      <div className="container px-lg-5 bg-white rounded-4 border py-5 mb-4">
        <div className="container px-0 mb-4">
          <h5 className="fw-medium">Contact Information</h5>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Country
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="Country"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              City
            </label>
            <input
              type="email"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="City"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="" className="form-label text-medium fw-normal">
              Complete Address
            </label>
            <input
              type="text"
              className="form-control p-3 rounded-2 bg-light text-medium"
              placeholder="A3, 2nd floor United Square Block-14 Gulistan-e-Johar"
            />
          </div>
        </div>
        <div className="div pt-2">
          <button className="btn btn-dark px-5 py-2 fw-normal text-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
