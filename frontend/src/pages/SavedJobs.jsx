import { Container, Typography, Paper } from "@mui/material";

function SavedJobs() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5">Saved Jobs</Typography>
        <Typography color="text.secondary" mt={1}>
          Jobs you save will appear here.
        </Typography>
      </Paper>
    </Container>
  );
}

export default SavedJobs;
