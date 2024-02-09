import React, { useEffect, useState } from "react";
import "./JobDescription.css";
import { useParams } from "react-router-dom";
import Header from "../../common/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails } from "../../../redux/reducer/jobSlice";

const JobDescription = () => {
  const [showForm, setShowForm] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const JobDetails = () => {
    dispatch(getJobDetails(params._id));
  };

  useEffect(() => {
    JobDetails();
  }, []);
  const data = useSelector((state) => state.jobs?.jobdetails?.data);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);
  console.log("job data >> ", data);
  if (loading)
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <h2>Error: {error}</h2>
      </div>
    );
  return (
    <>
      <Header text={"Job details"} showSearchBox={false} height={40} />
      {showForm == true ? (
        <section className="container-fluid bg-light py-5">
          <div className="container border border-dark d-flex justify-content-center align-items-center">
            <form
              action=""
              className="p-5 w-75 rounded-3 border border-secondary"
            ></form>
          </div>
        </section>
      ) : (
        <section className="container-fluid border py-5">
          <div className="container border-bottom pt-5 ">
            {/* company profile */}
            <div className="row">
              <div className="col-lg-10 col-md-9 col-sm-12 d-flex gap-3 text-center">
                <img
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c52e.png"
                  alt=""
                  className="img-thumbnail"
                  style={{ width: 100, height: 100 }}
                />
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <p className="">Type: {data?.jobtype}</p>
                  <h4 className="fw-semibold">{data?.jobtitle}</h4>
                  <p className="">Pay: {data?.salary}</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-12 d-flex align-items-start justify-content-center">
                <button
                  className="secondary-button border-0"
                  onClick={toggleShowForm}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="container py-4">
            {/* description */}
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-12 pe-3">
                <h4 className="fw-semibold">Responsibilities</h4>
                <p className="secondary-heading">{data?.description}</p>
                <h4 className="fw-semibold mt-4">Requirements</h4>
                <p className="secondary-heading">{data?.description}</p>
                <h4 className="fw-semibold mt-4">Professional Skills</h4>
                <p className="secondary-heading">{data?.description}</p>
              </div>
              {/* short titles */}
              <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-start pt-4 ps-4 border rounded">
                <h4 className="fw-semibold mb-4">Job Information</h4>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Company Name</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Job Title</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Job Type</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Category</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Location</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Offered Salary</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Qualification</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Application Deadline</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default JobDescription;
