const mongoose = require("mongoose");
const CONNECTION_URL = process.env.CONNECTION_URL;

module.exports = () => {
  mongoose
    .connect(CONNECTION_URL)
    .then(console.log(`DB connected`))
    .catch((error) => console.log(`Error to connect DB: ${error.message}`));
};
