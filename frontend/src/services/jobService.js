export const searchJobs = async () => {
  return [
    {
      jobId: "job-1",
      title: "Backend Engineer",
      location: "Remote",
      matchScore: 75,
      missingSkills: ["mongodb"]
    },
    {
      jobId: "job-2",
      title: "DevOps Engineer",
      location: "Bangalore",
      matchScore: 60,
      missingSkills: ["kubernetes"]
    }
  ];
};

export const compareJD = async () => {
  return {
    matchScore: 66,
    matchedSkills: ["python", "docker"],
    missingSkills: ["kubernetes"]
  };
};
