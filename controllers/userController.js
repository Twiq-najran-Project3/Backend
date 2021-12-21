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
  .populate("role")
    .then((result) => {
      console.log(result)
      res.status(200);
      res.send(result);
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
};

// ----------------------------------
//               Get All booking
// ----------------------------------

const getAllBooking =(req, res) =>{
  const name = req.params.name;
  User.find({userName:name})
  .then((result)=>{
    res.status(200);
    res.send(result);
  })
  .catch((err) => {
    res.status(400);
    res.send(err);
  });

 
}

// ----------------------------------
//          Create New Booking
// ----------------------------------
const addBooking =(req, res) =>{
const userName = req.body.username;
// const eventId = req.body.eventId;
User.findOne({username:userName}, function(err, result){
  if(err){
    console.log(err)
  }
  else
  {
    if(!result)
    {
      res.status(404).send("User not found");
    }
    else
    {
      const newBooking = new Booking( Date.now(),"details", 'notPaid',result._id, false);
      console.log(result.bookings)
      console.log(newBooking);
      result.bookings.push(newBooking);
      console.log(result);
      User.findByIdAndUpdate(result._id, {bookings: result.bookings}).then(
        result => {
          res.status(200).json({user: result});
          return  
        }
      ).catch(err => {
        console.log(err);
      });
 
    }
  }
});
}
  

function Booking(
  //event,
   date,details, paymentStatus, createdBy, isDeleted){
  return {
  //event,
    date,
    details,
    paymentStatus,
    createdBy,
    //createdDate,
    isDeleted
  }
}


// ----------------------------------------------------------
//                     Delete Booking
// ----------------------------------------------------------





////////////////////////////////////////////////////////////////////////////



  




// ---------------------------------------
//           Login Method
// ---------------------------------------

const login = (req, res) => {
  const { userName, password } = req.body;
console.log(req.body.password)
  User.findOne({ userName: userName })
  .populate("role")
    .then((result) => {
      if (result) {
        console.log(result)
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
              permissions: result.role.permissions
            };
            const options = {
              expiresIn: "1h",
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
  getAllBooking,
  addBooking,
  rigester,
  login,
};
