const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const roleSchema = new mongoose.Schema({
  role: { type: String,required},
  userName: { type: mongoose.SchemaType.objectId, ref: userSchema },
  permissions: {type: Array,required},
  createdBy: String,
  createdDate: Date,
  modifiedBy: String,
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});

roleSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
});

module.exports.role = mongoose.model("Role", roleSchema);
