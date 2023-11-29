const fs = require("fs");

fs.mkdirSync(`test`); // create a folder

fs.writeFileSync(`test/test.txt`, `this is the challenge time.\n `);

fs.appendFileSync(`test/test.txt`, `this is updated data.\n `);

fs.renameSync(`test/test.txt`, `test/challenge.txt`);

const buffer = fs.readFileSync(`test/challenge.txt`, `utf-8`);

console.log(buffer);

// console.log(buffer.toString());

fs.unlinkSync(`test/challenge.txt`);

fs.rmdirSync("test"); //delete a folder
