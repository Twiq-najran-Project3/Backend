const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
require("dotenv").config();
const { User } = require("../models/userModel");
// ---------------------------------------
//           GetUser ByID
// ---------------------------------------
const getUserByID = (req, res) => {
  const id = req.params.id;
  User.findOne({ userName: id })
    .then((result) => {
      res.status(200);
      res.send(result);
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
};

// ---------------------------------------
//           Login Method
// ---------------------------------------

const login = (req, res) => {
  const { userName, password } = req.body;

  User.findOne({ username: userName })
    .then((result) => {
      if (result) {
        bcrypt.compare(password, result.password, (err, result2) => {
          if (err) {
            console.log(err);
            res.json(err);
            return;
          }
          if (result2) {
            const payload = {
              id: result._id,
              username: result.username,
            };
            const options = {
              expiresIn: "60s",
            };

            const secret = "thisIsASecret";

            const token = jwt.sign(payload, secret, options);

            res.status(200).json({ message: "user logged in", token: token });
          } else {
            res.status(403).json("password incorrect");
          }
        });
      } else {
        res.status(404).json("username incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err.message);
    });
};

// ---------------------------------------
//           Rigester Method
// ---------------------------------------

const rigester = (req, res) => {
  const { firstName, lastName, userName, email, password, phoneNumber } =
    req.body;

  const newUser = new User({
    firstName,
    lastName,
    userName,
    email: email.toLowerCase(),
    password,
    phoneNumber,
  });

  newUser
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).send("User  Created");
    })
    .catch((err) => {
      res.json(err.message);
    });
};

module.exports = {
  getUserByID,
  rigester,
  login,
};
