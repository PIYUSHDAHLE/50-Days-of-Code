const chalk = require("chalk");
// import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color

console.log(error("Error!"));
console.log(warning("Warning!"));
