const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    author: { type: String },
    jobtitle: { type: String },
    jobcategory: { type: String },
    jobtype: { type: String },
    salary: { type: Number },
    joblocation: { type: String },
    description: { type: String },
  },
  {
    collection: "Jobs",
  }
);

mongoose.model("Jobs", jobSchema);

// job
// job title
// job category
// type [internship, part time, contract, full time]
// salary
// location
// description
