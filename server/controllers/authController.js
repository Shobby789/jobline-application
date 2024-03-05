const mongoose = require("mongoose");
require("../model/db/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = require("../data/key");
const UserModel = mongoose.model("Users");

module.exports.CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const ecryptedPassword = await bcrypt.hash(password, 10);
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(201).send({ data: "Email already registered" });
    }
    await UserModel.create({
      username,
      email,
      password: ecryptedPassword,
    });
    res.status(201).send({ status: "Account created" });
  } catch (error) {
    res.status(400).send({ data: "Something went wrong" });
  }
};

module.exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await UserModel.findOne({ email });
    if (!checkUser) {
      return res.status(201).send({ status: "Email does not exist" });
    }
    if (await bcrypt.compare(password, checkUser.password)) {
      const token = jwt.sign({ email: checkUser.email }, SECRET_KEY, {
        expiresIn: "24hr",
      });

      if (res.status(201)) {
        return res
          .status(201)
          .send({
            status: "Login successfull",
            data: { 
              user: {
              _id: checkUser._id, 
              username: checkUser.username, 
              email: checkUser.email
              },
              token 
            },
          });
      } else {
        return res.status(201).send({ status: "Wrong email or password" });
      }
    }
  } catch (error) {
    console.log("login-user error >> ", error);
    res.status(400).send({ state: "Something went wrong" });
  }
};

