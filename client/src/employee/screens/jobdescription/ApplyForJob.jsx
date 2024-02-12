import React, { useEffect, useState } from "react";
import "./JobDescription.css";
import Header from "../../common/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applyOnJob, getJobDetails } from "../../../redux/reducer/jobSlice";

const ApplyForJob = () => {
  // const jobData = useSelector((state) => state.jobs?.jobdetails?.data);
  const params = useParams();
  const dispatch = useDispatch();
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [file, setFile] = useState(null);

  const JobDetails = () => {
    dispatch(getJobDetails(params._id));
  };

  useEffect(() => {
    JobDetails();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("education", education);
      formData.append("experience", experience);
      formData.append("company", company);
      formData.append("coverLetter", coverLetter);
      formData.append("file", file);
      console.log("formData >> ", formData);
      // console.log("resume >> ", resume);
      // console.log("euction >> ", education);
      // console.log("experience >> ", experience);
      // console.log("company >> ", company);
      // console.log("coverLetter >> ", coverLetter);
      // console.log("file >> ", file);
    } catch (error) {
      console.log("application form submission erro >> ", error);
    }
  };
  return (
    <>
      <Header text={"Application Form"} showSearchBox={false} height={50} />
      <section className="container-fluid py-5 border-top">
        <div className="container pb-5 pt-3">
          <div className="row">
            {/* application form */}
            <div className="col-lg-8 col-md-8 col-sm-12">
              <form
                onSubmit={handleSubmit}
                className="border application-form rounded-3"
              >
                <div className="mb-4">
                  <label htmlFor="eucation" className="form-label">
                    What is the highest level of eudcation you have?
                  </label>
                  <select
                    name="eucation"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    id="eucation"
                    className="form-select py-2"
                  >
                    <option value="Matric">Matric</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Current Position
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="form-control py-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="form-control py-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="resume" className="form-label">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    className="form-control py-2"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="coverLetter" className="mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    id="coverLetter"
                    cols="47"
                    rows="7"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="">
                  <button type="submit" className="btn btn-primary py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* job details */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="container rounded-3 border application-form-job-description py-5">
                <h4 className="fw-semibold mb-4">Job Information</h4>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Company Name</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Job Title</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Job Type</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Category</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Location</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Offered Salary</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Qualification</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
                <div className="row d-flex justify-content-start w-100 mb-4">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Application Deadline</h6>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6 className="secondary-heading">Logicose</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyForJob;
