import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Box
} from "@mui/material";
import { getSavedJobs } from "../services/jobService";

function SavedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getSavedJobs().then(setJobs);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Saved Jobs
      </Typography>

      {jobs.length === 0 ? (
        <Paper elevation={1} sx={{ p: 4 }}>
          <Typography color="text.secondary">
            You haven’t saved any jobs yet.
          </Typography>
        </Paper>
      ) : (
        <Stack spacing={3}>
          {jobs.map(job => (
            <Paper key={job._id} elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography color="text.secondary">
                {job.location}
              </Typography>

              <Box mt={2}>
                <Chip
                  label={`Match: ${job.matchScore}%`}
                  color="primary"
                  sx={{ mr: 1 }}
                />
                {job.missingSkills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                ))}
                {job.matchedSkills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="filled"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      )}
    </Container>
  );
}

export default SavedJobs;
