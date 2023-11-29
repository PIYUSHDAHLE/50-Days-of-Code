//normal server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>welcome to node</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>welcome to about page</h1>");
    res.end();
  } else if (req.url == "/contact") {
    res.write("<h1>welcome to contact page</h1>");
    res.end();
  } else if (req.url == "/help") {
    res.write("<h1>welcome to help page</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
