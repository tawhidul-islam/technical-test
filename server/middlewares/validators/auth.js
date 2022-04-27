const { check } = require("express-validator");

const loginValidator = [
  check("email").isEmail().withMessage("Invalid email address"),
];

module.exports = { loginValidator };
