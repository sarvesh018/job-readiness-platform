const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
  {
    jobId: { type: String, required: true },
    title: { type: String, required: true },
    location: String,
    matchScore: Number,
    missingSkills: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedJob", savedJobSchema);
