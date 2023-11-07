//Find the squre root of each element of the array

let arr = [25, 36, 49, 64, 81, 100];

let arrSq = arr.map((curEle) => {
  return Math.sqrt(curEle); // square root method
});
console.log(arrSq);
