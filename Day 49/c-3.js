let express = require("express");
let app = express();
app.get("/greet", function (req, res) {
  res.send(`
 <h1>Hello there!</h1>
 <h2>Welcome to the page.</h2>
 `);
});
app.get("/message", function (req, res) {
  res.send(`
 <h1>Message title</h1>
 <p>Message body</p>
 `);
});
app.get("/greet/:name", function (req, res) {
  res.send(`
 <h1>Hello ${req.params.name}!</h1>
 <h2>Welcome to the page.</h2>
 `);
});
app.get("/intro", function (req, res) {
  res.send(`
 <h1>Hi there!</h1>
 <h2>I'm Piyush. I'm a programmer. </h2>
 `);
});
app.listen(5000, () => {
  console.log("Server has started!");
});
