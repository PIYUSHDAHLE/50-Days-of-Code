let data = [];

function fetchData(callback) {
  //let assume the function is fetched from the server waiting for 2 seconds
  setTimeout(() => {
    data = [1, 2, 3, 4, 5];
    console.log("data fetched");
    callback();
  }, 2000);
}
function display() {
  console.log("Displaying data");
  console.log(data);
}
fetchData(display);
