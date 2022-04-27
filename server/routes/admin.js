const router = require("express").Router();

const {
  signup,
  updateProfile,
  getAdmin,
  changePassword,
  getActivityLog,
} = require("../controllers/admin");
const {
  addUserValidator,
  updateUserValidator,
  getUserValidator,
  changePasswordValidator,
} = require("../middlewares/validators/admin");
const isAuthentication = require("../middlewares/auth/index");
const { validationResults } = require("../middlewares/validators/results");
const upload = require("../utilities/uploadImage");

// route
router.post("/", addUserValidator, validationResults, signup);

router.patch(
  "/:id",
  isAuthentication,
  updateUserValidator,
  validationResults,
  upload.single("avatar"),
  updateProfile
);

router.get(
  "/:id",
  isAuthentication,
  getUserValidator,
  validationResults,
  getAdmin
);

router.patch(
  "/change-password/:id",
  isAuthentication,
  changePasswordValidator,
  validationResults,
  changePassword
);

router.get("/activity-log/:id", isAuthentication, getActivityLog);

module.exports = router;
