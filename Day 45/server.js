const express = require("express");
const users = [
  { id: 1, name: "piyush", email: "piyush@gmail.com" },
  { id: 2, name: "rajesh", email: "rajesh@gmail.com" },
];
const app = express();
app.use(express.json());
//express server
app.get("/contact", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/about", (req, res) => {
  res.status(200).send("Hello Boss!");
});
app.put("/user/:uid", (req, res) => {
  const id = req.params.uid;
  res.status(200).send("Hello piyush!" + id);
});
app.delete("/user/:uid", (req, res) => {
  const id = req.params.uid;
  res.status(200).send("Hello dahle!" + id);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
