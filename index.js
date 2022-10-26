const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("courses api running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((c) => c.id === id);
  res.send(singleCourse);
});

app.listen(port, () => {
  console.log("Courses server running on", port);
});
