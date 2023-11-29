//express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express server");
});

app.get("/user", (req, res) => {
  res.send(" Get API called with user ");
});

app.post("/user", (req, res) => {
  res.send(" Post API called with user ");
});

app.listen(5000, () => {
  console.log(`Server is running`);
});
