const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    // phone_number: { type: String },
    password: { type: String },
  },
  { collection: "Users" }
);

mongoose.model("Users", userSchema);
