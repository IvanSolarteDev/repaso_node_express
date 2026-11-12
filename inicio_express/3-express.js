const express = require("express");
const jsonmok = require("./jsonMok.js");

const app = express();
app.disable("x-powered-by");
const port = process.env.PORT || 1234;

app.use((req, res, next) => {
  console.log("mi primer middleware");
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  let body = "";
  //escuchando el evento data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const data = JSON.parse(body);
    req.body = data;
    next();
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello, World con express!");
});

app.get("/json", (req, res) => {
  res.json(jsonmok);
});

app.post("/json", (req, res) => {
  res.status(200).json(req.body);
});

app.use((req, res) => {
  res.status(404).send('<h1 style="color:red">404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
