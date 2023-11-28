let express = require("express");
let url = require("url");
let app = express();
app.get("/add", function (req, res) {
  let inUrl = url.parse(req.url, true);
  let nums = inUrl.query;
  res.send(`
 <h1>${
   nums.num1
 } + ${nums.num2} = ${parseInt(nums.num1) + parseInt(nums.num2)}</h1> `);
});
app.listen(5000, () => {
  console.log("Server has started!");
});
