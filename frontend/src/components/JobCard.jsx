import {
  Paper,
  Typography,
  Button,
  Box,
  Chip,
  Stack
} from "@mui/material";
import { saveJob, removeSavedJob } from "../services/jobService";
import { useAppContext } from "../context/AppContext";

function JobCard({ job }) {
  const { savedJobs = [], setSavedJobs } = useAppContext();

  // 🔒 SAFETY GUARDS
  const requiredSkills = Array.isArray(job.requiredSkills)
    ? job.requiredSkills
    : [];

  const missingSkills = Array.isArray(job.missingSkills)
    ? job.missingSkills
    : [];

  const matchedSkills = requiredSkills.filter(
    skill => !missingSkills.includes(skill)
  );

  const isSaved = savedJobs.some(j => j.jobId === job.jobId);

  const handleSave = async () => {
    try {
      const payload = {
        jobId: job.jobId,
        title: job.title,
        location: job.location,
        matchScore: job.matchScore,
        missingSkills,
        matchedSkills,
        requiredSkills
      };

      const saved = await saveJob(payload);
      setSavedJobs(prev =>
        prev.some(j => j.jobId === saved.jobId)
          ? prev
          : [...prev, saved]
      );

    } catch (err) {
      console.error("Save failed", err);
    }
  };

  const handleRemove = async () => {
    try {
      await removeSavedJob(job.jobId);
      setSavedJobs(prev =>
        prev.filter(j => j.jobId !== job.jobId)
      );
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Box>
          <Typography variant="h6">{job.title}</Typography>
          <Typography color="text.secondary">
            {job.location}
          </Typography>

          {/* Skills */}
          <Stack
            direction="row"
            spacing={1}
            mt={2}
            flexWrap="wrap"
          >
            {requiredSkills.map(skill => {
              return (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  color="default"
                  sx={{
                    mb: 1
                  }}
                />
              );
            })}
          </Stack>
        </Box>

        {/* Save / Unsave */}
        {isSaved ? (
          <Button
            color="error"
            variant="outlined"
            onClick={handleRemove}
          >
            Unsave
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={handleSave}
          >
            Save
          </Button>
        )}
      </Box>
    </Paper>
  );
}

export default JobCard;
