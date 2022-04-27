const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

require("./config/dbConfig")();

const adminRoute = require("./routes/admin");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const ALLOWED_ORIGIN_LIST = [
  process.env.ALLOWED_ORIGIN_1,
  process.env.ALLOWED_ORIGIN_2,
];

const app = express();

app.use(
  cors({
    origin: ALLOWED_ORIGIN_LIST,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/static", express.static("public"));

app.use("/auth", authRouter);
app.use("/admins", adminRoute);
app.use("/users", userRouter);

app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send(err);
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("Success");
  }
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.use(
      express.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  });
}

module.exports = app;
