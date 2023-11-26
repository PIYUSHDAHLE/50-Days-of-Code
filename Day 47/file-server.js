var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("test.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5000);

//    http://localhost:5000 in browser
