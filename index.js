//Server create

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to the Bicycle Shop</h1>");
});

server.listen(3000);
