const http = require("http");
const { fileSystem } = require("./fileSystem");
const server = http.createServer((req, res) => {
  console.log("Request made to the server");
  fileSystem(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
