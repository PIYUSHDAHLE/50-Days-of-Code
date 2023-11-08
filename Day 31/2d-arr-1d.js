const arr = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
let flatarr = arr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});
console.log(flatarr);
