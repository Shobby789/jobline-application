import React from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import { CiCalendar } from "react-icons/ci";
import { TfiTimer } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-light">
        <div className="container py-5 mb-2">
          <h2 className="fw-bold text-center">Job Details</h2>
          <p className="text-secondary text-small text-center">
            Home / Jobs / Job Details
          </p>
        </div>
      </div>
      {/* details */}
      <div className="container-fluid py-5 border-bottom">
        {/* job company logo */}
        <div className="container border-bottom py-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 text-start d-flex gap-3">
              <div className="company-logo">
                <IoLogoInstagram style={{ width: "4rem", height: "4rem" }} />
              </div>
              <div className="container pt-1">
                <h4 className="fw-semibold">Software Engineer</h4>
                <div className="row w-100 my-2">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="d-flex gap-1 ps-0">
                      <CiLocationOn
                        className="fs-6"
                        style={{ position: "relative", top: "1px" }}
                      />
                      <p className="card-text text-secondary text-small">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="d-flex gap-1">
                      <CiClock2
                        className="fs-6"
                        style={{ position: "relative", top: "1px" }}
                      />
                      <p className="card-text text-secondary text-small">
                        11 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="d-flex gap-1 ps-0">
                      <LiaMoneyBillWaveAltSolid
                        className="fs-6"
                        style={{ position: "relative", top: "1px" }}
                      />
                      <p className="card-text text-secondary text-small">
                        $35K - $45K
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12"></div>
                </div>
                <button
                  disabled
                  className="btn btn-secondary rounded-5 btn-sm mt-lg-2 px-3 text-medium"
                >
                  Full Time
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-end">
              <button className="btn btn-dark rounded-5 py-2 px-3 text-small fw-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* job description */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h5 className="fw-semibold mb-3">Job description:</h5>
              <p className="text-secondary text-medium lh-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                deserunt quia necessitatibus magni labore, quibusdam iste nihil
                nostrum reiciendis atque? Suscipit aut, optio, porro asperiores
                dolorem quasi officiis cupiditate minima necessitatibus dolores
                repellendus dolorum possimus, odio facilis? Veritatis quasi
                voluptatem odit reiciendis et itaque dolor error numquam iste id
                vero nihil vitae sit facilis harum officiis suscipit tempore
                blanditiis, modi libero tenetur. Quam, sequi. Libero doloremque
                tempore illo itaque eligendi?
              </p>
              <h5 className="fw-semibold mt-5 mb-3">Key responsbilities:</h5>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              {/* Skills and Experience */}
              <h5 className="fw-semibold mt-5 mb-3">Skills and Experience:</h5>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
              <p className="text-secondary text-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam, libero?
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="container bg-light py-4 px-lg-5 mb-4 rounded-4">
                <h6 className="fw-semibold mb-3">Job Overview</h6>
                <div className="row w-100">
                  <div className="col-2">
                    <CiCalendar style={{ width: "1.7rem", height: "1.7rem" }} />
                  </div>
                  <div className="col-10">
                    <p className="mb-1 text-medium fw-semibold">Date Posted:</p>
                    <p className="text-secondary text-small">
                      Posted 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <TfiTimer style={{ width: "1.7rem", height: "1.7rem" }} />
                  </div>
                  <div className="col-10">
                    <p className="mb-1 text-medium fw-semibold">
                      Application Deadline:
                    </p>
                    <p className="text-secondary text-small">March 31, 2024</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <IoLocationOutline
                      style={{ width: "1.7rem", height: "1.7rem" }}
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-1 text-medium fw-semibold">Location:</p>
                    <p className="text-secondary text-small">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <IoPersonOutline
                      style={{ width: "1.7rem", height: "1.7rem" }}
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-1 text-medium fw-semibold">Job Title:</p>
                    <p className="text-secondary text-small">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <LiaMoneyBillWaveAltSolid
                      style={{ width: "1.7rem", height: "1.7rem" }}
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-1 text-medium fw-semibold">Salary:</p>
                    <p className="text-secondary text-small">$35 - $45</p>
                  </div>
                </div>
              </div>
              <div className="container bg-light py-4 px-lg-5 mb-4 rounded-4">
                <div className="row mb-4">
                  <div className="col-3">
                    <IoLogoInstagram
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    />
                  </div>
                  <div className="col-9 pt-1">
                    <h6 className="fw-semibold mb-0">Job Overview</h6>
                    <Link
                      to={`/company-profile`}
                      className="text-small text-decoration-none"
                    >
                      View company profile
                    </Link>
                  </div>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0 mb-4">
                  <p className="text-medium fw-semibold mb-0">Industry</p>
                  <p className="text-medium text-secondary mb-0">
                    Software Eng.
                  </p>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0 mb-4">
                  <p className="text-medium fw-semibold mb-0">Company size:</p>
                  <p className="text-medium text-secondary mb-0">30 - 50</p>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0 mb-4">
                  <p className="text-medium fw-semibold mb-0">Founded in:</p>
                  <p className="text-medium text-secondary mb-0">2010</p>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0 mb-4">
                  <p className="text-medium fw-semibold mb-0">Phone:</p>
                  <p className="text-medium text-secondary mb-0">
                    012 345 67890
                  </p>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0 mb-4">
                  <p className="text-medium fw-semibold mb-0">Email:</p>
                  <p className="text-medium text-secondary mb-0">
                    getjob@gmail.com
                  </p>
                </div>
                <div className="container d-flex justify-content-between align-items-center px-1 py-0">
                  <p className="text-medium fw-semibold mb-0">Location:</p>
                  <p className="text-medium text-secondary mb-0">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

export const JobApplyForm = () => {
  return (
    <>
      <button
        className="btn btn-dark rounded-5 py-2 px-3 text-small fw-semibold"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Apply Now
      </button>
      <div
        classname="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div classname="modal-dialog">
          <div classname="modal-content">
            <div classname="modal-header">
              <h1 classname="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                classname="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div classname="modal-body">...</div>
            <div classname="modal-footer">
              <button
                type="button"
                classname="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" classname="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
