(function (exports, require, module, __filename, __dirname) {
  const word = "hello boss";
  console.log(word);
});
//IIFE - Immediately Invoked Function Expression
// Inside the IIFE we can access the global scope
(function (exports, require, module, __filename, __dirname) {
  // code inside the IIFE can access the global scope
  // they are private
  // we cannot use there code outside
})();
console.log(__filename);
console.log(__dirname);
