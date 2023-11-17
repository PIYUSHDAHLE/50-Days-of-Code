const data = ["piyush Dahle", 27, "Balaghat"];

// const name = data[0];
// const age = data[1];
// const city = data[2];

// this is array destructuring
const [name, age, city, degree = "B.Tech."] = data;
console.log(name, age, city, degree);
