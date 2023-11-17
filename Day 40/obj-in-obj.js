const data1 = {
  name: {
    first: "Piyush",
    last: "Dahle",
  },
  age: 22,
  city: "Bhopal",

  getdata() {
    console.log(
      `My name is ${this.name.first} ${this.name.last} and my age is ${this.age} from ${this.city}`
    );
  },
};

console.log(data1);
data1.getdata();
// here i'm using object into object
