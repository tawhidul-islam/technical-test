const bcrypt = require("bcryptjs");
const fs = require("fs");

const { Admin, Log } = require("../models");
const tokenGenaration = require("../utilities/tokenGenaration");
const { createLog } = require("../utilities/log");
const generateDateAndTime = require("../utilities/generateCurrentDateTime");

// add new user
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await Admin.findOne({ email, status: "active" });
    if (existingUser) {
      return res.status(404).json({ message: "Admin already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    const data = tokenGenaration(newAdmin);

    await createLog(
      newAdmin._id,
      "Create user",
      `Sign up successfulll by ${name} at ${generateDateAndTime()}`
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// update proffile first time
const updateProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      country,
      presentAddress,
      permanentAddress,
    } = req.body;
    const { file, protocol } = req;
    const { id: _id } = req.params;

    const admin = await Admin.findById(_id);
    if (!admin) {
      return res.status(404).json({ message: "No admin found!" });
    }

    if (file) {
      const pathName = admin.url.replace(
        "http://localhost:8080/static",
        "public"
      );
      // delete main storage
      if (admin.url) {
        fs.unlink(pathName, function (err) {
          if (err) throw err;
        });
      }

      url =
        protocol +
        "://" +
        req.get("host") +
        "/static/" +
        process.env.FOLDER +
        "/" +
        file.filename;

      await createLog(
        _id,
        "Update Profle picture",
        `Update Profle picture successfulll by ${admin.name} as role ${
          admin.role
        } at ${generateDateAndTime()}`
      );
      admin.url = file ? url : admin.url;
    }
    admin.name = name ? name : admin.name;
    admin.email = email ? email : admin.email;
    admin.phone = phone ? phone : admin.phone;
    admin.city = city ? city : admin.city;
    admin.country = country ? country : admin.country;
    admin.presentAddress = presentAddress
      ? presentAddress
      : admin.presentAddress;
    admin.permanentAddress = permanentAddress
      ? permanentAddress
      : admin.permanentAddress;

    await admin.save();
    const data = tokenGenaration(admin);

    await createLog(
      _id,
      "Update profile",
      `Update profile successfulll by ${admin.name} as role ${
        admin.role
      } at ${generateDateAndTime()}`
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// get single user
const getAdmin = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const user = await Admin.findById(_id).select("-password, -__v");
    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { id: _id } = req.params;

    let user = await Admin.findById(_id);

    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }

    const isCorrectPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isCorrectPassword) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    await createLog(
      _id,
      "Change password",
      `Password change successfulll by ${user.name} as role ${
        user.role
      } at ${generateDateAndTime()}`
    );

    return res.status(200).json({ message: "Password changed successfull!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getActivityLog = async (req, res) => {
  try {
    const { id: userId } = req.params;

    const { size, page } = req.query;
    const pageNum = parseInt(page) || 1;
    const limit = parseInt(size) || 10;

    const totalLog = await Log.countDocuments({ userId });
    const totalPage = Math.ceil(totalLog / limit);

    const logs = await Log.find({ userId })
      .sort({ _id: -1 })
      .skip((pageNum - 1) * limit)
      .limit(limit)
      .lean();

    const data = {
      logs,
      currentPage: Number(pageNum),
      totalPage,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  signup,
  updateProfile,
  getAdmin,
  changePassword,
  getActivityLog,
};
