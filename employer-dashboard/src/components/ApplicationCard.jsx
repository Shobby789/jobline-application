import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { GoTrash } from "react-icons/go";

const ApplicationCard = () => {
  return (
    <div
      className="bg-white application-card border rounded-3 p-4 mb-3"
      style={{ width: "26rem" }}
    >
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <img
            src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid rounded-5"
            style={{ width: "4rem", height: "4rem" }}
          />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
          <h6 className="fw-medium mb-2">Shoaib Muhammad</h6>
          <div className="d-flex gap-3">
            <p className="text-primary text-small">UI Designer</p>
            <p className="text-secondary text-small">
              <CiLocationOn className="fs-6 me-1" />
              Karachi, Pakistan
            </p>
          </div>
          <p className="text-secondary text-small mb-2">
            <FaRegMoneyBillAlt
              className="fs-6 me-2"
              style={{ position: "relative", top: "-1px" }}
            />
            $44 / hour
          </p>
          <div className="d-flex gap-2 text-wrap">
            <button className="px-0 text-secondary btn rounded-3 text-small">
              #App Design
            </button>
            <button className="px-0 text-secondary btn rounded-3 text-small">
              #App Design
            </button>
            <button className="px-0 text-secondary btn rounded-3 text-small">
              #App Design
            </button>
          </div>
          <div className="d-flex gap-3">
            <button className="btn fs-6 px-0 text-primary">
              <MdOutlineRemoveRedEye />
            </button>
            <button className="btn fs-6 px-0 text-primary">
              <IoMdCheckmark />
            </button>
            <button className="btn fs-6 px-0 text-primary">
              <RxCrossCircled />
            </button>
            <button className="btn fs-6 px-0 text-primary">
              <GoTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
