//express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express server</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to the about page </h1>");
});

app.listen(5000, () => {
  console.log(`Server is running`);
});
