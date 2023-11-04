function biodata() {
  var myFirstName = "Piyush";
  console.log(myFirstName);

  if (true) {
    var myLastName = "Dahle";
    console.log(" inner " + myFirstName);
    console.log(" inner " + myLastName);
  }
  console.log(" inner-outer " + myLastName);
}
// console.log(" outer-most " + myFirstName); error
// console.log(" outer-most " + myLastName); error

biodata();
