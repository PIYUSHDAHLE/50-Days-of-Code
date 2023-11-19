//ES8 2017
//padstart and padend (worn on console)
const str = "Hello";
const paddedStr = str.padStart(10, " ");
console.log(paddedStr); // "     Hello"

const str2 = "World";
const paddedStr2 = str2.padEnd(10, "-");
console.log(paddedStr2); // "World-----"

//object.values and object.entries

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj));
// [["a", 1], ["b", 2], ["c", 3]]
