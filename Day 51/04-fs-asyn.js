const fs = require("fs");

//syncronous
const data = fs.readFileSync("async.txt", "utf-8");
console.log(data);
console.log("after the data");

console.log("-----------");

//asynchronous
fs.readFile("async.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("before the data");
