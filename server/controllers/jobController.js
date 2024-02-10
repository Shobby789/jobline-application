require("../model/db/jobSchema");
const mongoose = require("mongoose");
const JobModel = mongoose.model("Jobs");

// post a job
module.exports.createJob = async (req, res) => {
  try {
    const {
      author,
      jobtitle,
      jobcategory,
      jobtype,
      salary,
      joblocation,
      description,
    } = req.body;
    await JobModel.create({
      author,
      jobtitle,
      jobcategory,
      jobtype,
      salary,
      joblocation,
      description,
    });
    return res.status(201).send({ data: "Job Posted Successfully" });
  } catch (error) {
    console.log("createJob error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};

// get user jobs
module.exports.getMyJobs = async (req, res) => {
  try {
    const { author } = req.body;
    const jobs = await JobModel.find({ author });
    if (jobs.length > 0) {
      return res.status(201).send({ data: jobs });
    }
    return res.status(201).send({ data: "You have not posted any job yet." });
  } catch (error) {
    console.log("getMyJobs error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};

// get all jobs
module.exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    return res.status(201).send({ data: jobs });
  } catch (error) {
    console.log("getAllJobs error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};

// get job details
module.exports.getJobDetails = async (req, res) => {
  try {
    const { _id } = req.params;
    // console.log(req.params);
    const job = await JobModel.findOne({ _id });
    if (job) {
      return res.status(201).send({ data: job });
    }
    return res.status(201).send({ data: "Job not found" });
  } catch (error) {
    console.log("getJobDetails error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};

// apply for job
module.exports.applyForJob = async (req, res) => {
  try {
    const { education, experience, company, coverLetter } = req.body;
    const { filename } = req.file;
    console.log("data >> ", req.body);
    console.log("filename >> ", filename);
  } catch (error) {
    console.log("applyForJob error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};
// education: "",
// experience: "",
// company: "",
// coverLetter: "",
