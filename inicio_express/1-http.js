const http = require("node:http");
const fs = require("node:fs");
const desiredPort = process.env.PORT || 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; //ok
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Hello World</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200; //ok
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>About Page</h1>");
  } else  if (req.url === "/image") {
    fs.readFile("./node.png", (err, data) => {
        if (err) {
            res.statusCode = 500;   
            res.setHeader("Content-Type", "text/plain");
            res.end("<h1>Internal Server Error</h1>");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end(data);
        }
    } )
  }   else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Page Not Foundd</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {       
  console.log(`Server running at http://localhost:${desiredPort}/`);
});
