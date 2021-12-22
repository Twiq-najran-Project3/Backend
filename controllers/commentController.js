const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Comment } = require("../models/CommentModel");
// ----------------------------------
//               Get All Comment
// ----------------------------------

const getAllComments = (req, res) => {
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
  //          Create New Comment
  // ----------------------------------
  const addComment = (req, res) => {
    
    const newComment = new Comment(req.body);
    newComment
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).send("Comment  Created");
      })
      .catch((err) => {
        res.json(err.message);
      });
  };
  




//   const addComment = (req, res) => {
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
//           const newComment = new Comment(
//             eventId,
//             Date.now(),
//             "details",
//             "notPaid",
//             result._id,
//             false
//           );
//           console.log(result);
//           //console.log(newComment);
//           result.Comments.push(newComment);
//           //console.log(result);
//           User.findByIdAndUpdate(result._id, { Comments: result.Comments })
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
  
//   function Comment(
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
  //         update Comment
  // ----------------------------------
  
  const updateComment = (req, res) => {
    const id = req.body._id;
    User.findOne({ _id: id },(err, result) => {
        if (err) {
          err.status(400).send("err");
        } else {
          const foundComment = result.Comments.find(elem=>elem.event)
          console.log(foundComment)
          // res.status(201).send(result);
        }
      }
      
    );
  
  
  };



  module.exports={
    getAllComments,
    addComment,
    updateComment,
  }