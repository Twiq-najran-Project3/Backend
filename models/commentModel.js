const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const commentSchema = new mongoose.Schema({
  comment: String,
  userName: { type: mongoose.SchemaType.objectId, ref: userSchem },
  createdBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.comment = mongoose.model("Comment", commentSchema);
