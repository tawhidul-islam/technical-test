const router = require("express").Router();

const {
  addUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  getUsersOnly,
} = require("../controllers/user");
const {
  addUserValidator,
  getUserValidator,
  deleteUserValidator,
} = require("../middlewares/validators/user");
const isAuthentication = require("../middlewares/auth/index");
const { validationResults } = require("../middlewares/validators/results");

// route
router.post("/", addUserValidator, validationResults, addUser);

router.patch("/:id", isAuthentication, updateUser);

router.patch(
  "/delete/:id",
  isAuthentication,
  deleteUserValidator,
  validationResults,
  deleteUser
);

router.get("/", isAuthentication, getUsers);

router.get("/all", isAuthentication, getUsersOnly);

router.get(
  "/:id",
  isAuthentication,
  getUserValidator,
  validationResults,
  getUser
);

module.exports = router;
