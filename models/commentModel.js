const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const commentSchema = new mongoose.Schema({
    comment: String,
    event: { type: mongoose.SchemaTypes.ObjectId, ref: "Event" },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    createdBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    createdDate: Date,
    modifiedBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    modifiedDate: Date,
    isDeleted: { type: Boolean, default: false },
});


module.exports.Comment = mongoose.model("Comment", commentSchema);