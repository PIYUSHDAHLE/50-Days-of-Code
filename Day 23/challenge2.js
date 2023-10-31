//Differce between let and var in javascript
function example() {
  if (true) {
    var x = 10; // var has function scope
    let y = 20; // let has block scope
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
  console.log(y); // ReferenceError: y is not defined
}

example();
