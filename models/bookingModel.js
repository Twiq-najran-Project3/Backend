const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const bookingSchema = new mongoose.Schema({
    event:{type: mongoose.SchemaTypes.ObjectId, ref: "Event"},
    user:{type: mongoose.SchemaTypes.ObjectId, ref: "User"},
    date:String,
    details:String,
    paymentStatus:String,
    createdBy:{type: mongoose.SchemaTypes.ObjectId,
      ref: "User"},
      createdDate: String,
      modifiedBy: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
      modifiedDate: String,
      isDeleted: { type: Boolean, default: false }
});

// bookingSchema.pre("save", async function () {
//   this.userName = this.userName.toLowerCase();
// });

module.exports.Booking = mongoose.model("Booking", bookingSchema);