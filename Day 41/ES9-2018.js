//spread operator
const person = {
  name: "piyush",
  age: 23,
};
const newPerson = {
  ...person,
  city: "balagahat",
};
const newPerson2 = {
  city: "balagahat",
  ...person,
};
console.log(person);
console.log(newPerson);
console.log(newPerson2);
