import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducer/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const { username, email, password } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ username, email, password }));
    navigate("/signin");
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container-fluid auth d-flex min-vh-100 p-0">
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 left-box box">
        <h1 className="fw-bold">Register</h1>
        <div className="social-logins my-3 w-50 d-flex justify-content-evenly align-items-center">
          <div className="border border-silver py-2 px-3 fs-6 rounded">
            <FaGoogle />
          </div>
          <div className="border border-silver py-2 px-3 fs-6 rounded">
            <FaFacebookF />
          </div>
          <div className="border border-silver py-2 px-3 fs-6 rounded">
            <FaGithub />
          </div>
          <div className="border border-silver py-2 px-3 fs-6 rounded">
            <FaLinkedinIn />
          </div>
        </div>
        <p>or use your email and password</p>
        <div className="px-2 w-75 mb-4">
          <input
            type="text"
            className="form-control py-2 px-3 border-0 bg-light"
            placeholder="Full Name"
            name="username"
            value={data.username}
            onChange={handleOnChange}
          />
        </div>
        <div className="px-2 w-75 mb-4">
          <input
            type="email"
            className="form-control py-2 px-3 border-0 bg-light"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="px-2 w-75 mb-4">
          <input
            type="password"
            className="form-control py-2 px-3 border-0 bg-light"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
          />
        </div>
        <button
          className="border-0 text-light rounded btn-login py-2 fw-semibold px-5 text-uppercase"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        {width < 650 ? (
          <p className="mt-3">
            <Link to="/signin" className="text-secondary">
              Sign In
            </Link>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center gap-2 text-light right-box px-5 text-center">
        <h1 className="fw-bold">Welcome to Jobline!</h1>
        <p className="fs-5 fw-light">
          Find your dream jobs while sitting in your comfort zone
        </p>
        {/* <Link
          to="/signin"
          className="btn btn-outline-light py-2 fw-semibold px-5 text-uppercase"
        >
          Sign In
        </Link> */}
      </div>
    </div>
  );
};

export default SignUp;
