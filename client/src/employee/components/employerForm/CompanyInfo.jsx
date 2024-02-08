import React from "react";

const CompanyInfo = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Company's Name
        </label>
        <input
          type="email"
          className="form-control py-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label">
          Your company's number of employees
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
          Your First and Last Name
        </label>
        <input
          type="email"
          className="form-control py-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Phone Number
        </label>
        <input
          type="email"
          className="form-control py-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
      </div>
    </>
  );
};

export default CompanyInfo;
