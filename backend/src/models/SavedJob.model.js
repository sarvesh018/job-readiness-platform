const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
  {
    jobId: { type: String, required: true, unique: true },
    title: String,
    location: String,
    matchScore: Number,
    missingSkills: [String],
    matchedSkills: [String],
    requiredSkills: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedJob", savedJobSchema);
