import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";

const Stats = () => {
  return (
    <div className="container py-3 d-flex justify-content-between px-0 gap-4 mb-3">
      <div className="stats-box box_shadow rounded-3 bg-white d-flex justify-content-center align-items-center py-3 px-4">
        <div className="w-50">
          <span className="stats-icon">
            <IoBagCheckOutline className="text-primary" />
          </span>
        </div>
        <div className="w-50 text-end d-flex flex-column justify-content-center align-items-end pt-3">
          <h4 className="fw-semibold text-primary">22</h4>
          <p className="text-secondary text-medium fw-normal">Posted Jobs</p>
        </div>
      </div>
      <div className="stats-box box_shadow rounded-3 bg-white d-flex justify-content-center align-items-center py-3 px-4">
        <div className="w-50">
          <span className="stats-icon">
            <IoBagCheckOutline className="text-danger" />
          </span>
        </div>
        <div className="w-50 text-end d-flex flex-column justify-content-center align-items-end pt-3">
          <h4 className="fw-semibold text-danger">9382</h4>
          <p className="text-secondary text-medium fw-normal">Applications</p>
        </div>
      </div>
      <div className="stats-box box_shadow rounded-3 bg-white d-flex justify-content-center align-items-center py-3 px-4">
        <div className="w-50">
          <span className="stats-icon">
            <IoBagCheckOutline className="text-warning" />
          </span>
        </div>
        <div className="w-50 text-end d-flex flex-column justify-content-center align-items-end pt-3">
          <h4 className="fw-semibold text-warning">34</h4>
          <p className="text-secondary text-medium fw-normal">Messages</p>
        </div>
      </div>
      <div className="stats-box box_shadow rounded-3 bg-white d-flex justify-content-center align-items-center py-3 px-4">
        <div className="w-50">
          <span className="stats-icon">
            <IoBagCheckOutline className="text-success" />
          </span>
        </div>
        <div className="w-50 text-end d-flex flex-column justify-content-center align-items-end pt-3">
          <h4 className="fw-semibold text-success">22</h4>
          <p className="text-secondary text-medium fw-normal">Shortlisted</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
