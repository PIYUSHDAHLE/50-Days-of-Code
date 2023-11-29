const fs = require("fs");
//write file
fs.writeFileSync(`hello.txt`, `hello world `);
fs.writeFileSync(`hello.txt`, ` piyush dahle \n `);
fs.appendFileSync(`hello.txt`, `good morning \n`);
fs.appendFileSync(`hello.txt`, `toh kaise hai aap log`);
//read file
const buf_data = fs.readFileSync(`hello.txt`);
console.log(buf_data);
console.log(buf_data.toString());

// Delete file
// fs.unlinkSync("hello.txt");

// Rename file
// fs.renameSync("hello.txt", "goodbye.txt");
