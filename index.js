const express = require("express");
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
