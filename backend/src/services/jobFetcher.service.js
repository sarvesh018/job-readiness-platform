const mockJobs = [
  {
    id: "job-1",
    title: "Backend Engineer",
    location: "Remote",
    description: "Looking for a backend engineer with Python, Docker, AWS and MongoDB."
  },
  {
    id: "job-2",
    title: "DevOps Engineer",
    location: "Bangalore",
    description: "Experience with Docker, Kubernetes, AWS, CI/CD pipelines."
  }
];

function fetchJobs() {
  // Later we’ll replace this with real API call
  return mockJobs;
}

module.exports = fetchJobs;
