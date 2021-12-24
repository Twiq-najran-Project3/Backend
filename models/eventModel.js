const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventId: { type: Number, required: true, unique: true },
  userName: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  city: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  images: { type: String, required: true },
  createdBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  createdDate: Date,
  modifiedBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  modifiedDate: Date,
  isDeleted: { type: Boolean, default: false },
  // comment: [
  //   {
  //     comment: String,
  //     userName: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  //     createdBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  //     createdDate: Date,
  //     modifiedBy: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  //     modifiedDate: Date,
  //     isDeleted: { type: Boolean, default: false },
  //   },
  // ],
});

module.exports.Event = mongoose.model("Event", eventSchema);
