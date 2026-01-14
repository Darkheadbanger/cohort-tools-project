const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Import the model
const Cohort = require("./models/Cohort.model");
const Student = require("./models/Student.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/cohort-tools-api")
  .then((x) => console.log(`Connected to Database`))
  .catch((err) => console.error("Error connecting to MongoDB", err));

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
app.get(`/api/cohorts`, (req, res) => {
  Cohort.find({})
    .then((cohort) => {
      console.log("retrieve Cohorts", cohort);
      res.json(cohort);
    })
    .catch((error) => {
      console.error("Error while retrieving the cohort =>", error);
      res.status(500).send({ error: "Failed to retrieve cohort" });
    });
});

app.get(`/api/students`, (req, res) => {
  Student.find({})
    .then((student) => {
      console.log("retrieve Students", student);
      res.json(cohort);
    })
    .catch((error) =>
      console.error("Error while retrieving the students", error)
    );
});

// START SERVER
app.listen(3000, () => console.log("App listening on port 3000!"));
