const fetchJobs = require("../services/jobFetcher.service");
const extractSkills = require("../utils/skillExtractor");
const matchSkills = require("../services/skillMatcher.service");
const SavedJob = require('../models/SavedJob.model');

exports.searchJobs = (req, res) => {
  const { skills = [] } = req.body;

  const userSkills = skills.map(skill => skill.toLowerCase());

  const jobs = fetchJobs();

  const results = jobs.map(job => {
    const requiredSkills = extractSkills(job.description);
    const matchResult = matchSkills(userSkills, requiredSkills);
    
    return {
      jobId: job.id,
      title: job.title,
      location: job.location,
      ...matchResult
    };
  });

  res.json(results);
};

exports.compareJD = (req, res) => {
  const { skills = [], jdText = "" } = req.body;

  const userSkills = skills.map(skill => skill.toLowerCase());
  const requiredSkills = extractSkills(jdText);

  const result = matchSkills(userSkills, requiredSkills);

  res.json(result);
};

exports.saveJob = async (req, res) => {
  try {
    const existing = await SavedJob.findOne({ jobId: req.body.jobId });

    if (existing) {
      return res.status(200).json(existing);
    }

    const job = await SavedJob.create({
      jobId: req.body.jobId,
      title: req.body.title,
      location: req.body.location,
      matchScore: req.body.matchScore,
      requiredSkills: req.body.requiredSkills,
      matchedSkills: req.body.matchedSkills,
      missingSkills: req.body.missingSkills
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to save job" });
  }
};

exports.getSavedJobs = async (req, res) => {
  try {
    const jobs = await SavedJob.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch saved jobs" });
  }
};

exports.removeSavedJob = async (req, res) => {
  try {
    await SavedJob.deleteOne({ jobId: req.params.jobId });
    res.json({ message: "Job removed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove job" });
  }
};

