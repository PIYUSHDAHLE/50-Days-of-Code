//Array.prototype.sort()
// Sorts the first value of elements of an array in place and returns the
// sorted array.
// backward search

const months = ["Jan", "March", "April", "June", "July", "Aug", "Oct"];

console.log(months.sort());
// [
//     'April', 'Aug',
//     'Jan',   'July',
//     'June',  'March',
//     'Oct'
//   ]

const numbers = [15, 72, 397, 74, 95, 26, 57, 38, 39, 1000];
console.log(numbers.sort());
// [1000, 15, 26, 38, 39, 397, 57, 72, 74, 95];
