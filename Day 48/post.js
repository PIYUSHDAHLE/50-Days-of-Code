var express = require("express");
var app = express();
const storage = require("node-persist");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
storage.init();

app.get("/student/:id", async (req, res) => {
  if ((await storage.keys()).includes(req.params.id)) {
    res.send(await storage.getItem(req.params.id));
  } else {
    res.send("student not found");
  }
});

app.post("/student", jsonParser, async (req, res) => {
  const { student_id, student_name, student_phone } = req.body;
  await storage.setItem(student_id, student_name, student_phone);
  res.send("Add student successfully");
});

app.listen(5000, () => {
  console.log("Server has started !!!!!!!!!!!");
  console.log("welcome boss");
});
