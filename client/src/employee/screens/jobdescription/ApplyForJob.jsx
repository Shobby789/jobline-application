import React, { useEffect, useState } from "react";
import "./JobDescription.css";
import Header from "../../common/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applyOnJob, getJobDetails } from "../../../redux/reducer/jobSlice";

const ApplyForJob = () => {
  const jobData = useSelector((state) => state.jobs?.jobdetails?.data);
  //   console.log("jobData >> ", jobData);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    education: "",
    experience: "",
    company: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setResume(selectedFile);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const JobDetails = () => {
    dispatch(getJobDetails(params._id));
  };

  useEffect(() => {
    JobDetails();
  }, []);

  const formData = new FormData();
  formData.append("filename", resume);
  formData.append("education", data.education);
  formData.append("experience", data.experience);
  formData.append("company", data.company);
  formData.append("coverLetter", data.coverLetter);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(applyOnJob(formData));
    console.log(formData);

    setData({
      education: "",
      experience: "",
      company: "",
    });
    setResume(null);
  };
  return (
    <>
      <Header text={"Application Form"} showSearchBox={false} height={50} />
      <section className="container-fluid py-5 border-top">
        <div className="container pb-5 pt-3">
          <div className="row">
            {/* left side */}
            <div className="col-lg-8 col-md-8 col-sm-12">
              <form
                onSubmit={handleSubmit}
                className="border application-form rounded-3"
              >
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    What is the highest level of education you have completed?
                  </label>
                  <select
                    className="form-select py-2"
                    aria-label="Default select example"
                    name="education"
                    value={data.education}
                    onChange={handleOnChange}
                  >
                    <option value={"None"}>None</option>
                    <option value={"Middle School"}>Middle School</option>
                    <option value={"High School"}>High School</option>
                    <option value={"Intermediate"}>Intermediate</option>
                    <option selected value={"Bachelor's"}>
                      Bachelor's
                    </option>
                    <option value={"Master's"}>Master's</option>
                    <option value={"Doctorate"}>Doctorate</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Relevant Experience
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="web developer etc"
                    name="experience"
                    value={data.experience}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Company Name"
                    name="company"
                    value={data.company}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Upload Resume
                  </label>
                  <div className="mb-3">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      className="form-control py-2"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Cover Letter
                  </label>
                  <div>
                    <textarea
                      className="form-control"
                      name="coverLetter"
                      value={data.coverLetter}
                      onChange={handleOnChange}
                      id=""
                      cols="47"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="container rounded-3 border application-form-job-description py-5">
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
        </div>
      </section>
    </>
  );
};

export default ApplyForJob;
