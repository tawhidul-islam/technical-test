const bcrypt = require("bcryptjs");

const { Admin, User } = require("../models");
const tokenGenaration = require("../utilities/tokenGenaration");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      if ((existingUser.status = "active")) {
        const isCorrectUser = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (!isCorrectUser) {
          return res.status(404).json({ message: "Invalid Credential!" });
        }

        const data = tokenGenaration(existingUser);

        return res.status(200).json(data);
      }
    } else {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Invalid Credential!" });
      }
      const isCorrectUser = await bcrypt.compare(password, user.password);
      if (!isCorrectUser) {
        return res.status(404).json({ message: "Invalid Credential!" });
      }

      const data = tokenGenaration(user);
      return res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { login };
