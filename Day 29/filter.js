//Array.prototype.filter()
// Creates a new array with all elements that pass the test
//implemented by the provided function.
// forward search

const prices = [200, 500, 1000, 400, 2500, 900, 600, 1500, 2000];
//prices >= 1000
const filteredPrices = prices.filter((Currentprice) => {
  return Currentprice >= 1000;
});

console.log(filteredPrices); //[ 1000, 2500, 1500, 2000 ]
console.log("-----------------");

const filteredPrices2 = prices.filter((Currentprice2) => {
  return Currentprice2 >= 3000;
});
console.log(filteredPrices2); //[]
