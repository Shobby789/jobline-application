import React from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <section className="container-fluid pt-2">
      <div className="container py-5 d-flex flex-wrap justify-content-evenly align-items-center">
        <div>
          <h3 className="fw-semibold">
            <CountUp tart={1122} end={1605} duration={3.75} />
          </h3>
          <p>Available Jobs</p>
        </div>
        <div>
          <h3 className="fw-semibold">
            <CountUp tart={1122} end={1605} duration={3.75} />
          </h3>
          <p>Employees</p>
        </div>
        <div>
          <h3 className="fw-semibold">
            <CountUp tart={1122} end={1605} duration={3.75} />
          </h3>
          <p>Companies</p>
        </div>
      </div>
    </section>
  );
};

export default Count;
