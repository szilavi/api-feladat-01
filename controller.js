const express = require("express");
const personData = require("./personData.json");

const personRouter = express.Router();

personRouter.get("/count", (req, res) => {
  const vaccinaCount = personData.filter((person) => person.vaccine);
  res.send(`Number of vaccinated: ${vaccinaCount.length}`);
});

personRouter.get("/vaccinated", (req, res) => {
  const vaccinatedPerson = personData.filter((person) => person.vaccine);
  res.send(vaccinatedPerson);
});

module.exports = personRouter;
