//calls a function for each element of an array
let arr = ["Piyush", "sakshi", "munna", "neelima"];

//normal function for each
arr.forEach(function (element, index, array) {
  console.log(`index : ${index} of ${element} ${array}`);
});

//arrow function for each
arr.forEach((element, index, array) => {
  console.log(`index : ${index} of ${element} ${array}`);
});
