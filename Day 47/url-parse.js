let http = require("http");
let fs = require("fs");
let url = require("url");

let address = "http://localhost:5000/test.html?id=100&name=piyush";
let result = url.parse(address, true);

let student = result.query;

console.log(" Student ID : " + student.id);
console.log(" Student Name : " + student.name);
console.log(result.host);
console.log(result.search);
console.log(result.pathname);
console.log(result.query);
