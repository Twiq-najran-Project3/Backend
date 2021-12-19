const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  role:{type: mongoose.SchemaTypes.ObjectId, ref:"Role", default:"61bf00707c4b261af8f0bd59"},
  comment:[{ comment: String,
    // userName: { type: mongoose.SchemaType.ObjectId, ref: "User" },
    createdBy:  { type: mongoose.SchemaType.ObjectId, ref: "User" },
    createdDate: Date,
    // modifiedBy:  { type: mongoose.SchemaType.ObjectId, ref: "User" },
    modifiedDate: Date,
    isDeleted: {type: Boolean , default:false},}]
  // bookings:[{event: { type: mongoose.SchemaTypes.ObjectId, ref: "Event" },
  // date: {type: Date ,required:true},
  // details: {type: String,required:true},
  // paymentStatus: {type: Number},
  // createdBy:  { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  // createdDate: Date,
  // modifiedBy:  { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  // modifiedDate: Date,
  // isDeleted: {type: Boolean , default:false}}]
});

userSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports.User = mongoose.model("User", userSchema);
