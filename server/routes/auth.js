const router = require("express").Router();

const { login } = require("../controllers/auth");
const { loginValidator } = require("../middlewares/validators/auth");
const { validationResults } = require("../middlewares/validators/results");

router.post("/", loginValidator, validationResults, login);

module.exports = router;
