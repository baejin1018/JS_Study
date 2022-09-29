const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.url == "/hello") {
    response.end("Hello");
  } else {
    response.end("Hello");
  }
});
server.listen(3000);
