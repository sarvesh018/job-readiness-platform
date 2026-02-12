import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack
} from "@mui/material";
import { searchJobs } from "../services/jobService";
import JobCard from "../components/JobCard";

function JobSearch() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    searchJobs().then(setJobs);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Find jobs that match your skills
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Enter your skills and experience to see how well you match open roles.
      </Typography>

      {/* Search Form */}
      <Paper elevation={2} sx={{ p: 4, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Skills"
              placeholder="Python, Docker, AWS"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Experience (years)"
              placeholder="2"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Location"
              placeholder="Remote / Bangalore"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" size="large">
              Search Jobs
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Job Results */}
      <Stack spacing={3}>
        {jobs.map(job => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </Stack>
    </Container>
  );
}

export default JobSearch;
