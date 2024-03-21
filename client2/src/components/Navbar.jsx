import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);
  const toggleProfile = () => {
    setToggleProfileMenu(!toggleProfileMenu);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 border-bottom position-relative">
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-lg-3 text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-3 text-dark" to="/all-jobs">
                    All Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-3 text-dark" to="/companies">
                    Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-3 text-dark" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {isLoggedIn ? (
            <>
              <button
                className="border-0 profile-btn"
                type="button"
                onClick={toggleProfile}
              >
                <BsPerson className="me-2 d-none d-sm-inline" />
                <span className="text-medium fw-medium">My Account</span>
              </button>
              {toggleProfileMenu ? (
                <ul className="rounded-3 profile-dropdown">
                  <li className="w-100">
                    <a
                      href=""
                      className="text-decoration-none text-medium text-dark"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-decoration-none text-medium text-dark"
                    >
                      My Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-decoration-none text-medium text-dark"
                    >
                      Settings
                    </a>
                  </li>
                  {/* <li className="w-100">
                    <button className="border-0 text-danger logout-btn text-medium fw-medium px-0">
                      Logout
                    </button>
                  </li> */}
                </ul>
              ) : (
                <></>
              )}
            </>
          ) : (
            <Link
              to="/sign-up"
              className="btn btn-dark bt-sm btn-sm px-3 py-2 rounded-2 login-btn"
            >
              Sign Up
            </Link>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <HiOutlineMenu className="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
