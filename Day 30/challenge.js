//Add and remove element from an array

// 1. Add an Dec to the end of the array ?
// 2. what is the return value of splice method ?
// 3. update march to March ?
// 4. Delete June from the array ?

const months = [
  "January",
  "February",
  "march",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

// sol 1
const newMonths = months.splice(11, 0, "December"); // replace 11 to months.length
console.log(months);

// sol 2
console.log(newMonths); //deleted data from array

// sol 3
const updatedMonths = months.splice(2, 1, "March"); // 1 is telling how many element to delete
console.log(months);

// sol 4
const indexOfMonths = months.indexOf("June");

if (indexOfMonths != -1) {
  const updatedMonths = months.splice(indexOfMonths, 1, "june");
  console.log(months);
} else {
  console.log("Data not found");
}
