const currentdate = new Date();

console.log(currentdate);
console.log(currentdate.toLocaleString());
console.log(currentdate.toDateString());
console.log(currentdate.toLocaleDateString());
console.log(currentdate.toLocaleTimeString());
console.log(currentdate.getFullYear());
console.log(currentdate.getMonth());
console.log(currentdate.getDate());
console.log(currentdate.getDay());

console.log(currentdate.setDate(30));
console.log(currentdate.setMonth(9));
console.log(currentdate.setFullYear(9));
console.log(currentdate.setTime(9));
