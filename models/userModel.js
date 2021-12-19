const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  createdBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  modifiedDate: Date,
});

userSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports.User = mongoose.model("User", userSchema);
