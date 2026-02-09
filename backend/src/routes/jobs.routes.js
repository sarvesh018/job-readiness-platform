const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");

router.post("/search", jobsController.searchJobs);
router.post("/compare", jobsController.compareJD);
router.post("/compareResume", jobsController.compareJD);

module.exports = router;