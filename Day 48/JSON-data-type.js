const data = [
  {
    id: 101,
    name: "Piyush",
    age: 23,
  },
  {
    id: 102,
    name: "chunauti",
    age: 21,
  },
  {
    id: 103,
    name: "swati",
    age: 22,
  },
];
console.log("----------------");
console.log(data);
// obj to json
const jsondata = JSON.stringify(data);
console.log(jsondata);
// json to obj
const objdata = JSON.parse(jsondata);
console.log(objdata);
