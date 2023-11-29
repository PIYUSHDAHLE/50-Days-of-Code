//normal server
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>welcome to node</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
