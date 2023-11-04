function biodata() {
  const myFirstName = "Piyush";
  console.log(myFirstName);

  if (true) {
    const myLastName = "Dahle";
    console.log(" inner " + myFirstName);
    console.log(" inner " + myLastName);
  }
  console.log(" inner-outer " + myLastName); //error
}
// console.log(" outer-most " + myFirstName);
// console.log(" outer-most " + myLastName);
biodata();
