let arr = [10, 50, 55, 40, 70, 80];

// let arr2 = arr
//   .map((curvalue) => curvalue * 2)
//   .filter((curvalue) => curvalue > 100);

let arr2 = arr
  .map((curvalue) => curvalue * 2)
  .filter((curvalue) => curvalue > 100)
  .reduce((accumulator, curvalue) => {
    debugger;
    return (accumulator += curvalue);
  });

console.log(arr2);
