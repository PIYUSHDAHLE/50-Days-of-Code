//Multiply each element of the array by 2 and return only
// those elements which are greater than 10.
let arr = [2, 3, 4, 6, 8];

let newArr = arr
  .map((curEle) => {
    return curEle * 2;
  })
  .filter((curEle) => {
    return curEle > 10;
  });
console.log(newArr);
// using method to method this is called c haining
