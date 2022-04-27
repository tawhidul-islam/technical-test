const bcrypt = require("bcryptjs");
const fs = require("fs");

const { User, Admin, Log } = require("../models");
const { createLog } = require("../utilities/log");
const generateDateAndTime = require("../utilities/generateCurrentDateTime");

// add new user
const addUser = async (req, res) => {
  const { name, cardId, phone, dob, email, address, gender } = req.body;
  const { adminId } = req.query;

  try {
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(500).json({ message: "No admin found" });
    }
    const hashedPassword = await bcrypt.hash("123456", 12);

    const newUser = await User.create({
      name,
      cardId,
      phone,
      dob,
      email,
      address,
      gender,
      password: hashedPassword,
      createdBy: admin._id,
    });

    await createLog(
      newUser._id,
      "Add user",
      `Add user successfulll by ${admin.name} at ${generateDateAndTime()}`
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, cardId, phone, dob, email, address, gender } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }

    user.name = name ? name : user.name;
    user.cardId = cardId ? cardId : user.cardId;
    user.phone = phone ? phone : user.phone;
    user.dob = dob ? dob : user.dob;
    user.email = email ? email : user.email;
    user.address = address ? address : user.address;
    user.gender = gender ? gender : user.gender;

    await user.save();

    await createLog(
      id,
      "Update user",
      `Update user successfulll by ${user.name}  at ${generateDateAndTime()}`
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { adminId } = req.query;
    const { id } = req.params;

    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res
        .status(404)
        .json({ message: "You don't have permission to delete this user!" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }

    user.isDelete = true;
    user.updatedBy = admin._id;

    await user.save();

    await createLog(
      _id,
      "Delete user",
      `Delete user successfulll by ${admin.name}  at ${generateDateAndTime()}`
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getUsers = async (req, res) => {
  try {
    const { size, page, search } = req.query;
    const pageNum = parseInt(page) || 1;
    const limit = parseInt(size) || 10;

    const totalUser = await User.countDocuments({ isDelete: false });
    const totalPage = Math.ceil(totalUser / limit);

    let query = { isDelete: false };

    if (search !== "undefined") {
      let regex = new RegExp(search, "i");
      query = {
        ...query,
        $or: [
          { name: regex },
          { cardId: regex },
          { phone: regex },
          { email: regex },
        ],
      };
    }

    const users = await User.find(query)
      .select("-password, -__v, -googleId, -role, ")
      .populate("createdBy")
      .populate("updatedBy")
      .sort({ _id: -1 })
      .skip((pageNum - 1) * limit)
      .limit(limit)
      .lean();

    const data = {
      users,
      currentPage: Number(pageNum),
      totalPage,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log(error.response);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// get single user
const getUser = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const user = await User.findOne({ _id, isDelete: false }).select(
      "-password, -__v"
    );
    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// get single user
const getUsersOnly = async (req, res) => {
  try {
    const user = await User.find({ isDelete: false }).select("-password, -__v");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  addUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
  getUsersOnly,
};
