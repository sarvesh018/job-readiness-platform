const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");

router.post("/search", jobsController.searchJobs);
router.post("/compare", jobsController.compareJD);
router.post("/save", jobsController.saveJob);
router.get("/saved", jobsController.getSavedJobs);
router.delete("/saved/:jobId", jobsController.removeSavedJob);

module.exports = router;