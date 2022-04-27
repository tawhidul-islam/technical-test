const Log = require("../models/Log");

const createLog = async (userId, name, description) => {
  try {
    const newLog = new Log({
      userId,
      name,
      description,
    });
    await newLog.save();
  } catch (error) {
    throw Error("Something went wrong!");
  }
};

module.exports = {
  createLog,
};
