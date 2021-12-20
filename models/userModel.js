const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  role: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Role",
    default: "61c02f3efc95ec1e62c8c9c9",
  },
  comment: [
    {
      comment: String,

      createdDate: Date,

      modifiedDate: Date,
      isDeleted: { type: Boolean, default: false },
    },
  ],
});

userSchema.pre("save", async function () {
  this.userName = this.userName.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports.User = mongoose.model("User", userSchema);
