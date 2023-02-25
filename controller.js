const express = require("express");
const personData = require("./personData.json");
const createError = require("http-errors");
const personValidator = require("./validator");

const personRouter = express.Router();

// Implementáld a POST /person végpontot, amellyel új személyt vehetünk fel a nyilvántartásba! (Ne felejtsd el telepíteni a body-parser csomagot!)

personRouter.post("/", (req, res, next) => {
  const newId = personData[personData.length - 1].id + 1;
  const newPerson = { id: newId, ...req.body };

  const errorMessage = personValidator.personSaving(newPerson);
  if (errorMessage) {
    return next(new createError.BadRequest(errorMessage));
  } else {
    personData.push(newPerson);
    res.send("Person saved");
  }
});

// Implementáld a DELETE /person/:vaccine végpontot, amely a vaccine típusú oltással rendelkező személyeket törli az adatbázisból.

personRouter.delete("/:vaccine", (req, res, next) => {
  const vaccine = req.params.vaccine;
  const dataLength = personData.length;
  const errorMessage = personValidator.personDelete(vaccine);
  if (errorMessage) {
    return next(new createError.BadRequest(errorMessage));
  }

  const filteredPersons = personData.filter((person) => {
    return (
      person.vaccine && person.vaccine.toLowerCase() === vaccine.toLowerCase()
    );
  });
  const numDeleted = dataLength - filteredPersons;
  if (numDeleted > 0) {
    res.status(404).json({ errorMessage: "No person found" });
  } else {
    filteredPersons.forEach((person) => {
      const index = personData.indexOf(person);
      personData.splice(index, 1);
    });
    res.send("Person(s) deleted");
  }
});

// Implementáld a PUT /person/:id/:vaccine végpontot, amellyel megadhatjuk, hogy az adott id-val rendelkező személy vaccine típusú oltást kapott.

personRouter.put("/:id/:vaccine", (req, res, next) => {
  const personId = parseInt(req.params.id);
  const vaccinetype = req.params.vaccine;
  const personIndex = personData.findIndex((person) => person.id === personId);
  const errorMessage = personValidator.personPut(personId);

  if (errorMessage) {
    return next(new createError.BadRequest(errorMessage));
  }

  if (personIndex > -1) {
    if (personData[personIndex].vaccine) {
      personData[personIndex].vaccine = vaccinetype;
      res.send("Vaccine type updated");
    } else {
      res.send("not protected person");
    }
  } else {
    res.status(404).json({ errorMessage: "Not found person by id" });
  }
});

personRouter.get("/count", (req, res) => {
  const vaccinaCount = personData.filter((person) => person.vaccine);
  res.send(`Number of vaccinated: ${vaccinaCount.length}`);
});

// Implementáld a GET /person/:id/vaccinated végpontot, amely visszaadja, hogy az adott id-val rendelkező személy rendelkezik-e oltással! (Tipp: használd a parseInt() függvényt!)

personRouter.get("/:id/vaccinated", (req, res, next) => {
  const personId = +req.params.id;
  const personIndex = personData.findIndex((p) => p.id === personId);
  const errorMessage = personValidator.personGet(personId);
  console.log(personId);

  if (errorMessage) {
    return next(new createError.BadRequest(errorMessage));
  }
  if (personIndex > -1) {
    if (personData[personIndex].vaccine) {
      res.send("protected");
    } else {
      res.send("not protected");
    }
  } else {
    next(createError(404, "Not found person by Id"));
  }
});

personRouter.get("/vaccinated", (req, res) => {
  const vaccinatedPerson = personData.filter((person) => person.vaccine);
  res.send(vaccinatedPerson);
});

module.exports = personRouter;
