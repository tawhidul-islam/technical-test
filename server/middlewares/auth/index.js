const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData = null;

    if (token) {
      decodedData = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
      req.id = decodedData?.id;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = authentication;
