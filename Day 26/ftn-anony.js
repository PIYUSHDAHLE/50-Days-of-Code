//anonymous function

var funexp = function (a, b) {
  return (c = a + b);
};
var sum = funexp(20, 30);
var sum2 = funexp(55, 10);
console.log(`the sum of two numbers is : ${sum}`);
console.log(`the sum of two numbers is : ${sum2}`);
console.log(`${sum} > ${sum2} : ${sum > sum2}`);
console.log(`${sum} < ${sum2} : ${sum < sum2}`);
