function biodata() {
  let myFirstName = "Piyush";
  console.log(myFirstName);

  if (true) {
    let myLastName = "Dahle";
    console.log(" inner " + myFirstName);
    console.log(" inner " + myLastName);
  }
  console.log(" inner-outer " + myLastName); //error
}

// console.log(" outer-most " + myFirstName); error
// console.log(" outer-most " + myLastName); error

biodata();
