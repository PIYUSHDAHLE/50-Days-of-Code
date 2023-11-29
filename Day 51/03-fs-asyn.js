const fs = require("fs");

fs.writeFile("async.txt", "my name is piyush", (err) => {
  console.log("file created");
  console.log(err);
});

fs.appendFile("async.txt", "good morning", (err) => {
  console.log("file updated");
  console.log(err);
});

fs.readFile("async.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
