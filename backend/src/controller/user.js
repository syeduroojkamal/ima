import User from "../model/user.js";
import jwt from "jsonwebtoken";

export async function deleteUser(req, res) {
  const token = req.cookies.jwt;
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const response = await User.deleteOne({ _id: decoded.userId });

  if (response.deletedCount === 0) {
    return res.status(400).json({ message: "User not deleted" });
  }

  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "User deleted" });
}

export async function allUsers(req, res) {
  const response = await User.find({ _id: { $ne: req.user._id } }).select(
    "_id name"
  );
  res.status(200).json(response);
}

export async function info(req, res) {
  res.status(200).json(req.user);
}
