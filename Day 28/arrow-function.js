//Normal function

console.log(add());
//In normal function its call before define the function
function add() {
  let a = 3,
    b = 4;
  let c = a + b;
  return `The sum of ${a} and ${b} is ${c}`;
}

//Arrow function

// console.log(add());
//In arrow function it's not call before define the function
const add2 = () => {
  let a2 = 30,
    b2 = 40;
  let c2 = a2 + b2;
  return `The sum of ${a2} and ${b2} is ${c2}`;
};

console.log(add2());

//compress the code of arrow function
const add3 = () => `The sum of ${(a3 = 10)} and ${(b3 = 90)} is ${a3 + b3}`;
//Don't need to use return and {} when defining in single line
console.log(add3());
