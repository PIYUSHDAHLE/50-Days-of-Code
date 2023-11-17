//fat arrow function disadvantage
// One disadvantage of using fat arrow functions is that they do not have their own 'this' value. Instead, they inherit the 'this' value from the surrounding context. This can sometimes lead to unexpected behavior, especially when using 'this' inside methods or event handlers.

// Example:
const obj = {
  name: "John",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`); // 'this' refers to the global object, not obj
    console.log(this); // it refers to the global object not obj
  },
};

obj.sayHello(); // Output: Hello, undefined!

// To overcome this disadvantage, you can use regular functions instead of fat arrow functions when you need to access the 'this' value of the current object.
