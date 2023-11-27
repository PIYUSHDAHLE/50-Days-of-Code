var express = require("express");
var app = express();

app.get("/intro", function (req, res) {
  res.send("<h1>Hello World</h1><p>This is my first express server</p>");
});

app.get("/user", function (req, res) {
  res.send("<h1>Hello boss</h1><p>welcome to my code world</p>");
});

app.get("/love", function (req, res) {
  res.send("<h1>Hello baby</h1><h2>i love you</h2>");
});

app.listen(5000, () => {
  console.log("Server has started at port 5000");
});
