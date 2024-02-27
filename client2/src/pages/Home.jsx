import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import { jobCategories } from "../utils/data";
import JobCategoryCard from "../components/JobCategoryCard";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      {/* recommended jobs */}
      <div className="container-fluid secondary-bg py-5">
        <div className="container px-lg-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-start px-lg-4">
              <h4 className="fw-semibold">Recommended Jobs</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end px-4">
              <button className="job-filter-btn mx-2 border-bottom">
                Part Time
              </button>
              <button className="job-filter-btn mx-2 border-bottom">
                Full Time
              </button>
              <button className="job-filter-btn ms-2 border-bottom">
                Remote
              </button>
            </div>
          </div>
          <div className="container px-lg-1 d-flex justify-content-center flex-wrap gap-3 py-5">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <div className="container text-center pb-3">
            <Link to="/" className="btn btn-dark btn-sm py-2 px-3 rounded-5">
              See More
            </Link>
          </div>
        </div>
      </div>

      {/* popular jobs categories */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row pt-3 px-lg-2">
            <div className="col-lg-6 col-md-6 col-sm-12 text-start pt-0">
              <h4 className="fw-semibold">Popular Job Categories</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-end">
              <a
                href="/"
                className="text-decoration-none px-3 py-2 rounded-5 btn-theme"
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="container px-4 d-flex justify-content-between flex-wrap gap-3 py-5">
          {jobCategories &&
            jobCategories.map((j) => {
              return (
                <JobCategoryCard
                  title={j.title}
                  key={j.id}
                  // icon={j.icon}
                  seats={j.seats}
                  id={j.id}
                />
              );
            })}
        </div>
      </div>

      {/* world top companies start */}
      <div className="container-fluid secondary-bg py-5">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 pe-5"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-start ps-3">
              <h2 className="fw-bold">
                World's Top Companies <br />
                Post Jobs Here
              </h2>
              <p className="my-3 text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ratione consectetur sit esse eaque animi neque maiores eveniet
                officiis quas.
              </p>
              <a
                href="/"
                className="btn btn-outline-dark fw-semibold fs-6 px-3 py-2 rounded-5"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* world top companies end */}

      {/* Testtimonials */}
      <Testimonials />

      {/* subscribe */}
      <Subscribe />
    </>
  );
};

export default Home;
