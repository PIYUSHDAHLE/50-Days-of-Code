//javascript date object
// date object contain anumber that represents the number
// of milliseconds since January 1, 1970 00:00:00 UTC

//create a date object
//there are 4 ways to create a date object
// 1. Using the Date() constructor with no arguments
const date1 = new Date();

// 2. Using the Date() constructor with a date string
const date2 = new Date("October 13, 2022 11:13:00");

// 3. Using the Date() constructor with individual date components
const date3 = new Date(2022, 9, 13, 11, 13, 0);
// const date3 = new Date(year, month, date, hours, minutes, seconds);

// 4. Using the Date.UTC() method with individual date components
const date4 = new Date(Date.UTC(2022, 9, 13, 11, 13, 0));

console.log(date1);
console.log(date2.toLocaleString());
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date4.toLocaleString());

const date5 = Date.now();
//returns the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(date5);

const date6 = new Date(1698831826924); //returns the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(date6.toLocaleString());
const date7 = new Date(1198131826924);
console.log(date7.toLocaleString());
