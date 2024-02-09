const express = require("express");
const router = express.Router();
const {
  createJob,
  getMyJobs,
  getAllJobs,
  getJobDetails,
} = require("../controllers/jobController");

router.post("/create-job", createJob);
router.get("/get-my-jobs", getMyJobs);
router.get("/get-all-jobs", getAllJobs);
router.get("/get-job-details/:_id", getJobDetails);

module.exports = router;
