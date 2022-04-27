const { check, param } = require("express-validator");
const createError = require("http-errors");
const mongoose = require("mongoose");

const addUserValidator = [
  check("name")
    .notEmpty()
    .withMessage("You should provide a valid name")
    .trim(),

  check("dob").isDate().withMessage("You should provide a valid date"),

  check("email").isEmail().withMessage("Invalid email address"),
];

const updateUserValidator = [
  check("phone").custom(async (phone) => {
    try {
      if (phone) {
        let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!phoneNumberRegex.test(phone) && phone) {
          throw createError(
            "Invalid phone number. Make sure you are using country code!"
          );
        }
      }
    } catch (error) {
      throw createError(error);
    }
  }),
];

const getUserValidator = [
  param("id").custom(async (id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No user found!" });
      }
    } catch (error) {
      throw createError(error);
    }
  }),
];

const deleteUserValidator = [
  param("id").custom(async (id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No user found!" });
      }
    } catch (error) {
      throw createError(error);
    }
  }),
];

module.exports = {
  addUserValidator,
  updateUserValidator,
  getUserValidator,
  deleteUserValidator,
};
