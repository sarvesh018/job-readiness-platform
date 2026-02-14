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
import { useAppContext } from "../context/AppContext";

function JobSearch() {
  const {
    searchForm,
    setSearchForm,
    searchResults,
    setSearchResults
  } = useAppContext();

  const handleSearch = async () => {
    const res = await searchJobs({
      skills: searchForm.skills.split(",").map(s => s.trim()),
      experience: searchForm.experience,
      location: searchForm.location
    });
    setSearchResults(res);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Find jobs that match your skills
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Skills"
              value={searchForm.skills}
              onChange={(e) =>
                setSearchForm({ ...searchForm, skills: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Experience (years)"
              value={searchForm.experience}
              onChange={(e) =>
                setSearchForm({ ...searchForm, experience: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Location"
              value={searchForm.location}
              onChange={(e) =>
                setSearchForm({ ...searchForm, location: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" size="large" onClick={handleSearch}>
              Search Jobs
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Stack spacing={3}>
        {searchResults.map(job => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </Stack>
    </Container>
  );
}

export default JobSearch;
