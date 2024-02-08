import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const CompanyCard = () => {
  return (
    <div className="company-card p-3 rounded-4 mb-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1649011401497-bed0d3cce4a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded mb-3"
            width={90}
            height={60}
            alt=""
          />
          <Link className="company-links">Salaries</Link>
        </div>
        <div className="col-md-8 px-0">
          <Link
            to={"/"}
            className="fs-6 fw-semibold text-dark text-decoration-none"
          >
            Foodpanda
          </Link>
          <div className="d-flex align-items-center gap-2 mb-2">
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
            <p className="reviews-text">19 reviews</p>
          </div>
          <div className="d-flex gap-4 ps-2">
            <Link className="company-links">Q&A</Link>
            <Link className="company-links">Open jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
