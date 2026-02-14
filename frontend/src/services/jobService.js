const API_URL = "/api";

export const searchJobs = async (payload) => {
  const res = await fetch(`${API_URL}/jobs/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return res.json();
};

export const compareJD = async (payload) => {
  const res = await fetch(`${API_URL}/jobs/compare`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return res.json();
};

export const saveJob = async (job) => {
  const res = await fetch(`${API_URL}/jobs/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  });

  return res.json();
};

export const getSavedJobs = async () => {
  const res = await fetch(`${API_URL}/jobs/saved`);
  return res.json();
};

export const removeSavedJob = async (jobId) => {
  await fetch(`${API_URL}/jobs/saved/${jobId}`, {
    method: "DELETE"
  });
};

