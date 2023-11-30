const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};

// module.exports.add = add; //import
// module.exports.sub = sub; //import
// module.exports.multi = multi; //import

module.exports = { add, sub, multi }; //import
