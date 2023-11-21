const data = null ?? "hello";
console.log(data); //hello
const data2 = undefined ?? "hello";
console.log(data2); //hello
const data3 = NaN ?? "hello";
console.log(data3); //NaN
const data4 = "World" ?? "hello";
console.log(data4); //World
