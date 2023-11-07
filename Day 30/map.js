const arr = [1, 2, 3, 44, 55, 22, 33];
// num>9
let newArr = arr.map((curEle, index, arr) => {
  return curEle > 9;
});
console.log(arr);
console.log(newArr);

let newArr1 = arr.map((curEle, index, arr2) => {
  return `Index no : ${index} and value : ${curEle} belongs to array : ${arr2}`;
});
console.log(newArr1);

//forEach returns undefined
