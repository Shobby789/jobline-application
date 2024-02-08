import React from "react";
import "./JobDescription.css";
import { useParams } from "react-router-dom";

const JobDescription = () => {
  const params = useParams();
  console.log("Job Id >> ", params._id);
  return (
    <div>
      <h2>Job Description</h2>
    </div>
  );
};

export default JobDescription;
