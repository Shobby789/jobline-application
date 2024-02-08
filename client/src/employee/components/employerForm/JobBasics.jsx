import React from "react";

const JobBasics = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Job Title
        </label>
        <input
          type="email"
          className="form-control py-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label">
          Number of people to hire for this job
        </label>
        <select
          className="form-select py-2"
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Where would you like to advertise this job?{" "}
          <span>Enter your location</span>
        </label>
        <input
          type="email"
          className="form-control py-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label">
          Job Type
        </label>
        <select
          className="form-select py-2"
          aria-label="Default select example"
        >
          <option selected>Internship</option>
          <option value="1">Full Time</option>
          <option value="2">Part Time</option>
          <option value="3">Contract</option>
          <option value="3">Fresher</option>
        </select>
      </div>
      <div className="mb-4 d-flex gap-3 flex-wrap">
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Min Pay/Month
          </label>
          <input
            type="email"
            className="form-control py-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Max Pay/Month
          </label>
          <input
            type="email"
            className="form-control py-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </>
  );
};

export default JobBasics;
