const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const bookingSchema = new mongoose.Schema({
  event: { type: mongoose.SchemaType.objectId, ref: eventSchem },
  userName: { type: mongoose.SchemaType.objectId, ref: userSchem },
  date: {type: Date,required},
  details: {type: String,required},
  paymentStatus: {type: Number},
  createdBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.booking = mongoose.model("Booking", bookingSchema);
