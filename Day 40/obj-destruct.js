// this is object destructuring

const data = {
  name: "piyush Dahle",
  age: 27,
  city: "Balaghat",
};

const { name, age, city, degree = "B.Tech." } = data;

console.log(data);

console.log(name, age, city, degree);
