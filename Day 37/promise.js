function test(num) {
  const promise = new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("even number");
    } else {
      reject("odd number");
    }
  });
  return promise;
}
const result = test(50);
result
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
