import React from "react";
import "./Companies.css";
import CompanyCard from "../../components/company-card/CompanyCard";

const Companies = () => {
  return (
    <section className="container-fluid companies-wrapper pt-5 px-0">
      <div className="container text-center pt-5 mt-5">
        <h1 className="fw-semibold mb-3">Find great places to work</h1>
        <p className="">Get access to millions of company reviews</p>
      </div>
      {/* companies grid */}
      <div className="container-fluid bg-light pt-5">
        <div className="container py-5 d-flex justify-content-between flex-wrap align-items-center">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </section>
  );
};

export default Companies;
