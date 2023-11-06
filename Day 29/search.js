//Array.prototype.indexOf()
// Returns the first index at which a given element can
// be found in the array, or -1 if it is not present.
// forward search

var arr = ["i phone", "redmi", "realme", "samsung", "redmi", "oppo"];

console.log(arr.indexOf("samsung")); //2
console.log(arr.indexOf("vivo")); //-1
console.log(arr.indexOf("redmi", 2)); //4
console.log(arr.indexOf("Redmi", 2)); //-1
console.log("-----------------");
//Array.prototype.lastIndexOf()
// Returns the last(GREATEST) index at which a given element can
// be found in the array, or -1 if it is not present.
//IT SEARCH THE ELEMENT FROM LAST TO FIRST
// backward search

var arr2 = ["paytm", "phonepe", "googlepe", "bharatpe", "Paytm"];

console.log(arr2.lastIndexOf("Paytm")); //4
console.log(arr2.lastIndexOf("GOOGLEPE")); //-1
console.log(arr2.lastIndexOf("phonepe", 3)); //1
console.log("-----------------");
//Array.prototype.includes()
// Determines whether an array includes a certain value
// among its entries, returning true or false as appropriate.
// forward search

var arr3 = ["paytm", "phonepe", "googlepe", "bharatpe", "Paytm"];

console.log(arr3.includes("Paytm")); //true
console.log(arr3.includes("GOOGLEPE")); //false
console.log("-----------------");

//Array.prototype.find()
// Returns the value of the first element in the array
//that satisfies the provided testing function.
//it show undefined if not found
//it returns only the first element
// forward search

const prices = [200, 500, 1000, 400, 900, 600, 1500, 2000];
//prices > 1000

const findElement = prices.find((Currentprice) => {
  return Currentprice > 1000; //1500
});
const findElement3 = prices.find((Currentprice) => {
  return Currentprice > 2000; //unddefined
});
console.log(" FIND ELEMENT :" + findElement);
console.log(" FIND ELEMENT :" + findElement3);
console.log("-----------------");

//Array.prototype.findIndex()
// Returns the index of the first element in the array
//that satisfies the provided testing function.
//it show -1 if not found
// forward search

const price = [200, 500, 1000, 400, 900, 600, 1500, 2000];

const findElement4 = price.findIndex((Currentprice) => {
  return Currentprice > 2000; //-1
});
const findElement2 = price.findIndex((Currentprice) => {
  return Currentprice > 1000; //6
});

console.log(" FIND ELEMENT index :" + findElement2);
console.log(" FIND ELEMENT index :" + findElement4);
console.log("-----------------");
