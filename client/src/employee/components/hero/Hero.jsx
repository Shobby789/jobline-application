import React from "react";
import "./Hero.css";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SearchBox from "../search-input/SearchBox";

const Hero = () => {
  return (
    <section className="hero-section pt-5">
      <div className="container d-flex align-items-center justify-content-center flex-column fs-1 text-center">
        <h1 className="mb-3">
          Empowering Your Job Search Journey <br />
          Find Your Dream Job Today
        </h1>
        <p>
          When you are searching for a job, there are a few things you can do
          <br /> to get the most out of your search.
        </p>

        <div className="input-group mt-3">
          <span className="input-group-text rounded-circle">
            <FiSearch />
          </span>
          <input
            type="text"
            className="form-control py-2 border-0 outline-0"
            aria-label="Amount (to the nearest dollar)"
            placeholder="Job title or keyword"
          />
          <button className="input-group-text rounded-5 px-3">
            <IoLocationOutline className="me-1" /> Any location
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
