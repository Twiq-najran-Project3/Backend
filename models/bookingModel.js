const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const bookingSchema = new mongoose.Schema({
  event: { type: mongoose.SchemaType.objectId, ref: eventSchem },
  userName: { type: mongoose.SchemaType.objectId, ref: userSchem },
  date: {type: Date,required},
  details: {type: String,required},
  paymentStatus: {type: Number},
  createdBy: String,
  createdDate: Date,
  modifiedBy: String,
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});

bookingSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
});

module.exports.booking = mongoose.model("Booking", bookingSchema);
