//what will be the output of the 3**3
console.log("3 * 3 : " + 3 * 3);
console.log("3 ** 3 : " + 3 ** 3); //3*3*3
console.log("3 ** 3 : " + 3 ** 5); //3*3*3*3*3

//what will be the output, when we add a number and a string
console.log(3 + "Hello"); // Output: "3Hello"

//write a program to swap two numbers
let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

let temp = a; // temp = 5
a = b; // a = 10
b = temp; // b = 5

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

//write a program to swap two numbers without using third variable
let a2 = 20;
let b2 = 300;

console.log("Before swapping:");
console.log("a2 =", a2);
console.log("b2 =", b2);

a2 = a2 + b2; // a2 = 20 + 300 = 320
b2 = a2 - b2; // b2 = 320 - 300 = 20
a2 = a2 - b2; // a2 = 320 - 20 = 300

console.log("After swapping:");
console.log("a2 =", a2);
console.log("b2 =", b2);
