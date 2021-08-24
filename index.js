//Server create

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Server running");
});

server.listen(3000);
