const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request made to the server");
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello Sync!</h1>");
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
