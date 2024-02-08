require("../model/db/jobSchema");
const mongoose = require("mongoose");
const JobModel = mongoose.model("Jobs");

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

// apply for job
module.exports.applyForJob = async (req, res) => {
  try {
  } catch (error) {
    console.log("applyForJob error >> ", error);
    return res.status(400).send({ data: "Something went wrong" });
  }
};
