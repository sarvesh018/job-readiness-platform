import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
} from "@mui/material";
import { compareJD } from "../services/jobService";

function JDCompare() {
  const [result, setResult] = useState(null);

  const handleCompare = async () => {
    const res = await compareJD();
    setResult(res);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Compare Job Description
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={3}>
          <TextField
            label="Your Skills"
            placeholder="Python, Docker"
            fullWidth
          />

          <TextField
            label="Job Description"
            placeholder="Paste job description here"
            multiline
            rows={6}
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleCompare}
          >
            Analyze
          </Button>
        </Stack>
      </Paper>

      {result && (
        <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6">
            Match Score: {result.matchScore}%
          </Typography>
          <Typography color="text.secondary">
            Missing Skills: {result.missingSkills.join(", ")}
          </Typography>
        </Paper>
      )}
    </Container>
  );
}

export default JDCompare;
