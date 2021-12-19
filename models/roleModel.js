const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const roleSchema = new mongoose.Schema({
  role: { type: String,required},
  userName: { type: mongoose.SchemaType.objectId, ref: userSchema },
  permissions: {type: Array,required},
  createdBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.role = mongoose.model("Role", roleSchema);
