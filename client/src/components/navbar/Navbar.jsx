import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import joblineLogo from "../../assets/jobline-logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.isAuthenticated);
  const [isLoggedIn, setIsLoggedIn] = useState(user);
  const [name, setName] = useState("");
  if (isLoggedIn) {
    var loggedInUser = JSON.parse(localStorage.getItem("jobline-user"));
    console.log("loggedInUser >> ", loggedInUser.user);
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand me-auto" to="/">
          {/* <img src={joblineLogo} alt="" width={200} height={200} /> */}
          Jobline
        </Link>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Jobline
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
                  className="nav-link mx-lg-2 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/find-jobs">
                  Find jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/companies">
                  Companies
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/hire">
                  Hire
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isLoggedIn ? (
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/profile"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {loggedInUser.user.username}
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <button className="dropdown-item">Logout</button>
              </li>
            </ul>
          </li>
        ) : (
          <div className="d-flex align-items-center justify-content-center gap-2">
            <Link to="/signin" className="login-button">
              Sign in
            </Link>
            <Link className="login-button" to="/hire">
              Hire
            </Link>
          </div>
        )}
        {/* <Link to="./login.html" className="login-button">
          Sign in
        </Link> */}
        {/* profile dropdown */}
        {/* <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/profile"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <button className="dropdown-item">Logout</button>
            </li>
          </ul>
        </li> */}
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
