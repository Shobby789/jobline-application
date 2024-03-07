import React, { useEffect } from "react";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import { jobCategories } from "../utils/data";
import JobCategoryCard from "../components/JobCategoryCard";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const fetchJobs = async () => {
    const options = {
      method: "POST",
      url: "https://linkedin-jobs-search.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "4baf87a271msh53b8f75b8c3bb8ep1dbb49jsnddffa55d6b58",
        "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
      },
      data: {
        search_terms: "python programmer",
        location: "Chicago, IL",
        page: "1",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchJobs2 = async () => {
    const options = {
      method: "GET",
      url: "https://indeed-jobs-api.p.rapidapi.com/indeed-us/",
      params: {
        offset: "0",
        keyword: "python",
        location: "california",
      },
      headers: {
        "X-RapidAPI-Key": "4baf87a271msh53b8f75b8c3bb8ep1dbb49jsnddffa55d6b58",
        "X-RapidAPI-Host": "indeed-jobs-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchJobs();
    fetchJobs2();
  }, []);
  return (
    <>
      <Hero />
      {/* recommended jobs */}
      <div className="container-fluid secondary-bg py-5">
        <div className="container px-lg-1 py-3">
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
            <Link to="/" className="btn btn-dark btn-sm py-2 px-3 rounded-2">
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
                className="text-decoration-none px-3 py-2 rounded-2 btn-theme"
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
                className="btn btn-outline-dark fw-semibold fs-6 px-3 py-2 rounded-2"
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
