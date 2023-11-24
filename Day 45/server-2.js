const express = require("express");

const arr = [
  {
    userid: "1",
    username: "kshatreeya",
    email: "kshatreeya@gmail.com",
  },
  {
    userid: "2",
    username: "sooraj",
    email: "kshatreeya1@gmail.com",
  },
  {
    userid: "3",
    username: "jonh",
    email: "kshatreeya2@gmail.com",
  },
];
//  express server
const app = express();
// json parser
app.use(express.json);
app.get("/user", (req, res) => {
  res.status(200).send(arr);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.status(200).send(arr);
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send("put Request of user " + id);
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send("delete Request of user " + id);
});

app.listen(8080, () => {
  console.log("server started..");
});
