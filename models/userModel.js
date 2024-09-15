const mongoose = require("mongoose");

//schema design for user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required, and must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true } // this will add createdAt and updatedAt timestamps to every record you create
);

//exporting user model
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
