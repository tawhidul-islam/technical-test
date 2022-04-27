const { check, param } = require("express-validator");
const createError = require("http-errors");
const mongoose = require("mongoose");

const { Admin } = require("../../models");

const addUserValidator = [
  check("name")
    .notEmpty()
    .withMessage("You should provide a valid name")
    .trim()
    .custom(async (name) => {
      try {
        if (name.length < 4) {
          throw createError("Name is too short, it must be 3 char long!");
        }
      } catch (error) {
        throw createError(error);
      }
    }),

  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (email) => {
      try {
        const isAlreadyAUser = await Admin.findOne({ email });
        if (isAlreadyAUser) {
          throw createError("Email already exist!");
        }
      } catch (error) {
        throw createError(error);
      }
    }),

  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 character long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

const updateUserValidator = [
  check("phone").custom(async (phone) => {
    try {
      let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

      if (!phoneNumberRegex.test(phone) && phone) {
        throw createError(
          "Invalid phone number. Make sure you are using country code!"
        );
      }
    } catch (error) {
      throw createError(error);
    }
  }),

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

const changePasswordValidator = [
  check("newPassword")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 character long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 special char"
    ),

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
  changePasswordValidator,
};
