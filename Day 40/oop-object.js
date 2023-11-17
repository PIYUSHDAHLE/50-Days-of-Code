let biodata = {
  name: "Piyush Dahle",
  age: 23,
  city: "Balaghat",
  getData: function () {
    console.log(
      `My name is ${biodata.name} and age is ${biodata.age} from ${biodata.city}`
    );
  },
  getData2() {
    console.log(`Your name is ${this.name}`);
    console.log(`Your age is ${this.age}`);
    console.log(`Your are from ${this.city}`);
  },
};

biodata.getData();
biodata.getData2();
//here we use the variable and function inside the object
