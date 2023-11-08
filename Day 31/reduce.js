// reduce() method
// 1. reduces an array to a single value
// 2. callback function
// 3. initial value

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});
console.log(sum);
