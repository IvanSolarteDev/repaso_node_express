const http = require("node:http");
const json = require("./jsonMok");
const fs = require("node:fs");
const desiredPort = process.env.PORT || 1234;

const processRequest = (req, res) => {
  const { url, method } = req;
  console.log("method", method);
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          res.setHeader("Content-Type", "text/plain");
          res.end("Hello, World!");
          break;
        case "/json":
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(json));
          break;
        default:
          res.writeHead(404);
          res.end();
      }
      break;

    case "POST":
      switch (url) {
        case "/json":
          {
            let body = "";
            //escuchando el evento data
            req.on("data", (chunk) => {
              console.log("chunk--", chunk.toString());
              body += chunk.toString();
            });
            req.on("end", () => {
              console.log("body", body);
              const parsedBody = JSON.parse(body);
              console.log("parsedBody", parsedBody);
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(parsedBody));
            });
          }
          break;

        default:
          res.writeHead(404);
          res.end("404 Not Found");
      }
      break;
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server running at http://localhost:${desiredPort}/`);
});
