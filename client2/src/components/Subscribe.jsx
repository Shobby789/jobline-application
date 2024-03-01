import React from "react";

const Subscribe = () => {
  return (
    <div className="container-fluid py-5 secondary-bg">
      <div className="container mb-5 pt-4">
        <p className="purple-text fw-bold text-center mb-4">Support</p>
        <h2 className="fw-bold text-center">
          Subscribe Newsletter & get <br />
          <span className="fs-3">Company News</span>
        </h2>
      </div>
      <div className="container pb-4">
        <div className="input-group subscribe-form mx-auto mb-3 p-1 rounded-5">
          <input
            type="email"
            className="form-control py-1 rounded-start-2 border-0 ps-3 text-medium"
            placeholder="Enter email address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button
            className="input-group-text px-3 purple-color text-light rounded-end-2 py-2"
            id="basic-addon2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
