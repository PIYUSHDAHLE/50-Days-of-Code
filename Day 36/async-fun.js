// asynchronous function
function f1() {
  console.log("FUNCTION 1");
}
function f2() {
  setTimeout(() => {
    console.log("FUNCTION 2");
  }, 2000);
}
function f3() {
  console.log("FUNCTION 3");
}
f1();
f2();
f3();
