const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const roleSchema = new mongoose.Schema({
  role: { type: String,required:true},
  permissions: {type: Array,required:true},
  createdDate: Date,
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.Role = mongoose.model("Role", roleSchema);
