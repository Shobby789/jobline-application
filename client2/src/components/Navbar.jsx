import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 border-bottom">
        <div className="container">
          <Link className="navbar-brand me-auto fw-bold fs-3" to="/">
            Getjob
          </Link>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bold fs-3"
                id="offcanvasNavbarLabel"
              >
                Getjob
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-lg-2 text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 text-dark" to="/all-jobs">
                    All Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 text-dark" to="/companies">
                    Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 text-dark" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/sign-up"
            className="btn btn-dark bt-sm btn-sm px-3 py-2 rounded-pill login-btn"
          >
            Sign Up
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span>  */}
            <HiOutlineMenu className="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
