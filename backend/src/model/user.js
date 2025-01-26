import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 32,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
      min: 4,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
