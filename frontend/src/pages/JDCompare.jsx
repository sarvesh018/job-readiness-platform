import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
} from "@mui/material";
import { compareJD } from "../services/jobService";
import { useAppContext } from "../context/AppContext";

function JDCompare() {
  const {
    compareForm,
    setCompareForm,
    compareResult,
    setCompareResult
  } = useAppContext();

  const handleCompare = async () => {
    const res = await compareJD({
      skills: compareForm.skills.split(",").map(s => s.trim()),
      jdText: compareForm.jdText
    });
    setCompareResult(res);
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
            value={compareForm.skills}
            onChange={(e) =>
              setCompareForm({ ...compareForm, skills: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Job Description"
            value={compareForm.jdText}
            onChange={(e) =>
              setCompareForm({ ...compareForm, jdText: e.target.value })
            }
            multiline
            rows={6}
            fullWidth
          />

          <Button variant="contained" size="large" onClick={handleCompare}>
            Analyze
          </Button>
        </Stack>
      </Paper>

      {compareResult && (
        <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6">
            Match Score: {compareResult.matchScore}%
          </Typography>
          <Typography color="text.secondary">
            Missing Skills: {compareResult.missingSkills.join(", ")}
          </Typography>
        </Paper>
      )}
    </Container>
  );
}

export default JDCompare;
