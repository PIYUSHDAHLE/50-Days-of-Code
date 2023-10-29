// Assignment operator
console.log("Assignment operator");
let a = 20;
console.log(`20=20 :  ${(a = a)}`);
console.log(`20==20 :  ${a == a}`);
console.log(`20===20 :  ${a === a}`);

// Arithmetic operator
console.log(" Arithmetic operator");
console.log(100 + 200);
console.log(1000 - 200);
console.log(100 * 200);
console.log(1000 / 200);
console.log(1000 % 200);

// Increment and Decrement operator
console.log(" Increment and Decrement operator");
let num = 5;
let num2 = 10;
//postfix
console.log("postfix");
console.log(num);
console.log(num++);
console.log(num++);
console.log(num--);
console.log(num--);
console.log(num);
//prefix
console.log("prefix");
console.log(num2);
console.log(++num2);
console.log(++num2);
console.log(--num2);
console.log(--num2);
console.log(num2);

// var n = 15;
// var n2 = n++;
// console.log("n=15 and n2= n++");
// console.log(n);
// console.log(n2);
// console.log(n2);

// Commpersion operator
let c = 5;
let b = 10;

console.log("Commpersion operator");
console.log(c == b); // false
console.log(c != b); // true
console.log(c > b); // false
console.log(c < b); // true
console.log(c >= b); // false
console.log(c <= b); // true

console.log("Logical operator");
// Logical operator
let a1 = true;
let b1 = false;

console.log(a1 && b1); // false
console.log(a1 || b1); // true
console.log(!a1); // false
console.log(!b1); // true

// String Concatenation(operator) that is (+) operator
console.log("String Concatenation");
var name = "Piyush";
console.log("My name is " + name);
