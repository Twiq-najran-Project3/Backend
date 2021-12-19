const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const roleSchema = new mongoose.Schema({
  role: { type: String,required},
  permissions: {type: Array,required},
  createdDate: Date,
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.role = mongoose.model("Role", roleSchema);
