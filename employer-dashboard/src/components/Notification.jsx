import React from "react";
import { IoBagRemoveOutline } from "react-icons/io5";

const Notification = () => {
  return (
    <div className="row w-100 mx-auto mb-3">
      <div className="col-2 pt-1">
        <span className="px-2 py-2 rounded-5 bg-light-blue d-flex justify-content-center align-items-center">
          <IoBagRemoveOutline className="fs-5 text-primary" />
        </span>
      </div>
      <div className="col-10">
        <p className="text-secondary text-small fw-normal">
          <span className="text-dark fw-medium">Shoaib Muhammad</span> applied
          for a job <span className="text-primary">Software Engineer</span>
        </p>
      </div>
    </div>
  );
};

export default Notification;
