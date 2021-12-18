const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const commentSchema = new mongoose.Schema({
  comment: String,
  userName: { type: mongoose.SchemaType.objectId, ref: userSchem },
  createdBy: String,
  createdDate: Date,
  modifiedBy: String,
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});

commentSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
});

module.exports.comment = mongoose.model("Comment", commentSchema);
