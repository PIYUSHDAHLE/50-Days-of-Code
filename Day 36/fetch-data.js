const result = fetch("https://jsonplaceholder.typicode.com/users");
result
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("completed");
  });
