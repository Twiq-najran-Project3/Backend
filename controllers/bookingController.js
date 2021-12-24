const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Booking } = require("../models/bookingModel");
// ----------------------------------
//               Get All booking
// ----------------------------------

const getAllBooking = (req, res) => {
    const name = req.params.name;
    User.find({ userName: name })
      .then((result) => {
        res.status(200);
        res.send(result);
      })
      .catch((err) => {
        res.status(400);
        res.send(err);
      });
  };
  
  // ----------------------------------
  //          Create New Booking
  // ----------------------------------
  const addBooking = (req, res) => {
    
    const newBooking = new Booking(req.body);
    newBook
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).send("Booking  Created");
      })
      .catch((err) => {
        res.json(err.message);
      });
  };
  




//   const addBooking = (req, res) => {
//     const userName = req.body.userName;
//     const eventId = req.body.eventId;
//     console.log(userName);
//     User.findOne({ userName: userName }, function (err, result) {
//       if (err) {
//         console.log(err);
//       } else {
//         if (!result) {
//           res.status(404).send("User not found");
//         } else {
//           const newBooking = new Booking(
//             eventId,
//             Date.now(),
//             "details",
//             "notPaid",
//             result._id,
//             false
//           );
//           console.log(result);
//           //console.log(newBooking);
//           result.bookings.push(newBooking);
//           //console.log(result);
//           User.findByIdAndUpdate(result._id, { bookings: result.bookings })
//             .then((result) => {
//               res.status(200).json({ user: result });
//               return;
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         }
//       }
//     });
//   };
  
//   function Booking(
//     event,
//     date,
//     details,
//     paymentStatus,
//     createdBy,
//     createdDate,
//     isDeleted
//   ) {
//     // this.event,
//     return {
//       event,
//       date,
//       details,
//       paymentStatus,
//       createdBy,
//       createdDate,
//       isDeleted,
//     };
//   }
  // ----------------------------------
  //         update Booking
  // ----------------------------------
  
  const updateBooking = (req, res) => {
    const id = req.body._id;
    User.findOne({ _id: id },(err, result) => {
        if (err) {
          err.status(400).send("err");
        } else {
          const foundBooking = result.bookings.find(elem=>elem.event)
          console.log(foundBooking)
          // res.status(201).send(result);
        }
      }
      
    );
  
  
  };



  module.exports={
    getAllBooking,
    addBooking,
    updateBooking,
  }