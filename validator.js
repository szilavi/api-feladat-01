const personData = require("./personData.json");

const personValidator = {};

personValidator.personGet = (personId) => {
  let errorMessage = "";
  if (isNaN(personId)) {
    errorMessage = "invalid Id";
    return errorMessage;
  }
};

personValidator.personPut = (personId) => {
  let errorMessage = "";
  if (isNaN(personId)) {
    errorMessage = "invalid Id";
    return errorMessage;
  }
};

personValidator.personDelete = (vaccine) => {
  let errorMessage = "";
  if (typeof vaccine !== "string" || vaccine.length <= 1) {
    errorMessage = "invalid vaccine";
    return errorMessage;
  }
};

personValidator.personSaving = (person) => {
  let errorMessage = "";
  if (!person["firstName"] || !person["lastName"]) {
    errorMessage = "Body must contain firstName and lastName";
  }
  return errorMessage;
};

module.exports = personValidator;
