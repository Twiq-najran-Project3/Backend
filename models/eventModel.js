const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  eventId: {type: Number, required,unique},
  userName: { type: mongoose.SchemaType.objectId, ref: "User" },
  city: { type: String, required: true},
  date: { type: Date, required: true },
  description: { type: String, required: true },
  images: {type: String, required},
  createdBy:  { type: mongoose.SchemaType.objectId, ref: "User" },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: "User" },
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
  comment:[{ comment: String,
    userName: { type: mongoose.SchemaType.ObjectId, ref: "User" },
    createdBy:  { type: mongoose.SchemaType.ObjectId, ref: "User" },
    createdDate: Date,
    modifiedBy:  { type: mongoose.SchemaType.ObjectId, ref: "User" },
    modifiedDate: Date,
    isDeleted: {type: Boolean , default:false},}]
});



module.exports.event = mongoose.model("Event", eventSchema);
