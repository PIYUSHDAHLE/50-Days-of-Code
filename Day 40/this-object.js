//this object contain the current context of the function
//this keyword is used to access the properties of the object
console.log(this); //returns window object

let myname = "piyush";
function hello() {
  console.log(this.myname);
}
hello();

const obj = {
  myname: "piyush",
  myage: 23,
  hello: function () {
    console.log(this.myname);
    console.log(this.myage);
    console.log(this);
  },
};
obj.hello();
