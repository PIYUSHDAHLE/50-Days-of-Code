var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Piyush Boss\n");
  })
  .listen(5000, () => {
    console.log("Server is running on port 5000");
  });
