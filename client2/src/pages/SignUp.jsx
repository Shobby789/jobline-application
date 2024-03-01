import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/auth2.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };
  return (
    <div className="container-fluid min-vh-100">
      <div className="container aut-page">
        <div className="row min-vh-100">
          <div className="col-lg-7 col-md-7 col-sm-12 d-flex align-items-center justify-content-center pe-lg-5">
            <img src={authImg} alt="" className="img-fluid aut-img" />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column align-items-start justify-content-center pe-lg-5 pt-4">
            <h2 className="fw-bold">Sign up</h2>
            <form className=" py-lg-4 w-100" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="" className="fw-semibold form-label">
                  Enter Full Name
                  <span className="badge ms-1 ps-0 fs-6 text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="Jon Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="fw-semibold form-label">
                  Email
                  <span className="badge ms-1 ps-0 fs-6 text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control py-3 text-medium"
                  placeholder="JonDoe@gmail.com"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="fw-semibold form-label">
                  Create a Password
                  <span className="badge ms-1 ps-0 fs-6 text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control py-3 text-medium"
                  placeholder=""
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="fw-semibold w-100 btn btn-dark text-medium py-2"
                >
                  Sign up
                </button>
              </div>
              <div className="text-center pt-4">
                <p className="text-medium fw-semibold text-secondary">
                  Already have an account?
                  <Link
                    to={"/sign-in"}
                    className="text-decoration-none ms-1 purple-text"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
