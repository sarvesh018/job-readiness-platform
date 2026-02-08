const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({status: "UP"});
});

app.get("/status-check", (req, res) => {
    res.json({status: "server is up"});
});

module.exports = app;