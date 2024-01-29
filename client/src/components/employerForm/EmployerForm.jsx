import React, { useState } from "react";
import "./EmployerForm.css";
import JobBasics from "./JobBasics";
import CompanyInfo from "./CompanyInfo";

const EmployerForm = () => {
  const [page, setPage] = useState(1);
  const FormTitles = ["Company information", "Add job basics"];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully");
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <CompanyInfo />;
    } else if (page === 1) {
      return <JobBasics />;
    }
  };

  const incrementPage = () => {
    if (page == 0) {
      setPage((currPage) => currPage + 1);
    }
  };
  return (
    <div className="employer-form">
      <form className="" onSubmit={handleSubmit}>
        <h3 className="fw-semibold mb-5 text-center">{FormTitles[page]}</h3>
        {PageDisplay()}
        <div className="d-flex justify-content-between mt-5">
          <button
            className="btn btn-secondary rounded-pill py-2 px-3"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            type="submit"
            className="theme-button border-0"
            onClick={incrementPage}
          >
            {page === 1 ? "Post job" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployerForm;
