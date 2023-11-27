//sending path variable in express
var express = require("express");
var app = express();

app.get("/test/:data", function (req, res) {
  res.send(req.params);
});

app.listen(5000, () => {
  console.log("Server has started at port 5000");
});
