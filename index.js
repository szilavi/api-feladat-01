const express = require("express");
const app = express();
const port = 3000;
const createError = require("http-errors");

app.use(express.json());

app.get("/", (req, res) => {
  const links = `
  <a href="http://localhost:3000/person/count">Counter</a><br>
  <a href="http://localhost:3000/person/vaccinated">Vaccinated</a>
  `;
  res.send(links);
});

app.use("/person", require("./controller"));

app.use("/", (req, res) => {
  res.send("404");
});

app.use((err, req, res, next) => {
  // res.status(err.statusCode);
  res.json({
    hasError: true,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
