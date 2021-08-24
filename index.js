//Server create

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  console.log(req.headers);

  const myUrl = new URL(req.url, "http://${req.headers.host}/");
  const pathname = myUrl.pathname;
  const id = myUrl.searchParams.get("id");

  console.log(pathname, id);

  //   console.log(myUrl);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to the Bicycle Shop</h1>");
});

server.listen(3000);
