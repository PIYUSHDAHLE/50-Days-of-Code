const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from this side");
});

server.listen(5000, () => {
  console.log("server is running");
});
///localhost:5000
