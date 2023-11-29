//asyncronous file system
const fs = require("fs");
//task 1
fs.mkdir(`boss`, (err) => {
  if (err) {
    // console.log(err);
    console.log("folder is already created");
  } else {
    console.log("folder created");
  }
});

//task 2
fs.writeFile(`boss/bio.txt`, "dahle sarkar", (err) => {
  console.log("file created");
});

//task 3
fs.appendFile(`boss/bio.txt`, " more data", (err) => {
  console.log("data UPDATED");
});

//TASK 4
fs.readFile(`boss/bio.txt`, "UTF-8", (err, data) => {
  console.log(data);
});

//task 5
fs.rename(`boss/bio.txt`, `boss/mybio.txt`, (err) => {
  console.log("file Renamed");
});
