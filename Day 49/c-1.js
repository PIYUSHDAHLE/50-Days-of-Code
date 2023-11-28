let express = require("express");
let app = express();
app.get("/intro", function (req, res) {
  res.send(`
 <h1>Hi there!</h1>
 <h2>I'm Aarthi. How are you?</h2>
 `);
});
app.listen(5000, () => {
  console.log("Server has started!");
});
