const path = require("path");

console.log(` path.sep : ${path.sep}`);
console.log(` path.delimiter : ${path.delimiter}`);
console.log(
  ` path.dirname : ${path.dirname("c:/Users/piyus/Desktop/Internshala")}`
);

console.log(
  path.parse(
    "c:/Users/piyus/Desktop/Internshala/Back End/practice code/node js/Day 68/07-path.js"
  )
);

const mypath = path.parse(
  "c:/Users/piyus/Desktop/Internshala/Back End/practice code/node js/Day 68/07-path.js"
);
console.log(mypath.name);
