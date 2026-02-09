const express = require('express');
const cors = require('cors');
const app = express();

const jobRoutes = require('./routes/jobs.routes')

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.get("/health", (req, res) => {
    res.json({status: "UP"});
});

module.exports = app;