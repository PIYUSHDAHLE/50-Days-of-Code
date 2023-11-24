const http = require("http");

//creating a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1 style='color:red; text-align:center;'>Hello ,Boss </h1>");
  res.write(
    "<h2 style='color:blue;text-align:center;'>Welcome to the host page</h2>"
  );
  res.end();
});
//starting the server
server.listen(5000, function () {
  console.log("server is running");
});
// checkin browser localhost:5000
