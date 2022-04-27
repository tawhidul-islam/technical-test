const { validationResult } = require("express-validator");

const validationResults = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(404).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  validationResults,
};
