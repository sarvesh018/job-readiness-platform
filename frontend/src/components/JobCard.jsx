import {
  Paper,
  Typography,
  Button,
  Box,
  Chip
} from "@mui/material";

function JobCard({ job }) {
  const scoreColor =
    job.matchScore >= 75 ? "success" :
    job.matchScore >= 50 ? "warning" : "error";

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6">{job.title}</Typography>
          <Typography color="text.secondary">
            {job.location}
          </Typography>

          <Box mt={2}>
            <Chip
              label={`Match: ${job.matchScore}%`}
              color={scoreColor}
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
          </Box>
        </Box>

        <Button variant="outlined">Save</Button>
      </Box>
    </Paper>
  );
}

export default JobCard;
