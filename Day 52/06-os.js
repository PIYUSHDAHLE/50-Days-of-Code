const os = require("os");

console.log(" architecture : ", os.arch());
console.log("hostname : ", os.hostname());
console.log("platform : ", os.platform());
console.log("release : ", os.release());
console.log("total memory : ", os.totalmem());
console.log("type : ", os.type());
console.log("tmpdir : ", os.tmpdir());

const freeMemory = os.freemem();
console.log(freeMemory);
console.log(` Free memory : ${freeMemory / 1024 / 1024 / 1024} GB`);
