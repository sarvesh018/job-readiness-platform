import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Readiness
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">Job Search</Button>
          <Button color="inherit" component={Link} to="/compare">JD Compare</Button>
          <Button color="inherit" component={Link} to="/saved">Saved Jobs</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
