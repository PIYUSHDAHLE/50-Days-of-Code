const fname = function () {
  return "piyush";
};

const lname = () => {
  return "dahle";
};

fname();
lname();

console.log(`My name is ${fname()} ${lname()}`);

const fullname = (fname, lname) => {
  return `My best friend name is ${fname} ${lname}`;
};

console.log(fullname("chunauti", "rahangdale"));
